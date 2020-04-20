# error-deets

<!-- badge -->
[![npm license](https://img.shields.io/npm/l/error-deets.svg)](https://www.npmjs.com/package/error-deets)
[![Build status](https://tufan-io.github.io/node-starter/ci/badge/build.svg)](https://github.com/tufan-io/node-starter/actions)
[![NPM](https://nodei.co/npm/error-deets.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/error-deets/)
<!-- endbadge -->

An extension of vanilla JS errors, that adds two fields:

- code
- details

There are a few good reasons to add these fields to a standard error object.

1. Resuable error objects were few and far in-between in the author's experience with build complex nodejs projects.

2. custom errors, that extend the base error object, while a nobel thought, are too much work for a single use error objects. When absolutely needed, the `.code` property, set to a unique value suffices.

3. In most cases of error, passing an error message with some details from the execution context suffices to provide debuggable hints. Further, using logging solutions like winston, it's easy to log these to any log collector. `log.error(err.message, err.details);`

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
[CLOC reports](./.docs/cloc.md)
- [Changelog](./CHANGELOG.md)

## License

[Apache-2.0](./LICENSE.md)

## Code of Conduct

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

## Support

Bugs, PRs, comments, suggestions welcomed!
