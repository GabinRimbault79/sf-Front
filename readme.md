# SimpleFramework Front
[![Version](https://img.shields.io/github/package-json/v/GabinRimbault79/sf-Front)](https://github.com/GabinRimbault79/sf-Front) [![CI](https://github.com/GabinRimbault79/sf-Front/actions/workflows/ci.yml/badge.svg)](https://github.com/GabinRimbault79/sf-Front/actions/workflows/ci.yml) [![License](https://img.shields.io/github/license/GabinRimbault79/sf-Front)](./LICENSE)

SimpleFramework Front is a React component library published on npm, built around reusable atomic components, modular building blocks, and a customizable styling foundation.

Its goal is to help developers build interfaces faster without starting every component from scratch, while still keeping full control over styling and integration.

The library is still evolving, with a current focus on public API clarity, core component stability, and long-term consistency.

## Installation

```bash
npm install simpleframework-front
```

## Peer Dependencies

The consuming project is expected to provide the following peer dependencies:

- `react`: `^18.2.0`
- `react-dom`: `^18.2.0`

Example:

```bash
npm install react react-dom simpleframework-front
```

## What simpleframework-front provides

simpleframework-front is built around two main ideas:

- **Atomic components**: reusable building blocks such as buttons, typography, wrappers, and basic UI elements.
- **Modular components**: more complete components built from atomic building blocks for more concrete interface use cases.

The library also ships with a default styling foundation while still allowing users to apply their own CSS.

## Core Components

If you are discovering the library, these are currently the best entry points:

- `Button`
- `Input`
- `Title`
- `List`
- `Tag`

These components represent the current core direction of the package.

## Component Stability (current)

- **Core**: components recommended as first entry points.
- **Stable**: public and maintained components.
- Non-core components may evolve faster while API stabilization is still ongoing.

## Available Components

`simpleframework-front` currently provides a growing set of components grouped by category.

### Atomic / Base
- `Button`
- `ButtonGrp`
- `Code`
- `Content`
- `Img`
- `Lame`
- `List`
- `Table`
- `Tag`
- `Title`
- `Wrapper`

### Form
- `Input`
- `InputSelect`
- `ToggleSwitch`

### Navigation
- `Breadcrumb`
- `NavBar`
- `HeadBar`
- `Footer`
- `SideBar`

### General / Composite
- `Alert`
- `ProgressBar`
- `Cards`
- `CardGroup`
- `Tabs`
- `InteractiveTabs`
- `Accordion`
- `Carousel`

### Information
- `BlocInformation`
- `Tooltip`

### Product-Oriented Components
- `BlocProduct`
- `ExposeProduct`
- `HeadProduct`

## Styling Philosophy

simpleframework-front ships with a default styling foundation, but it is not meant to lock users into a fixed visual system.

Recommended approach:

- use the provided styles if they fit your project;
- extend them with your own classes when needed;
- or replace them entirely with your own CSS.

The goal is to keep components reusable without making styling rigid.

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

### Tag

```jsx
import { Tag } from "simpleframework-front";

<Tag>New</Tag>
```

## Current Focus

Current work is mainly focused on:

- stabilizing Core components first;
- improving API consistency across atomic components;
- continuing TypeScript migration progressively;
- consolidating packaging for better compatibility with modern tooling;
- continuously improving documentation and examples.

## Playground (planned)

A local integrated playground inside the repository is planned.

Goals:

- provide visual component documentation;
- test components quickly during development;
- start with Core components, then Stable ones;
- provide, for each component: preview, key props, examples, and snippets.

## Local Development

Useful local commands:

```bash
npm install
npm run start
npm run build
```

For contribution and release details, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Project Links

- [Project Scope](./docs/PROJECT_SCOPE.md)
- [Changelog](./CHANGELOG.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Public Roadmap](https://github.com/GabinRimbault79/sf-Front/issues/38)