(function () {
    window.Lightbox = function (element)
    {
        var content = undefined;
        var r = {};
        var resizeTimeout = -1;
        r.bestFit = true;
        r.bestFitRect = { x: 0, y: 0, width: 16, height: 9 }
        r.minSizeRect = { x: 0, y: 0, width: 16, height: 9 }
        r.maxSizeRect = { x: 0, y: 0, width: 0, height: 0 }

        function init()
        {
            window.addEventListener("resize", onResize, false);
            r.hide();
        }

        function onResize(e)
        {
            if (resizeTimeout != -1)
            {
                clearTimeout(resizeTimeout);
                resizeTimeout = -1;
            }
            resizeTimeout = setTimeout(resize, 20);
        }

        function resize()
        {
            if (content == undefined) return;

            if (r.bestFit) fitContent();

            content.style.left = ((element.offsetWidth - content.offsetWidth) * 0.5) + "px";
            content.style.top = ((element.offsetHeight - content.offsetHeight) * 0.5) + "px";
        }

        function fitContent()
        {
            var fit = bestFit(r.bestFitRect, new Rectangle(0, 0, element.offsetWidth * 0.85, element.offsetHeight * 0.85));

            if (fit.width < r.minSizeRect.width)
            {
                fit.width = r.minSizeRect.width;
                fit.height = r.minSizeRect.height;
            }
            else if (r.maxSizeRect.width > 0 && fit.width > r.maxSizeRect.width)
            {
                fit.width = r.maxSizeRect.width;
                fit.height = r.maxSizeRect.height;
            }

            content.style.width = fit.width + "px";
            content.style.height = fit.height + "px";
        }

        function bestFit(toFit, bounds)
        {
            var s = Math.min(bounds.width / toFit.width, bounds.height / toFit.height);
            return new Rectangle(0, 0, toFit.width * s, toFit.height * s);
        }

        function Rectangle(x, y, width, height)
        {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }

        r.show = function (contentElement, clickToClose)
        {
            content = contentElement;
            if (content == undefined) return;

            if (clickToClose != undefined && clickToClose == true)
            {
                setTimeout(function () { document.body.addEventListener("click", r.hide, false); }, 25);
            }

            content.style.position = "absolute";
            element.style.display = "block";
            element.appendChild(content);
            resize();
        };

        r.hide = function ()
        {
            element.style.display = "none";
            document.body.removeEventListener("click", r.hide, false);
            if (content != undefined)
            {
                if (element.contains(content)) element.removeChild(content);
                delete content;
            }
        };

        init();
        return r;
    }
})();