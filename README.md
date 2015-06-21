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

#sidenotes.min.js (no dependencies required)
```

## Usage
```javascript
var page = document.querySelector('.page'),
    sidenotes = new Sidenotes(page, {
        translate: {
            '1200px'  : '33.3vw',
            '992px'   : '45vw',
            '768px'   : '60vw',
            'default' : '100vw'
        },
        'transition-duration': '.5s'
    });
```
`translate`<br />
**key:** @media (min-width) breakpoint value.<br />
**value:** value to be applied to translateX function. (units: vw or px)

## Default Settings
| Options | Default | Type
:--- | :--- | ---:
| `translate` | `{ '1200px': '33.3vw', '992px': '45vw',`<br /> `'768px': '60vw', 'default': '100vw' }` | `object`
| `transition-duration` | `.5s` | `string`

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
