# Welcome to SF Project FrontEnd 🚀

[![Branch](https://img.shields.io/static/v1?label=Branch&message=v0.13&color=blue)](https://github.com/GabinRimbault79/sf-Front)
[![Version](https://img.shields.io/static/v1?label=Version&message=0.13.0&color=blue)](https://github.com/GabinRimbault79/sf-Front)
[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen)](./LICENSE)

## Community 🚀

- We need your feedback and support for the [future of the project](https://github.com/GabinRimbault79/sf-Front/discussions/1).
- Contributions are welcome through issues and pull requests.

## Documentation 📚

- PreAlpha website: [Simple-Framework](http://simple-framework.fr/)
- Latest release notes: [v0.12.0](./Doc/v0.12.0.md)

SF Project FrontEnd is a React component library designed to help you build interfaces faster with reusable UI building blocks and SCSS styling utilities.

🌟 **Why choose our React library?** 🌟

- **Reusable components:** Build pages faster with ready-to-use UI elements.
- **Customizable styles:** Adapt components to your own visual identity.
- **Library-first approach:** Package and reuse your front-end work across projects.

⚡ **Get started now!** ⚡

Integrate the library into your React project and start composing interfaces with SF Project FrontEnd components.

## Install 📦

**Requirement:** Make sure you are using a compatible React environment.

```bash
npm install simpleframework-front
```

## Usage / Example 💡

```jsx
import { Title } from "simpleframework-front";

function App() {
  return <Title lvl="h1">My Title</Title>;
}
```

## Run Locally 🧪

Clone the project:

```bash
git clone https://github.com/GabinRimbault79/sf-Front.git
```

Move into the project directory:

```bash
cd sf-Front
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run start
```

## Available Scripts 🛠️

Useful commands for local development:

```bash
npm run start
npm run build
npm run test
```

- `npm run start` starts the local development server.
- `npm run build` transpiles the library from `src/lib` into `dist`.
- `npm run test` runs the test suite.

## Release Process 🚀

Contributions are welcome through issues and pull requests. This section documents how the library is built, verified, and published so contributors and maintainers can understand the release workflow.

### 🛠️ Build the library

Generate the distributable files with:

```bash
npm run build
```

This command transpiles the library source from `src/lib` into `dist`.

### 📦 Prepack behavior

Before packaging or publishing the library, npm automatically runs the `prepack` script:

```bash
npm run build
```

This ensures the latest build output is included in the package.

### ✅ Verify the package contents

Before publishing, check the package contents with:

```bash
npm pack --dry-run
```

This helps confirm that only the expected files are included in the final package.

### 🚀 Publish the package

When a release is ready, the package can be published with:

```bash
npm publish
```

Official package publication should be handled by project maintainers.

### 🔍 Recommended release checklist

Before a release, make sure to:

- run `npm install`
- run `npm run build`
- run `npm pack --dry-run`
- verify the version in `package.json`
- confirm that the `dist` output is up to date

## Project Roadmap 🗺️

Follow our roadmap to discover the next milestones of the project.

### Version 1.0.0

- 📖 Complete documentation
- 🐛 Bug fixes and stability improvements

### Version 1.1.0

- 🛠️ More optimizations
- 🚀 New components

Stay tuned for future updates as the project continues to grow.

## Design Tokens 🎨

| Variables          | Hexadecimal | Preview |
|:-------------------|:------------|:--------|
| `$primary-color`   | `#112240`   | ![#112240](https://placehold.co/30x30/112240/112240.png) |
| `$secondary-color` | `#233554`   | ![#233554](https://placehold.co/30x30/233554/233554.png) |
| `$tertiary-color`  | `#8892b0`   | ![#8892b0](https://placehold.co/30x30/8892b0/8892b0.png) |
| `$link-color`      | `#ccd6f6`   | ![#ccd6f6](https://placehold.co/30x30/ccd6f6/ccd6f6.png) |
| `$hover-color`     | `#0ad6ff`   | ![#0ad6ff](https://placehold.co/30x30/0ad6ff/0ad6ff.png) |
| `$success`         | `#0f5132`   | ![#0f5132](https://placehold.co/30x30/0f5132/0f5132.png) |
| `$critical`        | `#842029`   | ![#842029](https://placehold.co/30x30/842029/842029.png) |
| `$warning`         | `#664d03`   | ![#664d03](https://placehold.co/30x30/664d03/664d03.png) |
| `$infos`           | `#055160`   | ![#055160](https://placehold.co/30x30/055160/055160.png) |

For more variables, check the SCSS files in the library source.

## Authors ✨

- [@gabinrimbault](https://github.com/GabinRimbault79)
