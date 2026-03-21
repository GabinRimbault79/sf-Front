# sf-Front
[![Version](https://img.shields.io/github/package-json/v/GabinRimbault79/sf-Front)](https://github.com/GabinRimbault79/sf-Front) [![CI](https://github.com/GabinRimbault79/sf-Front/actions/workflows/ci.yml/badge.svg)](https://github.com/GabinRimbault79/sf-Front/actions/workflows/ci.yml) [![License](https://img.shields.io/github/license/GabinRimbault79/sf-Front)](./LICENSE)


sf-Front is a React component library designed to build consistent interfaces from reusable components and a customizable styling foundation.

The library is still being stabilized, but it already provides several usable components for common React interface needs. Current work focuses on improving reliability, documentation, and the clarity of the public API.

## Installation

```bash
npm install simpleframework-front
```

## Peer Dependencies

This library expects the consuming project to provide the following peer dependencies:

- `react`: `^18.2.0`
- `react-dom`: `^18.2.0`

Example:

```bash
npm install react react-dom simpleframework-front
```

## Available Components

`sf-Front` currently provides a growing set of reusable React components across several categories.

### Base
- `Button`
- `List`
- `Tag`
- `Title`

### Form
- `Input`
- `InputSelect`
- `ToggleSwitch`

### Navigation
- `Breadcrumb`
- `NavBar`
- `HeadBar`

### Feedback and Composite Components
- `Alert`
- `Tooltip`
- `CardGroup`
- `InteractiveTabs`

Additional components are also available in the library and will be documented progressively over time.

## Recommended Components

If you are discovering the library, the following components are the best entry points for now:

- `Button`
- `Input`
- `List`
- `Title`

## Integration Examples

### Button

```jsx
import { Button } from "simpleframework-front";

<Button>Click me</Button>
```

### Input

```jsx
import { Input } from "simpleframework-front";

<Input name="Email" callback={(value) => console.log(value)} />
```

### List

```jsx
import { List } from "simpleframework-front";

<List data={["First item", "Second item", "Third item"]} />
```

### Title

```jsx
import { Title } from "simpleframework-front";

<Title lvl="h2">Section title</Title>
```

## Local Development

Useful commands for local work:

```bash
npm install
npm run start
npm run build
```

For contribution and release details, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Project Links

- [Changelog](./CHANGELOG.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Public Roadmap](https://github.com/GabinRimbault79/sf-Front/issues/38)