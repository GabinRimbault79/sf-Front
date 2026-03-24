# sf-Front Project Scope and Vision

## Purpose

sf-Front is a React component library built around reusable atomic components, ready-to-use modular components, and a lightweight default design system.

The project is designed first for personal use, but it should remain clean and useful enough for other independent developers to adopt over time.

The goal is not to compete with large UI ecosystems. The goal is to provide a simpler, more customizable alternative that avoids becoming a heavy or rigid framework.

## Product Vision

sf-Front should allow a developer to:

- use a few atomic components independently;
- compose their own modular components from atomic building blocks;
- use ready-to-use modular components for real use cases;
- build complete interface sections or pages without having to start every component from scratch.

The library should stay:

- simple to approach;
- customizable;
- modular;
- maintainable by a solo developer;
- useful without turning into a "factory" of overly complex abstractions.

## Core Principles

### 1. Simplicity first
The library must stay understandable and lightweight in both API and maintenance cost.

### 2. Reusability over complexity
Every component should justify its presence by being reusable, composable, or directly useful in a real interface.

### 3. Default styles without lock-in
sf-Front can ship a default design system, but that design system must never trap the user.

### 4. Personal CSS remains a first-class path
A developer must be able to keep the component logic while ignoring the default design system and applying their own CSS classes.

### 5. Solo-maintainer realism
New features, architecture choices, and tooling changes must remain realistic for a project maintained by one developer.

## Component Taxonomy

### Atomic components
Atomic components are the reusable visual building blocks of the library.

They are expected to be:

- simple;
- reusable;
- composable;
- usable with the default design system or with custom user classes.

Current atomic components include:

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

### Modular components
Modular components are assembled from atomic components and target real usage scenarios.

They are expected to:

- provide ready-to-use interface building blocks;
- remain customizable;
- support real-world use cases;
- go beyond simple showcase examples.

Modular components may be generic or more use-case-oriented, as long as they remain useful and maintainable.

### Status categories
The project uses four public status categories:

- **Core**: recommended first-entry components that represent the library best;
- **Stable**: supported and usable components that are not the main entry points;
- **Experimental**: usable components whose API or behavior may still evolve;
- **Legacy**: components still available but expected to be replaced, reworked, or deprecated later.

## Initial Component Status Proposal

### Core
These are the first components to highlight in the README, playground, and onboarding examples:

- `Button`
- `Input`
- `Title`
- `List`
- `Tag`
- `Wrapper`

### Stable
These are important building blocks or reusable components that are considered part of the library, but are not the main discovery path:

- `ButtonGrp`
- `Code`
- `Content`
- `Img`
- `Lame`
- `Table`

Other modular components can progressively move into this category when reviewed and stabilized.

### Experimental
These components are public but still need more review, feedback, or stabilization work:

- `InputSelect`
- `ToggleSwitch`
- `BlocProduct`
- `ExposeProduct`
- `HeadProduct`

### Legacy
No component is explicitly marked as legacy yet.

## API Philosophy

### Main rule
The API should stay simple, consistent, and predictable.

### Styling rule
The default recommendation is to standardize on `className` as the styling extension point.

Why this direction:

- it follows common React conventions;
- it lowers the learning curve;
- it avoids multiplying custom prop names such as `classBtn`, `classTitle`, and others;
- it makes the library easier to understand for external users.

### Styling behavior
The intended behavior is:

- components can work with default sf-Front styling;
- users may extend or replace styling with their own classes;
- the default design system should be treated as a provided styling base, not as a mandatory system.

### Visual vs functional props
The preferred long-term direction is:

- visual customization should pass mainly through CSS classes;
- props should stay mainly functional and semantic.

### Prop conventions
A shared convention should be progressively introduced where relevant, especially for patterns such as:

- `variant`
- `size`
- `disabled`
- `fullWidth`
- `tone`

This convention should only be introduced where it adds real consistency and not as a forced abstraction everywhere.

## Public API Strategy

### Short term
Keep a single public entry point for simplicity.

This matches the current maturity of the project and keeps the package easy to consume.

### Medium term
Sub-entries can be considered later only if a clear need appears, for example:

- documentation clarity;
- package ergonomics;
- import performance concerns;
- better grouping by domain.

The project should not introduce extra export complexity too early.

## Design System Positioning

The default design system is not the only expected way to use the library.

Its role is to:

- provide a ready-to-use visual starting point;
- demonstrate the library style direction;
- help users get immediate results.

But users must remain free to:

- replace the styling;
- mix their own CSS with the provided components;
- ignore the default design system without losing the usefulness of the component logic.

## Playground Strategy

## Goal
The playground should live inside the project and use the local library source directly.

It should serve as:

- local interactive documentation;
- a visual testing surface during development;
- a future-facing base for public component discovery.

## Initial scope
The first version of the playground should focus on:

- core and stable components first;
- one page per component;
- sidebar navigation;
- live preview;
- key props overview;
- code snippets;
- a few clear usage variants.

## What not to do at first
The first version should avoid trying to solve everything at once.

It should not start with:

- advanced sandbox editing;
- full theming controls;
- advanced accessibility dashboards;
- a large separate documentation framework.

## Evolution path
The playground can later evolve into a stronger public documentation experience, but the first step should remain lightweight and maintainable.

## Project Evolution Rules

### Accept features when they:

- reinforce the atomic/modular philosophy;
- improve reusability;
- simplify real interface building;
- remain maintainable by a solo developer.

### Reject or postpone features when they:

- create heavy maintenance cost;
- add complexity without clear value;
- blur the project identity;
- push the library toward a heavy framework model.

## Short-Term Priorities

1. Clarify component status in documentation.
2. Stabilize API conventions.
3. Align styling customization around a consistent React-friendly pattern.
4. Build the integrated playground around core components first.
5. Expand stability gradually instead of widening the scope too fast.

## Working Definition

sf-Front is a React component library built around reusable atomic components, modular ready-to-use building blocks, and a lightweight default design system that users can fully replace with their own CSS when needed.
