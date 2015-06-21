# sidenotes.js
![Bower version](https://img.shields.io/bower/v/sidenotes.js.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sidenotes.js.svg?style=flat)](https://www.npmjs.com/package/sidenotes.js)
[![Build Status](https://travis-ci.org/bcorreia/sidenotes.js.svg?branch=master)](https://travis-ci.org/bcorreia/sidenotes.js)

---
Add sidenote capabilities to your page.<br />
[**Demo**](http://bcorreia.com/projects/sidenotes.js/src/demo.html)

## Getting Started
You may install sidenotes.js using package managers, or download project [archive](https://github.com/bcorreia/sidenotes.js/archive/master.zip).<br />
Installing via `bower` will bring in the dependencies as well.
```bash
bower install sidenotes.js
npm install sidenotes.js

#sidenotes.min.js (no dependencies required)
```

## Usage
```javascript
var page = document.querySelector('.page'),
    note = new Sidenotes(page, {
        translate: ['100vw', '60vw', '45vw', '33.3vw'], // **read below
        transition: '.5s'
    });
```
\*\* Array: @media (min-width) for the following breakpoints respectively: [`less than 768px`, `768px and up`, `992px and up`, `1200px and up`]

## Default Settings
| Options | Description | Default | Type
:--- | :--- | ---: | ---:
| `translate` | Values for translateX fn. | `['100vw', '60vw', '45vw', '33.3vw']` | `array`
| `transition` | A value for transition-duration property | `.5s` | `string`

### Callbacks
```javascript
// called before animation starts
onBefore: function(event, element) {}   // event: open, close     (string)
                                        // element: `.sidepanel`  (dom node)

// called after animation ends
onAfter: function(event, element) {}    // event: open, close     (string)
                                        // element: `.sidepanel`  (dom node)
```

### HTML data-attribute
Add `data-sidenote` attribute to elements within your document.
```html
<!-- example -->
<a href="#" data-sidenote="A feeling of surprise…">Wonder</a>
```

### CSS
The following classes are inserted by default:
```css
/* optional */
.sidenote            { display: flex; align-items: center; justify-content:center; }
.sidenote .-inner    { … }
.sidenote .-close    { … } /* closes sidenote on `click` event */
```
---

## License
This software is free to use under the [MIT license](https://github.com/bcorreia/sidenotes.js/blob/master/license.md).
