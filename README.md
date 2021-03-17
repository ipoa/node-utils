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

- Determine if a value is a plain Object
- Determine if a value is undefined
- Determine if a value is a Buffer
- Determine if a value is an ArrayBuffer
- Determine if a value is a FormData
- Determine if a value is a view on an ArrayBuffer
- Determine if a value is a String
- Determine if a value is a Number
- Determine if a value is an Object
- Determine if a value is a plain Object
- Determine if a value is a Date
- Determine if a value is a File
- Determine if a value is a Blob
- Determine if a value is a Function
- Determine if a value is a Stream
- Determine if a value is a URLSearchParams object
- Trim excess whitespace off the beginning and end of a string
- Determine if we're running in a standard browser environment
- Similar to `isStandardBrowserEnv`, just check it's running in a Node environment
- Determine if a value is a `form-data` node module
- Iterate over an Array or an Object invoking a function for each item.
- merges the properties of each object and returns result.
- Extends object a by mutably adding to it the properties of object b.
- Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)

## Unit Testing

To run the tests for should simply run:

```shell
npm install && npm test
```

## Resources

- [changelog](./README.md)

## License

[MIT](./LICENSE)
