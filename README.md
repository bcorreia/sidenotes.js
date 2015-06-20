# sidenotes.js
![Bower version](https://img.shields.io/bower/v/sidenotes.js.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sidenotes.js.svg?style=flat)](https://www.npmjs.com/package/sidenotes.js)
[![Build Status](https://travis-ci.org/bcorreia/sidenotes.js.svg?branch=master)](https://travis-ci.org/bcorreia/sidenotes.js)

Add sidenote capabilities to your page.<br />
[**Demo**](http://bcorreia.com/projects/sidenotes.js/src/demo.html)

---
## Getting Started
You may install sidenotes.js using package managers, or download project [archive](https://github.com/bcorreia/sidenotes.js/archive/master.zip).<br />
Installing via `bower` will bring in the dependencies as well.
```bash
bower install sidenotes.js
npm install sidenotes.js

# sidenotes.min.js           minified version of sidenotes.js
```

## Usage
```javascript
var page = document.querySelector('.page'),
    note = new Sidenotes(page, {
        translate: '400px', // x cord. value
        transition: '.5s' // duration
    });
```

| Options | Description | Default | Type
:--- | :--- | ---: | ---:
| `translate` | A value for translateX function | `400px` | `string`
| `transition` | A value for transition-duration | `.5s` | `string`

### Callbacks
```javascript
onBefore: function(event, element) {}   // called before animation starts
                                        // event: open, close (string)
                                        // element: `.sidepanel` (dom node)

onAfter: function(event, element) {}    // called after animation ends
                                        // event: open, close (string)
                                        // element: `.sidepanel` (dom node)
```

### HTML data-attribute
Add `data-sidenote` attribute to elements within your document.
```html
<!-- example -->
<a href="#" data-sidenote="A feeling of surprise … ">Wonder</a>
```

### CSS
```css
/* suggested */
.sidenote               { display: flex; align-items: center; justify-content:center; border-left:1px solid #333; }
.sidenote .-inner       { padding: 3em 2em; position: relative; }
```
---

## License
This software is free to use under the [MIT license](https://github.com/bcorreia/sidenotes.js/blob/master/license.md).
