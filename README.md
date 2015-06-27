# sidenotes.js
![Bower version](https://img.shields.io/bower/v/sidenotes.js.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sidenotes.js.svg?style=flat)](https://www.npmjs.com/package/sidenotes.js)
[![Build Status](https://travis-ci.org/bcorreia/sidenotes.js.svg?branch=master)](https://travis-ci.org/bcorreia/sidenotes.js)

---
Add sidenote capabilities to your page.<br />
[**Demo**](http://bcorreia.com/projects/sidenotes.js/src/demo.html)

## Getting Started
You may install ***sidenotes.js*** using the following package managers.<br />
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
        // settings
    });
```

## Default Settings
```javascript
orientation: 'right',               // left or right
duration: '.5s',                    // transition duration
width: {                            // breakpoints, sidenote width
    '992px'   : '35vw',
    '768px'   : '50vw',
    'default' : '100vw'
}
```
Add as many breakpoints as needed to the `width` object.<br />
**key:** breakpoint value `@media (min-width: xx)`<br />
**value:** sidenote width `(units: vw or px)`

### Callbacks
```javascript
// called before animation starts
onBefore: function(event, element) {}   // event: 'open', 'close'  (string)
                                        // element: .sidepanel     (DOM node)

// called after animation ends
onAfter: function(event, element) {}    // event: 'open', 'close'  (string)
                                        // element: .sidepanel     (DOM node)
```

### HTML data-attribute
Add `data-sidenote` attribute to any element in your document.
```html
<!-- examples -->
<a href="#" data-sidenote=" … ">Wonder</a>
<button data-sidenote=" … ">Wonde</button>
```

### CSS
The following classes are available:
```css
.sidenote .-inner    { … } /* sidenote direct child  */
.sidenote .-close    { … } /* sidenote close button */
```
---

## License
This software is free to use under the [MIT license](https://github.com/bcorreia/sidenotes.js/blob/master/license.md).
