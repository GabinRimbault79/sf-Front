# SimpleFramework-front
[![Version](https://img.shields.io/github/package-json/v/GabinRimbault79/sf-Front)](https://github.com/GabinRimbault79/sf-Front) [![CI](https://github.com/GabinRimbault79/sf-Front/actions/workflows/ci.yml/badge.svg)](https://github.com/GabinRimbault79/sf-Front/actions/workflows/ci.yml) [![License](https://img.shields.io/github/license/GabinRimbault79/sf-Front)](./LICENSE)

Simpleframework-front is a React component library published on npm, built around reusable atomic components, modular building blocks, and a customizable default styling foundation.

Its goal is to help developers build interfaces more quickly without starting every component from scratch, while still keeping full control over styling and integration.

The library is still evolving, with a current focus on API clarity, component stability, documentation, and long-term consistency.

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

## What simpleframework-front provides

simpleframework-front is built around two main ideas:

- **Atomic components**: reusable building blocks such as buttons, typography, wrappers, and basic UI elements.
- **Modular components**: more complete components built from those atomic building blocks for more concrete interface use cases.

The library also provides a default styling foundation, while still allowing users to apply their own CSS and integrate components into their own design system.

## Core Components

If you are discovering the library, these are currently the best entry points:

- `Button`
- `Input`
- `Title`
- `List`
- `Tag`

These components represent the current core direction of the package.

## Available Components

`simpleframework-front` currently provides a growing set of components across several categories.

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

Some components are more stable than others and the public API is still being refined. Documentation and examples will continue to improve progressively.

## Styling Philosophy

simpleframework-front ships with a default styling foundation, but it is not meant to lock users into a fixed visual system.

The intended approach is:

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

- clarifying and stabilizing the public API;
- improving consistency across core components;
- strengthening documentation and examples;
- preparing a local integrated playground for component exploration and testing.

## Local Development

Useful commands for local work:

```bash
npm install
npm run start
npm run build
```

For contribution and release details, see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Project Links

- [Project Scope](./PROJECT_SCOPE.md)
- [Changelog](./CHANGELOG.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Public Roadmap](https://github.com/GabinRimbault79/sf-Front/issues/38)
