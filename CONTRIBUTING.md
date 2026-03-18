# Contributing to SF Project FrontEnd 🚀

Thanks for your interest in SF Project FrontEnd.

Contributions are welcome through issues and pull requests. This document explains the package expectations and release workflow used for this project.

## Before You Contribute 💬

- Open an issue if you want to discuss a bug, enhancement, or design change first.
- Submit a pull request when you have a concrete implementation to propose.
- Keep packaging and dependency changes explicit in both `package.json` and `package-lock.json`.

## Local Workflow 🧪

Clone the project and install dependencies:

```bash
git clone https://github.com/GabinRimbault79/sf-Front.git
cd sf-Front
npm install
```

Useful commands:

```bash
npm run start
npm run build
npm run test
```

- `npm run start` starts the local development server.
- `npm run build` transpiles the library from `src/lib` into `dist`.
- `npm run test` runs the test suite.

## Peer Dependencies ⚛️

This library expects the consumer project to provide:

- `react`: `^18.2.0`
- `react-dom`: `^18.2.0`

They are listed as `peerDependencies` in `package.json`, which avoids bundling a second copy of React in consumer applications.

## Package and Release Workflow 📦

### Build the library

Generate the distributable files with:

```bash
npm run build
```

This command transpiles the library source from `src/lib` into `dist`.

### Prepack behavior

Before packaging or publishing the library, npm automatically runs the `prepack` script:

```bash
npm run build
```

This ensures the latest build output is included in the package.

### Verify package contents

Before publishing, check the package contents with:

```bash
npm pack --dry-run
```

This helps confirm that the package only includes the expected files, such as:

- `dist/**/*`
- `README.md`
- `LICENSE`
- `package.json`

### Validate the tarball locally

To validate the final package before publishing:

```bash
npm pack
```

Then install the generated `.tgz` file in a local test project and verify that a basic component import works as expected.

### Publish the package

When a release is ready, publish the package with:

```bash
npm publish
```

Make sure you are authenticated with the correct npm account and that the version in `package.json` is ready to be released.

## Recommended Release Checklist 🔍

Before publishing a new version, make sure to:

- run `npm install`
- run `npm run build`
- run `npm pack --dry-run`
- run `npm pack` and test the tarball locally if needed
- verify the version in `package.json`
- confirm that the `dist` output is up to date
