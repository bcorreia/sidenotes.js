/**
 * sidenotes.js - version 1.2.1
 *
 * https://github.com/bcorreia/sidenotes.js.git
 * Bruno Correia - mail@bcorreia.com
 *
 */
var Sidenotes = (function() {
    'use strict';

    var defaults = {
        translate: '400px',
        transition: '.5s',
        onBefore: function() {},
        onAfter: function() {}
    };

    var forEach = function(list, callback) {
        Array.prototype.forEach.call(list, callback);
    }

    var notes = {
        open: function(note) {
            var settings = this.settings;
            var sidenote = document.querySelector('body > .sidenote') || document.createElement('div'),
                btn = '<a href="#" class="text-hide -close">Close</a>';

            var callback = function() {
                document.body.removeEventListener('transitionend', callback, false);
                return settings.onAfter("open", sidenote); // callback fn
            }.bind(this);

            addStyles(document.body, {
                'overflow': 'hidden',
                '-webkit-transform': 'translateX(-'+ settings.translate +')',
                '-moz-transform': 'translateX(-'+ settings.translate +')',
                'transform': 'translateX(-'+ settings.translate +')',
                'transition': 'all ' + settings.transition
            });

            sidenote.className = 'sidenote';
            addStyles(sidenote, {
                'position': 'fixed',
                'top': (window.scrollY + 'px'), // fixed top position while using translate
                'right': 0,
                'height': '100vh',
                'width': settings.translate,
                '-webkit-transform': 'translateX('+ settings.translate +')',
                '-moz-transform': 'translateX('+ settings.translate +')',
                'transform': 'translateX('+ settings.translate +')'
            });

            // little hack for safari
            if ( !navigator.userAgent.match(/Chrome|Firefox/) ) {
                window.addEventListener("scroll", debounce(function() {
                    sidenote.style.top = (window.scrollY + "px");
                }, 100), false);
            }

            sidenote.innerHTML = '<div class="-inner">' + btn + '<p>' + note + '</p></div>';
            document.body.insertBefore(sidenote, document.body.firstChild); // prepend

            sidenote.querySelector('.-close').addEventListener('click', function(event) {
                event.preventDefault();
                this.close(sidenote);
            }.bind(this));

            document.body.addEventListener('transitionend', callback, false);
            return this.settings.onBefore("open", sidenote); // callback fn
        },

        close: function(sidenote) {
            var callback = function() {
                document.body.style.cssText = '';
                document.body.removeEventListener('transitionend', callback, false);
                return this.settings.onAfter("close", sidenote); // callback fn
            }.bind(this);

            addStyles(document.body, {
                '-webkit-transform': 'translateX(0)',
                '-moz-transform': 'translateX(0)',
                'transform': 'translateX(0)'
            });

            document.body.addEventListener('transitionend', callback, false);
            return this.settings.onBefore("close", sidenote); // callback fn
        }
    }

    /**
     * deep extend: merge defaults with options
     * @param {Objects} objects
     * @return {Object} merged values of default settings and options
     *
     */
    function extend(objects) {
        var extended = {};
        var merge = function (obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    if ( Object.prototype.toString.call(obj[prop]) === '[object Object]' ) {
                        extended[prop] = extend(extended[prop], obj[prop]);
                    }
                    else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        merge(arguments[0]);
        for (var i = 1; i < arguments.length; i++) {
            var obj = arguments[i];
            merge(obj);
        }
        return extended;
    }

    /**
     * debounce
     * @param {Object} function
     * @param {Number} wait
     *
     */
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        }
    }

    /**
     * add styles
     * @param {Object} dom element
     * @param {Object} properties
     */
    function addStyles(element, object) {
        for (var property in object) {
            element.style[property] = object[property];
        }
    }

    /**
     * constructor
     * @param {Object} stage: dom element
     * @param {Object} options
     *
     */
    Sidenotes = function(stage, options) {
        var settings = extend(defaults, options || {}),
            nodes = stage.querySelectorAll('[data-sidenote]');

        var init = function(event) {
            event.preventDefault();
            var note = this.getAttribute('data-sidenote'),
                sidenote = Object.create(notes, {
                    settings: { value: settings },
                    note: { value: note }
                });
            sidenote.open(note);
        };

        forEach(nodes, function(element) {
            element.addEventListener('click', init);
        });
    }

    return Sidenotes;
}());