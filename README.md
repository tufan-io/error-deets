# error-deets

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/error-deets.svg)](https://www.npmjs.com/package/error-deets)
[![travis status](https://img.shields.io/travis/tufan-io/error-deets.svg)](https://travis-ci.org/tufan-io/error-deets)
[![Build status](https://ci.appveyor.com/api/projects/status/90am2usst4qeutgi?svg=true)](https://ci.appveyor.com/project/tufan-io/error-deets)
[![Coverage Status](https://coveralls.io/repos/github/tufan-io/error-deets/badge.svg?branch=master)](https://coveralls.io/github/tufan-io/error-deets?branch=master)
[![David](https://david-dm.org/tufan-io/error-deets/status.svg)](https://david-dm.org/tufan-io/error-deets)
[![David](https://david-dm.org/tufan-io/error-deets/dev-status.svg)](https://david-dm.org/tufan-io/error-deets?type=dev)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![NPM](https://nodei.co/npm/error-deets.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/error-deets/)
<!-- endbadge -->

An extension of vanilla JS errors, that adds two fields:

- code
- details

There are a few good reasons to add these fields to a standard error object.

1. custom errors, that extend the base error object, while a nobel thought, are too much work for a single use error objects. When absolutely needed, the `.code` porperty, set to a unique value suffices.

2. In most cases of error, passing an error message with some details from the execution context suffices to provide debuggable hints. Further, using logging solutions like winston, it's easy to log these to any log collector. `log.error(err.message, err.details);`

Ooh, and this is developed in TypeScript, because it rocks!

## Installation

`npm install error-deets`

## Usage

Throwing an error

```typescript
import { ErrorDeets as Error } from 'error-deets';

throw new Error(`a unique error message`, {
  details: {
    some: 'object with details'
  },
  code: 'StringOrNumOrTypeScriptEnum'
});

```

Catching and logging an error

```TypeScript

try {
  someFunThatThrow();
} catch (err) {
  log.error(err.message, err.details);
}
```

## Development Tooling

- [Development tooling](./docs/DevTools.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
