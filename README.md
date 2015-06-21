# sidenotes.js
![Bower version](https://img.shields.io/bower/v/sidenotes.js.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sidenotes.js.svg?style=flat)](https://www.npmjs.com/package/sidenotes.js)
[![Build Status](https://travis-ci.org/bcorreia/sidenotes.js.svg?branch=master)](https://travis-ci.org/bcorreia/sidenotes.js)

---
Add sidenote capabilities to your page.<br />
[**Demo**](http://bcorreia.com/projects/sidenotes.js/src/demo.html)

## Getting Started
You may install sidenotes.js using package managers, or download project [archive](https://github.com/bcorreia/sidenotes.js/archive/master.zip).<br />
```bash
bower install sidenotes.js
npm install sidenotes.js

# sidenotes.min.js (minified version)
# no dependencies required
```

## Usage
```javascript
var page = document.querySelector('.page'),
    sidenotes = new Sidenotes(page, {
        translate: { // read below
            '992px'   : '35vw',
            '768px'   : '50vw',
            'default' : '100vw'
        },
        'transition-duration': '.5s'
    });
```
Add as many items as needed to the `translate` object.<br />
**key:** a breakpoint value to be applied to `@media (min-width: xx)`<br />
**value:** a value to be applied to translate function. `(units: vw or px)`

## Default Settings
| Options | Default
:--- | :---
| `translate` | `{'992px':'35vw', 768px':'50vw', 'default':'100vw'}`
| `transition-duration` | `'.5s'`

### Callbacks
```javascript
// called before animation starts
onBefore: function(event, element) {}   // event: open, close     (string)
                                        // element: `.sidepanel`  (DOM node)

// called after animation ends
onAfter: function(event, element) {}    // event: open, close     (string)
                                        // element: `.sidepanel`  (DOM node)
```

### HTML data-attribute
Add `data-sidenote` attribute to any element(s) in your document.
```html
<!-- example -->
<a href="#" data-sidenote="A feeling of surprise.">Wonder</a>
<a href="#" data-sidenote="Greeting to begin a conversation.">Hello</a>
```

### CSS
The following classes are inserted by default:
```css
/* optional */
.sidenote            { display:flex; align-items:center; justify-content:center; }
.sidenote .-inner    { … }
.sidenote .-close    { … } /* closes sidenote on `click` event */
```
---

## License
This software is free to use under the [MIT license](https://github.com/bcorreia/sidenotes.js/blob/master/license.md).
