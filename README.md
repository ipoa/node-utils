# @ipoa/utils

[![npm version](https://img.shields.io/npm/v/@ipoa/utils.svg?style=flat-square)](https://www.npmjs.org/package/@ipoa/utils)
[![plugin version](https://shields.io/badge/@ipoa/utils-v0.0.5-blue)](https://www.npmjs.org/package/@ipoa/utils)
[![install size](https://packagephobia.com/badge?p=@ipoa/utils)](https://packagephobia.com/result?p=@ipoa/utils)

## install

```shell
npm install @ipoa/utils --save
```

## Example

```javascript
// Determine if a value is an Array
var utils = require('@ipoa/utils')
console.log(utils.isArray([1, 2, 3])) // true

// merges the properties of each object and returns result. 
var result = utils.merge({ foo1: 123 }, { foo1: 456 }, { foo2: 789 })
console.log(result); // outputs { foo1: 456, foo2: 789 }

utils.extend(utils, {
  /**
   * Compose the `User-Agent` content
   *
   * @returns {string} - The `User-Agent` value
   */
  userAgent: function () {
    const { name: pkgName, version: pkgVersion } = require('../package.json')
    const { platform, arch, versions: { node: nodeVersion } } = process

    return `${pkgName}/${pkgVersion} node/${nodeVersion} ${platform}/${arch}`
  },
})
module.exports = utils
```

## Features

- Determine if a value is undefined:`isUndefined`
- Determine if a value is a Buffer:`isBuffer`
- Determine if a value is an ArrayBuffer:`isArrayBuffer`
- Determine if a value is a FormData:`isFormData`
- Determine if a value is a view on an ArrayBuffer:`isArrayBufferView`
- Determine if a value is a String:`isString`
- Determine if a value is a Number:`isNumber`
- Determine if a value is an Object:`isObject`
- Determine if a value is a plain Object:`isPlainObject`
- Determine if a value is an JSON:`isJSON`
- Determine if a value is a Date:`isDate`
- Determine if a value is a File:`isFile`
- Determine if a value is a Blob:`isBlob`
- Determine if a value is a Function:`isFunction`
- Determine if a value is a Stream:`isStream`
- Determine if a value is a URLSearchParams object:`isURLSearchParams`
- Trim excess whitespace off the beginning and end of a string:`trim`
- Determine if we're running in a standard browser environment:`isProcessEnv`
- Similar to `isStandardBrowserEnv`, just check it's running in a Node environment
- Determine if a value is a `form-data` node module
- Iterate over an Array or an Object invoking a function for each item:`forEach`
- merges the properties of each object and returns result:`merge`
- Extends object a by mutably adding to it the properties of object b:`extend`
- Remove byte order marker. This catches EF BB BF (the UTF-8 BOM):`stripBOM`

## Unit Testing

To run the tests for should simply run:

```shell
npm install && npm test
```

## Resources

- [changelog](./README.md)

## License

[MIT](./LICENSE)
