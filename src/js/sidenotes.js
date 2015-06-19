var Sidenotes = (function() {
    'use strict';

    var defaults = {
        onBefore: function() {},
        onAfter: function() {}
    };

    var forEach = function(list, callback) {
        Array.prototype.forEach.call(list, callback);
    }

    var notes = {
        html: document.querySelector('html'),

        open: function(note) {
            var sidenote = document.querySelector('body > .sidenote') || document.createElement('div'),
                btn = '<a href="#" class="text-hide close">Close</a>';

            var callback = function() {
                document.body.removeEventListener('transitionend', callback, false);
                return this.settings.onAfter("open", sidenote); // callback fn
            }.bind(this);

            this.html.className = 'sidenote-open';
            sidenote.className = 'sidenote';
            sidenote.style.top = (window.scrollY + "px"); // fixed top position while using translate
            sidenote.innerHTML = '<div class="-inner">' + btn + '<p>' + note + '</p></div>';
            document.body.insertBefore(sidenote, document.body.firstChild); // prepend

            sidenote.querySelector('.close').addEventListener('click', function(event) {
                event.preventDefault();
                this.close(sidenote);
            }.bind(this));

            document.body.addEventListener('transitionend', callback, false);
            return this.settings.onBefore("open", sidenote); // callback fn
        },

        close: function(sidenote) {
            var callback = function() {
                this.html.classList.remove('sidenote-open', 'sidenote-close');
                document.body.removeEventListener('transitionend', callback, false);
                return this.settings.onAfter("close", sidenote); // callback fn
            }.bind(this);

            document.body.addEventListener('transitionend', callback, false);
            this.html.classList.add('sidenote-close');

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

    Sidenotes = function(stage, options) {
        var settings = extend(defaults, options || {}),
            nodes = stage.querySelectorAll('[data-sidenote]');

        var init = function() {
            this.addEventListener('click', function(event) {
                event.preventDefault();

                var note = this.getAttribute('data-sidenote'),
                    sidenote = Object.create(notes, {
                        settings: { value: settings },
                        note: { value: note }
                    });

                sidenote.open(note);
            });
        };

        forEach(nodes, function(element) {
            init.call(element);
        });
    }

    return Sidenotes;
}());