# Overview

This is the PlayCanvas Editor API. You can find API documentation [here](docs/modules.md).

# Installing
Run:
```
npm install
```

# Building

Run:
```
npm run build
```

This will create a UMD build under `dist/index.js` and an ES6 module under `dist/index.mjs`.

# Docs

To build the documentation run:
```
npm run build:docs
```

The resulting .md file will be under docs/modules.md.

NOTE: Build the docs after you commit any API changes, otherwise the code links in the docs might point to the wrong lines.

NOTE: The `EntityProperties.md` and `AssetProperties.md` documents are created externally. When you build the docs, revert those 2 documents (or update them externally).

# Tests

To run tests run:
```
npm test
```

To step through the tests using Chrome run:
```
npm run test:debug
```
