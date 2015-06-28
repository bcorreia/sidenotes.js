# sidenotes.js
![Bower version](https://img.shields.io/bower/v/sidenotes.js.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sidenotes.js.svg?style=flat)](https://www.npmjs.com/package/sidenotes.js)
[![Build Status](https://travis-ci.org/bcorreia/sidenotes.js.svg?branch=master)](https://travis-ci.org/bcorreia/sidenotes.js)

---
Add sidenote capabilities to your page.<br />
[**Demo**](http://bcorreia.com/projects/sidenotes.js/src/demo.html)

## Getting Started
You may install sidenotes.js using package managers.<br />
```bash
bower install sidenotes.js
npm install sidenotes.js

# sidenotes.min.js (minified version)
# no dependencies required
```

## Usage
```javascript
var sidenotes = new Sidenotes(document.body, {
    // settings
});

// alternatively
var sidenotes = new Sidenotes(document.querySelector('.scope'), {
    // settings
});
```

## Default Settings
```javascript
orientation: 'right',                 // left or right (string)
duration: '.5s',                      // transition duration (string)
width: {
    '992px'   : '35vw',               // add as many breakpoints as needed
    '768px'   : '50vw',               // key: `min-width` media-query value
    'default' : '100vw'               // value: sidenote width in `vw or px`
},
onBefore: function() {},
onAfter: function() {}
```

### Callbacks
```javascript
onBefore: function(event, element) {  // called before animation starts
    // event 'open' or 'close'
    // element '.sidepanel'
}

onAfter: function(event, element) {   // called after animation ends
    // event 'open' or 'close'
    // element '.sidepanel'
}
```

### HTML data-attribute
Add `data-sidenote` attribute to any element within the selected scope.
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
