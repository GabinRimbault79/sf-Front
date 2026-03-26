# Contributing to SimpleFramework Front

Thanks for your interest in SimpleFramework Front.

Contributions are welcome through issues and pull requests. This document explains how to contribute to the project, how to validate local changes, and what expectations should be followed when proposing updates.

## Before You Contribute

- Open an issue first if you want to discuss a bug, enhancement, API change, or design direction.
- Submit a pull request when you have a concrete implementation or documentation update to propose.
- Keep changes focused. Avoid mixing unrelated fixes in the same pull request.
- Keep packaging and dependency changes explicit in both `package.json` and `package-lock.json`.

## Project Direction

SimpleFramework Front is a React component library published on npm as `simpleframework-front`.

The current project direction is centered on:

- reusable atomic components
- modular building blocks
- a customizable styling foundation
- clearer public API decisions
- progressive long-term cleanup and stabilization

When contributing, try to keep changes aligned with that direction rather than expanding the package scope unnecessarily.

## Getting Started Locally

Clone the repository and install dependencies:

```bash
git clone https://github.com/GabinRimbault79/sf-Front.git
cd sf-Front
npm install
```

Useful local commands:

```bash
npm run start
npm run build
npm run build:types
npm run test
npm run check:types
npm run lint
```

- `npm run start` starts the local development server.
- `npm run build` transpiles the library source from `src/lib` into `dist`.
- `npm run build:types` generates the public type declarations.
- `npm run test` runs the test suite.
- `npm run check:types` validates the TypeScript setup.
- `npm run lint` runs the lint checks.

## What Contributions Should Preserve

Contributions should aim to preserve or improve:

- public API clarity
- consistency across components
- package cleanliness
- compatibility with modern tooling
- documentation coherence across public project files

Changes that introduce new dependencies, expand the public surface, or alter package behavior should be justified clearly in the pull request.

## Pull Request Expectations

When opening a pull request:

- explain the purpose of the change clearly
- mention any related issue
- describe any public API impact
- mention dependency changes explicitly
- mention documentation updates when relevant

If your change affects packaging, runtime dependencies, exports, or consumer-facing behavior, include a short explanation of the expected impact.

## Validation Before Opening a Pull Request

Before submitting a contribution, run the checks that are relevant to your change.

Recommended baseline:

```bash
npm run build
npm run build:types
npm run test
npm run check:types
npm run lint
```

If your change affects packaging or what gets published, it is also helpful to run:

```bash
npm pack --dry-run
```

This helps confirm that the package contents remain coherent.
