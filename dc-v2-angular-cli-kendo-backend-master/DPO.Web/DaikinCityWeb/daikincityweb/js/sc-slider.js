(function()
{
	window.Slider = function(id)
	{
		var s, h;
		var b, hb, d = false, cx, ox = 0, mx = 0, pv;
		var r = {};
		r.highlightElement = null;
		
		function init()
		{
			s = document.getElementById(id);
			if(s == undefined) return;
			r.element = s;
			h = s.querySelector(".handle");
			if(h == undefined) return;
			
			if (s.style.position.length == 0)
			{
			    s.style.position = "relative";
			}
			h.style.position = "absolute";
			
			r.onResize();
			initAnimationFrame();
			initListeners();
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
		
		function initListeners()
		{
			h.addEventListener("touchstart", onHandleMouseDown);
			document.body.addEventListener("touchmove", onBodyMouseMove);
			document.body.addEventListener("touchend", onBodyMouseUp);
			h.addEventListener("mousedown", onHandleMouseDown);
			document.body.addEventListener("mouseup", onBodyMouseUp);
			document.body.addEventListener("mousemove", onBodyMouseMove);
			document.body.addEventListener("mouseleave", onBodyMouseUp);
			window.addEventListener("resize", r.onResize, false);
			requestAnimationFrame(update);
		}
		
		function onHandleMouseDown(e)
		{
			ox = e.pageX - b.left - h.offsetLeft;
			d = true;
			e.preventDefault();
			return false;
		}
		
		function onBodyMouseUp()
		{
			d = false;
		}
		
		function onBodyMouseMove(e)
		{
			mx = e.pageX;
			//e.preventDefault();
			return false;
		}
		
		function update()
		{
		    if (b != undefined && b.width > 0)
		    {
		        if (d)
		        {
		            cx = mx - ox - b.left;
		        }

		        if (cx < 0) cx = 0;
		        else if (cx + hb.width > b.width) cx = b.width - hb.width;

		        h.style.left = cx + "px";

		        var v = r.value();
                
		        if (r.highlightElement != null)
		        {
		            r.highlightElement.style.width = (v * b.width) + "px";
		        }

		        if (pv != v)
		        {
		            pv = v;
		            s.dispatchEvent(new ChangeEvent());
		        }
		    }
			
			requestAnimationFrame(update);
		}
		
		r.onResize = function()
		{
			var v = r.value();
			b = s.getBoundingClientRect();
			hb = h.getBoundingClientRect();
			r.setValue(v);
			h.style.left = cx + "px";
		}
		
		r.value = function()
		{
			if(b == undefined) return 0;
			return h.offsetLeft / Math.round(b.width - h.offsetWidth);
		}
		
		r.setValue = function(v)
		{
			cx = v * Math.round(b.width - h.offsetWidth);
		}
		
		function ChangeEvent()
		{
			var e;
			try
			{
				e = new Event("change");
			}
			catch(err)
			{
				if(document.createEvent)
				{
					e = document.createEvent('HTMLEvents');
					e.initEvent("change", true, true);
				}
				else
				{
					e = document.createEventObject("change");
				}
			}
			return e;
		}
		
		init();
		return r;
	};
})();