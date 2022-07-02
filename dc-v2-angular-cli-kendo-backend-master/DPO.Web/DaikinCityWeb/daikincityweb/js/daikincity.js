var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function () {
    function Main() {
    }
    Main.main = function () {
        new daikincity.DCExperience();
    };
    return Main;
}());
window.onload = function () {
    Main.main();
};
// global functions
function openTermsConditions() {
    var left = screen.width / 2 - 450;
    var top = screen.height / 2 - 320;
    window.open('/Home/PrivacyPolicy', 'DaikinTCS', 'width=900, height=640, left=' + left + ', top=' + top + ', toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no');
}
function openContactForm() {
    var left = screen.width / 2 - 450;
    var top = screen.height / 2 - 320;
    window.open('/Account/ContactRequest', 'DaikinTCS', 'width=900, height=640, left=' + left + ', top=' + top + ', toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no');
}
/**
 * Base event class
 * @class away.events.Event
 */
var away;
(function (away) {
    var events;
    (function (events) {
        var Event = (function () {
            function Event(type) {
                /**
                 * Type of event
                 * @property type
                 * @type String
                 */
                this.type = undefined;
                /**
                 * Reference to target object
                 * @property target
                 * @type Object
                 */
                this.target = undefined;
                this.type = type;
            }
            /**
             * Clones the current event.
             * @return An exact duplicate of the current event.
             */
            Event.prototype.clone = function () {
                return new Event(this.type);
            };
            Event.COMPLETE = 'Event_Complete';
            Event.OPEN = 'Event_Open';
            Event.ENTER_FRAME = 'enterframe';
            Event.EXIT_FRAME = 'exitframe';
            Event.RESIZE = "resize";
            Event.CONTEXT3D_CREATE = "context3DCreate";
            Event.ERROR = "error";
            Event.CHANGE = "change";
            return Event;
        }());
        events.Event = Event;
    })(events = away.events || (away.events = {}));
})(away || (away = {}));
/**
 * @module away.events
 */
var away;
(function (away) {
    var events;
    (function (events) {
        /**
         * Base class for dispatching events
         *
         * @class away.events.EventDispatcher
         *
         */
        var EventDispatcher = (function () {
            function EventDispatcher() {
                this.listeners = new Array();
            }
            /**
             * Add an event listener
             * @method addEventListener
             * @param {String} Name of event to add a listener for
             * @param {Function} Callback function
             * @param {Object} Target object listener is added to
             */
            EventDispatcher.prototype.addEventListener = function (type, listener, target) {
                if (this.listeners[type] === undefined) {
                    this.listeners[type] = new Array();
                }
                if (this.getEventListenerIndex(type, listener, target) === -1) {
                    var d = new EventData();
                    d.listener = listener;
                    d.type = type;
                    d.target = target;
                    this.listeners[type].push(d);
                }
            };
            /**
             * Remove an event listener
             * @method removeEventListener
             * @param {String} Name of event to remove a listener for
             * @param {Function} Callback function
             * @param {Object} Target object listener is added to
             */
            EventDispatcher.prototype.removeEventListener = function (type, listener, target) {
                var index = this.getEventListenerIndex(type, listener, target);
                if (index !== -1) {
                    this.listeners[type].splice(index, 1);
                }
            };
            /**
             * Dispatch an event
             * @method dispatchEvent
             * @param {Event} Event to dispatch
             */
            EventDispatcher.prototype.dispatchEvent = function (event) {
                var listenerArray = this.listeners[event.type];
                if (listenerArray !== undefined) {
                    this.lFncLength = listenerArray.length;
                    event.target = this;
                    var eventData;
                    for (var i = 0, l = this.lFncLength; i < l; i++) {
                        eventData = listenerArray[i];
                        eventData.listener.call(eventData.target, event);
                    }
                }
            };
            /**
             * get Event Listener Index in array. Returns -1 if no listener is added
             * @method getEventListenerIndex
             * @param {String} Name of event to remove a listener for
             * @param {Function} Callback function
             * @param {Object} Target object listener is added to
             */
            EventDispatcher.prototype.getEventListenerIndex = function (type, listener, target) {
                if (this.listeners[type] !== undefined) {
                    var a = this.listeners[type];
                    var l = a.length;
                    var d;
                    for (var c = 0; c < l; c++) {
                        d = a[c];
                        if (target == d.target && listener == d.listener) {
                            return c;
                        }
                    }
                }
                return -1;
            };
            /**
             * check if an object has an event listener assigned to it
             * @method hasListener
             * @param {String} Name of event to remove a listener for
             * @param {Function} Callback function
             * @param {Object} Target object listener is added to
             */
            //todo: hasEventListener - relax check by not requiring target in param
            EventDispatcher.prototype.hasEventListener = function (type, listener, target) {
                if (listener === void 0) { listener = null; }
                if (target === void 0) { target = null; }
                if (this.listeners != null && target != null) {
                    return (this.getEventListenerIndex(type, listener, target) !== -1);
                }
                else {
                    if (this.listeners[type] !== undefined) {
                        var a = this.listeners[type];
                        return (a.length > 0);
                    }
                    return false;
                }
                //return false;
            };
            return EventDispatcher;
        }());
        events.EventDispatcher = EventDispatcher;
        /**
         * Event listener data container
         */
        var EventData = (function () {
            function EventData() {
            }
            return EventData;
        }());
    })(events = away.events || (away.events = {}));
})(away || (away = {}));
var away;
(function (away) {
    var geom;
    (function (geom) {
        var Rectangle = (function () {
            function Rectangle(x, y, width, height) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (width === void 0) { width = 0; }
                if (height === void 0) { height = 0; }
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            return Rectangle;
        }());
        geom.Rectangle = Rectangle;
    })(geom = away.geom || (away.geom = {}));
})(away || (away = {}));
var away;
(function (away) {
    var geom;
    (function (geom) {
        var Vector3D = (function () {
            /**
             * Creates an instance of a Vector3D object.
             */
            function Vector3D(x, y, z, w) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                if (z === void 0) { z = 0; }
                if (w === void 0) { w = 0; }
                this.x = x;
                this.y = y;
                this.z = z;
                this.w = w;
            }
            Object.defineProperty(Vector3D.prototype, "length", {
                /**
                 * [read-only] The length, magnitude, of the current Vector3D object from the origin (0,0,0) to the object's
                 * x, y, and z coordinates.
                 * @returns The length of the Vector3D
                 */
                get: function () {
                    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Vector3D.prototype, "lengthSquared", {
                /**
                 * [read-only] The square of the length of the current Vector3D object, calculated using the x, y, and z
                 * properties.
                 * @returns The squared length of the vector
                 */
                get: function () {
                    return (this.x * this.x + this.y * this.y + this.z * this.z);
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Adds the value of the x, y, and z elements of the current Vector3D object to the values of the x, y, and z
             * elements of another Vector3D object.
             */
            Vector3D.prototype.add = function (a) {
                return new Vector3D(this.x + a.x, this.y + a.y, this.z + a.z, this.w + a.w);
            };
            /**
             * [static] Returns the angle in radians between two vectors.
             */
            Vector3D.angleBetween = function (a, b) {
                return Math.acos(a.dotProduct(b) / (a.length * b.length));
            };
            /**
             * Returns a new Vector3D object that is an exact copy of the current Vector3D object.
             */
            Vector3D.prototype.clone = function () {
                return new Vector3D(this.x, this.y, this.z, this.w);
            };
            /**
             * Copies all of vector data from the source Vector3D object into the calling Vector3D object.
             */
            Vector3D.prototype.copyFrom = function (src) {
                this.x = src.x;
                this.y = src.y;
                this.z = src.z;
                this.w = src.w;
                //return new Vector3D(src.x, src.y, src.z, src.w);
            };
            /**
             * Returns a new Vector3D object that is perpendicular (at a right angle) to the current Vector3D and another
             * Vector3D object.
             */
            Vector3D.prototype.crossProduct = function (a) {
                return new Vector3D(this.y * a.z - this.z * a.y, this.z * a.x - this.x * a.z, this.x * a.y - this.y * a.x, 1);
            };
            /**
             * Decrements the value of the x, y, and z elements of the current Vector3D object by the values of the x, y,
             * and z elements of specified Vector3D object.
             */
            Vector3D.prototype.decrementBy = function (a) {
                this.x -= a.x;
                this.y -= a.y;
                this.z -= a.z;
            };
            /**
             * [static] Returns the distance between two Vector3D objects.
             */
            Vector3D.distance = function (pt1, pt2) {
                var x = (pt1.x - pt2.x);
                var y = (pt1.y - pt2.y);
                var z = (pt1.z - pt2.z);
                return Math.sqrt(x * x + y * y + z * z);
            };
            /**
             * If the current Vector3D object and the one specified as the parameter are unit vertices, this method returns
             * the cosine of the angle between the two vertices.
             */
            Vector3D.prototype.dotProduct = function (a) {
                return this.x * a.x + this.y * a.y + this.z * a.z;
            };
            /**
             * Determines whether two Vector3D objects are equal by comparing the x, y, and z elements of the current
             * Vector3D object with a specified Vector3D object.
             */
            Vector3D.prototype.equals = function (cmp, allFour) {
                if (allFour === void 0) { allFour = false; }
                return (this.x == cmp.x && this.y == cmp.y && this.z == cmp.z && (!allFour || this.w == cmp.w));
            };
            /**
             * Increments the value of the x, y, and z elements of the current Vector3D object by the values of the x, y,
             * and z elements of a specified Vector3D object.
             */
            Vector3D.prototype.incrementBy = function (a) {
                this.x += a.x;
                this.y += a.y;
                this.z += a.z;
            };
            /**
             * Compares the elements of the current Vector3D object with the elements of a specified Vector3D object to
             * determine whether they are nearly equal.
             */
            Vector3D.prototype.nearEquals = function (cmp, epsilon, allFour) {
                if (allFour === void 0) { allFour = true; }
                return ((Math.abs(this.x - cmp.x) < epsilon)
                    && (Math.abs(this.y - cmp.y) < epsilon)
                    && (Math.abs(this.z - cmp.z) < epsilon)
                    && (!allFour || Math.abs(this.w - cmp.w) < epsilon));
            };
            /**
             * Sets the current Vector3D object to its inverse.
             */
            Vector3D.prototype.negate = function () {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
            };
            /**
             * Converts a Vector3D object to a unit vector by dividing the first three elements (x, y, z) by the length of
             * the vector.
             */
            Vector3D.prototype.normalize = function () {
                var invLength = 1 / this.length;
                if (invLength != 0) {
                    this.x *= invLength;
                    this.y *= invLength;
                    this.z *= invLength;
                    return;
                }
                throw "Cannot divide by zero.";
            };
            /**
             * Divides the value of the x, y, and z properties of the current Vector3D object by the value of its w
             * property.
             */
            Vector3D.prototype.project = function () {
                this.x /= this.w;
                this.y /= this.w;
                this.z /= this.w;
            };
            /**
             * Scales the current Vector3D object by a scalar, a magnitude.
             */
            Vector3D.prototype.scaleBy = function (s) {
                this.x *= s;
                this.y *= s;
                this.z *= s;
            };
            /**
             * Sets the members of Vector3D to the specified values
             */
            Vector3D.prototype.setTo = function (xa, ya, za) {
                this.x = xa;
                this.y = ya;
                this.z = za;
            };
            /**
             * Subtracts the value of the x, y, and z elements of the current Vector3D object from the values of the x, y,
             * and z elements of another Vector3D object.
             */
            Vector3D.prototype.subtract = function (a) {
                return new Vector3D(this.x - a.x, this.y - a.y, this.z - a.z);
            };
            /**
             * Returns a string representation of the current Vector3D object.
             */
            Vector3D.prototype.toString = function () {
                return "[Vector3D] (x:" + this.x + " ,y:" + this.y + ", z" + this.z + ", w:" + this.w + ")";
            };
            Vector3D.X_AXIS = new Vector3D(1, 0, 0);
            Vector3D.Y_AXIS = new Vector3D(0, 1, 0);
            Vector3D.Z_AXIS = new Vector3D(0, 0, 1);
            return Vector3D;
        }());
        geom.Vector3D = Vector3D;
    })(geom = away.geom || (away.geom = {}));
})(away || (away = {}));
var com;
(function (com) {
    var wearesmartcookie;
    (function (wearesmartcookie) {
        var video;
        (function (video) {
            /**
             * ...
             * @author ben.fryer@mediastation.co.uk
             */
            function trace(s, showAlert) {
                if (showAlert === void 0) { showAlert = false; }
                if (showAlert)
                    alert(s);
                // commented out for release
                //if (window.console) console.log(s);
            }
            video.trace = trace;
            var SCVideoPlayer = (function (_super) {
                __extends(SCVideoPlayer, _super);
                function SCVideoPlayer(containerId, width, height) {
                    var _this = _super.call(this) || this;
                    // andorid video has to be visible when triggerd so never hide just shrink
                    // also helps with black, gray, green flashes players with own take on posters change size when happy playing
                    _this.hiddenSize = 1; // px
                    _this.video = null;
                    //temp
                    _this.alertEvents = false;
                    _this.state = SCVideoPlayer.STATE_STOPPED;
                    _this.visible = false;
                    _this.posterLoaded = false;
                    _this.videoLoaded = false;
                    _this.videoWidth = "640";
                    _this.videoHeight = "360";
                    _this.videoWidth = width;
                    _this.videoHeight = height;
                    _this.state = SCVideoPlayer.STATE_INIT;
                    _this.containerId = containerId;
                    _this.videoId = _this.containerId + '-player';
                    $(_this.containerId).css({
                        'position': 'absolute',
                        'background-image': 'none',
                        'background-repeat': 'no-repeat',
                        'background-size': '100% 100%',
                        'padding': '0px',
                        'overflow': 'hidden'
                    });
                    _this.videoSetSource('', true); // create video tag
                    _this.clearPoster(); // sets hidden size            
                    //if (navigator.userAgent.match(/iP(ad|hone|od)/i)) 
                    //this.alertEvents = true;
                    _this.show();
                    _this.state = SCVideoPlayer.STATE_STOPPED;
                    setTimeout($.proxy(_this.notifyReady, _this), 10);
                    return _this;
                }
                SCVideoPlayer.prototype.notifyReady = function () {
                    this.dispatchEvent(new video.SCVideoPlayerEvent(video.SCVideoPlayerEvent.READY));
                };
                SCVideoPlayer.prototype.addVideoListeners = function () {
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
                };
                SCVideoPlayer.prototype.videoSetSource = function (src, recreate) {
                    this._src = src;
                    if (recreate) {
                        if (this.video != null) {
                            delete this.video;
                            this.video = null;
                        }
                        $(this.containerId).empty();
                        $(this.containerId).append('<video id="' + this.videoId.substr(1) + '" width="' + this.hiddenSize + '" height="' + this.hiddenSize + '" muted autoplay></video>');
                        this.video = $(this.videoId).get(0);
                        this.addVideoListeners();
                    }
                    else {
                        // clear current src
                        //$(this.videoId).attr('src', ''); 
                        $(this.videoId).empty();
                    }
                    if (src.length > 0) {
                        //$(this.videoId).attr('src', this._src); 
                        $(this.videoId).append('<source src="' + src + '">'); // type="video/mp4">');   
                        $(this.videoId).append('<source src="' + src + '" type="video/mp4">');
                        if (!$(this.videoId).children('source').length) {
                            $(this.videoId).attr('src', src).attr('type', 'video/mp4');
                        }
                    }
                };
                SCVideoPlayer.prototype.changeState = function (toState) {
                    if (this.state == toState)
                        return;
                    switch (toState) {
                        case SCVideoPlayer.STATE_PLAYING:
                            this.dispatchEvent(new video.SCVideoPlayerEvent(video.SCVideoPlayerEvent.PLAYING));
                            break;
                        case SCVideoPlayer.STATE_ENDED:
                            this.dispatchEvent(new video.SCVideoPlayerEvent(video.SCVideoPlayerEvent.COMPLETE));
                            break;
                    }
                    this.state = toState;
                };
                SCVideoPlayer.prototype.resized = function () {
                    this.showPoster();
                    this.showVideo();
                };
                SCVideoPlayer.prototype.play = function (src, posterSrc) {
                    if (posterSrc === void 0) { posterSrc = ""; }
                    if (this.state != SCVideoPlayer.STATE_STOPPED) {
                        //this.stop(true);
                    }
                    this.videoSetSource(src, false);
                    this.clearVideo();
                    if (posterSrc.length > 0) {
                        if (posterSrc == this._posterSrc) {
                            this.showPoster();
                        }
                        else {
                            this._posterSrc = posterSrc;
                            this.posterLoaded = false;
                            var $image = $('<img />');
                            $image.attr('src', posterSrc);
                            $image.on('load', $.proxy(this.onPosterLoaded, this));
                            $image.on('error', $.proxy(this.onPosterError, this));
                            //$(this.containerId).css('background-image', 'url(' + posterSrc + ')');
                            // delibrately dont chain load poster then video, ios needs to see video request within play click
                        }
                    }
                    else {
                        this.clearPoster();
                        this._posterSrc = "";
                        this.posterLoaded = true;
                    }
                    this.changeState(SCVideoPlayer.STATE_LOADING);
                    this.videoLoaded = false;
                    this.video.load();
                    // cant call play direcly after breaks on android, see onVideoLoadedData
                    //this.video.play();       
                };
                // should keep last frame default by design
                SCVideoPlayer.prototype.stop = function (clear) {
                    if (clear === void 0) { clear = false; }
                    if (this.state != SCVideoPlayer.STATE_STOPPED) {
                        this.video.pause();
                        if (clear) {
                            //$(this.videoId).empty();
                            this.clearVideo();
                            this.clearPoster();
                        }
                        trace("SCVideoPlayer ** stopped", this.alertEvents);
                    }
                    this.changeState(SCVideoPlayer.STATE_STOPPED);
                };
                SCVideoPlayer.prototype.showVideo = function () {
                    if (this.visible && this.state == SCVideoPlayer.STATE_PLAYING) {
                        $(this.videoId).attr({ 'width': this.videoWidth, 'height': this.videoHeight });
                        this.clearPoster();
                    }
                };
                SCVideoPlayer.prototype.clearVideo = function () {
                    $(this.videoId).attr({ 'width': this.hiddenSize + 'px', 'height': this.hiddenSize + 'px' });
                };
                SCVideoPlayer.prototype.showPoster = function () {
                    if (this.visible && this._posterSrc != undefined) {
                        $(this.containerId).css('background-image', 'url(' + this._posterSrc + ')');
                    }
                };
                SCVideoPlayer.prototype.clearPoster = function () {
                    $(this.containerId).css('background-image', 'none');
                };
                SCVideoPlayer.prototype.resize = function (w, h) {
                    this.videoWidth = w;
                    this.videoHeight = h;
                    $(this.videoId).attr({ 'width': this.videoWidth, 'height': this.videoHeight });
                };
                SCVideoPlayer.prototype.hide = function () {
                    this.visible = false;
                    trace("SCVideoPlayer ** hide", this.alertEvents);
                    //$(this.containerId).hide();
                    this.clearVideo();
                    this.clearPoster();
                    $(this.containerId).hide();
                    setTimeout($.proxy(this.dotnReallyHide, this), 10);
                };
                // crayzy this has to be in, adroind get left with a strange artifact with out toggling visiblity
                SCVideoPlayer.prototype.dotnReallyHide = function () {
                    $(this.containerId).css({ 'width': this.hiddenSize + 'px', 'height': this.hiddenSize + 'px' });
                    $(this.containerId).show();
                };
                SCVideoPlayer.prototype.show = function () {
                    this.visible = true;
                    trace("SCVideoPlayer ** show", this.alertEvents);
                    $(this.containerId).css({ 'width': this.videoWidth + 'px', 'height': this.videoHeight + 'px' });
                    this.showVideo();
                    this.showPoster();
                };
                Object.defineProperty(SCVideoPlayer.prototype, "src", {
                    // css player only 
                    get: function () {
                        return this._src;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SCVideoPlayer.prototype, "element", {
                    // underlying video element
                    get: function () {
                        return this.video;
                    },
                    enumerable: true,
                    configurable: true
                });
                SCVideoPlayer.prototype.onVideoError = function (e) {
                    var code = '' + (e.target.error ? e.target.error.code : e.code);
                    var message = "An unanticipated problem was encountered, check back soon and try again";
                    switch (code) {
                        // MEDIA_ERR_ABORTED
                        case '1':
                            message = "The video download was cancelled";
                            break;
                        // MEDIA_ERR_NETWORK
                        case '2':
                            message = "The video connection was lost, please confirm you're connected to the internet";
                            break;
                        // MEDIA_ERR_DECODE
                        case '3':
                            message = "The video is bad or in a format that can't be played on your browser";
                            break;
                        // MEDIA_ERR_SRC_NOT_SUPPORTED
                        case '4':
                            message = "This video is either unavailable or not supported in this browser";
                            break;
                        // MEDIA_ERR_ENCRYPTED (Chrome)
                        case '5':
                            message = "The video you're trying to watch is encrypted and we don't know how to decrypt it";
                            break;
                    }
                    trace("error " + message, true);
                    // so we dont block
                    this.changeState(SCVideoPlayer.STATE_ENDED);
                };
                SCVideoPlayer.prototype.onVideoLoadedData = function (e) {
                    trace("SCVideoPlayer ** loadeddata", this.alertEvents);
                    if (this.posterLoaded)
                        this.video.play(); // play here keeps android happy
                    this.videoLoaded = true;
                };
                SCVideoPlayer.prototype.actuallyPlaying = function (time, expand, giveup) {
                    //if (!(this.video.paused || this.video.ended))
                    if (this.video.currentTime > 0 || time > giveup) {
                        trace('SCVideoPlayer ** actually playing ' + (time > giveup ? 'maybe!' : ''), this.alertEvents);
                        this.changeState(SCVideoPlayer.STATE_PLAYING);
                        this.showVideo();
                    }
                    else {
                        trace("SCVideoPlayer ** await playing in " + time, this.alertEvents);
                        //this.video.currentTime = 0;
                        this.video.play();
                        setTimeout($.proxy(this.actuallyPlaying, this), Math.floor(time), time * expand, expand, giveup);
                    }
                };
                SCVideoPlayer.prototype.onVideoPlaying = function (e) {
                    trace("SCVideoPlayer ** playing", this.alertEvents);
                    //this.showVideo();
                    this.actuallyPlaying(40, 1.1, 2000);
                    this.changeState(SCVideoPlayer.STATE_PLAYING);
                };
                SCVideoPlayer.prototype.onVideoComplete = function (e) {
                    trace("SCVideoPlayer ** ended", this.alertEvents);
                    if (this.state != SCVideoPlayer.STATE_PLAYING)
                        return;
                    this.changeState(SCVideoPlayer.STATE_ENDED);
                };
                SCVideoPlayer.prototype.onPosterLoaded = function (e) {
                    trace("SCVideoPlayer ** posterloaded", this.alertEvents);
                    this.showPoster();
                    this.posterLoaded = true;
                    if (this.state == SCVideoPlayer.STATE_PLAYING)
                        return;
                    if (this.videoLoaded)
                        this.video.play();
                    this.changeState(SCVideoPlayer.STATE_PLAYING);
                };
                SCVideoPlayer.prototype.onPosterError = function (e) {
                    trace("Failed loading video poster", true);
                    // video should still be loading
                };
                SCVideoPlayer.STATE_INIT = 0;
                SCVideoPlayer.STATE_STOPPED = 1;
                SCVideoPlayer.STATE_LOADING = 2;
                SCVideoPlayer.STATE_AWAIT_PLAYING = 3; // loading done, monitoring playign status
                SCVideoPlayer.STATE_PLAYING = 4; // happy we are actually playing
                SCVideoPlayer.STATE_ENDED = 5;
                return SCVideoPlayer;
            }(away.events.EventDispatcher));
            video.SCVideoPlayer = SCVideoPlayer;
        })(video = wearesmartcookie.video || (wearesmartcookie.video = {}));
    })(wearesmartcookie = com.wearesmartcookie || (com.wearesmartcookie = {}));
})(com || (com = {}));
var com;
(function (com) {
    var wearesmartcookie;
    (function (wearesmartcookie) {
        var video;
        (function (video) {
            /**
             * ...
             * @author ben.fryer@mediastation.co.uk
             */
            var SCVideoPlayerEvent = (function (_super) {
                __extends(SCVideoPlayerEvent, _super);
                function SCVideoPlayerEvent(type, bubbles, cancelable) {
                    if (bubbles === void 0) { bubbles = false; }
                    if (cancelable === void 0) { cancelable = false; }
                    return _super.call(this, type) || this;
                }
                SCVideoPlayerEvent.READY = "ready";
                SCVideoPlayerEvent.COMPLETE = "complete";
                SCVideoPlayerEvent.PLAYING = "playing";
                return SCVideoPlayerEvent;
            }(away.events.Event));
            video.SCVideoPlayerEvent = SCVideoPlayerEvent;
        })(video = wearesmartcookie.video || (wearesmartcookie.video = {}));
    })(wearesmartcookie = com.wearesmartcookie || (com.wearesmartcookie = {}));
})(com || (com = {}));
var com;
(function (com) {
    var wearesmartcookie;
    (function (wearesmartcookie) {
        var widgets;
        (function (widgets) {
            var circular;
            (function (circular) {
                var SCCircularWidget = (function () {
                    function SCCircularWidget(context) {
                        this.bgColor = "#2E3641";
                        this.startAngle = Math.PI * 0.7;
                        this.sliceAngle = Math.PI * 0.4;
                        this.animationSpeed = Math.PI / 100;
                        this.animationComplete = true;
                        this._value = 1;
                        this.currentLayer = null;
                        this.context = context;
                        this.layers = [];
                    }
                    SCCircularWidget.prototype.addLayer = function (layer) {
                        return this.layers.push(layer);
                    };
                    SCCircularWidget.prototype.draw = function () {
                        var _this = this;
                        for (var i = 0; i < this.layers.length; i++) {
                            this.layers[i].animationValue = 0;
                        }
                        this.animationComplete = false;
                        requestAnimationFrame(function () { return _this.update(); });
                    };
                    SCCircularWidget.prototype.update = function () {
                        var _this = this;
                        this.context.fillStyle = this.bgColor;
                        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);
                        var i, j, x, y, sliceAngle, startAngle, endAngle, angleInc, nextAngle;
                        var complete = true;
                        for (i = 0; i < this.layers.length; i++) {
                            this.currentLayer = this.layers[i];
                            this.currentColor = this.currentLayer.colorFrom;
                            this.targetColor = "#" + SCCircularWidget.colorLerp(this.currentColor, this.currentLayer.colorTo, (this.currentLayer.useWidgetValue ? 1 + this._value : this.currentLayer.value)).toString(16);
                            x = this.context.canvas.width * 0.5;
                            y = this.context.canvas.height * 0.5;
                            sliceAngle = this.sliceAngle;
                            startAngle = this.startAngle;
                            endAngle = startAngle + ((Math.PI * 2) - sliceAngle) * (this.currentLayer.useWidgetValue ? (1 + this._value) * this.currentLayer.animationValue : this.currentLayer.animationValue);
                            angleInc = (endAngle - startAngle) / this.currentLayer.numSegments;
                            nextAngle = startAngle + angleInc;
                            for (j = 0; j < this.currentLayer.numSegments; j++) {
                                this.context.beginPath();
                                this.context.lineCap = "round";
                                this.context.lineWidth = this.currentLayer.strokeSize;
                                this.context.strokeStyle = this.nextGradient(x, y, startAngle, nextAngle, this.currentLayer.radius, j);
                                this.context.arc(x, y, this.currentLayer.radius, startAngle, nextAngle);
                                this.context.stroke();
                                startAngle = nextAngle;
                                nextAngle = startAngle + angleInc;
                            }
                            this.currentLayer.animationValue += this.animationSpeed;
                            if (this.currentLayer.animationValue - this.animationSpeed < 1) {
                                complete = false;
                            }
                        }
                        if (!complete)
                            requestAnimationFrame(function () { return _this.update(); });
                    };
                    SCCircularWidget.prototype.nextGradient = function (x, y, startAngle, nextAngle, radius, inc) {
                        if (this.currentLayer.colorFrom.toUpperCase() == this.currentLayer.colorTo.toUpperCase())
                            return this.currentLayer.colorFrom;
                        var grad = this.context.createLinearGradient(x + Math.cos(startAngle) * radius, y + Math.sin(startAngle) * radius, x + Math.cos(nextAngle) * radius, y + Math.sin(nextAngle) * radius);
                        var nextColor = "#" + SCCircularWidget.colorLerp(this.currentColor, this.targetColor, inc / this.currentLayer.numSegments).toString(16);
                        grad.addColorStop(0, this.currentColor);
                        grad.addColorStop(1, nextColor);
                        this.currentColor = nextColor;
                        return grad;
                    };
                    SCCircularWidget.colorLerp = function (fromColor, toColor, amount) {
                        var fc = this.colorFromHash(fromColor);
                        var fc_r = (fc >> 16) & 0xFF;
                        var fc_g = (fc >> 8) & 0xFF;
                        var fc_b = fc & 0xFF;
                        var tc = this.colorFromHash(toColor);
                        var tc_r = (tc >> 16) & 0xFF;
                        var tc_g = (tc >> 8) & 0xFF;
                        var tc_b = tc & 0xFF;
                        var c_r = fc_r + (tc_r - fc_r) * amount;
                        var c_g = fc_g + (tc_g - fc_g) * amount;
                        var c_b = fc_b + (tc_b - fc_b) * amount;
                        return (c_r << 16 | c_g << 8 | c_b);
                    };
                    SCCircularWidget.colorFromHash = function (hash) {
                        return parseInt(hash.substr(1), 16);
                    };
                    Object.defineProperty(SCCircularWidget.prototype, "value", {
                        // energy saving - a negative value
                        get: function () { return this._value; },
                        set: function (v) {
                            this._value = (v > 0 ? 0 : v);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SCCircularWidget;
                }());
                circular.SCCircularWidget = SCCircularWidget;
            })(circular = widgets.circular || (widgets.circular = {}));
        })(widgets = wearesmartcookie.widgets || (wearesmartcookie.widgets = {}));
    })(wearesmartcookie = com.wearesmartcookie || (com.wearesmartcookie = {}));
})(com || (com = {}));
var com;
(function (com) {
    var wearesmartcookie;
    (function (wearesmartcookie) {
        var widgets;
        (function (widgets) {
            var circular;
            (function (circular) {
                var SCCircularWidgetLayer = (function () {
                    function SCCircularWidgetLayer(colorFrom, colorTo, useWidgetValue, value, radius, strokeSize, numSegments, animate) {
                        if (useWidgetValue === void 0) { useWidgetValue = true; }
                        if (value === void 0) { value = 1; }
                        if (radius === void 0) { radius = 0.75; }
                        if (strokeSize === void 0) { strokeSize = 18; }
                        if (numSegments === void 0) { numSegments = 5; }
                        if (animate === void 0) { animate = true; }
                        this.strokeSize = 18;
                        this.numSegments = 5;
                        this.value = 1;
                        this.animate = false;
                        this._animationValue = 0;
                        this.colorFrom = colorFrom;
                        this.colorTo = colorTo;
                        this.useWidgetValue = useWidgetValue;
                        this.value = value;
                        this.radius = radius;
                        this.strokeSize = strokeSize;
                        this.numSegments = numSegments;
                        this.animate = animate;
                    }
                    Object.defineProperty(SCCircularWidgetLayer.prototype, "animationValue", {
                        get: function () {
                            return this.animate == true ? this._animationValue : 1;
                        },
                        set: function (v) {
                            this._animationValue = v;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return SCCircularWidgetLayer;
                }());
                circular.SCCircularWidgetLayer = SCCircularWidgetLayer;
            })(circular = widgets.circular || (widgets.circular = {}));
        })(widgets = wearesmartcookie.widgets || (wearesmartcookie.widgets = {}));
    })(wearesmartcookie = com.wearesmartcookie || (com.wearesmartcookie = {}));
})(com || (com = {}));
var daikincity;
(function (daikincity) {
    var billboard;
    (function (billboard) {
        var DCBillboardPoster = (function () {
            function DCBillboardPoster(url, image, enabled) {
                this.url = url;
                this.image = image;
                this.enabled = enabled;
            }
            DCBillboardPoster.fromJson = function (json) {
                return new DCBillboardPoster(json.url, json.image, json.enabled);
            };
            return DCBillboardPoster;
        }());
        billboard.DCBillboardPoster = DCBillboardPoster;
    })(billboard = daikincity.billboard || (daikincity.billboard = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var communications;
        (function (communications) {
            var DCCommunicationsVideo = (function () {
                function DCCommunicationsVideo(id, title, thumbnail, url) {
                    this._id = id;
                    this._title = title;
                    this._thumbnail = thumbnail;
                    this._url = url;
                }
                DCCommunicationsVideo.fromJson = function (json) {
                    var id = parseInt(json.id);
                    var title = json.title;
                    var thumbnail = json.thumb;
                    var url = json.url;
                    return new DCCommunicationsVideo(id, title, thumbnail, url);
                };
                Object.defineProperty(DCCommunicationsVideo.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCCommunicationsVideo.prototype, "title", {
                    get: function () { return this._title; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCCommunicationsVideo.prototype, "thumbnail", {
                    get: function () { return this._thumbnail; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCCommunicationsVideo.prototype, "url", {
                    get: function () { return this._url; },
                    enumerable: true,
                    configurable: true
                });
                return DCCommunicationsVideo;
            }());
            communications.DCCommunicationsVideo = DCCommunicationsVideo;
        })(communications = building.communications || (building.communications = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var DCFloor = (function () {
            function DCFloor(id, type, name) {
                this.building = null;
                this._id = id;
                this._type = type;
                this._name = name;
            }
            DCFloor.fromJson = function (json) {
                var id = parseInt(json.id);
                var type = json.type.toLowerCase();
                var name = json.name;
                var floor;
                switch (type) {
                    case DCFloor.TYPE_APPLICATION:
                        var applicationId = parseInt(json.applicationId);
                        floor = new building.DCApplicationFloor(id, type, name, applicationId);
                        break;
                    case DCFloor.TYPE_FUNCTIONAL:
                        floor = new building.functional.DCFunctionalFloor(id, type, name, parseFloat(json.size), json.floorImage);
                        var configurationsJson = json.configurations.configuration;
                        for (var i = 0; i < configurationsJson.length; i++) {
                            floor.addConfiguration(building.functional.DCFunctionalConfiguration.fromJson(configurationsJson[i]));
                        }
                        var altConfigurationsJson = json.alternativeConfigurations.configuration;
                        for (var i = 0; i < altConfigurationsJson.length; i++) {
                            floor.addAlternativeConfiguration(building.functional.DCFunctionalConfiguration.fromJson(altConfigurationsJson[i]));
                        }
                        break;
                    case DCFloor.TYPE_WEB:
                        floor = new building.DCWebFloor(id, type, name, json.backgroundImage, json.icon);
                        var links = json.links.link;
                        for (var i = 0; i < links.length; i++) {
                            floor.addWebLink(building.DCWebLink.fromJson(links[i]));
                        }
                        break;
                    default:
                        throw new Error("Invalid type for floor with id " + id);
                }
                return floor;
            };
            Object.defineProperty(DCFloor.prototype, "hashName", {
                get: function () {
                    return this._name.toLowerCase().replace(/\s+/g, "");
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCFloor.prototype, "id", {
                get: function () { return this._id; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCFloor.prototype, "type", {
                get: function () { return this._type; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCFloor.prototype, "name", {
                get: function () { return this._name; },
                enumerable: true,
                configurable: true
            });
            DCFloor.TYPE_APPLICATION = "application";
            DCFloor.TYPE_FUNCTIONAL = "functional";
            DCFloor.TYPE_WEB = "web";
            return DCFloor;
        }());
        building.DCFloor = DCFloor;
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
/// <reference path="DCFloor.ts" />
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var DCApplicationFloor = (function (_super) {
            __extends(DCApplicationFloor, _super);
            function DCApplicationFloor(id, type, name, applicationId) {
                var _this = _super.call(this, id, type, name) || this;
                _this._applicationId = applicationId;
                return _this;
            }
            Object.defineProperty(DCApplicationFloor.prototype, "applicationId", {
                get: function () { return this._applicationId; },
                enumerable: true,
                configurable: true
            });
            DCApplicationFloor.APPLICATION_HOTEL_ROOM = 1;
            DCApplicationFloor.APPLICATION_LIBRARY = 2;
            DCApplicationFloor.APPLICATION_BROADCAST_CENTRE = 3;
            DCApplicationFloor.APPLICATION_HOUSE = 4;
            DCApplicationFloor.APPLICATION_PROJECT_OFFICE = 5;
            return DCApplicationFloor;
        }(building.DCFloor));
        building.DCApplicationFloor = DCApplicationFloor;
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCScreen = (function (_super) {
            __extends(DCScreen, _super);
            function DCScreen(element) {
                var _this = _super.call(this) || this;
                _this.screenElement = element;
                return _this;
            }
            DCScreen.prototype.show = function () {
                this.screenElement.style.display = "block";
            };
            DCScreen.prototype.hide = function () {
                this.screenElement.style.display = "none";
            };
            Object.defineProperty(DCScreen.prototype, "visible", {
                get: function () {
                    return this.screenElement.style.display == "block";
                },
                enumerable: true,
                configurable: true
            });
            return DCScreen;
        }(away.events.EventDispatcher));
        ui.DCScreen = DCScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCBuildingScreen = (function (_super) {
            __extends(DCBuildingScreen, _super);
            function DCBuildingScreen() {
                var _this = _super.call(this, document.getElementById("buildingScreen")) || this;
                _this.currentFloor = null;
                _this.core = daikincity.DCCore.I;
                _this.floors = [];
                _this.buildingMenuScreen = new ui.DCBuildingMenuScreen(_this);
                _this.floors.push(_this.buildingMenuScreen);
                _this.functionalFloorScreen = new ui.DCFunctionalFloorScreen();
                _this.functionalFloorScreen.floorMenu.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, _this.onFloorSelected, _this);
                _this.floors.push(_this.functionalFloorScreen);
                _this.applicationFloorScreen = new ui.DCApplicationFloorScreen();
                _this.applicationFloorScreen.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, _this.onFloorSelected, _this);
                _this.floors.push(_this.applicationFloorScreen);
                _this.webFloorScreen = new ui.DCWebFloorScreen();
                _this.floors.push(_this.webFloorScreen);
                for (var i = 0; i < _this.floors.length; i++) {
                    _this.floors[i].addEventListener("ready", _this.onScreenReady, _this);
                }
                return _this;
            }
            DCBuildingScreen.prototype.onScreenReady = function (e) {
                this.dispatchEvent(e.clone());
            };
            DCBuildingScreen.prototype.populate = function () {
                if (this.core.currentBuilding.numFloors > 1) {
                    if (this.core.defaultFloorName.length > 0) {
                        var floor = this.core.currentBuilding.getFloorByHashName(this.core.defaultFloorName);
                        this.core.defaultFloorName = ""; // reset once used
                        if (floor != null) {
                            this.showFloor(floor);
                        }
                        else {
                            // default to floor menu on error
                            this.buildingMenuScreen.showBuilding(this.core.currentBuilding);
                            this.setState(DCBuildingScreen.STATE_BUILDING_MENU);
                        }
                    }
                    else {
                        this.buildingMenuScreen.showBuilding(this.core.currentBuilding);
                        this.setState(DCBuildingScreen.STATE_BUILDING_MENU);
                    }
                }
                else {
                    this.showFloor(this.core.currentBuilding.getFloorAt(0));
                }
            };
            DCBuildingScreen.prototype.setState = function (toState) {
                if (this.state == toState)
                    return;
                this.state = toState;
                var screen = null;
                switch (this.state) {
                    case DCBuildingScreen.STATE_BUILDING_MENU:
                        screen = this.buildingMenuScreen;
                        break;
                    case DCBuildingScreen.STATE_APPLICATION_FLOOR:
                        screen = this.applicationFloorScreen;
                        break;
                    case DCBuildingScreen.STATE_FUNCTIONAL_FLOOR:
                        screen = this.functionalFloorScreen;
                        break;
                    case DCBuildingScreen.STATE_WEB_FLOOR:
                        screen = this.webFloorScreen;
                        break;
                }
                if (screen != null) {
                    this.hideAll();
                    screen.show();
                }
            };
            DCBuildingScreen.prototype.hideAll = function () {
                for (var i = 0; i < this.floors.length; i++) {
                    this.floors[i].hide();
                }
            };
            DCBuildingScreen.prototype.show = function () {
                _super.prototype.show.call(this);
                this.populate();
            };
            DCBuildingScreen.prototype.showFloor = function (floor) {
                this.currentFloor = floor;
                window.location.hash = this.currentFloor.building.hashName + (this.currentFloor.building.numFloors > 1 ? "-" + this.currentFloor.hashName : "");
                switch (floor.type) {
                    case daikincity.building.DCFloor.TYPE_APPLICATION:
                        this.setState(DCBuildingScreen.STATE_APPLICATION_FLOOR);
                        this.applicationFloorScreen.showFloor(floor);
                        break;
                    case daikincity.building.DCFloor.TYPE_FUNCTIONAL:
                        this.setState(DCBuildingScreen.STATE_FUNCTIONAL_FLOOR);
                        this.functionalFloorScreen.showFloor(floor);
                        break;
                    case daikincity.building.DCFloor.TYPE_WEB:
                        this.setState(DCBuildingScreen.STATE_WEB_FLOOR);
                        this.webFloorScreen.showFloor(floor);
                        break;
                }
            };
            DCBuildingScreen.prototype.onFloorSelected = function (e) {
                this.showFloor(e.floor);
            };
            DCBuildingScreen.prototype.clean = function () {
                // remove current building
                this.currentFloor = null;
            };
            DCBuildingScreen.STATE_BUILDING_MENU = "buildingMenu";
            DCBuildingScreen.STATE_FUNCTIONAL_FLOOR = "functionalFloor";
            DCBuildingScreen.STATE_APPLICATION_FLOOR = "applicationFloor";
            DCBuildingScreen.STATE_WEB_FLOOR = "webFloor";
            return DCBuildingScreen;
        }(daikincity.ui.DCScreen));
        ui.DCBuildingScreen = DCBuildingScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCMenuScreen = (function (_super) {
            __extends(DCMenuScreen, _super);
            function DCMenuScreen() {
                var _this = _super.call(this, document.getElementById("menuScreen")) || this;
                _this.core = daikincity.DCCore.I;
                _this.bottomMenu = document.getElementById("bottomMenuRight");
                _this.functionalBuildingsMenuElement = document.getElementById("functionalBuildingsMenu");
                _this.applicationBuildingsMenuElement = document.getElementById("applicationBuildingsMenu");
                _this.welcomeTitleElement = document.getElementById("welcomeTitle");
                _this.welcomeDescriptionElement = document.getElementById("welcomeDescription");
                _this.billboard = new ui.DCBillboard();
                _this.hotspots = [];
                _this.createToolTip();
                return _this;
            }
            DCMenuScreen.prototype.populate = function () {
                var _this = this;
                for (var i = 0; i < this.core.numBuildings; i++) {
                    var building = this.core.getBuildingAt(i);
                    if (this.core.isBuildingAvailable(building.id)) {
                        var listBtn = this.bottomMenuItem(building);
                        if (building.type == daikincity.building.DCFloor.TYPE_FUNCTIONAL) {
                            this.functionalBuildingsMenuElement.appendChild(listBtn);
                        }
                        else {
                            this.applicationBuildingsMenuElement.appendChild(listBtn);
                        }
                        //hotspot
                        var hotspot = this.hotspot(building);
                        hotspot.onclick = function (e) { return _this.onHotspotButtonSelected(e); };
                        this.screenElement.appendChild(hotspot);
                    }
                }
                for (i = 0; i < this.core.numBillboardPosters; i++) {
                    this.billboard.addPoster(this.core.getBillboardPosterAt(i));
                }
                this.welcomeTitleElement.innerHTML = this.core.welcomeTitle;
                this.welcomeDescriptionElement.innerHTML = this.core.welcomeDescription;
            };
            DCMenuScreen.prototype.hotspot = function (building) {
                var _this = this;
                var hotspot = document.createElement("button");
                hotspot.id = building.id.toString();
                $(hotspot).addClass("menuHotspot");
                hotspot.style.left = building.hotspotX;
                hotspot.style.top = building.hotspotY;
                var hotspotImg = document.createElement("img");
                hotspotImg.src = building.type == daikincity.building.DCFloor.TYPE_FUNCTIONAL ? DCMenuScreen.HOTSPOT_FUNCTIONAL_SRC : DCMenuScreen.HOTSPOT_APPLICATION_SRC;
                hotspot.appendChild(hotspotImg);
                hotspot.onmouseover = function (e) { return _this.onHotspotOver(e); };
                hotspot.onmouseout = function (e) { return _this.onHotspotOut(e); };
                this.hotspots.push(hotspot);
                return hotspot;
            };
            DCMenuScreen.prototype.bottomMenuItem = function (building) {
                var _this = this;
                var li = document.createElement("li");
                var btn = document.createElement("button");
                var span = document.createElement("span");
                btn.id = building.id.toString();
                span.innerHTML = building.name;
                btn.appendChild(span);
                li.appendChild(btn);
                //btn.onclick = (e) => this.onBottomMenuButtonSelected(e);
                btn.onmouseover = function (e) { return _this.onMenuItemOver(e); };
                btn.onmouseout = function (e) { return _this.onMenuItemOut(e); };
                $(btn).on("click touchend", $.proxy(this.onBottomMenuButtonSelected, this));
                return li;
            };
            DCMenuScreen.prototype.createToolTip = function () {
                this.tooltip = document.createElement("div");
                $(this.tooltip).addClass("menu-tooltip");
                this.screenElement.appendChild(this.tooltip);
            };
            DCMenuScreen.prototype.showToolTip = function (building) {
                var hotspot = this.getHotspotById(building.id);
                if (hotspot != null) {
                    this.tooltip.innerHTML = building.name;
                    this.tooltip.style.display = "block";
                    this.tooltip.style.left = (hotspot.offsetLeft - (this.tooltip.offsetWidth - hotspot.offsetWidth) * 0.5 - hotspot.offsetWidth * 0.5) + "px";
                    this.tooltip.style.top = (hotspot.offsetTop - 35 - (hotspot.offsetHeight * 0.5)) + "px";
                }
            };
            DCMenuScreen.prototype.hideToolTip = function () {
                this.tooltip.style.display = "none";
            };
            DCMenuScreen.prototype.getHotspotById = function (id) {
                for (var i = 0; i < this.hotspots.length; i++) {
                    if (parseInt(this.hotspots[i].id) == id)
                        return this.hotspots[i];
                }
                return null;
            };
            DCMenuScreen.prototype.onMenuItemOver = function (e) {
                var btn = e.currentTarget;
                var building = this.core.getBuildingById(parseInt(btn.id));
                if (building != null) {
                    this.showToolTip(building);
                }
            };
            DCMenuScreen.prototype.onMenuItemOut = function (e) {
                this.hideToolTip();
            };
            DCMenuScreen.prototype.onHotspotOver = function (e) {
                var hotspot = e.currentTarget;
                var building = this.core.getBuildingById(parseInt(hotspot.id));
                if (building != null) {
                    this.showToolTip(building);
                }
            };
            DCMenuScreen.prototype.onHotspotOut = function (e) {
                this.hideToolTip();
            };
            DCMenuScreen.prototype.onBottomMenuButtonSelected = function (e) {
                var hotspot = e.currentTarget;
                this.core.changeBuilding(parseInt(hotspot.id), false);
            };
            DCMenuScreen.prototype.onHotspotButtonSelected = function (e) {
                var hotspot = e.currentTarget;
                this.core.changeBuilding(parseInt(hotspot.id), true);
            };
            DCMenuScreen.prototype.onVideoLoopComplete = function (e) {
                //this.core.videoPlayer.play("daikincityweb/video/City_Loop.mp4", "daikincityweb/images/city.jpg");
            };
            DCMenuScreen.prototype.show = function () {
                /*
                this.core.videoPlayer.show();
                this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onVideoLoopComplete, this);
                this.core.videoPlayer.play("daikincityweb/video/City_Loop.mp4", "daikincityweb/images/city.jpg");
                */
                _super.prototype.show.call(this);
            };
            DCMenuScreen.prototype.hide = function () {
                this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onVideoLoopComplete, this);
                _super.prototype.hide.call(this);
            };
            DCMenuScreen.HOTSPOT_FUNCTIONAL_SRC = "daikincityweb/images/building-hotspot-functional.png";
            DCMenuScreen.HOTSPOT_APPLICATION_SRC = "daikincityweb/images/building-hotspot-application.png";
            return DCMenuScreen;
        }(daikincity.ui.DCScreen));
        ui.DCMenuScreen = DCMenuScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../DCFloor.ts" />
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var functional;
        (function (functional) {
            var DCFunctionalFloor = (function (_super) {
                __extends(DCFunctionalFloor, _super);
                function DCFunctionalFloor(id, type, name, size, floorImage) {
                    var _this = _super.call(this, id, type, name) || this;
                    _this._size = size;
                    _this._floorImage = floorImage;
                    _this.configurations = [];
                    _this.alternativeConfigurations = [];
                    return _this;
                }
                DCFunctionalFloor.prototype.addConfiguration = function (configuration) {
                    return this.configurations.push(configuration);
                };
                DCFunctionalFloor.prototype.addAlternativeConfiguration = function (configuration) {
                    return this.alternativeConfigurations.push(configuration);
                };
                DCFunctionalFloor.prototype.getConfigurationAt = function (index) {
                    return this.configurations[index];
                };
                DCFunctionalFloor.prototype.getAlternativeConfigurationAt = function (index) {
                    return this.alternativeConfigurations[index];
                };
                DCFunctionalFloor.prototype.getConfigurationById = function (id) {
                    var i = this.configurations.length;
                    while (i--) {
                        if (this.configurations[i].id == id)
                            return this.configurations[i];
                    }
                    return null;
                };
                DCFunctionalFloor.prototype.getAlternativeConfigurationById = function (id) {
                    var i = this.alternativeConfigurations.length;
                    while (i--) {
                        if (this.alternativeConfigurations[i].id == id)
                            return this.alternativeConfigurations[i];
                    }
                    return null;
                };
                DCFunctionalFloor.prototype.getHighestEnergyValue = function () {
                    var a = this.configurations.concat(this.alternativeConfigurations);
                    var i = a.length;
                    var highest = 0;
                    while (i--) {
                        if (a[i].energy > highest)
                            highest = a[i].energy;
                    }
                    return highest;
                };
                Object.defineProperty(DCFunctionalFloor.prototype, "size", {
                    get: function () { return this._size; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalFloor.prototype, "floorImage", {
                    get: function () { return this._floorImage; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalFloor.prototype, "numConfigurations", {
                    get: function () { return this.configurations.length; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalFloor.prototype, "numAlternativeConfigurations", {
                    get: function () { return this.alternativeConfigurations.length; },
                    enumerable: true,
                    configurable: true
                });
                return DCFunctionalFloor;
            }(building.DCFloor));
            functional.DCFunctionalFloor = DCFunctionalFloor;
        })(functional = building.functional || (building.functional = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    function trace() {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        for (var i = 0; i < params.length; i++) {
            console.log(params[i]);
        }
    }
    daikincity.trace = trace;
    var DCExperience = (function () {
        function DCExperience() {
            var _this = this;
            this.core = daikincity.DCCore.I;
            this.screens = [];
            this.screenMenu = new daikincity.ui.DCMenuScreen();
            this.screens.push(this.screenMenu);
            this.screenMenu.hide();
            this.screenBuilding = new daikincity.ui.DCBuildingScreen();
            this.screens.push(this.screenBuilding);
            this.screenBuilding.hide();
            this.homeBtn = document.getElementById("daikin_city_btn");
            $(this.homeBtn).on("click touchend", $.proxy(this.onHomeBtnClicked, this));
            this.logoBtn = document.getElementById("home_btn");
            $(this.logoBtn).on("click touchend", $.proxy(this.onHomeBtnClicked, this));
            this.loadingScreen = document.getElementById("loadingScreen");
            window.addEventListener("resize", function () { return _this.resize(); }, false);
            this.resize();
            this.core.addEventListener(daikincity.events.DCErrorEvent.CONFIG_LOAD_ERROR, this.onCoreLoadError, this);
            this.core.addEventListener(daikincity.events.DCEvent.CORE_READY, this.onCoreReady, this);
            this.core.load();
        }
        DCExperience.prototype.onCoreLoadError = function (e) {
            this.core.removeEventListener(daikincity.events.DCErrorEvent.CONFIG_LOAD_ERROR, this.onCoreLoadError, this);
            this.core.removeEventListener(away.events.Event.COMPLETE, this.onCoreReady, this);
            alert("Error: " + e.error);
        };
        DCExperience.prototype.onCoreReady = function (e) {
            this.core.removeEventListener(daikincity.events.DCErrorEvent.CONFIG_LOAD_ERROR, this.onCoreLoadError, this);
            this.core.removeEventListener(away.events.Event.COMPLETE, this.onCoreReady, this);
            this.screenMenu.populate();
            this.parseTopBuildingMenu();
            this.core.addEventListener(daikincity.events.DCBuildingChangeEvent.BUILDING_CHANGED, this.onBuildingChanged, this);
            if (this.core.defaultBuildingName.length) {
                var building = this.core.getBuildingByHashName(this.core.defaultBuildingName);
                this.core.defaultBuildingName = ""; // reset once used
                if (building != null) {
                    this.loadingScreen.style.display = "none";
                    this.core.changeBuilding(building.id, false);
                }
                else {
                    // ignore building on error
                    this.playFlydown();
                    //========skip video==============
                    //this.core.videoPlayer.hide();
                    this.onFlydownVideoComplete(null);
                }
            }
            else {
                this.playFlydown();
                //========skip video==============
                //this.core.videoPlayer.hide();
                this.onFlydownVideoComplete(null);
            }
        };
        DCExperience.prototype.parseTopBuildingMenu = function () {
            var _this = this;
            for (var i = 0; i < this.core.numBuildings; i++) {
                var a = document.getElementById("building_" + this.core.getBuildingAt(i).id.toString());
                if (a != undefined) {
                    a.onclick = function (e) { return _this.onTopMenuBuildingSelected(e); };
                }
            }
        };
        DCExperience.prototype.onTopMenuBuildingSelected = function (e) {
            var a = e.currentTarget;
            var id = parseInt(a.id.substr(a.id.indexOf("_") + 1));
            if (!isNaN(id)) {
                this.core.changeBuilding(id, false);
            }
        };
        DCExperience.prototype.onHomeBtnClicked = function (e) {
            this.core.videoPlayer.hide();
            this.onFlydownVideoComplete(null);
            e.preventDefault();
        };
        DCExperience.prototype.playFlydown = function () {
            if (!this.core.isDevice) {
                this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onFlydownVideoComplete, this);
                this.core.videoPlayer.play("daikincityweb/video/Flydown.mp4", "daikincityweb/images/flydown_poster.jpg");
                this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onFlydownPlaying, this);
            }
            else {
                this.loadingScreen.style.display = "none";
                this.changeScreen(DCExperience.SCREEN_MENU);
            }
        };
        DCExperience.prototype.onFlydownPlaying = function (e) {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onFlydownPlaying, this);
            this.loadingScreen.style.display = "none";
        };
        DCExperience.prototype.onFlydownVideoComplete = function (e) {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onFlydownVideoComplete, this);
            this.changeScreen(DCExperience.SCREEN_MENU);
        };
        DCExperience.prototype.onBuildingChanged = function (e) {
            if (this.core.buildingAccess[e.building.id] != true) {
                this.changeScreen(DCExperience.SCREEN_MENU);
                return;
            }
            //if (e.playIntro)
            //{
            //    this.playBuildingFlydown();
            //}
            //else
            //{
            //    this.showBuilding();
            //}
            //========skip video==============
            this.showBuilding();
        };
        DCExperience.prototype.playBuildingFlydown = function () {
            this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onBuildingFlydownVideoComplete, this);
            this.core.videoPlayer.addEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onBuildingFlydownPlaying, this);
            this.core.videoPlayer.play(this.core.currentBuilding.videoIn, this.core.currentBuilding.videoInPoster);
            this.core.videoPlayer.show();
            document.getElementById("videoPlayer").style.zIndex = "10";
        };
        DCExperience.prototype.onBuildingFlydownPlaying = function (e) {
            this.hideAll();
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.PLAYING, this.onBuildingFlydownPlaying, this);
        };
        DCExperience.prototype.onBuildingFlydownVideoComplete = function (e) {
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onBuildingFlydownVideoComplete, this);
            this.showBuilding();
        };
        DCExperience.prototype.showBuilding = function () {
            this.changeScreen(DCExperience.SCREEN_BUILDING);
        };
        DCExperience.prototype.changeScreen = function (toScreen) {
            var screen = null;
            this.core.videoPlayer.removeEventListener(com.wearesmartcookie.video.SCVideoPlayerEvent.COMPLETE, this.onBuildingFlydownVideoComplete, this);
            this.core.lightbox.hide();
            switch (toScreen) {
                case DCExperience.SCREEN_MENU:
                    screen = this.screenMenu;
                    window.location.hash = "";
                    ga('send', 'pageview', { 'page': "daikincity" });
                    break;
                case DCExperience.SCREEN_BUILDING:
                    this.core.videoPlayer.stop();
                    screen = this.screenBuilding;
                    screen.addEventListener("ready", this.onBuildingReady, this);
                    break;
            }
            if (screen != null) {
                this.showScreen(screen);
            }
        };
        DCExperience.prototype.onBuildingReady = function (e) {
            var _this = this;
            this.currentScreen.removeEventListener("ready", this.onBuildingReady, this);
            setTimeout(function () { return _this.core.videoPlayer.hide(); }, 50);
            document.getElementById("videoPlayer").style.zIndex = "0";
        };
        DCExperience.prototype.showScreen = function (screen) {
            this.currentScreen = screen;
            this.hideAll();
            this.currentScreen.show();
        };
        DCExperience.prototype.hideAll = function () {
            for (var i = 0; i < this.screens.length; i++) {
                this.screens[i].hide();
            }
        };
        DCExperience.prototype.resize = function () {
            var header = document.getElementById("header");
            var content = document.getElementById("content");
            var toFit = new away.geom.Rectangle(0, 0, 1280, 720);
            var ww = document.body.offsetWidth - 60;
            var wh = document.body.offsetHeight - 55 - 60; // minus header height and 30px margin on wrapper
            var fit = this.bestFit(toFit, new away.geom.Rectangle(0, 0, ww, wh));
            var minWidth = 964;
            if (fit.width < minWidth) {
                fit.width = minWidth;
                fit.height = 542;
            }
            content.style.width = fit.width + "px";
            content.style.height = fit.height + "px";
            // video element - required for ie9 correct dimensions
            this.core.videoPlayer.resize(content.offsetWidth + "px", content.offsetHeight + "px");
            // font sizing
            var s = window.innerWidth / 1280;
            if (s < minWidth / 1280)
                s = minWidth / 1280;
            document.body.style.fontSize = (s * 62.5) + "%";
            // align header buttons to right of app
            var headerBtns = document.getElementById("headerBtns");
            headerBtns.style.right = document.body.offsetWidth - ((content.offsetLeft + content.offsetWidth)) + "px";
            if (this.logoBtn != undefined) {
                this.logoBtn.style.left = content.offsetLeft + "px";
            }
        };
        DCExperience.prototype.bestFit = function (toFit, bounds) {
            var s = Math.min(bounds.width / toFit.width, bounds.height / toFit.height);
            return new away.geom.Rectangle(0, 0, toFit.width * s, toFit.height * s);
        };
        DCExperience.SCREEN_MENU = "screenMenu";
        DCExperience.SCREEN_BUILDING = "screenBuilding";
        return DCExperience;
    }());
    daikincity.DCExperience = DCExperience;
})(daikincity || (daikincity = {}));
/// <reference path="../../definitions/definitions.d.ts" />
var daikincity;
(function (daikincity) {
    var building;
    (function (building_1) {
        var DCBuilding = (function () {
            function DCBuilding(id, type, name, videoIn, videoInPoster, hotspotX, hotspotY, menuImage) {
                this._id = id;
                this._type = type;
                this._name = name;
                this._videoIn = videoIn;
                this._videoInPoster = videoInPoster;
                this.hotspotX = hotspotX;
                this.hotspotY = hotspotY;
                this.menuImage = menuImage;
                this.floors = [];
            }
            DCBuilding.prototype.addFloor = function (floor) {
                floor.building = this;
                return this.floors.push(floor);
            };
            DCBuilding.prototype.getFloorAt = function (index) {
                return this.floors[index];
            };
            DCBuilding.prototype.getFloorById = function (id) {
                var i = this.floors.length;
                while (i--) {
                    if (this.floors[i].id == id)
                        return this.floors[i];
                }
                return null;
            };
            DCBuilding.prototype.getFloorByHashName = function (hashName) {
                var i = this.floors.length;
                while (i--) {
                    if (this.floors[i].hashName == hashName)
                        return this.floors[i];
                }
                return null;
            };
            Object.defineProperty(DCBuilding.prototype, "hashName", {
                get: function () {
                    return this._name.toLowerCase().replace(/\s+/g, "");
                },
                enumerable: true,
                configurable: true
            });
            DCBuilding.prototype.hasFunctionalFloor = function () {
                for (var i = 0; i < this.floors.length; i++) {
                    if (this.floors[i].type == building_1.DCFloor.TYPE_FUNCTIONAL)
                        return true;
                }
                return false;
            };
            DCBuilding.fromJson = function (json) {
                var id = parseInt(json.id);
                var type = json.type;
                var name = json.name;
                var videoIn = json.videoIn;
                var videoInPoster = json.videoInPoster;
                var hotspotX = json.hotspotX;
                var hotspotY = json.hotspotY;
                var menuImage = json.menuImage;
                var building = new DCBuilding(id, type, name, videoIn, videoInPoster, hotspotX, hotspotY, menuImage);
                var floors = json.floors.floor;
                for (var i = 0; i < floors.length; i++) {
                    building.addFloor(daikincity.building.DCFloor.fromJson(floors[i]));
                }
                return building;
            };
            DCBuilding.prototype.toString = function () {
                return this.name;
            };
            Object.defineProperty(DCBuilding.prototype, "id", {
                get: function () { return this._id; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCBuilding.prototype, "type", {
                get: function () { return this._type; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCBuilding.prototype, "name", {
                get: function () { return this._name; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCBuilding.prototype, "videoIn", {
                get: function () { return this._videoIn; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCBuilding.prototype, "videoInPoster", {
                get: function () { return this._videoInPoster; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCBuilding.prototype, "numFloors", {
                get: function () { return this.floors.length; },
                enumerable: true,
                configurable: true
            });
            return DCBuilding;
        }());
        building_1.DCBuilding = DCBuilding;
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var DCWebFloor = (function (_super) {
            __extends(DCWebFloor, _super);
            function DCWebFloor(id, type, name, backgroundImage, icon) {
                var _this = _super.call(this, id, type, name) || this;
                _this.backgroundImage = backgroundImage;
                _this.icon = icon;
                _this.links = [];
                return _this;
            }
            DCWebFloor.prototype.addWebLink = function (webLink) {
                return this.links.push(webLink);
            };
            DCWebFloor.prototype.getLinkAt = function (index) {
                return this.links[index];
            };
            Object.defineProperty(DCWebFloor.prototype, "numLinks", {
                get: function () { return this.links.length; },
                enumerable: true,
                configurable: true
            });
            return DCWebFloor;
        }(building.DCFloor));
        building.DCWebFloor = DCWebFloor;
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var DCWebLink = (function () {
            function DCWebLink(id, url, title, description, enabled) {
                this._id = id;
                this._url = url;
                this._title = title;
                this._description = description;
                this._enabled = enabled;
            }
            DCWebLink.fromJson = function (json) {
                var id = parseFloat(json.id);
                var url = json.url;
                var title = json.title;
                var description = json.description;
                var enabled = json.enabled;
                return new DCWebLink(id, url, title, description, enabled);
            };
            Object.defineProperty(DCWebLink.prototype, "id", {
                get: function () { return this._id; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCWebLink.prototype, "url", {
                get: function () { return this._url; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCWebLink.prototype, "title", {
                get: function () { return this._title; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCWebLink.prototype, "description", {
                get: function () { return this._description; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCWebLink.prototype, "enabled", {
                get: function () { return this._enabled; },
                enumerable: true,
                configurable: true
            });
            return DCWebLink;
        }());
        building.DCWebLink = DCWebLink;
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var functional;
        (function (functional) {
            var DCConfigurationNode = (function () {
                function DCConfigurationNode(systemId) {
                    this.parentNode = null;
                    this.systemId = systemId;
                    this.nodes = [];
                }
                DCConfigurationNode.prototype.addNode = function (node) {
                    node.parentNode = this;
                    return this.nodes.push(node);
                };
                DCConfigurationNode.prototype.getNodeAt = function (index) {
                    return this.nodes[index];
                };
                DCConfigurationNode.prototype.hasChild = function (systemId) {
                    var i = this.nodes.length;
                    while (i--) {
                        if (this.nodes[i].systemId == systemId)
                            return true;
                    }
                    return false;
                };
                DCConfigurationNode.getParentNodesByOptionId = function (node, id, parents) {
                    if (parents === void 0) { parents = []; }
                    if (node.hasChild(id))
                        parents.push(node);
                    var i = node.numNodes;
                    while (i--) {
                        this.getParentNodesByOptionId(node.getNodeAt(i), id, parents);
                    }
                    return parents;
                };
                Object.defineProperty(DCConfigurationNode.prototype, "numNodes", {
                    get: function () { return this.nodes.length; },
                    enumerable: true,
                    configurable: true
                });
                return DCConfigurationNode;
            }());
            functional.DCConfigurationNode = DCConfigurationNode;
        })(functional = building.functional || (building.functional = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var functional;
        (function (functional) {
            var DCFunctionalConfiguration = (function () {
                function DCFunctionalConfiguration(id, name, systemName, systemImage, systemType, systemSize, overlayImage, energy, efficiency) {
                    this._id = id;
                    this._name = name;
                    this._systemName = systemName;
                    this._systemImage = systemImage;
                    this._systemType = systemType;
                    this._systemSize = systemSize;
                    this._overlayImage = overlayImage;
                    this._energy = energy;
                    this._efficiency = efficiency;
                    this.indoorUnits = [];
                    this.layouts = [];
                }
                DCFunctionalConfiguration.prototype.addIndoorUnit = function (systemId) {
                    return this.indoorUnits.push(systemId);
                };
                DCFunctionalConfiguration.prototype.addLayout = function (layout) {
                    return this.layouts.push(layout);
                };
                DCFunctionalConfiguration.prototype.getLayoutAt = function (index) {
                    return this.layouts[index];
                };
                DCFunctionalConfiguration.prototype.getLayoutById = function (id) {
                    var i = this.layouts.length;
                    while (i--) {
                        if (this.layouts[i].id == id)
                            return this.layouts[i];
                    }
                    return null;
                };
                DCFunctionalConfiguration.prototype.getIndoorUnitAt = function (index) {
                    return this.indoorUnits[index];
                };
                DCFunctionalConfiguration.fromJson = function (json) {
                    var id = parseInt(json.id);
                    var name = json.name;
                    var systemName = json.systemName;
                    var systemType = json.systemType;
                    var systemSize = json.systemSize;
                    var overlayImage = json.overlayImage;
                    var systemImage = json.systemImage;
                    var energy = parseFloat(json.energy);
                    var efficiency = parseFloat(json.efficiency);
                    var configuration = new DCFunctionalConfiguration(id, name, systemName, systemImage, systemType, systemSize, overlayImage, energy, efficiency);
                    var i;
                    if (json.indoorUnits != undefined) {
                        var indoorUnitsJson = json.indoorUnits.indoorUnit;
                        for (i = 0; i < indoorUnitsJson.length; i++) {
                            var systemId = parseInt(indoorUnitsJson[i]);
                            configuration.addIndoorUnit(systemId);
                        }
                    }
                    if (json.layouts != undefined) {
                        var layoutsJson = json.layouts.layout;
                        for (i = 0; i < layoutsJson.length; i++) {
                            configuration.addLayout(functional.DCFunctionalConfigurationLayout.fromJson(layoutsJson[i]));
                        }
                    }
                    return configuration;
                };
                Object.defineProperty(DCFunctionalConfiguration.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "name", {
                    get: function () { return this._name; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "systemName", {
                    get: function () { return this._systemName; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "overlayImage", {
                    get: function () { return this._overlayImage; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "systemImage", {
                    get: function () { return this._systemImage; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "systemType", {
                    get: function () { return this._systemType; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "systemSize", {
                    get: function () { return this._systemSize; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "energy", {
                    get: function () { return this._energy; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "efficiency", {
                    get: function () { return this._efficiency; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "numLayouts", {
                    get: function () { return this.layouts.length; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfiguration.prototype, "numIndoorUnits", {
                    get: function () { return this.indoorUnits.length; },
                    enumerable: true,
                    configurable: true
                });
                return DCFunctionalConfiguration;
            }());
            functional.DCFunctionalConfiguration = DCFunctionalConfiguration;
        })(functional = building.functional || (building.functional = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var functional;
        (function (functional) {
            var DCFunctionalConfigurationLayout = (function () {
                function DCFunctionalConfigurationLayout(id, name) {
                    this.maxDepth = 1;
                    this._id = id;
                    this._name = name;
                    this.nodes = [];
                    this.systems = [];
                }
                DCFunctionalConfigurationLayout.prototype.parseConfigurationLayout = function (json) {
                    this.rootNode = this.parseNode(json, 1);
                };
                DCFunctionalConfigurationLayout.prototype.parseNode = function (nodeJson, depth) {
                    if (depth === void 0) { depth = 0; }
                    if (depth > this.maxDepth)
                        this.maxDepth = depth;
                    var node = new functional.DCConfigurationNode(parseInt(nodeJson.id));
                    if (this.systems.indexOf(node.systemId) == -1) {
                        this.systems.push(node.systemId);
                    }
                    var nodes = nodeJson.node;
                    if (nodes != undefined) {
                        for (var i = 0; i < nodes.length; i++) {
                            node.addNode(this.parseNode(nodes[i], depth + 1));
                        }
                    }
                    this.nodes.push(node);
                    return node;
                };
                DCFunctionalConfigurationLayout.prototype.getSystemAt = function (index) {
                    return this.systems[index];
                };
                DCFunctionalConfigurationLayout.fromJson = function (json) {
                    var layout = new DCFunctionalConfigurationLayout(parseInt(json.id), json.name);
                    if (json.node != undefined) {
                        layout.parseConfigurationLayout(json.node);
                    }
                    return layout;
                };
                Object.defineProperty(DCFunctionalConfigurationLayout.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfigurationLayout.prototype, "name", {
                    get: function () { return this._name; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCFunctionalConfigurationLayout.prototype, "numSystems", {
                    get: function () { return this.systems.length; },
                    enumerable: true,
                    configurable: true
                });
                return DCFunctionalConfigurationLayout;
            }());
            functional.DCFunctionalConfigurationLayout = DCFunctionalConfigurationLayout;
        })(functional = building.functional || (building.functional = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var library;
        (function (library) {
            var DCLibraryCategory = (function () {
                function DCLibraryCategory(id, name, hotspotX, hotspotY) {
                    this._id = id;
                    this._name = name;
                    this.hotspotX = hotspotX;
                    this.hotspotY = hotspotY;
                    this._documents = [];
                }
                DCLibraryCategory.prototype.addDocument = function (document) {
                    return this._documents.push(document);
                };
                DCLibraryCategory.prototype.getDocumentAt = function (index) {
                    return this._documents[index];
                };
                DCLibraryCategory.fromJson = function (json) {
                    return new DCLibraryCategory(parseInt(json.id), json.name, json.hotspotX, json.hotspotY);
                };
                Object.defineProperty(DCLibraryCategory.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryCategory.prototype, "name", {
                    get: function () { return this._name; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryCategory.prototype, "numDocuments", {
                    get: function () { return this._documents.length; },
                    enumerable: true,
                    configurable: true
                });
                return DCLibraryCategory;
            }());
            library.DCLibraryCategory = DCLibraryCategory;
        })(library = building.library || (building.library = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var library;
        (function (library) {
            var DCLibraryCore = (function (_super) {
                __extends(DCLibraryCore, _super);
                function DCLibraryCore() {
                    var _this = _super.call(this) || this;
                    _this._loaded = false;
                    _this.authenticated = false;
                    if (DCLibraryCore.instance != null)
                        throw new Error("DCLibraryCore ** Singleton class");
                    DCLibraryCore.instance = _this;
                    _this.directoriesDict = {};
                    return _this;
                }
                DCLibraryCore.prototype.load = function () {
                    $.ajax(DCLibraryCore.CONFIG_URL, { dataType: "json", success: $.proxy(this.onConfigLoaded, this), error: $.proxy(this.onConfigLoadError, this) });
                };
                DCLibraryCore.prototype.onConfigLoadError = function () {
                    daikincity.trace("DCLibraryApplication ** Error loading config");
                };
                DCLibraryCore.prototype.onConfigLoaded = function (json) {
                    this._rootDirectory = library.DCLibraryDirectory.fromJson(json.documents);
                    this._loaded = true;
                    this.authenticated = daikincity.DCCore.I.libraryOtherAccess;
                    this.ready();
                };
                DCLibraryCore.prototype.ready = function () {
                    this.dispatchEvent(new daikincity.events.DCEvent(daikincity.events.DCEvent.LIBRARY_READY));
                };
                DCLibraryCore.prototype.hasParent = function (child, parent, excludeRoot) {
                    if (excludeRoot === void 0) { excludeRoot = false; }
                    if (child.id == parent.id) {
                        if (!(excludeRoot && parent.id == 1)) {
                            return true;
                        }
                    }
                    var p = child.parentDirectory;
                    while (p != null) {
                        if (p.id == parent.id) {
                            if (!(excludeRoot && parent.id == 1)) {
                                return true;
                            }
                        }
                        p = p.parentDirectory;
                    }
                    return false;
                };
                Object.defineProperty(DCLibraryCore, "I", {
                    get: function () {
                        if (DCLibraryCore.instance != null)
                            return DCLibraryCore.instance;
                        return new DCLibraryCore();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryCore.prototype, "loaded", {
                    get: function () { return this._loaded; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryCore.prototype, "rootDirectory", {
                    get: function () { return this._rootDirectory; },
                    enumerable: true,
                    configurable: true
                });
                DCLibraryCore.CONFIG_URL = "daikincityweb/json/documents.json";
                DCLibraryCore.instance = null;
                return DCLibraryCore;
            }(away.events.EventDispatcher));
            library.DCLibraryCore = DCLibraryCore;
        })(library = building.library || (building.library = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var library;
        (function (library) {
            var DCLibraryDirectory = (function () {
                function DCLibraryDirectory(id, index, name, _protected) {
                    this.parentDirectory = null;
                    this._id = id;
                    this._index = index;
                    this._name = name;
                    this._protected = _protected;
                    this.documents = [];
                    this.directories = [];
                    library.DCLibraryCore.I.directoriesDict[this._id] = this;
                }
                DCLibraryDirectory.prototype.addDocument = function (document) {
                    return this.documents.push(document);
                };
                DCLibraryDirectory.prototype.addDirectory = function (directory) {
                    directory.parentDirectory = this;
                    return this.directories.push(directory);
                };
                DCLibraryDirectory.prototype.getDocumentAt = function (index) {
                    return this.documents[index];
                };
                DCLibraryDirectory.prototype.getDirectoryAt = function (index) {
                    return this.directories[index];
                };
                DCLibraryDirectory.prototype.getDocumentById = function (id) {
                    if (this.documents.length > 0) {
                        var i = -1, l = this.documents.length;
                        while (i++ < l) {
                            if (this.documents[i].id == id)
                                return this.documents[i];
                        }
                    }
                    return null;
                };
                DCLibraryDirectory.prototype.getDirectoryById = function (id) {
                    if (this.directories.length > 0) {
                        var i = -1, l = this.directories.length;
                        while (i++ < l) {
                            if (this.directories[i].id == id)
                                return this.directories[i];
                        }
                    }
                    return null;
                };
                DCLibraryDirectory.prototype.sort = function () {
                    this.directories.sort(this.compareItem);
                    this.documents.sort(this.compareItem);
                };
                DCLibraryDirectory.prototype.compareItem = function (a, b) {
                    if (a.index != undefined && b.index != undefined) {
                        if (a.index < b.index)
                            return -1;
                        if (a.index > b.index)
                            return 1;
                        return 0;
                    }
                    else {
                        if (a.name < b.name)
                            return -1;
                        if (a.name > b.name)
                            return 1;
                        return 0;
                    }
                    //return 0;
                };
                Object.defineProperty(DCLibraryDirectory.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDirectory.prototype, "index", {
                    get: function () { return this._index; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDirectory.prototype, "name", {
                    get: function () { return this._name; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDirectory.prototype, "isProtected", {
                    get: function () { return this._protected; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDirectory.prototype, "numDocuments", {
                    get: function () { return this.documents.length; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDirectory.prototype, "numDirectories", {
                    get: function () { return this.directories.length; },
                    enumerable: true,
                    configurable: true
                });
                DCLibraryDirectory.fromJson = function (json) {
                    var directory = new DCLibraryDirectory(parseInt(json.id), json.index != undefined ? parseInt(json.index) : undefined, json.name, json.protected);
                    var documentsJson = json.document;
                    var directoriesJson = json.documents;
                    var i;
                    if (documentsJson != undefined) {
                        for (i = 0; i < documentsJson.length; i++) {
                            directory.addDocument(library.DCLibraryDocument.fromJson(documentsJson[i]));
                        }
                    }
                    if (directoriesJson != undefined) {
                        for (i = 0; i < directoriesJson.length; i++) {
                            directory.addDirectory(DCLibraryDirectory.fromJson(directoriesJson[i]));
                        }
                    }
                    directory.sort();
                    return directory;
                };
                return DCLibraryDirectory;
            }());
            library.DCLibraryDirectory = DCLibraryDirectory;
        })(library = building.library || (building.library = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var library;
        (function (library) {
            var DCLibraryDocument = (function () {
                function DCLibraryDocument(id, name, path, thumb) {
                    this._id = id;
                    this._name = name;
                    this._path = path;
                    this._thumb = thumb;
                }
                DCLibraryDocument.fromJson = function (json) {
                    var id = parseInt(json.id);
                    var name = json.name.toUpperCase(); // quick hack for current sorting method to work. TODO update sorting method to do proper case insensitive sorting
                    var path = json.path;
                    var thumb = json.thumb;
                    return new DCLibraryDocument(id, name, path, thumb);
                };
                Object.defineProperty(DCLibraryDocument.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDocument.prototype, "name", {
                    get: function () { return this._name; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDocument.prototype, "path", {
                    get: function () { return this._path; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDocument.prototype, "thumb", {
                    get: function () { return this._thumb; },
                    enumerable: true,
                    configurable: true
                });
                return DCLibraryDocument;
            }());
            library.DCLibraryDocument = DCLibraryDocument;
        })(library = building.library || (building.library = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var building;
    (function (building) {
        var library;
        (function (library) {
            var DCLibraryDocumentType = (function () {
                function DCLibraryDocumentType(id, name, color) {
                    this._id = id;
                    this._name = name;
                    this._color = color;
                }
                DCLibraryDocumentType.fromJson = function (json) {
                    return new DCLibraryDocumentType(parseInt(json.id), json.name, "#" + json.color);
                };
                Object.defineProperty(DCLibraryDocumentType.prototype, "id", {
                    get: function () { return this._id; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDocumentType.prototype, "name", {
                    get: function () { return this._name; },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DCLibraryDocumentType.prototype, "color", {
                    get: function () { return this._color; },
                    enumerable: true,
                    configurable: true
                });
                return DCLibraryDocumentType;
            }());
            library.DCLibraryDocumentType = DCLibraryDocumentType;
        })(library = building.library || (building.library = {}));
    })(building = daikincity.building || (daikincity.building = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var DCCore = (function (_super) {
        __extends(DCCore, _super);
        function DCCore() {
            var _this = _super.call(this) || this;
            _this.buildingAccess = null;
            _this.currentBuildingLoadIndex = 0;
            _this._currentBuilding = null;
            _this.defaultBuildingName = "";
            _this.defaultFloorName = "";
            _this.libraryOtherAccess = false;
            _this.welcomeTitle = "";
            _this.welcomeDescription = "";
            if (DCCore.instance != null)
                throw new Error("DCCore ** Singleton class, one instance only");
            DCCore.instance = _this;
            _this.buildingPaths = [];
            _this.buildings = [];
            _this.billboardPosters = [];
            _this.communicationsVideos = [];
            _this.systems = [];
            _this.isDevice = navigator.userAgent.match(/iP(ad|phone|od)|Android/) != null;
            _this.lightbox = new Lightbox(document.getElementById("lightbox"));
            _this.videoPlayer = new com.wearesmartcookie.video.SCVideoPlayer("#videoPlayer", "100%", "100%");
            _this.buildingAccess = {};
            _this.setDefaultAccess();
            return _this;
        }
        DCCore.prototype.load = function () {
            $.ajax(DCCore.CONFIG_URL, { dataType: "json", success: $.proxy(this.onConfigLoaded, this), error: $.proxy(this.onConfigLoadError, this) });
        };
        DCCore.prototype.onConfigLoadError = function () {
            this.dispatchEvent(new daikincity.events.DCErrorEvent(daikincity.events.DCEvent.CONFIG_LOAD_ERROR, "Error loading config"));
        };
        DCCore.prototype.onConfigLoaded = function (json) {
            var config = json.config;
            var paths = config.buildings.building;
            for (var i = 0; i < paths.length; i++) {
                this.buildingPaths.push(paths[i].path);
            }
            var billboardPostersJson = config.billboard.poster;
            for (i = 0; i < billboardPostersJson.length; i++) {
                this.billboardPosters.push(daikincity.billboard.DCBillboardPoster.fromJson(billboardPostersJson[i]));
            }
            var systemsJson = config.systems.system;
            for (i = 0; i < systemsJson.length; i++) {
                this.systems.push(daikincity.system.DCSystem.fromJson(systemsJson[i]));
            }
            var videosJson = config.communications.videos.video;
            for (i = 0; i < videosJson.length; i++) {
                this.communicationsVideos.push(daikincity.building.communications.DCCommunicationsVideo.fromJson(videosJson[i]));
            }
            this.welcomeTitle = config.home.title;
            this.welcomeDescription = config.home.bodytext;
            this.loadNextBuilding();
        };
        DCCore.prototype.loadNextBuilding = function () {
            if (this.currentBuildingLoadIndex >= this.buildingPaths.length) {
                this.onAllBuildingsLoaded();
                return;
            }
            $.ajax(this.buildingPaths[this.currentBuildingLoadIndex], { dataType: "json", success: $.proxy(this.onBuildingLoaded, this), error: $.proxy(this.onBuildingLoadError, this) });
        };
        DCCore.prototype.onBuildingLoaded = function (json) {
            var building = daikincity.building.DCBuilding.fromJson(json.building);
            this.buildings.push(building);
            this.currentBuildingLoadIndex++;
            this.loadNextBuilding();
        };
        DCCore.prototype.onBuildingLoadError = function () {
            this.currentBuildingLoadIndex++;
            this.loadNextBuilding();
        };
        DCCore.prototype.onAllBuildingsLoaded = function () {
            $.ajax("Account/DaikinCityAccess", { dataType: "json", type: "POST", success: $.proxy(this.onBuildingAccessLoaded, this), error: $.proxy(this.onBuildingAccessLoadError, this) });
        };
        DCCore.prototype.onBuildingAccessLoaded = function (json) {
            var i;
            for (i = 0; i < this.buildings.length; i++) {
                this.buildingAccess[this.buildings[i].id] = true;
            }
            this.setDefaultAccess();
            for (i = 0; i < json.length; i++) {
                var id = parseInt(json[i].id);
                if (id == 3) {
                    this.libraryOtherAccess = true;
                }
                else {
                    this.buildingAccess[this.mapAlansIdToBuildingId(id)] = true;
                }
            }
            this.loadCharts();
        };
        DCCore.prototype.setDefaultAccess = function () {
            this.buildingAccess[this.mapAlansIdToBuildingId(DCCore.ACCESS_LIBRARY)] = true;
            this.buildingAccess[this.mapAlansIdToBuildingId(DCCore.ACCESS_LIBRARY_OTHER)] = false;
            this.buildingAccess[this.mapAlansIdToBuildingId(DCCore.ACCESS_LOGISTICS_CENTER)] = false;
        };
        DCCore.prototype.isBuildingAvailable = function (buildingId) {
            if (this.buildingAccess[buildingId] == undefined)
                return true;
            return this.buildingAccess[buildingId];
        };
        DCCore.prototype.mapBuildingIdToAlansId = function (id) {
            switch (id) {
                case 3:
                    return DCCore.ACCESS_LIBRARY;
                case 12:
                    return DCCore.ACCESS_LOGISTICS_CENTER;
            }
            return id;
        };
        DCCore.prototype.mapAlansIdToBuildingId = function (id) {
            switch (id) {
                case DCCore.ACCESS_LIBRARY:
                    return 3;
                case DCCore.ACCESS_LOGISTICS_CENTER:
                    return 12;
            }
            return id;
        };
        DCCore.prototype.onBuildingAccessLoadError = function () {
            this.loadCharts();
        };
        DCCore.prototype.loadCharts = function () {
            var _this = this;
            google.load('visualization', '1.0', { 'packages': ['corechart'], callback: function () { return _this.onGoogleVisualisationLoaded(); } });
        };
        DCCore.prototype.onGoogleVisualisationLoaded = function () {
            this.parseHash();
            this.dispatchEvent(new daikincity.events.DCEvent(daikincity.events.DCEvent.CORE_READY));
        };
        DCCore.prototype.parseHash = function () {
            var hash = window.location.hash;
            if (hash.length > 0) {
                var matches = hash.match(/^#([A-Za-z0-9]+)-*([A-Za-z0-9]*)/);
                if (matches != null && matches.length > 0) {
                    this.defaultBuildingName = matches[1].toLowerCase();
                    this.defaultFloorName = matches.length > 2 ? matches[2].toLowerCase() : "";
                }
            }
        };
        DCCore.prototype.getBuildingByHashName = function (hashName) {
            var i = this.buildings.length;
            while (i--) {
                if (this.buildings[i].hashName == hashName)
                    return this.buildings[i];
            }
            return null;
        };
        DCCore.prototype.getBuildingById = function (id) {
            var i = this.buildings.length;
            while (i--) {
                if (this.buildings[i].id == id)
                    return this.buildings[i];
            }
            return null;
        };
        DCCore.prototype.getBuildingAt = function (index) {
            return this.buildings[index];
        };
        DCCore.prototype.changeBuilding = function (buildingId, playIntro) {
            this._currentBuilding = this.getBuildingById(buildingId);
            if (this.currentBuilding != null) {
                window.location.hash = this._currentBuilding.hashName;
                ga('send', 'pageview', { 'page': "daikincity/" + this._currentBuilding.hashName });
                this.dispatchEvent(new daikincity.events.DCBuildingChangeEvent(daikincity.events.DCBuildingChangeEvent.BUILDING_CHANGED, this.currentBuilding, playIntro));
            }
        };
        DCCore.prototype.getBillboardPosterAt = function (index) {
            return this.billboardPosters[index];
        };
        DCCore.prototype.getSystemById = function (id) {
            var i = this.systems.length;
            while (i--) {
                if (this.systems[i].id == id)
                    return this.systems[i];
            }
            return null;
        };
        Object.defineProperty(DCCore.prototype, "currentBuilding", {
            get: function () {
                return this._currentBuilding;
            },
            enumerable: true,
            configurable: true
        });
        DCCore.prototype.getCommunicationsVideoAt = function (index) {
            return this.communicationsVideos[index];
        };
        DCCore.prototype.getCommunicationsVideoById = function (id) {
            var i = this.communicationsVideos.length;
            while (i--) {
                if (this.communicationsVideos[i].id == id)
                    return this.communicationsVideos[i];
            }
            return null;
        };
        Object.defineProperty(DCCore, "I", {
            get: function () {
                if (DCCore.instance != null)
                    return DCCore.instance;
                return new DCCore();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DCCore.prototype, "numBuildings", {
            get: function () { return this.buildings.length; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DCCore.prototype, "numBillboardPosters", {
            get: function () { return this.billboardPosters.length; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DCCore.prototype, "numCommunicationsVideos", {
            get: function () { return this.communicationsVideos.length; },
            enumerable: true,
            configurable: true
        });
        // city access
        DCCore.ACCESS_LIBRARY = 1;
        DCCore.ACCESS_LOGISTICS_CENTER = 2;
        DCCore.ACCESS_LIBRARY_OTHER = 3;
        DCCore.CONFIG_URL = "daikincityweb/json/config.json";
        DCCore.instance = null;
        return DCCore;
    }(away.events.EventDispatcher));
    daikincity.DCCore = DCCore;
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var events;
    (function (events) {
        var DCBuildingChangeEvent = (function (_super) {
            __extends(DCBuildingChangeEvent, _super);
            function DCBuildingChangeEvent(type, building, playInto) {
                if (playInto === void 0) { playInto = true; }
                var _this = _super.call(this, type) || this;
                _this.building = building;
                _this.playIntro = playInto;
                return _this;
            }
            DCBuildingChangeEvent.BUILDING_CHANGED = "buildingChanged";
            return DCBuildingChangeEvent;
        }(away.events.Event));
        events.DCBuildingChangeEvent = DCBuildingChangeEvent;
    })(events = daikincity.events || (daikincity.events = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var events;
    (function (events) {
        var DCErrorEvent = (function (_super) {
            __extends(DCErrorEvent, _super);
            function DCErrorEvent(type, error) {
                var _this = _super.call(this, type) || this;
                _this.error = error;
                return _this;
            }
            DCErrorEvent.CONFIG_LOAD_ERROR = "configLoadError";
            return DCErrorEvent;
        }(away.events.Event));
        events.DCErrorEvent = DCErrorEvent;
    })(events = daikincity.events || (daikincity.events = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var events;
    (function (events) {
        var DCEvent = (function (_super) {
            __extends(DCEvent, _super);
            function DCEvent(type) {
                return _super.call(this, type) || this;
            }
            DCEvent.CORE_READY = "coreReady";
            DCEvent.LIBRARY_READY = "libraryReady";
            DCEvent.CONFIG_LOAD_ERROR = "configLoadError";
            return DCEvent;
        }(away.events.Event));
        events.DCEvent = DCEvent;
    })(events = daikincity.events || (daikincity.events = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var events;
    (function (events) {
        var DCFloorSelectedEvent = (function (_super) {
            __extends(DCFloorSelectedEvent, _super);
            function DCFloorSelectedEvent(type, floor) {
                var _this = _super.call(this, type) || this;
                _this.floor = floor;
                return _this;
            }
            DCFloorSelectedEvent.prototype.clone = function () {
                return new DCFloorSelectedEvent(this.type, this.floor);
            };
            DCFloorSelectedEvent.FLOOR_SELECTED = "floorSelected";
            return DCFloorSelectedEvent;
        }(away.events.Event));
        events.DCFloorSelectedEvent = DCFloorSelectedEvent;
    })(events = daikincity.events || (daikincity.events = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var events;
    (function (events) {
        var DCScenarioSelectEvent = (function (_super) {
            __extends(DCScenarioSelectEvent, _super);
            function DCScenarioSelectEvent(type, scenario) {
                var _this = _super.call(this, type) || this;
                _this.scenario = scenario;
                return _this;
            }
            DCScenarioSelectEvent.prototype.clone = function () {
                return new DCScenarioSelectEvent(this.type, this.scenario);
            };
            DCScenarioSelectEvent.SCENARIO_SELECTED = "scenarioSelected";
            return DCScenarioSelectEvent;
        }(away.events.Event));
        events.DCScenarioSelectEvent = DCScenarioSelectEvent;
    })(events = daikincity.events || (daikincity.events = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var events;
    (function (events) {
        var DCTimelineChangedEvent = (function (_super) {
            __extends(DCTimelineChangedEvent, _super);
            function DCTimelineChangedEvent(type, value) {
                var _this = _super.call(this, type) || this;
                _this.value = value;
                return _this;
            }
            DCTimelineChangedEvent.TIMELINE_CHANGED = "timelineChanged";
            return DCTimelineChangedEvent;
        }(away.events.Event));
        events.DCTimelineChangedEvent = DCTimelineChangedEvent;
    })(events = daikincity.events || (daikincity.events = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var system;
    (function (system) {
        var DCSystem = (function () {
            function DCSystem(id, name, description, image, icon) {
                this._id = id;
                this._name = name;
                this._description = description;
                this._image = image;
                this._icon = icon;
            }
            Object.defineProperty(DCSystem.prototype, "id", {
                get: function () { return this._id; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystem.prototype, "name", {
                get: function () { return this._name; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystem.prototype, "description", {
                get: function () { return this._description; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystem.prototype, "image", {
                get: function () { return this._image; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystem.prototype, "icon", {
                get: function () { return this._icon; },
                enumerable: true,
                configurable: true
            });
            DCSystem.fromJson = function (json) {
                var id = parseInt(json.id);
                var name = json.name;
                var description = json.description;
                description = description.replace(/\\n/g, "<br />");
                var image = json.image;
                var icon = json.icon;
                return new DCSystem(id, name, description, image, icon);
            };
            return DCSystem;
        }());
        system.DCSystem = DCSystem;
    })(system = daikincity.system || (daikincity.system = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var communications;
            (function (communications) {
                var DCCommunicationsCenterApplication = (function (_super) {
                    __extends(DCCommunicationsCenterApplication, _super);
                    function DCCommunicationsCenterApplication() {
                        var _this = _super.call(this, document.getElementById("communicationsCenter")) || this;
                        _this.populated = false;
                        _this.videoButtons = [];
                        _this.core = daikincity.DCCore.I;
                        return _this;
                    }
                    DCCommunicationsCenterApplication.prototype.show = function () {
                        this.populate();
                        $(this.screenElement).addClass("communications-center");
                        $(this.screenElement).hide();
                        $(this.screenElement).fadeIn(500);
                        _super.prototype.show.call(this);
                    };
                    DCCommunicationsCenterApplication.prototype.populate = function () {
                        var _this = this;
                        if (this.populated == true)
                            return;
                        var btnLocations = [
                            [21.4, 18.2],
                            [41.4, 18.2],
                            [61.4, 18.2],
                            [21.4, 38.25],
                            [41.4, 38.25],
                            [61.4, 38.25]
                        ];
                        for (var i = 0; i < this.core.numCommunicationsVideos; i++) {
                            var commsVideo = this.core.getCommunicationsVideoAt(i);
                            var btn = document.createElement("button");
                            btn.id = commsVideo.id.toString();
                            $(btn).addClass("communications-btn");
                            var img = document.createElement("img");
                            img.src = commsVideo.thumbnail;
                            btn.appendChild(img);
                            btn.onclick = function (e) { return _this.onButtonSelected(e); };
                            this.screenElement.appendChild(btn);
                            btn.style.left = btnLocations[i][0].toString() + "%";
                            btn.style.top = btnLocations[i][1].toString() + "%";
                        }
                        this.populated = true;
                    };
                    DCCommunicationsCenterApplication.prototype.onButtonSelected = function (e) {
                        var btn = e.currentTarget;
                        var commsVideo = this.core.getCommunicationsVideoById(parseInt(btn.id));
                        if (commsVideo.url.match(/^[a-zA-Z0-9-_]{11}$/) != null) {
                            this.showVideo(commsVideo);
                        }
                        else if (commsVideo.url.toLowerCase().indexOf("contact") != -1) {
                            openContactForm();
                        }
                        else {
                            // normal weblink
                            window.open(commsVideo.url, "_blank");
                        }
                    };
                    DCCommunicationsCenterApplication.prototype.showVideo = function (commsVideo) {
                        var div = document.createElement("div");
                        $(div).addClass("youtube-container");
                        var closeBtn = document.createElement("button");
                        $(closeBtn).addClass("youtube-close-btn");
                        div.appendChild(closeBtn);
                        var youtubeVideo = document.createElement("div");
                        $(youtubeVideo).addClass("youtube-video");
                        youtubeVideo.innerHTML = '<iframe width="100%" height="98%" src="//www.youtube.com/embed/' + commsVideo.url + '?rel=0&modestbranding=1&vq=hd720" frameborder="0" allowfullscreen></iframe>';
                        div.appendChild(youtubeVideo);
                        this.core.lightbox.bestFitRect.width = this.core.lightbox.maxSizeRect.width = 660;
                        this.core.lightbox.maxSizeRect.height = this.core.lightbox.maxSizeRect.height = 450;
                        this.core.lightbox.show(div, true);
                    };
                    return DCCommunicationsCenterApplication;
                }(ui.DCScreen));
                communications.DCCommunicationsCenterApplication = DCCommunicationsCenterApplication;
            })(communications = application.communications || (application.communications = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelRoomApplication = (function (_super) {
                    __extends(DCHotelRoomApplication, _super);
                    function DCHotelRoomApplication() {
                        var _this = _super.call(this, document.getElementById("hotelRoomApplication")) || this;
                        _this.currentFloor = null;
                        _this.currentScenario = null;
                        _this.currentScenarioIndex = 0;
                        _this.loaded = false;
                        _this.scenarios = [];
                        _this.scenarioInformation = new hotel.DCHotelScenarioInformation(_this);
                        _this.scenarioInformation.menu.addEventListener(daikincity.events.DCScenarioSelectEvent.SCENARIO_SELECTED, _this.onScenarioMenuItemSelected, _this);
                        _this.scenarioInformation.details.playBtn.onclick = function (e) { return _this.onPlayButtonClicked(e); };
                        _this.scenarioInformation.details.previousBtn.onclick = function (e) { return _this.onPreviousButtonClicked(e); };
                        _this.scenarioInformation.details.nextBtn.onclick = function (e) { return _this.onNextButtonClicked(e); };
                        _this.hotelView = new hotel.DCHotelRoomView();
                        _this.floorNavigationContainer = document.getElementById("hotelRoomFloorNavigation");
                        _this.floorMenu = new daikincity.ui.DCFloorMenu();
                        _this.floorMenu.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, _this.onFloorSelected, _this);
                        _this.floorNavigationContainer.appendChild(_this.floorMenu.element);
                        _this.timeline = new hotel.DCHotelRoomTimeline();
                        _this.timeline.addEventListener(daikincity.events.DCTimelineChangedEvent.TIMELINE_CHANGED, _this.onTimelineChanged, _this);
                        // hide right menu as not used
                        document.getElementById("hotelRoomSavings").style.display = "none";
                        return _this;
                    }
                    DCHotelRoomApplication.prototype.show = function (floor) {
                        if (floor === void 0) { floor = null; }
                        this.currentFloor = floor;
                        if (!this.loaded) {
                            this.load();
                        }
                        else {
                            this.onScenariosReady();
                        }
                        _super.prototype.show.call(this);
                        $("#scenarioInformation").width(0);
                        $("#scenarioInformation").animate({ width: "35%" }, 250);
                        $("#hotelRoomView").css("background-color", "#BDEBFF");
                        $("#hotelRoomView").animate({ backgroundColor: "#5DC7F1" }, 250);
                        $("#hotelRoomTimeline").height(0);
                        $("#hotelRoomTimeline").animate({ height: "27.5%" }, 250);
                        this.timeline.addListeners();
                    };
                    DCHotelRoomApplication.prototype.hide = function () {
                        this.timeline.removeListeners();
                        _super.prototype.hide.call(this);
                    };
                    DCHotelRoomApplication.prototype.load = function () {
                        $.ajax(DCHotelRoomApplication.HOTEL_ROOM_CONFIG, { dataType: "json", success: $.proxy(this.onConfigLoaded, this), error: $.proxy(this.onConfigLoadError, this) });
                    };
                    DCHotelRoomApplication.prototype.onConfigLoaded = function (json) {
                        var config = json.config;
                        var scenariosJson = config.scenarios.scenario;
                        for (var i = 0; i < scenariosJson.length; i++) {
                            this.scenarios.push(hotel.DCHotelRoomScenario.fromJson(scenariosJson[i]));
                        }
                        this.scenarioInformation.setScenarios();
                        this.onScenariosReady();
                        this.loaded = true;
                    };
                    DCHotelRoomApplication.prototype.onConfigLoadError = function () {
                        daikincity.trace("Error loading hotel room config");
                    };
                    DCHotelRoomApplication.prototype.onScenariosReady = function () {
                        this.setScenarioAt(0);
                        this.scenarioInformation.setState(hotel.DCHotelScenarioInformation.STATE_TUTORIAL);
                        this.timeline.value = 0;
                        if (this.currentFloor != null) {
                            this.setFloorMenu();
                        }
                    };
                    DCHotelRoomApplication.prototype.getScenerioById = function (id) {
                        var i = this.scenarios.length;
                        while (i--) {
                            if (this.scenarios[i].id == id)
                                return this.scenarios[i];
                        }
                        return null;
                    };
                    DCHotelRoomApplication.prototype.getScenarioAt = function (index) {
                        if (index < 0)
                            index = 0;
                        else if (index >= this.scenarios.length)
                            index = this.scenarios.length - 1;
                        return this.scenarios[index];
                    };
                    DCHotelRoomApplication.prototype.setScenario = function (scenario) {
                        this.currentScenario = scenario;
                        this.currentScenarioIndex = this.scenarios.indexOf(this.currentScenario);
                        this.hotelView.setScenario(this.currentScenario);
                        this.scenarioInformation.showDetails();
                    };
                    DCHotelRoomApplication.prototype.setScenarioAt = function (index) {
                        if (index < 0)
                            index = 0;
                        else if (index >= this.scenarios.length)
                            index = this.scenarios.length - 1;
                        this.setScenario(this.getScenarioAt(index));
                    };
                    DCHotelRoomApplication.prototype.onScenarioMenuItemSelected = function (e) {
                        this.setScenario(e.scenario);
                        this.timeline.value = this.currentScenario.timeFrom + (this.currentScenario.timeTo - this.currentScenario.timeFrom) * 0.5;
                        this.scenarioInformation.showDetails();
                    };
                    DCHotelRoomApplication.prototype.onFloorSelected = function (e) {
                        this.dispatchEvent(e.clone());
                    };
                    DCHotelRoomApplication.prototype.onTimelineChanged = function (e) {
                        if (this.timeline.dragging || this.timeline.animating) {
                            var scenario;
                            for (var i = 0; i < this.scenarios.length; i++) {
                                scenario = this.scenarios[i];
                                if (this.timeline.value >= scenario.timeFrom && this.timeline.value < scenario.timeTo) {
                                    this.setScenario(scenario);
                                    break;
                                }
                            }
                        }
                    };
                    DCHotelRoomApplication.prototype.nextHotspotScenario = function () {
                        for (var i = this.currentScenarioIndex + 1; i < this.scenarios.length; i++) {
                            if (this.scenarios[i].type == hotel.DCHotelRoomScenario.TYPE_HOTSPOT) {
                                return this.scenarios[i];
                            }
                        }
                        return null;
                    };
                    DCHotelRoomApplication.prototype.previousHotspotScenario = function () {
                        for (var i = this.currentScenarioIndex - 1; i >= 0; i--) {
                            if (this.scenarios[i].type == hotel.DCHotelRoomScenario.TYPE_HOTSPOT) {
                                return this.scenarios[i];
                            }
                        }
                        return null;
                    };
                    DCHotelRoomApplication.prototype.onPlayButtonClicked = function (e) {
                        var scenario = this.nextHotspotScenario();
                        if (scenario != null) {
                            this.timeline.animateTo(scenario.time);
                        }
                    };
                    DCHotelRoomApplication.prototype.onPreviousButtonClicked = function (e) {
                        var scenario = this.previousHotspotScenario();
                        if (scenario != null) {
                            this.setScenario(scenario);
                            this.timeline.value = scenario.time;
                            this.scenarioInformation.showDetails();
                        }
                    };
                    DCHotelRoomApplication.prototype.onNextButtonClicked = function (e) {
                        var scenario = this.nextHotspotScenario();
                        if (scenario != null) {
                            this.setScenario(scenario);
                            this.timeline.value = scenario.time;
                            this.scenarioInformation.showDetails();
                        }
                    };
                    DCHotelRoomApplication.prototype.setFloorMenu = function () {
                        if (this.currentFloor.building.numFloors > 1) {
                            this.floorMenu.populate(this.currentFloor.building, this.currentFloor.id);
                            // set buttons widths
                            var w = 100 / this.floorMenu.numButtons;
                            for (var i = 0; i < this.floorMenu.numButtons; i++) {
                                this.floorMenu.getButtonAt(i).element.style.width = w.toString() + "%";
                            }
                        }
                        else {
                            this.floorMenu.clear();
                        }
                    };
                    Object.defineProperty(DCHotelRoomApplication.prototype, "numScenarios", {
                        get: function () { return this.scenarios.length; },
                        enumerable: true,
                        configurable: true
                    });
                    DCHotelRoomApplication.HOTEL_ROOM_CONFIG = "daikincityweb/json/hotel_room.json";
                    return DCHotelRoomApplication;
                }(ui.DCScreen));
                hotel.DCHotelRoomApplication = DCHotelRoomApplication;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelRoomScenario = (function () {
                    function DCHotelRoomScenario(id, type, setTemperature, roomTemperature, timeFrom, timeTo, controllerActive, airflowEnabled, roomImage, overlayImage, animationImage, menuText, description, withControlValue, withoutControlValue) {
                        this.id = id;
                        this.type = type;
                        this.setTemperature = setTemperature;
                        this.roomTemperature = roomTemperature;
                        this.timeFrom = timeFrom;
                        this.timeTo = timeTo;
                        this.controllerActive = controllerActive;
                        this.airflowEnabled = airflowEnabled;
                        this.roomImage = roomImage;
                        this.overlayImage = overlayImage;
                        this.animationImage = animationImage;
                        this.menuText = menuText;
                        this.description = description;
                        this.withControlValue = withControlValue;
                        this.withoutControlValue = withoutControlValue;
                    }
                    Object.defineProperty(DCHotelRoomScenario.prototype, "time", {
                        get: function () {
                            return this.timeFrom + (this.timeTo - this.timeFrom) * 0.5;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    DCHotelRoomScenario.fromJson = function (json) {
                        var id = parseInt(json.id);
                        var type = json.type;
                        var setTemperature = parseFloat(json.temperature.set);
                        var roomTemperature = parseFloat(json.temperature.room);
                        var timeFrom = parseFloat(json.time.from);
                        var timeTo = parseFloat(json.time.to);
                        var controllerActive = json.controller.active.toLowerCase() == "true";
                        var airflowEnabled = json.controller.airflowEnabled.toLowerCase() == "true";
                        var roomImage = json.roomImage;
                        var overlayImage = json.overlayImage;
                        var animationImage = json.animationImage;
                        var menuText = json.menuText.replace(/degrees/gi, "&deg;");
                        var description = json.description.replace(/degrees/gi, "&deg;");
                        var withControlValue = parseFloat(json.withControlValue);
                        var withoutControlValue = parseFloat(json.withoutControlValue);
                        return new DCHotelRoomScenario(id, type, setTemperature, roomTemperature, timeFrom, timeTo, controllerActive, airflowEnabled, roomImage, overlayImage, animationImage, menuText, description, withControlValue, withoutControlValue);
                    };
                    DCHotelRoomScenario.TYPE_HOTSPOT = "hotspot";
                    DCHotelRoomScenario.TYPE_EMPTY = "empty";
                    return DCHotelRoomScenario;
                }());
                hotel.DCHotelRoomScenario = DCHotelRoomScenario;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelRoomTimeline = (function (_super) {
                    __extends(DCHotelRoomTimeline, _super);
                    function DCHotelRoomTimeline() {
                        var _this = _super.call(this) || this;
                        _this.dragging = false;
                        _this.animating = false;
                        _this.mouseX = 0;
                        _this.px = 0;
                        _this._value = 0;
                        _this.prevValue = 0;
                        _this.animDuration = 25;
                        _this.currentAnimStep = 0;
                        _this.timeTo = 0;
                        _this.timeStart = 0;
                        _this.element = document.getElementById("hotelRoomTimeline");
                        _this.handle = document.getElementById("timeline-handle");
                        _this.handleText = document.getElementById("handleText");
                        _this.timelineContainer = document.getElementById("timeline");
                        _this.sliderImg = document.getElementById("timeline-slider");
                        return _this;
                    }
                    DCHotelRoomTimeline.prototype.addListeners = function () {
                        var _this = this;
                        this.handle.addEventListener("touchstart", function (e) { return _this.onHandleMouseDown(e); });
                        document.body.addEventListener("touchmove", function (e) { return _this.onBodyMouseMove(e); });
                        document.body.addEventListener("touchend", function (e) { return _this.onBodyMouseUp(e); });
                        this.handle.addEventListener("mousedown", function (e) { return _this.onHandleMouseDown(e); });
                        document.body.addEventListener("mousemove", function (e) { return _this.onBodyMouseMove(e); });
                        document.body.addEventListener("mouseup", function (e) { return _this.onBodyMouseUp(e); });
                        document.body.addEventListener("mouseleave", function (e) { return _this.onBodyMouseUp(e); });
                        window.requestAnimationFrame(function () { return _this.update(); });
                    };
                    DCHotelRoomTimeline.prototype.removeListeners = function () {
                        var _this = this;
                        this.handle.removeEventListener("touchstart", function (e) { return _this.onHandleMouseDown(e); });
                        document.body.removeEventListener("touchmove", function (e) { return _this.onBodyMouseMove(e); });
                        document.body.removeEventListener("touchend", function (e) { return _this.onBodyMouseUp(e); });
                        this.handle.removeEventListener("mousedown", function (e) { return _this.onHandleMouseDown(e); });
                        document.body.removeEventListener("mousemove", function (e) { return _this.onBodyMouseMove(e); });
                        document.body.removeEventListener("mouseup", function (e) { return _this.onBodyMouseUp(e); });
                        document.body.removeEventListener("mouseleave", function (e) { return _this.onBodyMouseUp(e); });
                    };
                    DCHotelRoomTimeline.prototype.onHandleMouseDown = function (e) {
                        this.dragging = true;
                        e.preventDefault();
                        return false;
                    };
                    DCHotelRoomTimeline.prototype.onBodyMouseUp = function (e) {
                        this.dragging = false;
                    };
                    DCHotelRoomTimeline.prototype.onBodyMouseMove = function (e) {
                        this.mouseX = e.pageX;
                        //e.preventDefault();
                        return false;
                    };
                    DCHotelRoomTimeline.prototype.animateTo = function (time) {
                        if (this._value == time)
                            return;
                        this.currentAnimStep = 0;
                        this.timeStart = this._value;
                        this.timeTo = time - this.timeStart;
                        this.animating = true;
                    };
                    DCHotelRoomTimeline.prototype.update = function () {
                        var _this = this;
                        var r = this.sliderImg.getBoundingClientRect();
                        if (r.width == 0 && r.height == 0) {
                            // break out when not visible
                            this.removeListeners();
                            return;
                        }
                        if (this.dragging) {
                            this.px = this.mouseX - r.left;
                            if (this.px < 0)
                                this.px = 0;
                            if (this.px > r.width)
                                this.px = r.width;
                            this.value = this.px / r.width;
                        }
                        else if (this.animating) {
                            this.value = this.timeStart + (this.timeTo * (this.currentAnimStep / this.animDuration));
                            this.currentAnimStep++;
                            if (this.currentAnimStep > this.animDuration) {
                                this.animating = false;
                            }
                        }
                        var x = this.sliderImg.offsetLeft + ((this._value * this.sliderImg.offsetWidth) - this.handle.offsetWidth * 0.5);
                        this.setHandleX(x);
                        this.handle.style.top = (((this.timelineContainer.offsetHeight - this.handle.offsetHeight) * 0.5) + 18) + "px";
                        this.handleText.innerHTML = this.currentTime(30, false);
                        window.requestAnimationFrame(function () { return _this.update(); });
                    };
                    DCHotelRoomTimeline.prototype.setHandleX = function (x) {
                        this.handle.style.left = x + "px";
                    };
                    DCHotelRoomTimeline.prototype.currentTime = function (roundMinutes, format24Hour) {
                        if (roundMinutes === void 0) { roundMinutes = -1; }
                        if (format24Hour === void 0) { format24Hour = true; }
                        var hours = (12 + (this._value * 24)) % 24;
                        var mins = (hours - Math.floor(hours)) * 60;
                        if (roundMinutes > 0) {
                            mins = Math.round(mins / roundMinutes) * roundMinutes;
                            if (mins == 60) {
                                mins = 0;
                                if (++hours == 24)
                                    hours = 0;
                            }
                        }
                        if (!format24Hour) {
                            if (hours > 12) {
                                hours = ((hours + 11) % 12 + 1);
                            }
                        }
                        var hours_str = Math.floor(hours).toString();
                        if (hours_str.length == 1)
                            hours_str = "0" + hours_str;
                        var mins_str = Math.floor(mins).toString();
                        if (mins_str.length == 1)
                            mins_str = "0" + mins_str;
                        return hours_str + ":" + mins_str;
                    };
                    Object.defineProperty(DCHotelRoomTimeline.prototype, "value", {
                        get: function () { return this._value; },
                        set: function (v) {
                            this._value = v;
                            if (this.prevValue != this._value) {
                                this.prevValue = this._value;
                                this.dispatchEvent(new daikincity.events.DCTimelineChangedEvent(daikincity.events.DCTimelineChangedEvent.TIMELINE_CHANGED, this._value));
                            }
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DCHotelRoomTimeline;
                }(away.events.EventDispatcher));
                hotel.DCHotelRoomTimeline = DCHotelRoomTimeline;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelRoomView = (function () {
                    function DCHotelRoomView() {
                        this.currentScenario = null;
                        this.element = document.getElementById("hotelRoomView");
                        this.roomElement = document.getElementById("hotelRoomImage");
                        this.overlayElement = document.getElementById("hotelRoomOverlayImage");
                        this.animationElement = document.getElementById("hotelRoomAnimationImage");
                    }
                    DCHotelRoomView.prototype.setScenario = function (scenario) {
                        if (this.currentScenario == scenario)
                            return;
                        this.roomElement.src = scenario.roomImage;
                        this.overlayElement.src = scenario.overlayImage;
                        this.animationElement.src = scenario.animationImage;
                        this.currentScenario = scenario;
                        this.animationElement.style.visibility = this.currentScenario.animationImage.length > 0 ? "visible" : "hidden";
                        this.overlayElement.style.visibility = this.currentScenario.overlayImage.length > 0 ? "visible" : "hidden";
                    };
                    return DCHotelRoomView;
                }());
                hotel.DCHotelRoomView = DCHotelRoomView;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelScenarioDetails = (function (_super) {
                    __extends(DCHotelScenarioDetails, _super);
                    function DCHotelScenarioDetails() {
                        var _this = _super.call(this, document.getElementById("scenarioDetails")) || this;
                        _this.scenarioMenuBtn = document.getElementById("scenarioMenuBtn");
                        _this.scenarioDescription = document.getElementById("scenarioDescription");
                        _this.playBtn = document.getElementById("scenarioPlayBtn");
                        _this.previousBtn = document.getElementById("scenarioPreviousBtn");
                        _this.nextBtn = document.getElementById("scenarioNextBtn");
                        _this.temperatureRoomElement = document.getElementById("temperatureRoom");
                        _this.temperatureSetElement = document.getElementById("temperatureSet");
                        _this.controllerUnitElement = document.getElementById("controllerUnit");
                        _this.controllerOffElement = _this.controllerUnitElement.querySelector(".controller");
                        _this.controllerOnElement = _this.controllerUnitElement.querySelector(".controller-highlight");
                        return _this;
                    }
                    DCHotelScenarioDetails.prototype.show = function (scenario) {
                        if (scenario === void 0) { scenario = null; }
                        if (scenario != null) {
                            this.scenarioDescription.innerHTML = scenario.description;
                            if (scenario.controllerActive) {
                                if (scenario.roomTemperature > 0)
                                    this.temperatureRoomElement.innerHTML = scenario.roomTemperature.toString();
                                if (scenario.setTemperature > 0)
                                    this.temperatureSetElement.innerHTML = scenario.setTemperature.toString();
                                this.controllerOffElement.style.visibility = "hidden";
                                this.controllerOnElement.style.visibility = "visible";
                            }
                            else {
                                this.temperatureRoomElement.innerHTML = "--";
                                this.temperatureSetElement.innerHTML = "--";
                                this.controllerOffElement.style.visibility = "visible";
                                this.controllerOnElement.style.visibility = "hidden";
                            }
                        }
                        _super.prototype.show.call(this);
                    };
                    return DCHotelScenarioDetails;
                }(daikincity.ui.DCScreen));
                hotel.DCHotelScenarioDetails = DCHotelScenarioDetails;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelScenarioInformation = (function () {
                    function DCHotelScenarioInformation(hotelApplication) {
                        var _this = this;
                        this.hotelApplication = hotelApplication;
                        this.tutorial = new hotel.DCHotelScenarioTutorial();
                        this.tutorial.menuBtn.onclick = function (e) { return _this.onMenuButtonClicked(e); };
                        this.menu = new hotel.DCHotelScenarioMenu(this);
                        this.details = new hotel.DCHotelScenarioDetails();
                        this.details.scenarioMenuBtn.onclick = function (e) { return _this.scenarioMenuBtnClicked(e); };
                        this.setState(DCHotelScenarioInformation.STATE_TUTORIAL);
                    }
                    DCHotelScenarioInformation.prototype.setScenarios = function () {
                        for (var i = 0; i < this.hotelApplication.numScenarios; i++) {
                            var scenario = this.hotelApplication.getScenarioAt(i);
                            if (scenario.menuText.length > 0) {
                                this.menu.addScenario(scenario);
                            }
                        }
                    };
                    DCHotelScenarioInformation.prototype.setState = function (toState) {
                        this.state = toState;
                        this.hideAll();
                        switch (this.state) {
                            case DCHotelScenarioInformation.STATE_TUTORIAL:
                                this.tutorial.show();
                                break;
                            case DCHotelScenarioInformation.STATE_MENU:
                                this.menu.show();
                                break;
                            case DCHotelScenarioInformation.STATE_DETAILS:
                                this.details.show(this.hotelApplication.currentScenario);
                                break;
                        }
                    };
                    DCHotelScenarioInformation.prototype.hideAll = function () {
                        this.tutorial.hide();
                        this.menu.hide();
                        this.details.hide();
                    };
                    DCHotelScenarioInformation.prototype.showDetails = function () {
                        this.setState(DCHotelScenarioInformation.STATE_DETAILS);
                    };
                    DCHotelScenarioInformation.prototype.onMenuButtonClicked = function (e) {
                        this.setState(DCHotelScenarioInformation.STATE_MENU);
                    };
                    DCHotelScenarioInformation.prototype.scenarioMenuBtnClicked = function (e) {
                        this.setState(DCHotelScenarioInformation.STATE_MENU);
                    };
                    DCHotelScenarioInformation.STATE_TUTORIAL = "stateTutorial";
                    DCHotelScenarioInformation.STATE_MENU = "stateMenu";
                    DCHotelScenarioInformation.STATE_DETAILS = "stateDetails";
                    return DCHotelScenarioInformation;
                }());
                hotel.DCHotelScenarioInformation = DCHotelScenarioInformation;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelScenarioMenu = (function (_super) {
                    __extends(DCHotelScenarioMenu, _super);
                    function DCHotelScenarioMenu(info) {
                        var _this = _super.call(this, document.getElementById("scenarioMenu")) || this;
                        _this.info = info;
                        _this.scenarioOptions = document.getElementById("scenarioOptions");
                        return _this;
                    }
                    DCHotelScenarioMenu.prototype.addScenario = function (scenario) {
                        var _this = this;
                        var li = document.createElement("li");
                        $(li).addClass("list-style-unchecked");
                        var btn = document.createElement("button");
                        btn.id = scenario.id.toString();
                        btn.onclick = function (e) { return _this.onScenarioSelected(e); };
                        var span = document.createElement("span");
                        span.innerHTML = scenario.menuText;
                        btn.appendChild(span);
                        li.appendChild(btn);
                        this.scenarioOptions.appendChild(li);
                    };
                    DCHotelScenarioMenu.prototype.onScenarioSelected = function (e) {
                        var element = e.currentTarget;
                        this.dispatchEvent(new daikincity.events.DCScenarioSelectEvent(daikincity.events.DCScenarioSelectEvent.SCENARIO_SELECTED, this.info.hotelApplication.getScenerioById(parseInt(element.id))));
                    };
                    return DCHotelScenarioMenu;
                }(daikincity.ui.DCScreen));
                hotel.DCHotelScenarioMenu = DCHotelScenarioMenu;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var hotel;
            (function (hotel) {
                var DCHotelScenarioTutorial = (function (_super) {
                    __extends(DCHotelScenarioTutorial, _super);
                    function DCHotelScenarioTutorial() {
                        var _this = _super.call(this, document.getElementById("scenarioTutorial")) || this;
                        _this.menuBtn = document.getElementById("hotelScenarioSelectBtn");
                        return _this;
                    }
                    return DCHotelScenarioTutorial;
                }(daikincity.ui.DCScreen));
                hotel.DCHotelScenarioTutorial = DCHotelScenarioTutorial;
            })(hotel = application.hotel || (application.hotel = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var library;
            (function (library) {
                var DCLibraryApplication = (function (_super) {
                    __extends(DCLibraryApplication, _super);
                    function DCLibraryApplication() {
                        var _this = _super.call(this, document.getElementById("libraryApplication")) || this;
                        _this.menuClass = "library-menu";
                        _this.menu = new library.DCLibraryMenu(_this);
                        _this.documentsMenu = new library.DCLibraryDocumentsMenu(_this);
                        _this.documentsMenu.hide();
                        _this.setState(DCLibraryApplication.STATE_MENU);
                        _this.libraryCore = daikincity.building.library.DCLibraryCore.I;
                        return _this;
                    }
                    DCLibraryApplication.prototype.show = function () {
                        $(this.screenElement).addClass(this.menuClass);
                        $(this.screenElement).hide();
                        $(this.screenElement).fadeIn(500);
                        if (!this.libraryCore.loaded) {
                            this.libraryCore.addEventListener(daikincity.events.DCEvent.LIBRARY_READY, this.onLibraryReady, this);
                            this.libraryCore.load();
                        }
                        else {
                            this.showLibrary();
                        }
                        _super.prototype.show.call(this);
                    };
                    DCLibraryApplication.prototype.onLibraryReady = function (e) {
                        this.libraryCore.removeEventListener(daikincity.events.DCEvent.LIBRARY_READY, this.onLibraryReady, this);
                        this.menu.populate();
                        this.showLibrary();
                    };
                    DCLibraryApplication.prototype.showLibrary = function () {
                        this.setState(DCLibraryApplication.STATE_MENU);
                    };
                    DCLibraryApplication.prototype.setState = function (toState) {
                        this.state = toState;
                        this.menu.hide();
                        this.documentsMenu.hide();
                        switch (this.state) {
                            case DCLibraryApplication.STATE_MENU:
                                this.menu.show();
                                break;
                            case DCLibraryApplication.STATE_DOCUMENTS_MENU:
                                this.documentsMenu.show();
                                break;
                        }
                    };
                    DCLibraryApplication.prototype.showDirectory = function (directory) {
                        this.setState(DCLibraryApplication.STATE_DOCUMENTS_MENU);
                        this.documentsMenu.showDirectory(directory);
                    };
                    DCLibraryApplication.STATE_MENU = "menu";
                    DCLibraryApplication.STATE_DOCUMENTS_MENU = "documentsMenu";
                    return DCLibraryApplication;
                }(ui.DCScreen));
                library.DCLibraryApplication = DCLibraryApplication;
            })(library = application.library || (application.library = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var library;
            (function (library) {
                var DCLibraryBookDirectory = (function () {
                    function DCLibraryBookDirectory(directory) {
                        this.directory = directory;
                        this.element = document.createElement("button");
                        this.element.id = this.directory.id.toString();
                        $(this.element).addClass("book");
                        $(this.element).addClass("book-directory");
                        var img = document.createElement("img");
                        img.src = "daikincityweb/images/buildings/library/library-directory.png";
                        this.element.appendChild(img);
                        var numChildrenElement = document.createElement("p");
                        $(numChildrenElement).addClass("library-num-children");
                        numChildrenElement.innerHTML = (directory.numDirectories + directory.numDocuments).toString() + " items";
                        this.element.appendChild(numChildrenElement);
                        var titleElement = document.createElement("p");
                        $(titleElement).addClass("library-directory-title");
                        titleElement.innerHTML = directory.name;
                        this.element.appendChild(titleElement);
                    }
                    return DCLibraryBookDirectory;
                }());
                library.DCLibraryBookDirectory = DCLibraryBookDirectory;
            })(library = application.library || (application.library = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var library;
            (function (library) {
                var DCLibraryBookDocument = (function () {
                    function DCLibraryBookDocument(doc) {
                        var _this = this;
                        this.document = doc;
                        this.element = document.createElement("a");
                        this.element.href = this.document.path;
                        this.element.target = "_blank";
                        $(this.element).addClass("book");
                        $(this.element).addClass("book-document");
                        this.imgElement = document.createElement("img");
                        this.imgElement.onerror = function () { return _this.onImageLoadError(); };
                        this.imgElement.src = this.document.thumb.length ? this.document.thumb : this.getThumb();
                        var titleContainerElement = document.createElement("div");
                        $(titleContainerElement).addClass("book-document-title-container");
                        this.element.appendChild(titleContainerElement);
                        if (this.document.thumb.length == 0) {
                            titleContainerElement.style.backgroundImage = "url(/daikincityweb/images/buildings/library/download-icon.png)";
                        }
                        var titleElement = document.createElement("p");
                        titleElement.innerHTML = doc.name;
                        titleContainerElement.appendChild(titleElement);
                        this.element.appendChild(this.imgElement);
                    }
                    DCLibraryBookDocument.prototype.getThumb = function () {
                        var ext = this.document.path.substr(this.document.path.lastIndexOf(".") + 1).toLowerCase();
                        switch (ext) {
                            case "jpg":
                            case "gif":
                            case "png":
                                return DCLibraryBookDocument.IMAGE_THUMB;
                            case "doc":
                            case "docx":
                                return DCLibraryBookDocument.WORD_DOC_THUMB;
                            case "ppt":
                            case "pptx":
                            case "pps":
                                return DCLibraryBookDocument.POWERPOINT_THUMB;
                            case "xls":
                            case "xlsx":
                                return DCLibraryBookDocument.EXCEL_THUMB;
                            case "zip":
                            case "7z":
                            case "rar":
                                return DCLibraryBookDocument.ZIP_THUMB;
                        }
                        // check is url
                        if (this.document.path.search(/^(ftp|http|https):\/\//) > -1) {
                            return DCLibraryBookDocument.URL_THUMB;
                        }
                        return DCLibraryBookDocument.DOWNLOAD_THUMB;
                    };
                    DCLibraryBookDocument.prototype.onImageLoadError = function () {
                        this.imgElement.src = DCLibraryBookDocument.DEFAULT_THUMB;
                    };
                    DCLibraryBookDocument.DEFAULT_THUMB = "daikincityweb/images/buildings/library/default-book-thumb.jpg";
                    DCLibraryBookDocument.DOWNLOAD_THUMB = "daikincityweb/images/buildings/library/library-download.png";
                    DCLibraryBookDocument.IMAGE_THUMB = "daikincityweb/images/buildings/library/library-image-thumb.png";
                    DCLibraryBookDocument.WORD_DOC_THUMB = "daikincityweb/images/buildings/library/library-word-document-thumb.png";
                    DCLibraryBookDocument.POWERPOINT_THUMB = "daikincityweb/images/buildings/library/library-powerpoint-thumb.png";
                    DCLibraryBookDocument.EXCEL_THUMB = "daikincityweb/images/buildings/library/library-excel-thumb.png";
                    DCLibraryBookDocument.ZIP_THUMB = "daikincityweb/images/buildings/library/library-zip-thumb.png";
                    DCLibraryBookDocument.URL_THUMB = "daikincityweb/images/buildings/library/library-url-thumb.png";
                    return DCLibraryBookDocument;
                }());
                library.DCLibraryBookDocument = DCLibraryBookDocument;
            })(library = application.library || (application.library = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var library;
            (function (library) {
                var DCLibraryDocumentsMenu = (function (_super) {
                    __extends(DCLibraryDocumentsMenu, _super);
                    function DCLibraryDocumentsMenu(libraryApplication) {
                        var _this = _super.call(this, document.getElementById("libraryDocumentsMenu")) || this;
                        _this.currentDirectory = null;
                        _this.targetY = 0;
                        _this.speedY = 0;
                        _this.dragging = false;
                        _this.touchY = 0;
                        _this.touchPrevY = 0;
                        _this.libraryApplication = libraryApplication;
                        _this.booksContainerElement = document.getElementById("booksContainer");
                        _this.tabsMenuElement = document.getElementById("libraryTabsMenu");
                        _this.directoryTitleElement = document.getElementById("libraryDirectoryTitle");
                        _this.breadCrumbsElement = document.getElementById("libraryBreadcrumbs");
                        _this.shelvesContainerElement = document.getElementById("libraryShelves");
                        _this.shelvesWrapperElement = document.getElementById("libraryShelvesWrapper");
                        _this.libraryCore = daikincity.building.library.DCLibraryCore.I;
                        _this.books = [];
                        return _this;
                    }
                    DCLibraryDocumentsMenu.prototype.show = function () {
                        var _this = this;
                        if (this.tabsMenuElement.innerHTML.length == 0) {
                            this.createTabs();
                        }
                        _super.prototype.show.call(this);
                        if (daikincity.DCCore.I.isDevice) {
                            this.shelvesWrapperElement.addEventListener("touchstart", function (e) { return _this.onScrollStart(e); });
                            this.shelvesWrapperElement.addEventListener("touchmove", function (e) { return _this.onScrollMove(e); });
                            this.shelvesWrapperElement.addEventListener("touchend", function (e) { return _this.onScrollEnd(e); });
                            requestAnimationFrame(function () { return _this.updateScroll(); });
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.onScrollStart = function (e) {
                        this.touchY = this.touchPrevY = e.touches[0].pageY;
                        this.dragging = true;
                    };
                    DCLibraryDocumentsMenu.prototype.onScrollMove = function (e) {
                        this.touchY = e.touches[0].pageY;
                    };
                    DCLibraryDocumentsMenu.prototype.onScrollEnd = function (e) {
                        this.dragging = false;
                    };
                    DCLibraryDocumentsMenu.prototype.updateScroll = function () {
                        var _this = this;
                        if (this.libraryApplication.visible) {
                            if (this.dragging) {
                                this.speedY += (this.touchPrevY - this.touchY) * 0.125;
                                this.touchPrevY = this.touchY;
                            }
                            this.targetY += this.speedY;
                            if (this.targetY < 0) {
                                this.targetY = 0;
                                this.speedY = 0;
                            }
                            else if (this.targetY > this.shelvesWrapperElement.scrollHeight - 400) {
                                this.targetY = this.shelvesWrapperElement.scrollHeight - 400;
                                this.speedY = 0;
                            }
                            this.speedY *= 0.96;
                            this.shelvesWrapperElement.scrollTop += (this.targetY - this.shelvesWrapperElement.scrollTop) / 6;
                            requestAnimationFrame(function () { return _this.updateScroll(); });
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.showDirectory = function (directory) {
                        this.shelvesWrapperElement.scrollTop = 0;
                        this.targetY = 0;
                        this.speedY = 0;
                        this.touchPrevY = this.touchY = 0;
                        this.currentDirectory = directory;
                        this.highlightTab();
                        this.createBreadcrumbs();
                        this.directoryTitleElement.innerHTML = this.currentDirectory.name;
                        this.createBooks();
                    };
                    DCLibraryDocumentsMenu.prototype.createBreadcrumbs = function () {
                        var _this = this;
                        this.breadCrumbsElement.innerHTML = "<p>" + this.currentDirectory.name + "</p>";
                        var parentDirectory = this.currentDirectory.parentDirectory;
                        while (parentDirectory != null) {
                            var btn = document.createElement("button");
                            btn.innerHTML = "<span>" + parentDirectory.name + " > </span>";
                            btn.id = parentDirectory.id.toString();
                            $(btn).addClass("library-breadcrumb-btn");
                            btn.onclick = function (e) { return _this.onDirectorySelected(e); };
                            this.breadCrumbsElement.insertBefore(btn, this.breadCrumbsElement.firstChild);
                            parentDirectory = parentDirectory.parentDirectory;
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.createBooks = function () {
                        var _this = this;
                        if (this.currentDirectory == null)
                            return;
                        this.clear();
                        var i, c = 0, book, shelfElement;
                        var numShelves = 0;
                        // directories
                        for (i = 0; i < this.currentDirectory.numDirectories; i++) {
                            var dir = this.currentDirectory.getDirectoryAt(i);
                            if (!this.libraryCore.authenticated == true && dir.isProtected)
                                continue;
                            if (dir.numDirectories + dir.numDocuments > 0) {
                                if (c++ % 5 == 0) {
                                    shelfElement = this.createShelf();
                                    this.shelvesContainerElement.appendChild(shelfElement);
                                    numShelves++;
                                }
                                book = new library.DCLibraryBookDirectory(dir);
                                shelfElement.appendChild(book.element);
                                book.element.onclick = function (e) { return _this.onDirectorySelected(e); };
                                this.books.push(book);
                            }
                        }
                        // documents
                        for (i = 0; i < this.currentDirectory.numDocuments; i++) {
                            if (c++ % 5 == 0) {
                                shelfElement = this.createShelf();
                                this.shelvesContainerElement.appendChild(shelfElement);
                                numShelves++;
                            }
                            book = new library.DCLibraryBookDocument(this.currentDirectory.getDocumentAt(i));
                            shelfElement.appendChild(book.element);
                            this.books.push(book);
                        }
                        // fill blank space with empty shelves
                        if (numShelves < 3) {
                            while (3 - numShelves++) {
                                shelfElement = this.createShelf();
                                this.shelvesContainerElement.appendChild(shelfElement);
                            }
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.createShelf = function () {
                        var shelf = document.createElement("div");
                        $(shelf).addClass("library-shelf");
                        var img = document.createElement("img");
                        img.src = "daikincityweb/images/buildings/library/library-shelf.jpg";
                        shelf.appendChild(img);
                        return shelf;
                    };
                    DCLibraryDocumentsMenu.prototype.createTabs = function () {
                        this.tabBtns = [];
                        var w = 100 / (this.libraryCore.rootDirectory.numDirectories + 1);
                        var directory;
                        for (var i = -1; i < this.libraryCore.rootDirectory.numDirectories; i++) {
                            if (i == -1) {
                                directory = this.libraryCore.rootDirectory;
                            }
                            else {
                                directory = this.libraryCore.rootDirectory.getDirectoryAt(i);
                            }
                            if (!this.libraryCore.authenticated && directory.isProtected)
                                continue;
                            var tabBtn = document.createElement("button");
                            tabBtn.style.width = w + "%";
                            if (i == this.libraryCore.rootDirectory.numDirectories - 1) {
                                tabBtn.style.width = "-webkit-calc(" + w + "% - " + ((this.libraryCore.rootDirectory.numDirectories + 1) * 2) + "px)";
                                tabBtn.style.width = "calc(" + w + "% - " + ((this.libraryCore.rootDirectory.numDirectories + 1) * 2) + "px)";
                                tabBtn.style.marginRight = "0"; // ipad fix
                            }
                            tabBtn.id = directory.id.toString();
                            $(tabBtn).addClass(DCLibraryDocumentsMenu.LIBRARY_TAB_CLASS);
                            tabBtn.innerHTML = "<span>" + directory.name + "</span>";
                            $(tabBtn).on("click touchend", $.proxy(this.onDirectorySelected, this));
                            this.tabsMenuElement.appendChild(tabBtn);
                            this.tabBtns.push(tabBtn);
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.highlightTab = function () {
                        var highlight = false, id;
                        for (var i = 0; i < this.tabBtns.length; i++) {
                            var tabBtn = this.tabBtns[i];
                            id = parseInt(tabBtn.id);
                            highlight = this.libraryCore.hasParent(this.currentDirectory, this.libraryCore.directoriesDict[id], true);
                            if (highlight == true) {
                                if (!$(tabBtn).hasClass(DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS)) {
                                    $(tabBtn).addClass(DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS);
                                }
                            }
                            else {
                                $(tabBtn).removeClass(DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS);
                            }
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.onDirectorySelected = function (e) {
                        var element = e.currentTarget;
                        var id = parseInt(element.id);
                        if (id == 1) {
                            this.libraryApplication.setState(library.DCLibraryApplication.STATE_MENU);
                        }
                        else {
                            this.showDirectory(this.libraryCore.directoriesDict[id]);
                        }
                    };
                    DCLibraryDocumentsMenu.prototype.clear = function () {
                        while (this.shelvesContainerElement.children.length) {
                            this.shelvesContainerElement.removeChild(this.shelvesContainerElement.firstChild);
                        }
                    };
                    DCLibraryDocumentsMenu.LIBRARY_TAB_CLASS = "library-tab-btn";
                    DCLibraryDocumentsMenu.LIBRARY_TAB_HIGHLIGHT_CLASS = "library-tab-btn-highlight";
                    return DCLibraryDocumentsMenu;
                }(ui.DCScreen));
                library.DCLibraryDocumentsMenu = DCLibraryDocumentsMenu;
            })(library = application.library || (application.library = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var library;
            (function (library_1) {
                var DCLibraryHotspot = (function () {
                    function DCLibraryHotspot(directory) {
                        this.directory = directory;
                        this.element = document.createElement("button");
                        this.element.id = this.directory.id.toString();
                        $(this.element).addClass("category-hotspot");
                        var span = document.createElement("span");
                        span.innerHTML = this.directory.name;
                        this.element.appendChild(span);
                    }
                    return DCLibraryHotspot;
                }());
                library_1.DCLibraryHotspot = DCLibraryHotspot;
            })(library = application.library || (application.library = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="../../DCScreen.ts" />
/// <reference path="DCLibraryHotspot.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var library;
            (function (library) {
                var lib = daikincity.building.library;
                var DCLibraryMenu = (function (_super) {
                    __extends(DCLibraryMenu, _super);
                    function DCLibraryMenu(libraryApplication) {
                        var _this = _super.call(this, document.getElementById("libraryMenu")) || this;
                        _this.libraryApplication = libraryApplication;
                        _this.libraryCore = lib.DCLibraryCore.I;
                        _this.categoryHotspots = [];
                        return _this;
                    }
                    DCLibraryMenu.prototype.populate = function () {
                        var columnPositions = [5.5, 29.8, 58.5, 82.75];
                        var i;
                        var c = 0;
                        for (i = 0; i < this.libraryCore.rootDirectory.numDirectories; i++) {
                            var directory = this.libraryCore.rootDirectory.getDirectoryAt(i);
                            if (!this.libraryCore.authenticated && directory.isProtected)
                                continue;
                            var hotspot = new library.DCLibraryHotspot(directory);
                            hotspot.element.style.left = columnPositions[Math.floor(c % columnPositions.length)] + "%";
                            hotspot.element.style.top = 42 + (Math.floor(c / columnPositions.length) * 13) + "%";
                            $(hotspot.element).on("click touchend", $.proxy(this.onHotspotSelected, this));
                            this.screenElement.appendChild(hotspot.element);
                            c++;
                        }
                    };
                    DCLibraryMenu.prototype.onHotspotSelected = function (e) {
                        e.preventDefault();
                        var element = e.currentTarget;
                        this.libraryApplication.showDirectory(this.libraryCore.rootDirectory.getDirectoryById(parseInt(element.id)));
                    };
                    return DCLibraryMenu;
                }(ui.DCScreen));
                library.DCLibraryMenu = DCLibraryMenu;
            })(library = application.library || (application.library = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var residence;
            (function (residence) {
                var DCResidenceApplication = (function (_super) {
                    __extends(DCResidenceApplication, _super);
                    function DCResidenceApplication() {
                        var _this = _super.call(this, document.getElementById("residenceApplication")) || this;
                        _this.homeScreen = new residence.DCResidenceHomeScreen();
                        _this.homeScreen.refreshBtn.onclick = function (e) { return _this.onRefreshButtonClicked(e); };
                        _this.homeScreen.nextBtn.onclick = function (e) { return _this.onNextButtonClicked(e); };
                        _this.systemScreen = new residence.DCResidenceSystemScreen();
                        _this.systemScreen.refreshBtn.onclick = function (e) { return _this.onRefreshButtonClicked(e); };
                        _this.systemScreen.nextBtn.onclick = function (e) { return _this.onNextButtonClicked(e); };
                        _this.systemScreen.previousBtn.onclick = function (e) { return _this.onPreviousButtonClicked(e); };
                        _this.ratesScreen = new residence.DCResidenceRatesScreen();
                        _this.ratesScreen.refreshBtn.onclick = function (e) { return _this.onRefreshButtonClicked(e); };
                        _this.ratesScreen.nextBtn.onclick = function (e) { return _this.onNextButtonClicked(e); };
                        _this.ratesScreen.previousBtn.onclick = function (e) { return _this.onPreviousButtonClicked(e); };
                        _this.savingsScreen = new residence.DCResidenceSavingsScreen();
                        _this.savingsScreen.refreshBtn.onclick = function (e) { return _this.onRefreshButtonClicked(e); };
                        _this.savingsScreen.previousBtn.onclick = function (e) { return _this.onPreviousButtonClicked(e); };
                        _this.screens = [];
                        _this.screens.push(_this.homeScreen);
                        _this.screens.push(_this.systemScreen);
                        _this.screens.push(_this.ratesScreen);
                        _this.screens.push(_this.savingsScreen);
                        _this.indicatorsContainer = document.getElementById("residenceIndicatorContainer");
                        _this.setState(DCResidenceApplication.STATE_ABOUT_HOME);
                        return _this;
                    }
                    DCResidenceApplication.prototype.setState = function (toState) {
                        this.state = toState;
                        this.hideAll();
                        switch (this.state) {
                            case DCResidenceApplication.STATE_ABOUT_HOME:
                                this.currentScreen = this.homeScreen;
                                break;
                            case DCResidenceApplication.STATE_ABOUT_SYSTEM:
                                this.currentScreen = this.systemScreen;
                                break;
                            case DCResidenceApplication.STATE_RATES:
                                this.currentScreen = this.ratesScreen;
                                break;
                            case DCResidenceApplication.STATE_SAVINGS:
                                this.currentScreen = this.savingsScreen;
                                break;
                        }
                        this.currentScreen.show();
                        this.createIndicators();
                    };
                    DCResidenceApplication.prototype.onRefreshButtonClicked = function (e) {
                        this.currentScreen.refresh();
                    };
                    DCResidenceApplication.prototype.onNextButtonClicked = function (e) {
                        this.nextScreen();
                    };
                    DCResidenceApplication.prototype.onPreviousButtonClicked = function (e) {
                        this.previousScreen();
                    };
                    DCResidenceApplication.prototype.nextScreen = function () {
                        var currentIndex = this.screens.indexOf(this.currentScreen);
                        this.toScreen(currentIndex + 1);
                    };
                    DCResidenceApplication.prototype.previousScreen = function () {
                        var currentIndex = this.screens.indexOf(this.currentScreen);
                        this.toScreen(currentIndex - 1);
                    };
                    DCResidenceApplication.prototype.toScreen = function (index) {
                        if (index >= this.screens.length)
                            index = 0;
                        else if (index < 0)
                            index = this.screens.length - 1;
                        this.currentScreen = this.screens[index];
                        this.hideAll();
                        this.currentScreen.show();
                        this.createIndicators();
                    };
                    DCResidenceApplication.prototype.createIndicators = function () {
                        this.indicatorsContainer.innerHTML = "";
                        for (var i = 0; i < this.screens.length; i++) {
                            var indicator = document.createElement("div");
                            $(indicator).addClass("residenceIndicator");
                            if (this.screens[i] == this.currentScreen)
                                $(indicator).addClass("residenceIndicatorSelected");
                            this.indicatorsContainer.appendChild(indicator);
                        }
                    };
                    DCResidenceApplication.prototype.show = function () {
                        _super.prototype.show.call(this);
                        this.setState(DCResidenceApplication.STATE_ABOUT_HOME);
                    };
                    DCResidenceApplication.prototype.hideAll = function () {
                        for (var i = 0; i < this.screens.length; i++) {
                            this.screens[i].hide();
                        }
                    };
                    DCResidenceApplication.RESIDENCE_IMAGE = "daikincityweb/images/residence.jpg";
                    DCResidenceApplication.STATE_ABOUT_HOME = "aboutHome";
                    DCResidenceApplication.STATE_ABOUT_SYSTEM = "aboutSystem";
                    DCResidenceApplication.STATE_RATES = "aboutRates";
                    DCResidenceApplication.STATE_SAVINGS = "aboutSavings";
                    return DCResidenceApplication;
                }(daikincity.ui.DCScreen));
                residence.DCResidenceApplication = DCResidenceApplication;
            })(residence = application.residence || (application.residence = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var residence;
            (function (residence) {
                var DCResidenceHomeScreen = (function (_super) {
                    __extends(DCResidenceHomeScreen, _super);
                    function DCResidenceHomeScreen() {
                        var _this = _super.call(this, document.getElementById("residenceAboutHome")) || this;
                        _this.homeSizeSelect = document.getElementById("homeSizeSelect");
                        _this.homeLocationSelect = document.getElementById("homeLocationSelect");
                        _this.homeBuiltSelect = document.getElementById("homeBuiltSelect");
                        _this.homeSystemInstalledSelect = document.getElementById("homeSystemInstalledSelect");
                        _this.nextBtn = document.getElementById("homeNextBtn");
                        _this.refreshBtn = document.getElementById("homeRefreshBtn");
                        _this.homeSliderValueElement = document.getElementById("homeSliderValue");
                        _this.homeSizeSlider = new Slider("homeSizeSlider");
                        _this.homeSizeSlider.element.addEventListener("change", function () { return _this.onHomeSizeSliderChanged(); });
                        _this.homeSizeSlider.highlightElement = document.getElementById("homeSizeHighlight");
                        return _this;
                    }
                    DCResidenceHomeScreen.prototype.refresh = function () {
                    };
                    DCResidenceHomeScreen.prototype.onHomeSizeSliderChanged = function () {
                        this.homeSliderValueElement.innerHTML = this.homeSizeSlider.value().toString();
                    };
                    DCResidenceHomeScreen.prototype.show = function () {
                        _super.prototype.show.call(this);
                        this.homeSizeSlider.onResize();
                    };
                    Object.defineProperty(DCResidenceHomeScreen.prototype, "homeSize", {
                        get: function () {
                            return parseFloat(this.homeSizeSelect.value);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DCResidenceHomeScreen.prototype, "homeLocation", {
                        get: function () {
                            return this.homeLocationSelect.value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DCResidenceHomeScreen.prototype, "homeBuilt", {
                        get: function () {
                            return this.homeBuiltSelect.value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DCResidenceHomeScreen.prototype, "homeSystemInstalled", {
                        get: function () {
                            return this.homeSystemInstalledSelect.value;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return DCResidenceHomeScreen;
                }(daikincity.ui.DCScreen));
                residence.DCResidenceHomeScreen = DCResidenceHomeScreen;
            })(residence = application.residence || (application.residence = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var residence;
            (function (residence) {
                var DCResidenceRatesScreen = (function (_super) {
                    __extends(DCResidenceRatesScreen, _super);
                    function DCResidenceRatesScreen() {
                        var _this = _super.call(this, document.getElementById("residenceRates")) || this;
                        _this._electricityValue = 0;
                        _this._gasValue = 0;
                        _this._oilValue = 0;
                        _this.nextBtn = document.getElementById("ratesNextBtn");
                        _this.previousBtn = document.getElementById("ratesPreviousBtn");
                        _this.refreshBtn = document.getElementById("ratesRefreshBtn");
                        _this.electricityCanvas = document.getElementById("rateElectricityCanvas");
                        _this.rateElectricityValueElement = document.getElementById("rateElectricityValue");
                        _this.electricityWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(_this.electricityCanvas.getContext("2d"));
                        //this.electricityWidget.fromColor = "#FFB847";
                        //this.electricityWidget.toColor = "#FFB847";
                        _this.electricityWidget.startAngle = -(Math.PI * 0.5);
                        _this.electricityWidget.sliceAngle = 0;
                        _this.gasCanvas = document.getElementById("rateGasCanvas");
                        _this.rateGasValueElement = document.getElementById("rateGasValue");
                        _this.gasWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(_this.gasCanvas.getContext("2d"));
                        //this.gasWidget.fromColor = "#5EC6F1";
                        // this.gasWidget.toColor = "#5EC6F1";
                        _this.gasWidget.startAngle = -(Math.PI * 0.5);
                        _this.gasWidget.sliceAngle = 0;
                        _this.oilCanvas = document.getElementById("rateOilCanvas");
                        _this.rateOilValueElement = document.getElementById("rateOilValue");
                        _this.oilWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(_this.oilCanvas.getContext("2d"));
                        //this.oilWidget.fromColor = "#88D86C";
                        //this.oilWidget.toColor = "#88D86C";
                        _this.oilWidget.startAngle = -(Math.PI * 0.5);
                        _this.oilWidget.sliceAngle = 0;
                        _this.electricitySlider = new Slider("electricitySlider");
                        _this.electricitySlider.element.addEventListener("change", function () { return _this.onElectricitySliderChanged(); });
                        _this.gasSlider = new Slider("gasSlider");
                        _this.gasSlider.element.addEventListener("change", function () { return _this.onGasSliderChanged(); });
                        _this.oilSlider = new Slider("oilSlider");
                        _this.oilSlider.element.addEventListener("change", function () { return _this.onOilSliderChanged(); });
                        return _this;
                    }
                    DCResidenceRatesScreen.prototype.refresh = function () {
                    };
                    DCResidenceRatesScreen.prototype.show = function () {
                        _super.prototype.show.call(this);
                        this.electricitySlider.onResize();
                        this.electricitySlider.setValue(this._electricityValue);
                        this.electricityWidget.value = this._electricityValue;
                        this.electricityWidget.draw();
                        this.gasSlider.onResize();
                        this.gasSlider.setValue(this._gasValue);
                        this.electricityWidget.value = this._gasValue;
                        this.electricityWidget.draw();
                        this.oilSlider.onResize();
                        this.oilSlider.setValue(this._gasValue);
                        this.oilWidget.value = this._gasValue;
                        this.oilWidget.draw();
                    };
                    DCResidenceRatesScreen.prototype.hide = function () {
                        _super.prototype.hide.call(this);
                    };
                    DCResidenceRatesScreen.prototype.onElectricitySliderChanged = function () {
                        this._electricityValue = this.electricitySlider.value();
                        this.electricityWidget.value = this._electricityValue;
                        this.rateElectricityValueElement.innerHTML = this.electricityValue.toFixed(1);
                        this.electricityWidget.draw();
                    };
                    DCResidenceRatesScreen.prototype.onGasSliderChanged = function () {
                        this._gasValue = this.gasSlider.value();
                        this.gasWidget.value = this._gasValue;
                        this.rateGasValueElement.innerHTML = this.gasValue.toFixed(1);
                        this.gasWidget.draw();
                    };
                    DCResidenceRatesScreen.prototype.onOilSliderChanged = function () {
                        this._oilValue = this.oilSlider.value();
                        this.oilWidget.value = this._oilValue;
                        this.rateOilValueElement.innerHTML = this.oilValue.toFixed(1);
                        this.oilWidget.draw();
                    };
                    Object.defineProperty(DCResidenceRatesScreen.prototype, "electricityValue", {
                        get: function () { return this._electricityValue * 100; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DCResidenceRatesScreen.prototype, "gasValue", {
                        get: function () { return this._gasValue; },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(DCResidenceRatesScreen.prototype, "oilValue", {
                        get: function () { return this._oilValue; },
                        enumerable: true,
                        configurable: true
                    });
                    return DCResidenceRatesScreen;
                }(daikincity.ui.DCScreen));
                residence.DCResidenceRatesScreen = DCResidenceRatesScreen;
            })(residence = application.residence || (application.residence = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var residence;
            (function (residence) {
                var DCResidenceSavingsScreen = (function (_super) {
                    __extends(DCResidenceSavingsScreen, _super);
                    function DCResidenceSavingsScreen() {
                        var _this = _super.call(this, document.getElementById("residenceSavings")) || this;
                        _this.resizeTimeout = -1;
                        _this.savingsChartContainer = document.getElementById("savingsChartContainer");
                        _this.previousBtn = document.getElementById("savingsPreviousBtn");
                        _this.refreshBtn = document.getElementById("savingsRefreshBtn");
                        _this.accordionMenu = new Accordion(document.getElementById("residenceSavingsMenu"), "44px", 8);
                        return _this;
                    }
                    DCResidenceSavingsScreen.prototype.show = function () {
                        var _this = this;
                        _super.prototype.show.call(this);
                        this.accordionMenu.start();
                        window.addEventListener("resize", function (e) { return _this.onResize(e); }, false);
                        this.onResize();
                    };
                    DCResidenceSavingsScreen.prototype.drawChart = function () {
                        this.chart = new google.visualization.ComboChart(this.savingsChartContainer);
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', 'Period');
                        data.addColumn('number', 'New System');
                        data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
                        data.addColumn('number', 'Daikin Inverter Duct');
                        data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
                        data.addColumn('number', 'Daikin Multi Split');
                        data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
                        data.addColumn('number', 'Daikin Altherma');
                        data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
                        data.addColumn('number', 'Manually Selected Solution');
                        data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
                        data.addRows([
                            ['1 Yr', 600, this.tooltip("600"), 500, this.tooltip("500"), 200, this.tooltip("200"), 400, this.tooltip("200"), 750, this.tooltip("750")],
                            ['2 Yr', 800, this.tooltip("800"), 600, this.tooltip("600"), 200, this.tooltip("200"), 400, this.tooltip("200"), 600, this.tooltip("600")],
                            ['5 Yr', 900, this.tooltip("900"), 700, this.tooltip("700"), 200, this.tooltip("200"), 400, this.tooltip("200"), 700, this.tooltip("700")],
                            ['10 Yr', 1000, this.tooltip("1000"), 900, this.tooltip("900"), 200, this.tooltip("200"), 400, this.tooltip("200"), 550, this.tooltip("550")],
                            ['15 Yr', 1000, this.tooltip("1000"), 950, this.tooltip("950"), 200, this.tooltip("200"), 400, this.tooltip("200"), 400, this.tooltip("400")]
                        ]);
                        var options = {
                            backgroundColor: "#eefaff",
                            width: this.savingsChartContainer.offsetWidth,
                            height: this.savingsChartContainer.offsetHeight,
                            vAxis: { gridlines: { color: "#9bd4ef", count: 7 } },
                            seriesType: "bars",
                            series: { 5: { type: "bars" } },
                            colors: ['#20a4e0', '#ba026e', '#d3922c', '#7dbc67', '#414852'],
                            legend: "none",
                            titleTextStyle: { color: "#00a1e4", fontSize: 20 },
                            tooltip: { isHtml: true }
                        };
                        this.chart.draw(data, options);
                    };
                    DCResidenceSavingsScreen.prototype.tooltip = function (s) {
                        return '<div style="padding:8px 12px;\
                                text-align:center;\
                                class="chart-tooltip">' + s + '</div>';
                    };
                    DCResidenceSavingsScreen.prototype.onResize = function (e) {
                        var _this = this;
                        if (e === void 0) { e = null; }
                        if (this.resizeTimeout != -1) {
                            clearTimeout(this.resizeTimeout);
                        }
                        this.resizeTimeout = setTimeout(function () { return _this.resize(); }, 25);
                    };
                    DCResidenceSavingsScreen.prototype.resize = function () {
                        this.drawChart();
                    };
                    DCResidenceSavingsScreen.prototype.hide = function () {
                        var _this = this;
                        window.removeEventListener("resize", function (e) { return _this.onResize(e); }, false);
                        this.accordionMenu.stop();
                        _super.prototype.hide.call(this);
                    };
                    DCResidenceSavingsScreen.prototype.refresh = function () {
                    };
                    return DCResidenceSavingsScreen;
                }(daikincity.ui.DCScreen));
                residence.DCResidenceSavingsScreen = DCResidenceSavingsScreen;
            })(residence = application.residence || (application.residence = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var application;
        (function (application) {
            var residence;
            (function (residence) {
                var DCResidenceSystemScreen = (function (_super) {
                    __extends(DCResidenceSystemScreen, _super);
                    function DCResidenceSystemScreen() {
                        var _this = _super.call(this, document.getElementById("residenceAboutSystem")) || this;
                        _this.nextBtn = document.getElementById("systemNextBtn");
                        _this.previousBtn = document.getElementById("systemPreviousBtn");
                        _this.refreshBtn = document.getElementById("systemRefreshBtn");
                        _this.systemCoolingValueElement = document.getElementById("coolingHomeValue");
                        _this.systemHeatingValueElement = document.getElementById("heatingHomeValue");
                        _this.typicalACValueElement = document.getElementById("typicalACHomeValue");
                        _this.typicalHeatingValueElement = document.getElementById("typicalHeatingHomeValue");
                        _this.systemCoolingSlider = new Slider("systemCoolingSlider");
                        _this.systemCoolingSlider.highlightElement = document.getElementById("coolHomeHighlight");
                        _this.systemCoolingSlider.element.addEventListener("change", function () { return _this.onSystemCoolingSliderChanged(); });
                        _this.systemHeatingSlider = new Slider("systemHeatingSlider");
                        _this.systemHeatingSlider.highlightElement = document.getElementById("heatHomeHighlight");
                        _this.systemHeatingSlider.element.addEventListener("change", function () { return _this.onSystemHeatingSliderChanged(); });
                        _this.typicalACSlider = new Slider("typicalACSlider");
                        _this.typicalACSlider.highlightElement = document.getElementById("typicalACHighlight");
                        _this.typicalACSlider.element.addEventListener("change", function () { return _this.onTypicalACSliderChanged(); });
                        _this.typicalHeatingSlider = new Slider("typicalHeatingSlider");
                        _this.typicalHeatingSlider.highlightElement = document.getElementById("typicalHeatingHighlight");
                        _this.typicalHeatingSlider.element.addEventListener("change", function () { return _this.onTypicalHeatingSliderChanged(); });
                        return _this;
                    }
                    DCResidenceSystemScreen.prototype.onSystemCoolingSliderChanged = function () {
                        this.systemCoolingValueElement.innerHTML = this.systemCoolingSlider.value().toString(); //.toFixed(1);
                    };
                    DCResidenceSystemScreen.prototype.onSystemHeatingSliderChanged = function () {
                        this.systemHeatingValueElement.innerHTML = this.systemHeatingSlider.value().toString(); //.toFixed(1);
                    };
                    DCResidenceSystemScreen.prototype.onTypicalACSliderChanged = function () {
                        this.typicalACValueElement.innerHTML = this.typicalACSlider.value().toString(); //.toFixed(1);
                    };
                    DCResidenceSystemScreen.prototype.onTypicalHeatingSliderChanged = function () {
                        this.typicalHeatingValueElement.innerHTML = this.typicalHeatingSlider.value().toString(); //.toFixed(1);
                    };
                    DCResidenceSystemScreen.prototype.refresh = function () {
                    };
                    DCResidenceSystemScreen.prototype.show = function () {
                        _super.prototype.show.call(this);
                        this.systemCoolingSlider.onResize();
                        this.systemHeatingSlider.onResize();
                        this.typicalACSlider.onResize();
                        this.typicalHeatingSlider.onResize();
                    };
                    return DCResidenceSystemScreen;
                }(daikincity.ui.DCScreen));
                residence.DCResidenceSystemScreen = DCResidenceSystemScreen;
            })(residence = application.residence || (application.residence = {}));
        })(application = ui.application || (ui.application = {}));
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCApplicationFloorScreen = (function (_super) {
            __extends(DCApplicationFloorScreen, _super);
            function DCApplicationFloorScreen() {
                var _this = _super.call(this, document.getElementById("applicationBuilding")) || this;
                _this.currentFloor = null;
                _this.applications = [];
                _this.hotelRoom = new daikincity.ui.application.hotel.DCHotelRoomApplication();
                _this.hotelRoom.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, _this.onFloorSelected, _this);
                _this.applications.push(_this.hotelRoom);
                _this.library = new daikincity.ui.application.library.DCLibraryApplication();
                _this.applications.push(_this.library);
                _this.communicationsCenter = new daikincity.ui.application.communications.DCCommunicationsCenterApplication();
                _this.applications.push(_this.communicationsCenter);
                _this.residence = new daikincity.ui.application.residence.DCResidenceApplication();
                _this.applications.push(_this.residence);
                _this.hideAll();
                return _this;
            }
            DCApplicationFloorScreen.prototype.showFloor = function (floor) {
                this.currentFloor = floor;
                this.hideAll();
                switch (floor.applicationId) {
                    case daikincity.building.DCApplicationFloor.APPLICATION_HOTEL_ROOM:
                        this.hotelRoom.show(floor);
                        break;
                    case daikincity.building.DCApplicationFloor.APPLICATION_LIBRARY:
                        this.library.show();
                        break;
                    case daikincity.building.DCApplicationFloor.APPLICATION_BROADCAST_CENTRE:
                        this.communicationsCenter.show();
                        break;
                    case daikincity.building.DCApplicationFloor.APPLICATION_HOUSE:
                        this.residence.show();
                        break;
                }
                this.dispatchEvent(new away.events.Event("ready"));
            };
            DCApplicationFloorScreen.prototype.onFloorSelected = function (e) {
                this.dispatchEvent(e.clone());
            };
            DCApplicationFloorScreen.prototype.hideAll = function () {
                for (var i = 0; i < this.applications.length; i++) {
                    this.applications[i].hide();
                }
            };
            return DCApplicationFloorScreen;
        }(daikincity.ui.DCScreen));
        ui.DCApplicationFloorScreen = DCApplicationFloorScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCBillboard = (function () {
            function DCBillboard() {
                var _this = this;
                this.currentPosterIndex = -1;
                this.posterDuration = 10000;
                this.element = document.getElementById("billboard");
                this.posters = [];
                setTimeout(function () { return _this.nextPoster(); }, this.posterDuration);
            }
            DCBillboard.prototype.addPoster = function (poster) {
                if (!poster.enabled)
                    return;
                var a = document.createElement("a");
                a.target = "_blank";
                $(a).addClass("billboard-poster");
                a.href = poster.url;
                var img = document.createElement("img");
                img.src = poster.image;
                $(img).addClass("full");
                a.appendChild(img);
                this.element.appendChild(a);
                this.posters.push(a);
            };
            DCBillboard.prototype.showPoster = function (index) {
                if (this.posters.length == 0)
                    return;
                if (index >= this.posters.length)
                    index = 0;
                else if (index < 0)
                    index = this.posters.length - 1;
                this.currentPosterIndex = index;
                this.hideAll();
                this.posters[this.currentPosterIndex].style.visibility = "visible";
            };
            DCBillboard.prototype.hideAll = function () {
                for (var i = 0; i < this.posters.length; i++) {
                    this.posters[i].style.visibility = "hidden";
                }
            };
            DCBillboard.prototype.nextPoster = function () {
                var _this = this;
                this.showPoster(this.currentPosterIndex + 1);
                setTimeout(function () { return _this.nextPoster(); }, this.posterDuration);
            };
            return DCBillboard;
        }());
        ui.DCBillboard = DCBillboard;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCBuildingMenuScreen = (function (_super) {
            __extends(DCBuildingMenuScreen, _super);
            function DCBuildingMenuScreen(buildingScreen) {
                var _this = _super.call(this, document.getElementById("buildingMenu")) || this;
                _this.buildingScreen = buildingScreen;
                _this.buildingFloorMenuContainerElement = document.getElementById("buildingFloorMenuContainer");
                _this.buildingMenuTitleElement = document.getElementById("buildingMenuTitle");
                _this.buildingMessageElement = document.getElementById("buildingMessage");
                _this.floorMenu = new ui.DCFloorMenu();
                _this.floorMenu.addEventListener(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, _this.onFloorSelected, _this);
                _this.buildingFloorMenuContainerElement.appendChild(_this.floorMenu.element);
                return _this;
            }
            DCBuildingMenuScreen.prototype.showBuilding = function (building) {
                var _this = this;
                this.screenElement.style.backgroundImage = "none";
                this.currentBuilding = building;
                this.floorMenu.populate(this.currentBuilding);
                this.buildingMenuTitleElement.innerHTML = this.currentBuilding.name;
                this.buildingMessageElement.innerHTML = "Welcome to the " + this.currentBuilding.name + ", please select an area of the building you wish to explore from the list below";
                if (this.currentBuilding.menuImage != undefined) {
                    var img = document.createElement("img");
                    img.addEventListener("load", function () { return _this.onBuildingImageLoaded(); }, false);
                    img.src = this.currentBuilding.menuImage;
                }
            };
            DCBuildingMenuScreen.prototype.onBuildingImageLoaded = function () {
                this.screenElement.style.backgroundImage = "url(" + this.currentBuilding.menuImage + ")";
                this.screenElement.style.backgroundSize = "contain";
                this.dispatchEvent(new away.events.Event("ready"));
            };
            DCBuildingMenuScreen.prototype.onFloorSelected = function (e) {
                this.buildingScreen.showFloor(e.floor);
            };
            return DCBuildingMenuScreen;
        }(daikincity.ui.DCScreen));
        ui.DCBuildingMenuScreen = DCBuildingMenuScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCFloorButton = (function () {
            function DCFloorButton(floor) {
                this.floor = floor;
                this.element = document.createElement("button");
                this.element.id = floor.id.toString();
                $(this.element).addClass("floorButton");
                var titleElement = document.createElement("span");
                titleElement.innerHTML = floor.name;
                this.element.appendChild(titleElement);
            }
            return DCFloorButton;
        }());
        ui.DCFloorButton = DCFloorButton;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCFloorMenu = (function (_super) {
            __extends(DCFloorMenu, _super);
            function DCFloorMenu(building) {
                if (building === void 0) { building = null; }
                var _this = _super.call(this) || this;
                _this.element = document.createElement("div");
                $(_this.element).addClass("floor-menu");
                _this.floorButtons = [];
                if (building != null)
                    _this.populate(building);
                return _this;
            }
            DCFloorMenu.prototype.populate = function (building, highlightId) {
                if (highlightId === void 0) { highlightId = -1; }
                this.currentBuilding = building;
                this.clear();
                for (var i = 0; i < this.currentBuilding.numFloors; i++) {
                    var floorButton = new ui.DCFloorButton(this.currentBuilding.getFloorAt(i));
                    //floorButton.element.onclick = (e) => this.onFloorSelected(e);
                    $(floorButton.element).on("click touchend", $.proxy(this.onFloorSelected, this));
                    if (floorButton.floor.id == highlightId)
                        $(floorButton.element).addClass("floorButtonHighlighted");
                    this.element.appendChild(floorButton.element);
                    this.floorButtons.push(floorButton);
                }
            };
            DCFloorMenu.prototype.getButtonAt = function (index) {
                return this.floorButtons[index];
            };
            DCFloorMenu.prototype.onFloorSelected = function (e) {
                var element = e.currentTarget;
                var floor = this.currentBuilding.getFloorById(parseInt(element.id));
                this.dispatchEvent(new daikincity.events.DCFloorSelectedEvent(daikincity.events.DCFloorSelectedEvent.FLOOR_SELECTED, floor));
            };
            DCFloorMenu.prototype.clear = function () {
                this.floorButtons = [];
                this.element.innerHTML = "";
            };
            Object.defineProperty(DCFloorMenu.prototype, "numButtons", {
                get: function () { return this.floorButtons.length; },
                enumerable: true,
                configurable: true
            });
            return DCFloorMenu;
        }(away.events.EventDispatcher));
        ui.DCFloorMenu = DCFloorMenu;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
/// <reference path="DCScreen.ts" />
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCFunctionalFloorScreen = (function (_super) {
            __extends(DCFunctionalFloorScreen, _super);
            function DCFunctionalFloorScreen() {
                var _this = _super.call(this, document.getElementById("functionalBuilding")) || this;
                _this.currentFloor = null;
                _this.currentConfiguration = null;
                _this.configurationIcon = null;
                _this.resizeTimeout = -1;
                _this.chart = null;
                _this.core = daikincity.DCCore.I;
                _this.configurationTitleElement = document.getElementById("configurationTitle");
                _this.configurationDescriptionElement = document.getElementById("configurationDescription");
                _this.floorNavigation = document.getElementById("floorNavigation");
                _this.zoomBtn = document.getElementById("zoomBtn");
                _this.zoomBtn.onclick = function (e) { return _this.onZoomClicked(e); };
                _this.configurationElement = document.getElementById("buildingConfiguration");
                _this.configurationIconsElement = document.getElementById("configurationIcons");
                _this.floorTitle = document.getElementById("floorTitle");
                _this.imageConfigurationContainer = document.getElementById("floorImageContainer");
                _this.floorImage = document.getElementById("floorImage");
                _this.energyComparisonElement = document.getElementById("buildingEnergyComparison");
                _this.systemIcons = [];
                _this.tabButtons = [];
                _this.configurationContainerLeft = document.getElementById("configurationContainerLeft");
                _this.configurationContainerRight = document.getElementById("configurationContainerRight");
                _this.configurationCanvas = document.getElementById("configurationButtonsCanvas");
                _this.configurationCanvasContext = _this.configurationCanvas.getContext("2d");
                _this.energySavingCanvasElement = document.getElementById("savingsCanvasKWH");
                _this.energySavingsKWHValue = document.getElementById("savingsKWHValue");
                _this.energySavingWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(_this.energySavingCanvasElement.getContext("2d"));
                _this.energySavingWidget.addLayer(new com.wearesmartcookie.widgets.circular.SCCircularWidgetLayer("#595f68", "#595f68", false, 1, 58, 8, 5));
                _this.energySavingWidget.addLayer(new com.wearesmartcookie.widgets.circular.SCCircularWidgetLayer("#4eb9e9", "#4eb9e9", true, 1, 70, 16, 5));
                _this.configurationImageElement = document.getElementById("configurationImage");
                _this.tabsContainerElement = document.getElementById("configurationTabs");
                /*
                this.overviewTabButton = <HTMLButtonElement> document.getElementById("configuration_overview_btn");
                this.overviewTabButton.onclick = (e) => this.onOverviewTabClicked(e);
                this.indoorUnitsTabButton = <HTMLButtonElement> document.getElementById("configuration_indoor_units_btn");
                this.indoorUnitsTabButton.onclick = (e) => this.onIndoorUnitsTabClicked(e);
                */
                _this.floorMenu = new ui.DCFloorMenu();
                _this.floorNavigation.appendChild(_this.floorMenu.element);
                _this.layoutColumns =
                    [
                        document.getElementById("layoutColumn1"),
                        document.getElementById("layoutColumn2"),
                        document.getElementById("layoutColumn3")
                    ];
                window.addEventListener("resize", function (e) { return _this.onResize(e); }, false);
                return _this;
            }
            DCFunctionalFloorScreen.prototype.showFloor = function (floor) {
                var _this = this;
                this.floorImage.style.visibility = "hidden";
                $("#buildingInformation").width(0);
                $("#buildingInformation").animate({ width: "35%" }, 250);
                $("#buildingView").css("background-color", "#BDEBFF");
                $("#buildingView").animate({ backgroundColor: "#5DC7F1" }, 250);
                $("#buildingConfiguration").height(0);
                $("#buildingConfiguration").animate({ height: "27.5%" }, 500);
                this.currentFloor = floor;
                this.configurationIconsElement.innerHTML = "";
                this.systemIcons = [];
                this.floorTitle.innerHTML = floor.name;
                this.floorImage.src = "";
                this.floorImage.addEventListener("error", function () { return _this.onFloorImageLoadError(); }, false);
                this.floorImage.addEventListener("load", function () { return _this.onFloorImageLoaded(); }, false);
                this.floorImage.src = floor.floorImage;
                this.configurationTitleElement.innerHTML = "";
                this.configurationDescriptionElement.innerHTML = "";
                if (this.core.currentBuilding.numFloors > 1) {
                    this.floorNavigation.style.display = "block";
                    this.floorMenu.populate(this.core.currentBuilding, floor.id);
                    // set buttons widths
                    var w = 100 / this.floorMenu.numButtons;
                    for (var i = 0; i < this.floorMenu.numButtons; i++) {
                        this.floorMenu.getButtonAt(i).element.style.width = w.toString() + "%";
                    }
                }
                else {
                    this.floorMenu.clear();
                    this.floorNavigation.style.display = "none";
                }
                this.configurationContainerLeft.innerHTML = "";
                for (var i = 0; i < floor.numConfigurations; i++) {
                    var configuration = floor.getConfigurationAt(i);
                    var button = document.createElement("button");
                    $(button).addClass("configurationButton");
                    button.id = configuration.id.toString();
                    button.innerHTML = "<span>" + configuration.name + "</span>";
                    button.onclick = function (e) { return _this.onConfigurationSelected(e); };
                    this.configurationContainerLeft.appendChild(button);
                }
                this.drawChart();
                this.showConfiguration(this.currentFloor.getConfigurationAt(0));
            };
            DCFunctionalFloorScreen.prototype.onFloorImageLoaded = function () {
                this.floorImage.style.visibility = "visible";
                this.dispatchEvent(new away.events.Event("ready"));
            };
            DCFunctionalFloorScreen.prototype.onFloorImageLoadError = function () {
                daikincity.trace("error loading floor image");
                this.onFloorImageLoaded();
            };
            DCFunctionalFloorScreen.prototype.drawChart = function () {
                if (this.chart == null) {
                    this.chart = new google.visualization.ColumnChart(this.energyComparisonElement);
                }
                var metaData = [
                    { columnName: "BS", color: "#CC33FF" },
                    { columnName: "HP", color: "#20A4E0" },
                    { columnName: "HR", color: "#BA026E" },
                    { columnName: "A1", color: "#D3922C" },
                    { columnName: "A2", color: "#7DBC67" },
                    { columnName: "A3", color: "#2E3641" }
                ];
                var options = {
                    backgroundColor: "#DEF5FF",
                    legend: "none",
                    title: "Energy Efficiency Comparison",
                    titleTextStyle: { color: "#2e3641", fontName: '"museo-sans", sans-serif', fontSize: 12, italic: false },
                    tooltip: { isHtml: true },
                    vAxis: { title: "Average I EER", textStyle: { italic: false, bold: true }, gridlines: { color: "#9BD4EF", count: 5 }, maxValue: this.currentFloor.getHighestEnergyValue() },
                    width: this.energyComparisonElement.offsetWidth,
                    height: this.energyComparisonElement.offsetHeight,
                    animation: { duration: 500, easing: 'out' }
                };
                var data = [];
                // must have for animation
                var i;
                data.push(["Energy Efficiency Comparison", "type", { role: 'style' }, { role: 'tooltip', 'p': { 'html': true } }]);
                for (i = 0; i < this.currentFloor.numConfigurations + this.currentFloor.numAlternativeConfigurations; i++) {
                    data.push([metaData[i].columnName, 0, metaData[i].color, ""]);
                }
                this.chart.draw(google.visualization.arrayToDataTable(data), options);
                data = [];
                data.push(["Energy Efficiency Comparison", "type", { role: 'style' }, { role: 'tooltip', 'p': { 'html': true } }]);
                var configuration;
                var columnName = "", color = "", c = 0;
                for (i = 0; i < this.currentFloor.numConfigurations; i++) {
                    configuration = this.currentFloor.getConfigurationAt(i);
                    if (c < metaData.length) {
                        columnName = metaData[c].columnName;
                        color = metaData[c].color;
                    }
                    data.push([columnName, configuration.energy, color, this.tooltip(configuration.name + ": " + configuration.energy.toString())]);
                    c++;
                }
                for (i = 0; i < this.currentFloor.numAlternativeConfigurations; i++) {
                    configuration = this.currentFloor.getAlternativeConfigurationAt(i);
                    if (c < metaData.length) {
                        columnName = metaData[c].columnName;
                        color = metaData[c].color;
                    }
                    data.push([columnName, configuration.energy, color, this.tooltip(configuration.name + ": " + configuration.energy.toString())]);
                    c++;
                }
                this.chart.draw(google.visualization.arrayToDataTable(data), options);
            };
            DCFunctionalFloorScreen.prototype.showConfiguration = function (configuration) {
                this.currentConfiguration = configuration;
                this.highlightConfigurationButtons();
                this.drawIcons();
                this.drawSavingsWidget();
                this.drawLayouts();
                this.showTabs();
                if (this.currentConfiguration.systemImage.length) {
                    this.configurationImageElement.src = this.currentConfiguration.systemImage;
                    this.configurationImageElement.style.display = "block";
                }
                else {
                    this.configurationImageElement.style.display = "none";
                }
                var overlayImage = this.currentFloor.floorImage;
                if (this.currentConfiguration.overlayImage.length) {
                    overlayImage = this.currentConfiguration.overlayImage;
                }
                this.floorImage.src = overlayImage;
                this.onResize();
            };
            DCFunctionalFloorScreen.prototype.highlightConfigurationButtons = function () {
                for (var i = 0; i < this.configurationContainerLeft.children.length; i++) {
                    var btn = this.configurationContainerLeft.children.item(i);
                    if (parseInt(btn.id) == this.currentConfiguration.id) {
                        $(btn).addClass("configurationButtonSelected");
                    }
                    else {
                        $(btn).removeClass("configurationButtonSelected");
                    }
                }
            };
            DCFunctionalFloorScreen.prototype.drawLayouts = function () {
                this.layoutButtonsDict = {}; // reset
                if (this.currentConfiguration.numLayouts == 0) {
                    document.getElementById("layoutLabels").style.display = "none";
                    this.configurationContainerRight.style.backgroundImage = "url(/daikincityweb/images/tile_bg.png)";
                }
                else {
                    document.getElementById("layoutLabels").style.display = "block";
                    this.configurationContainerRight.style.backgroundImage = "";
                }
                var i;
                // clear out
                for (i = 0; i < this.layoutColumns.length; i++) {
                    this.layoutColumns[i].innerHTML = "";
                }
                // create elements
                for (i = 0; i < this.currentConfiguration.numLayouts; i++) {
                    var layout = this.currentConfiguration.getLayoutAt(i);
                    this.drawLayout(layout);
                    // highlight first button in each tree
                    if (this.layoutButtonsDict[layout.id].length > 0) {
                        this.layoutButtonsDict[layout.id][0].setState(ui.DCSystemButton.STATE_AVAILABLE);
                    }
                }
            };
            DCFunctionalFloorScreen.prototype.drawLayout = function (layout) {
                this.layoutButtonsDict[layout.id] = [];
                if (layout.rootNode != undefined) {
                    this.createConfigurationNode(layout.rootNode, 1, layout.id);
                }
            };
            DCFunctionalFloorScreen.prototype.drawSavingsWidget = function () {
                var baselineEnergy = this.currentFloor.getConfigurationAt(0).energy;
                var currentEnergy = this.currentConfiguration.energy;
                this.energySavingWidget.value = 1 - currentEnergy / baselineEnergy;
                if (this.currentConfiguration.numLayouts == 0)
                    this.energySavingWidget.value = 0;
                this.energySavingWidget.draw();
                // was using ceil but still had wrong values so trying round...
                var v = -Math.round(-this.energySavingWidget.value * 100);
                this.energySavingsKWHValue.innerHTML = (v != 0 ? v : 100) + "<span>%</span>";
            };
            DCFunctionalFloorScreen.prototype.drawIcons = function () {
                var _this = this;
                if (this.currentConfiguration == null)
                    return;
                var systems = [];
                this.configurationIconsElement.innerHTML = "";
                this.configurationTitleElement.innerHTML = this.currentConfiguration.name;
                this.configurationDescriptionElement.innerHTML = "";
                // configuration button
                this.configurationIcon = new ui.DCSystemIcon(null, null);
                this.configurationIcon.setState(ui.DCSystemIcon.STATE_ON);
                this.configurationIcon.element.onclick = function (e) { return _this.onConfigurationIconSelected(e); };
                this.configurationIconsElement.appendChild(this.configurationIcon.element);
                // multiple layouts, ignore duplicates
                for (var i = 0; i < this.currentConfiguration.numLayouts; i++) {
                    var layout = this.currentConfiguration.getLayoutAt(i);
                    for (var j = 0; j < layout.numSystems; j++) {
                        var systemId = layout.getSystemAt(j);
                        if (systems.indexOf(systemId) == -1) {
                            systems.push(systemId);
                            var icon = new ui.DCSystemIcon(this.core.getSystemById(systemId), layout);
                            icon.element.onclick = function (e) { return _this.onIconSelected(e); };
                            this.configurationIconsElement.appendChild(icon.element);
                            this.systemIcons.push(icon);
                        }
                    }
                }
            };
            DCFunctionalFloorScreen.prototype.onConfigurationSelected = function (e) {
                var element = e.currentTarget;
                this.showConfiguration(this.currentFloor.getConfigurationById(parseInt(element.id)));
            };
            DCFunctionalFloorScreen.prototype.createConfigurationNode = function (node, depth, layoutId) {
                var _this = this;
                var container = this.layoutColumns[depth - 1];
                if (!this.containerHas(container, node.systemId)) {
                    var systemBtn = new ui.DCSystemButton(node, layoutId);
                    systemBtn.element.onclick = function (e) { return _this.onConfigurationOptionSelected(e); };
                    container.appendChild(systemBtn.element);
                    this.layoutButtonsDict[layoutId].push(systemBtn);
                }
                for (var i = 0; i < node.numNodes; i++) {
                    this.createConfigurationNode(node.getNodeAt(i), depth + 1, layoutId);
                }
            };
            DCFunctionalFloorScreen.prototype.containerHas = function (container, id) {
                for (var i = 0; i < container.children.length; i++) {
                    if (container.children[i].id == id.toString())
                        return true;
                }
                return false;
            };
            DCFunctionalFloorScreen.prototype.onConfigurationOptionSelected = function (e) {
                var element = e.currentTarget;
                var matches = element.id.match(/^(\d+)_(\d+)$/);
                if (matches != null) {
                    var layoutId = parseInt(matches[1]);
                    var systemId = parseInt(matches[2]);
                    this.selectOption(layoutId, systemId);
                }
            };
            DCFunctionalFloorScreen.prototype.selectOption = function (layoutId, systemId) {
                var systemBtn = this.getSystemButtonById(layoutId, systemId);
                var system = null;
                switch (systemBtn.state) {
                    case ui.DCSystemButton.STATE_OFF:
                        return;
                    case ui.DCSystemButton.STATE_AVAILABLE:
                        systemBtn.setState(ui.DCSystemButton.STATE_ON);
                        system = systemBtn.system;
                        break;
                    case ui.DCSystemButton.STATE_ON:
                        systemBtn.setState(ui.DCSystemButton.STATE_AVAILABLE);
                        var parentNode = systemBtn.configurationNode.parentNode;
                        if (parentNode != null)
                            system = this.core.getSystemById(parentNode.systemId);
                        break;
                }
                this.hideTabs();
                this.toggleSystemButton(systemBtn, layoutId);
                this.showSystem(system);
                this.onResize();
            };
            DCFunctionalFloorScreen.prototype.toggleSystemButton = function (systemBtn, layoutId) {
                var layout = this.currentConfiguration.getLayoutById(layoutId);
                if (systemBtn.configurationNode.systemId != layout.rootNode.systemId) {
                    var parents = daikincity.building.functional.DCConfigurationNode.getParentNodesByOptionId(layout.rootNode, systemBtn.configurationNode.systemId);
                    var activateButton = false;
                    var i = 0;
                    var parentBtn;
                    for (i = 0; i < parents.length; i++) {
                        parentBtn = this.getSystemButtonById(layoutId, parents[i].systemId);
                        if (parentBtn.state == ui.DCSystemButton.STATE_ON) {
                            activateButton = true;
                            break;
                        }
                    }
                    if (activateButton == true) {
                        if (systemBtn.state != ui.DCSystemButton.STATE_ON) {
                            systemBtn.setState(ui.DCSystemButton.STATE_AVAILABLE);
                        }
                    }
                    else {
                        systemBtn.setState(ui.DCSystemButton.STATE_OFF);
                    }
                }
                for (i = 0; i < systemBtn.configurationNode.numNodes; i++) {
                    this.toggleSystemButton(this.getSystemButtonById(layoutId, systemBtn.configurationNode.getNodeAt(i).systemId), layoutId);
                }
            };
            DCFunctionalFloorScreen.prototype.getSystemButtonById = function (layoutId, systemId) {
                if (this.layoutButtonsDict[layoutId] == undefined)
                    return null;
                for (var i = 0; i < this.layoutButtonsDict[layoutId].length; i++) {
                    if (this.layoutButtonsDict[layoutId][i].element.id == layoutId + "_" + systemId)
                        return this.layoutButtonsDict[layoutId][i];
                }
                return null;
            };
            DCFunctionalFloorScreen.prototype.getSystemIconById = function (id) {
                for (var i = 0; i < this.systemIcons.length; i++) {
                    if (this.systemIcons[i].system.id == id)
                        return this.systemIcons[i];
                }
                return null;
            };
            DCFunctionalFloorScreen.prototype.showSystem = function (system) {
                if (system != null) {
                    this.configurationTitleElement.innerHTML = system.name;
                    this.configurationDescriptionElement.innerHTML = system.description;
                    this.configurationImageElement.src = system.image;
                    if (system.image.length) {
                        this.configurationImageElement.src = system.image;
                        this.configurationImageElement.style.display = "block";
                    }
                    else {
                        this.configurationImageElement.style.display = "none";
                    }
                }
                var iconSelected = false;
                for (var i = 0; i < this.systemIcons.length; i++) {
                    var icon = this.systemIcons[i];
                    var systemBtn = this.getSystemButtonById(icon.layout.id, icon.system.id);
                    if (systemBtn == null)
                        continue;
                    if (systemBtn.state == ui.DCSystemButton.STATE_ON) {
                        if (system != null && system.id == systemBtn.configurationNode.systemId) {
                            icon.setState(ui.DCSystemIcon.STATE_ON);
                            iconSelected = true;
                        }
                        else {
                            icon.setState(ui.DCSystemIcon.STATE_AVAILABLE);
                        }
                    }
                    else {
                        icon.setState(ui.DCSystemIcon.STATE_OFF);
                    }
                }
                if (iconSelected == true) {
                    this.configurationIcon.setState(ui.DCSystemIcon.STATE_AVAILABLE);
                    this.hideTabs();
                }
                else {
                    this.configurationTitleElement.innerHTML = this.currentConfiguration.name;
                    this.configurationImageElement.src = this.currentConfiguration.systemImage;
                    this.configurationIcon.setState(ui.DCSystemIcon.STATE_ON);
                    this.showTabs();
                }
            };
            DCFunctionalFloorScreen.prototype.onIconSelected = function (e) {
                var element = e.currentTarget;
                var systemIcon = this.getSystemIconById(parseInt(element.id));
                if (systemIcon.state == ui.DCSystemIcon.STATE_AVAILABLE) {
                    this.showSystem(systemIcon.system);
                }
            };
            DCFunctionalFloorScreen.prototype.onConfigurationIconSelected = function (e) {
                this.showSystem(null);
            };
            DCFunctionalFloorScreen.prototype.onZoomClicked = function (e) {
                var _this = this;
                var content = document.createElement("div");
                $(content).addClass("floorImageContainer");
                content.innerHTML = this.imageConfigurationContainer.innerHTML;
                var closeBtn = document.createElement("button");
                $(closeBtn).addClass("zoom-close-btn");
                content.appendChild(closeBtn);
                closeBtn.onclick = function (e) { return _this.onZoomClose(e); };
                this.core.lightbox.bestFitRect.width = 603;
                this.core.lightbox.bestFitRect.height = 472;
                this.core.lightbox.maxSizeRect.width = 0;
                this.core.lightbox.minSizeRect.width = 300;
                this.core.lightbox.minSizeRect.height = 235;
                this.core.lightbox.show(content, true);
            };
            DCFunctionalFloorScreen.prototype.onZoomClose = function (e) {
                this.core.lightbox.hide();
            };
            DCFunctionalFloorScreen.prototype.drawConnections = function () {
                this.configurationCanvasContext.clearRect(0, 0, this.configurationCanvas.width, this.configurationCanvas.height);
                for (var i = 0; i < this.currentConfiguration.numLayouts; i++) {
                    var layout = this.currentConfiguration.getLayoutAt(i);
                    if (layout.rootNode != null) {
                        this.drawConnection(layout.rootNode, layout.id);
                    }
                }
            };
            DCFunctionalFloorScreen.prototype.drawConnection = function (node, layoutId) {
                this.configurationCanvasContext.strokeStyle = "#959595";
                this.configurationCanvasContext.lineWidth = 5;
                var nodeBtn = this.getSystemButtonById(layoutId, node.systemId);
                var canvasRect = this.configurationCanvas.getBoundingClientRect();
                var nodeRect = nodeBtn.element.getBoundingClientRect();
                var r;
                for (var i = 0; i < node.numNodes; i++) {
                    var child = node.getNodeAt(i);
                    var childBtn = this.getSystemButtonById(layoutId, child.systemId);
                    r = childBtn.element.getBoundingClientRect();
                    this.configurationCanvasContext.beginPath();
                    this.configurationCanvasContext.moveTo(nodeRect.left + nodeRect.width - canvasRect.left, nodeRect.top + (r.height * 0.5) - canvasRect.top);
                    if (nodeRect.top == r.top) {
                        this.configurationCanvasContext.lineTo(r.left - canvasRect.left, r.top + (r.height * 0.5) - canvasRect.top);
                    }
                    else {
                        var distX = r.left - (nodeRect.left + nodeRect.width);
                        this.configurationCanvasContext.lineTo(nodeRect.left + nodeRect.width + (distX * 0.5) - canvasRect.left - 15, nodeRect.top + (r.height * 0.5) - canvasRect.top);
                        this.configurationCanvasContext.lineTo(nodeRect.left + nodeRect.width + (distX * 0.5) - canvasRect.left - 15, r.top + (r.height * 0.5) - canvasRect.top);
                        this.configurationCanvasContext.lineTo(r.left - canvasRect.left, r.top + (r.height * 0.5) - canvasRect.top);
                    }
                    this.configurationCanvasContext.stroke();
                    this.drawConnection(child, layoutId);
                }
            };
            DCFunctionalFloorScreen.prototype.onResize = function (e) {
                var _this = this;
                if (e === void 0) { e = null; }
                if (this.resizeTimeout != -1) {
                    clearTimeout(this.resizeTimeout);
                    this.resizeTimeout = -1;
                }
                this.resizeTimeout = setTimeout(function () { return _this.resize(); }, 10); // setTimeout fix wrong w/h values on maximise
            };
            DCFunctionalFloorScreen.prototype.resize = function () {
                this.configurationCanvas.width = this.configurationContainerRight.offsetWidth;
                this.configurationCanvas.height = this.configurationContainerRight.offsetHeight;
                if (this.visible) {
                    if (this.currentFloor != null) {
                        this.drawConnections();
                    }
                    if (this.chart != null) {
                        this.drawChart();
                    }
                }
            };
            DCFunctionalFloorScreen.prototype.tooltip = function (s) {
                return '<div style="padding:8px 12px;\
                                text-align:center;\
                                class="chart-tooltip">' + s + '</div>';
            };
            DCFunctionalFloorScreen.prototype.showTabs = function () {
                var _this = this;
                this.tabsContainerElement.innerHTML = "";
                if (this.currentConfiguration.numIndoorUnits > 0) {
                    var w = 100 / (1 + this.currentConfiguration.numIndoorUnits);
                    //overview button
                    var overviewBtn = this.createTabButton("Overview");
                    $(overviewBtn).addClass("tab-button-selected");
                    overviewBtn.style.width = w + "%";
                    overviewBtn.style.left = "0";
                    overviewBtn.id = "overviewBtn";
                    overviewBtn.onclick = function (e) { return _this.onTabButtonSelected(e); };
                    this.tabsContainerElement.appendChild(overviewBtn);
                    this.tabButtons.push(overviewBtn);
                    for (var i = 0; i < this.currentConfiguration.numIndoorUnits; i++) {
                        var systemId = this.currentConfiguration.getIndoorUnitAt(i);
                        var system = this.core.getSystemById(systemId);
                        var indoorUnitBtn;
                        if (system != null) {
                            indoorUnitBtn = this.createTabButton(system.name);
                        }
                        else {
                            indoorUnitBtn = this.createTabButton("Indoor Unit " + (i + 1));
                        }
                        indoorUnitBtn.style.width = w + "%";
                        indoorUnitBtn.style.left = ((i + 1) * w) + "%";
                        indoorUnitBtn.id = systemId.toString();
                        indoorUnitBtn.onclick = function (e) { return _this.onTabButtonSelected(e); };
                        this.tabsContainerElement.appendChild(indoorUnitBtn);
                        this.tabButtons.push(indoorUnitBtn);
                    }
                    // ensure tabs are visible
                    this.tabsContainerElement.style.display = "block";
                }
                else {
                    this.hideTabs();
                }
                this.showOverviewTab();
            };
            DCFunctionalFloorScreen.prototype.onTabButtonSelected = function (e) {
                var btn = e.currentTarget;
                if (btn.id == "overviewBtn") {
                    this.showOverviewTab();
                }
                else {
                    var systemId = parseInt(btn.id);
                    this.showSystemTab(systemId);
                }
                // highlights
                for (var i = 0; i < this.tabButtons.length; i++) {
                    $(this.tabButtons[i]).removeClass("tab-button-selected");
                }
                $(btn).addClass("tab-button-selected");
            };
            DCFunctionalFloorScreen.prototype.showOverviewTab = function () {
                var s = "System Type: " + this.currentConfiguration.systemType;
                s += "<br />";
                s += "System Size: " + this.currentConfiguration.systemSize;
                this.configurationDescriptionElement.innerHTML = s;
                this.configurationImageElement.src = this.currentConfiguration.systemImage;
            };
            DCFunctionalFloorScreen.prototype.showSystemTab = function (systemId) {
                var system = this.core.getSystemById(systemId);
                if (system != null) {
                    this.configurationDescriptionElement.innerHTML = system.description;
                    this.configurationImageElement.src = system.image;
                }
            };
            DCFunctionalFloorScreen.prototype.hideTabs = function () {
                this.tabsContainerElement.style.display = "none";
            };
            DCFunctionalFloorScreen.prototype.createTabButton = function (text) {
                var btn = document.createElement("button");
                $(btn).addClass("tab-button");
                btn.innerHTML = "<span>" + text + "</span>";
                return btn;
            };
            return DCFunctionalFloorScreen;
        }(daikincity.ui.DCScreen));
        ui.DCFunctionalFloorScreen = DCFunctionalFloorScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCSystemButton = (function () {
            function DCSystemButton(configurationNode, layoutId) {
                this._configurationNode = configurationNode;
                this._system = daikincity.DCCore.I.getSystemById(this._configurationNode.systemId);
                this.element = document.createElement("button");
                this.element.id = (layoutId + "_" + this._configurationNode.systemId).toString();
                $(this.element).addClass(DCSystemButton.DEFAULT_CLASS);
                var switchImage = document.createElement("div");
                switchImage.innerHTML = "&nbsp;";
                $(switchImage).addClass("systemButtonSwitch");
                this.element.appendChild(switchImage);
                var titleSpan = document.createElement("span");
                titleSpan.innerHTML = this._system.name;
                this.element.appendChild(titleSpan);
                this.setState(DCSystemButton.STATE_OFF);
            }
            DCSystemButton.prototype.setState = function (toState) {
                this._state = toState;
                var className = "";
                switch (this._state) {
                    case DCSystemButton.STATE_OFF:
                        className = "systemButtonOff";
                        break;
                    case DCSystemButton.STATE_ON:
                        className = "systemButtonOn";
                        break;
                    case DCSystemButton.STATE_AVAILABLE:
                        className = "systemButtonAvailable";
                        break;
                }
                // clear out class list
                this.element.className = "";
                // add new class
                $(this.element).addClass(DCSystemButton.DEFAULT_CLASS);
                $(this.element).addClass(className);
            };
            Object.defineProperty(DCSystemButton.prototype, "configurationNode", {
                get: function () {
                    return this._configurationNode;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystemButton.prototype, "state", {
                get: function () { return this._state; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystemButton.prototype, "system", {
                get: function () { return this._system; },
                enumerable: true,
                configurable: true
            });
            DCSystemButton.STATE_AVAILABLE = "available";
            DCSystemButton.STATE_OFF = "off";
            DCSystemButton.STATE_ON = "on";
            DCSystemButton.DEFAULT_CLASS = "systemButton";
            return DCSystemButton;
        }());
        ui.DCSystemButton = DCSystemButton;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCSystemIcon = (function () {
            function DCSystemIcon(system, layout) {
                this._system = system;
                this._layout = layout;
                this.element = document.createElement("button");
                if (this._system != null) {
                    this.element.id = this._system.id.toString();
                    this.element.style.backgroundImage = "url(" + this._system.icon + ")";
                }
                else {
                    this.element.style.backgroundImage = "url(" + DCSystemIcon.DEFAULT_ICON + ")";
                }
                this.setState(DCSystemIcon.STATE_OFF);
            }
            DCSystemIcon.prototype.setState = function (toState) {
                this._state = toState;
                var className = "";
                switch (this._state) {
                    case DCSystemIcon.STATE_OFF:
                        className = "configurationIconOff";
                        break;
                    case DCSystemIcon.STATE_ON:
                        className = "configurationIconOn";
                        break;
                    case DCSystemIcon.STATE_AVAILABLE:
                        className = "configurationIconAvailable";
                        break;
                }
                this.element.className = "";
                $(this.element).addClass(DCSystemIcon.DEFAULT_CLASS);
                $(this.element).addClass(className);
            };
            Object.defineProperty(DCSystemIcon.prototype, "state", {
                get: function () { return this._state; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystemIcon.prototype, "system", {
                get: function () { return this._system; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DCSystemIcon.prototype, "layout", {
                get: function () { return this._layout; },
                enumerable: true,
                configurable: true
            });
            DCSystemIcon.STATE_ON = "on";
            DCSystemIcon.STATE_OFF = "off";
            DCSystemIcon.STATE_AVAILABLE = "available";
            DCSystemIcon.DEFAULT_CLASS = "configurationIcon";
            DCSystemIcon.DEFAULT_ICON = "daikincityweb/images/icons/standard_system.gif";
            return DCSystemIcon;
        }());
        ui.DCSystemIcon = DCSystemIcon;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
var daikincity;
(function (daikincity) {
    var ui;
    (function (ui) {
        var DCWebFloorScreen = (function (_super) {
            __extends(DCWebFloorScreen, _super);
            function DCWebFloorScreen() {
                var _this = _super.call(this, document.getElementById("webBuilding")) || this;
                _this.webFloorTitleElement = document.getElementById("webFloorTitle");
                _this.container = document.getElementById("linksContainer");
                _this.webIconElement = document.getElementById("webLinkIcon");
                return _this;
            }
            DCWebFloorScreen.prototype.showFloor = function (floor) {
                var _this = this;
                this.floor = floor;
                $(this.screenElement).hide();
                $(this.screenElement).fadeIn(500);
                this.clear();
                var img = document.createElement("img");
                img.addEventListener("load", function () { return _this.onBackgroundImageLoaded(); }, false);
                img.src = floor.backgroundImage;
                this.webFloorTitleElement.innerHTML = floor.name;
                this.webIconElement.src = floor.icon;
                this.container.innerHTML = "";
                var w = 300;
                for (var i = 0; i < floor.numLinks; i++) {
                    var link = floor.getLinkAt(i);
                    if (link.enabled) {
                        var linkElement = document.createElement("div");
                        $(linkElement).addClass("web-link-info");
                        var titleElement = document.createElement("h4");
                        titleElement.innerHTML = link.title;
                        var descriptionElement = document.createElement("p");
                        descriptionElement.innerHTML = link.description;
                        var urlElement = document.createElement("a");
                        $(urlElement).addClass("web-link-button");
                        urlElement.href = link.url;
                        urlElement.target = "_blank";
                        linkElement.appendChild(titleElement);
                        linkElement.appendChild(descriptionElement);
                        linkElement.appendChild(urlElement);
                        this.container.appendChild(linkElement);
                        w += 335;
                    }
                }
                document.getElementById("webLinksModal").style.width = w + "px"; // firefox fix
            };
            DCWebFloorScreen.prototype.onBackgroundImageLoaded = function () {
                this.screenElement.style.backgroundImage = "url(" + this.floor.backgroundImage + ")";
                this.dispatchEvent(new away.events.Event("ready"));
            };
            DCWebFloorScreen.prototype.hide = function () {
                this.clear();
                _super.prototype.hide.call(this);
            };
            DCWebFloorScreen.prototype.clear = function () {
                this.container.innerHTML = "";
            };
            return DCWebFloorScreen;
        }(daikincity.ui.DCScreen));
        ui.DCWebFloorScreen = DCWebFloorScreen;
    })(ui = daikincity.ui || (daikincity.ui = {}));
})(daikincity || (daikincity = {}));
//# sourceMappingURL=daikincity.js.map