# sidenotes.js
![Bower version](https://img.shields.io/bower/v/sidenotes.js.svg?style=flat)
[![npm version](https://img.shields.io/npm/v/sidenotes.js.svg?style=flat)](https://www.npmjs.com/package/sidenotes.js)
[![Build Status](https://travis-ci.org/bcorreia/sidenotes.js.svg?branch=master)](https://travis-ci.org/bcorreia/sidenotes.js)

Data-list attribute implementation for input of type `range` <br />
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
var birds = new sidenotes(document.querySelector('form'), {
    selector: "",
    enumerate: false
});
```

| Options | Description | Default | Type
:--- | :--- | ---: | ---:
| `selector` | One or more CSS selectors separated by commas | `""` | `string`
| `enumerate` | Enumerate list output | `false` | `boolean`

### Example
Add **data-list** attribute to input elements of type text. *A range type element will be inserted before each match.*
```HTML
<input type="text" class="foobar" name="birds" readonly data-list="…"; />
<!-- readonly attribute is recommended -->
```

`JS` The first argument should be the form, or a parent element.
```javascript
var birds = new sidenotes(document.querySelector('form'), {
    selector: '.foobar', // one or more CSS selectors separated by commas
    enumerate: true
});
```
---

## License
This software is free to use under the [MIT license](https://github.com/bcorreia/sidenotes.js/blob/master/license.md).
