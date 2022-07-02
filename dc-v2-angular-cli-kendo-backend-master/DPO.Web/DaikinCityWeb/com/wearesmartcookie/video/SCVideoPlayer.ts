module com.wearesmartcookie.video
{
    /**
     * ...
     * @author ben.fryer@mediastation.co.uk
     */

    export function trace(s: any, showAlert: boolean= false)
    {
        if (showAlert) alert(s);
        // commented out for release
        //if (window.console) console.log(s);
    }

    export class SCVideoPlayer extends away.events.EventDispatcher
    {
        public static STATE_INIT: number = 0;
        public static STATE_STOPPED: number = 1;
        public static STATE_LOADING: number = 2;
        public static STATE_AWAIT_PLAYING: number = 3; // loading done, monitoring playign status
        public static STATE_PLAYING: number = 4; // happy we are actually playing
        public static STATE_ENDED: number = 5;

        // andorid video has to be visible when triggerd so never hide just shrink
        // also helps with black, gray, green flashes players with own take on posters change size when happy playing
        private hiddenSize: number = 1; // px

        private containerId: string; // container
        private videoId: string;
        private video: HTMLMediaElement = null;
        private _src: string;
        private _posterSrc: string;

        //temp
        private alertEvents: boolean = false;

        private state: number = SCVideoPlayer.STATE_STOPPED;

        private visible: boolean = false;

        private posterLoaded: boolean = false;
        private videoLoaded: boolean = false;

        private videoWidth: string = "640";
        private videoHeight: string = "360";

        constructor(containerId: string, width: string, height: string) 
        {
            super();

            this.videoWidth = width;
            this.videoHeight = height;

            this.state = SCVideoPlayer.STATE_INIT;
            this.containerId = containerId;
            this.videoId = this.containerId + '-player';
            $(this.containerId).css({
                'position': 'absolute',
                'background-image': 'none',
                'background-repeat': 'no-repeat',
                'background-size': '100% 100%', // prob dont work some browsers 
                'padding': '0px',
                'overflow': 'hidden'
            });
            this.videoSetSource('', true); // create video tag
            this.clearPoster(); // sets hidden size            
            //if (navigator.userAgent.match(/iP(ad|hone|od)/i)) 
            //this.alertEvents = true;

            this.show();

            this.state = SCVideoPlayer.STATE_STOPPED;
            setTimeout($.proxy(this.notifyReady, this), 10);
        }

        private notifyReady()
        {
            this.dispatchEvent(new SCVideoPlayerEvent(SCVideoPlayerEvent.READY));
        }

        private addVideoListeners()
        {
            $(this.video).on('abort', function () { trace('SCVideoPlayer ** abort', this.alertEvents); });
            $(this.video).on('canplay', function () { trace('SCVideoPlayer ** canplay', this.alertEvents); });
            $(this.video).on('canplaythrough', function () { trace('SCVideoPlayer ** canplaythrough', this.alertEvents); });
            //$(this.video).on('durationchange', function () { trace('SCVideoPlayer ** durationchange', this.alertEvents); });
            $(this.video).on('emptied', function () { trace('SCVideoPlayer ** emptied', this.alertEvents); });
            $(this.video).on('ended', $.proxy(this.onVideoComplete, this));
            $(this.video).on('error', $.proxy(this.onVideoError, this));
            $(this.video).on('loadeddata', $.proxy(this.onVideoLoadedData, this));
            $(this.video).on('loadedmetadata', function () { trace('SCVideoPlayer ** loadedmetadata', this.alertEvents); });
            $(this.video).on('loadstart', function () { trace('SCVideoPlayer ** loadstart', this.alertEvents); });
            $(this.video).on('pause', function () { trace('SCVideoPlayer ** pause', this.alertEvents); });
            //$(this.video).on('play', function () { trace('SCVideoPlayer ** play', this.alertEvents); });
            //$(this.video).on('playing', $.proxy(this.onVideoPlaying, this));
            $(this.video).on('progress', function () { trace('SCVideoPlayer ** progress', this.alertEvents); });
            //$(this.video).on('ratechange', function () { trace('SCVideoPlayer ** ratechange', this.alertEvents); });
            $(this.video).on('seeked', function () { trace('SCVideoPlayer ** seeked', this.alertEvents); });
            $(this.video).on('seeking', function () { trace('SCVideoPlayer ** seeking', this.alertEvents); });
            $(this.video).on('stalled', function () { trace('SCVideoPlayer ** stalled', this.alertEvents); });
            $(this.video).on('suspend', function () { trace('SCVideoPlayer ** suspend', this.alertEvents); });
            //$(this.video).on('timeupdate', $.proxy(this.onVideoTimeUpdate, this));
            //$(this.video).on('volumechange', function () { trace('SCVideoPlayer ** volumechange', this.alertEvents); });
            $(this.video).on('waiting', function () { trace('SCVideoPlayer ** waiting', this.alertEvents); });
        }

        private videoSetSource(src: string, recreate: boolean)
        {
            this._src = src;
            if (recreate)
            {
                if (this.video != null)
                {
                    delete this.video;
                    this.video = null;
                }
                $(this.containerId).empty();
                $(this.containerId).append('<video id="' + this.videoId.substr(1) + '" width="' + this.hiddenSize + '" height="' + this.hiddenSize + '" muted autoplay></video>');
                this.video = $(this.videoId).get(0);
                this.addVideoListeners();
            }
            else
            {
                // clear current src
                //$(this.videoId).attr('src', ''); 
                $(this.videoId).empty();
            }
            if (src.length > 0)
            {
                //$(this.videoId).attr('src', this._src); 
                $(this.videoId).append('<source src="' + src + '">');// type="video/mp4">');   
                $(this.videoId).append('<source src="' + src + '" type="video/mp4">');
                if (!$(this.videoId).children('source').length)
                {
                    $(this.videoId).attr('src', src).attr('type', 'video/mp4');
                }
            }
        }

        private changeState(toState: number)
        {
            if (this.state == toState) return;
            switch (toState)
            {
                case SCVideoPlayer.STATE_PLAYING:
                    this.dispatchEvent(new SCVideoPlayerEvent(SCVideoPlayerEvent.PLAYING));
                    break;
                case SCVideoPlayer.STATE_ENDED:
                    this.dispatchEvent(new SCVideoPlayerEvent(SCVideoPlayerEvent.COMPLETE));
                    break;
            }
            this.state = toState;
        }

        public resized(): void 
        {
            this.showPoster();
            this.showVideo();
        }

        public play(src: string, posterSrc: string = ""): void 
        {
            if (this.state != SCVideoPlayer.STATE_STOPPED)
            {
                //this.stop(true);
            }
            
            this.videoSetSource(src, false);
            this.clearVideo();

            if (posterSrc.length > 0)
            {
                if (posterSrc == this._posterSrc)
                {
                    this.showPoster();
                }
                else
                {
                    this._posterSrc = posterSrc;
                    this.posterLoaded = false;
                    var $image: JQuery = $('<img />');
                    $image.attr('src', posterSrc);
                    $image.on('load', $.proxy(this.onPosterLoaded, this));
                    $image.on('error', $.proxy(this.onPosterError, this));
                    //$(this.containerId).css('background-image', 'url(' + posterSrc + ')');
                    // delibrately dont chain load poster then video, ios needs to see video request within play click
                }
            }
            else
            {
                this.clearPoster();
                this._posterSrc = "";
                this.posterLoaded = true;
            }
            this.changeState(SCVideoPlayer.STATE_LOADING);
            this.videoLoaded = false;
            this.video.load();
            // cant call play direcly after breaks on android, see onVideoLoadedData
            //this.video.play();       
        }

        // should keep last frame default by design
        public stop(clear: boolean= false): void
        {
            if (this.state != SCVideoPlayer.STATE_STOPPED)
            {
                this.video.pause();
                if (clear)
                {
                    //$(this.videoId).empty();
                    this.clearVideo();
                    this.clearPoster();
                }
                trace("SCVideoPlayer ** stopped", this.alertEvents);
            }
            this.changeState(SCVideoPlayer.STATE_STOPPED);
        }

        private showVideo(): void
        {
            if (this.visible && this.state == SCVideoPlayer.STATE_PLAYING)
            {
                $(this.videoId).attr({ 'width': this.videoWidth, 'height': this.videoHeight });
                this.clearPoster();
            }
        }

        private clearVideo(): void
        {
            $(this.videoId).attr({ 'width': this.hiddenSize + 'px', 'height': this.hiddenSize + 'px' });
        }

        private showPoster(): void
        {
            if (this.visible && this._posterSrc != undefined)
            {
                $(this.containerId).css('background-image', 'url(' + this._posterSrc + ')');
            }
        }

        private clearPoster(): void
        {
            $(this.containerId).css('background-image', 'none');
        }

        public resize(w: string, h: string): void
        {
            this.videoWidth = w;
            this.videoHeight = h;
            $(this.videoId).attr({ 'width': this.videoWidth, 'height': this.videoHeight });
        }

        public hide(): void 
        {
            this.visible = false;
            trace("SCVideoPlayer ** hide", this.alertEvents);
            //$(this.containerId).hide();
            this.clearVideo();
            this.clearPoster();
            $(this.containerId).hide();
            setTimeout($.proxy(this.dotnReallyHide, this), 10);
        }

        // crayzy this has to be in, adroind get left with a strange artifact with out toggling visiblity
        private dotnReallyHide()
        {
            $(this.containerId).css({ 'width': this.hiddenSize + 'px', 'height': this.hiddenSize + 'px' });
            $(this.containerId).show();
        }

        public show(): void 
        {
            this.visible = true;
            trace("SCVideoPlayer ** show", this.alertEvents);
            $(this.containerId).css({ 'width': this.videoWidth + 'px', 'height': this.videoHeight + 'px' });
            this.showVideo();
            this.showPoster();
        }

        // css player only 
        public get src(): string
        {
            return this._src;
        }

        // underlying video element
        public get element(): HTMLMediaElement
        {
            return this.video;
        }

        private onVideoError(e: any): void 
        {
            var code: string = '' + (e.target.error ? e.target.error.code : e.code);
            var message: string = "An unanticipated problem was encountered, check back soon and try again";
            switch (code)
            {
                // MEDIA_ERR_ABORTED
                case '1': message = "The video download was cancelled"; break;
                // MEDIA_ERR_NETWORK
                case '2': message = "The video connection was lost, please confirm you're connected to the internet"; break;
                // MEDIA_ERR_DECODE
                case '3': message = "The video is bad or in a format that can't be played on your browser"; break;
                // MEDIA_ERR_SRC_NOT_SUPPORTED
                case '4': message = "This video is either unavailable or not supported in this browser"; break;
                // MEDIA_ERR_ENCRYPTED (Chrome)
                case '5': message = "The video you're trying to watch is encrypted and we don't know how to decrypt it"; break;
            }
            trace("error " + message, true);
            // so we dont block
            this.changeState(SCVideoPlayer.STATE_ENDED);
        }

        private onVideoLoadedData(e: any): void 
        {
            trace("SCVideoPlayer ** loadeddata", this.alertEvents);
            if (this.posterLoaded) this.video.play(); // play here keeps android happy
            this.videoLoaded = true;
        }

        private actuallyPlaying(time: number, expand: number, giveup: number): void
        {
            //if (!(this.video.paused || this.video.ended))
            if (this.video.currentTime > 0 || time > giveup)            
            {
                trace('SCVideoPlayer ** actually playing ' + (time > giveup ? 'maybe!' : ''), this.alertEvents);
                this.changeState(SCVideoPlayer.STATE_PLAYING);
                this.showVideo();
            }
            else
            {
                trace("SCVideoPlayer ** await playing in " + time, this.alertEvents);
                //this.video.currentTime = 0;
                this.video.play();
                setTimeout($.proxy(this.actuallyPlaying, this), Math.floor(time), time * expand, expand, giveup);
            }
        }

        private onVideoPlaying(e: any): void
        {
            trace("SCVideoPlayer ** playing", this.alertEvents);
            //this.showVideo();
            this.actuallyPlaying(40, 1.1, 2000);
            this.changeState(SCVideoPlayer.STATE_PLAYING);
        }

        private onVideoComplete(e: any): void 
        {
            trace("SCVideoPlayer ** ended", this.alertEvents);
            if (this.state != SCVideoPlayer.STATE_PLAYING) return;
            this.changeState(SCVideoPlayer.STATE_ENDED);
        }

        private onPosterLoaded(e: any): void 
        {
            trace("SCVideoPlayer ** posterloaded", this.alertEvents);
            this.showPoster();
            this.posterLoaded = true;
            if (this.state == SCVideoPlayer.STATE_PLAYING) return;
            if (this.videoLoaded) this.video.play();
            this.changeState(SCVideoPlayer.STATE_PLAYING);
        }

        private onPosterError(e: any): void 
        {
            trace("Failed loading video poster", true);
            // video should still be loading
        }
    }
}