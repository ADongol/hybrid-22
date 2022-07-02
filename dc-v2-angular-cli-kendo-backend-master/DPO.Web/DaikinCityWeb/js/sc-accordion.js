(function ()
{
	window.Accordion = function(element, closedHeight, animationSpeed)
	{
		var items = [];
		var currentItem = null;
		var _stop = false;
		var r = {};
		
		function init()
		{
			if(animationSpeed == undefined) animationSpeed = 0;
			closedHeight = parseFloat(closedHeight.replace("px",""));
			
			var lis = element.querySelectorAll("li");
			for(var i = 0; i < lis.length; i++)
			{
				var li = lis[i];
				li.onclick = onItemSelected;
				items.push(createItem(li));
			}
			
			initAnimationFrame();
			r.start();
		}
		
		function initAnimationFrame()
		{
			if (!window.requestAnimationFrame)
			{
				window.requestAnimationFrame = (function ()
				{
					return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
						function (callback)
						{
							window.setTimeout(callback, 1000 / 60);
						};
				})();
			}
		}

		r.start = function()
		{
		    _stop = false;
		    requestAnimationFrame(update);
		}

		r.stop = function()
		{
		    _stop = true;
		}
		
		function onItemSelected(e)
		{
			var item = getItemByElement(e.currentTarget);
			var open = !item.open;
			
			closeAll();
			if(open)
			{
				openItem(item);
			}
		}
		
		function closeAll()
		{
			var i = items.length;
			while(i--)
			{
				closeItem(items[i]);
			}
		}
		
		function openItem(item)
		{
			currentItem = item;
			item.open = true;
			
			var content = currentItem.element.querySelector(".accordionContent");
			if(animationSpeed == 0)
			{
				item.currentHeight = item.targetHeight = content.offsetHeight;
				currentItem.element.style.height = content.offsetHeight + "px";
			}
			else
			{
				item.currentHeight = currentItem.element.offsetHeight;
				item.targetHeight = content.offsetHeight;
			}
		}
		
		function closeItem(item)
		{
			item.open = false;
			if(animationSpeed == 0)
			{
				item.currentHeight = item.targetHeight = closedHeight;
				item.element.style.height = closedHeight + "px";
			}
			else
			{
				item.targetHeight = closedHeight;
			}
		}
		
		function update()
		{
		    if (_stop == true)
		    {
		        _stop = false;
		        return;
            }

			var i = items.length;
			while(i--)
			{
				var item = items[i];
				item.currentHeight += (item.targetHeight - item.element.offsetHeight) / animationSpeed;
				item.element.style.height = item.currentHeight + "px";
				
				if(Math.abs(item.targetHeight - item.currentHeight) < 1)
				{
					item.element.style.height = item.targetHeight + "px";
				}
			}
			
			requestAnimationFrame(update);
		}
		
		function createItem(element)
		{
			return { element:element, open:false, currentHeight:0, targetHeight:0 };
		}
		
		function getItemByElement(element)
		{
			var i = items.length;
			while(i--)
			{
				if(items[i].element == element)
				{
					return items[i];
				}
			}
			return null;
		}
		
		init();
		return r;
	}
})();