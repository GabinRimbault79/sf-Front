# sf-Front — Vision and Scope

## Overview

sf-Front (SimpleFramework - Front) is a React component library published on npm, designed to provide reusable, modular, and easily customizable components.

The project aims to offer a simple and practical foundation for building React interfaces without imposing a rigid structure or a closed design system.

Its goal is to provide useful, consistent, and evolvable components while giving developers real freedom to customize them.

---

## Positioning

sf-Front does not aim to replicate a full UI ecosystem or become a heavy framework.

Its positioning is simpler:

- provide reusable React components;
- offer both basic building blocks and more advanced UI blocks;
- allow easy customization;
- stay lightweight, readable, and progressive in its evolution.

---

## Goals

sf-Front should make it possible to:

- reuse base components without starting from scratch;
- compose more advanced components from simple building blocks;
- use ready-to-use modular components;
- build consistent interfaces while keeping full control over styling.

The project should remain:

- easy to understand;
- modular;
- customizable;
- maintainable over time;
- consistent in its direction.

---

## Library Structure

### Atomic components

**Atomic** components are the basic building blocks of the library.

They should be:
- simple;
- reusable;
- easy to compose;
- usable with the provided styling or with custom styles.

Examples:
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

**Modular** components are built from atomic components.

Their purpose is to provide:
- more complete UI blocks;
- concrete use cases;
- components that can be used directly in a real project.

A modular component can be more use-case-oriented as long as it remains consistent with the overall philosophy of the library.

---

## Component Status

To clarify the public surface of the library, components can be grouped into four categories:

- **Core**: the components that best represent the library;
- **Stable**: usable and maintained components;
- **Experimental**: components still being stabilized;
- **Legacy**: components temporarily kept but likely to evolve significantly or leave the public scope later.

### Current proposal

#### Core
- `Button`
- `Input`
- `Title`
- `List`
- `Tag`
- `Wrapper`

#### Stable
- `ButtonGrp`
- `Code`
- `Content`
- `Img`
- `Lame`
- `Table`

#### Experimental
- `InputSelect`
- `ToggleSwitch`
- `BlocProduct`
- `ExposeProduct`
- `HeadProduct`

#### Legacy
No component is currently classified as legacy.

---

## API Philosophy

The public API should remain:

- simple;
- consistent;
- predictable;
- homogeneous across components.

### Customization

Visual customization should primarily be handled through CSS classes.

The intended principle is:
- the library can provide a default style;
- that style should be extendable;
- it should also be fully replaceable by the consuming project's own CSS.

The provided design system must never become a constraint.

### Prop conventions

Over time, the library should move toward shared conventions where they make sense, especially for props such as:

- `variant`
- `size`
- `disabled`
- `fullWidth`
- `tone`

Props should remain mainly functional and semantic.  
Visual customization should continue to be handled primarily through CSS classes.

---

## Design System

sf-Front can provide a default design system, but that design system should be treated as a foundation, not as an obligation.

It should offer:
- a quick starting point;
- a consistent visual base;
- styling that is immediately usable.

However, users should still be able to:
- use the components with their own CSS;
- ignore the provided styling if needed;
- keep the component logic without depending on the design system.

---

## Public API and Distribution

sf-Front is designed as an npm package that should remain simple to consume.

### Short term
Keep a single main public entry point.

### Medium term
Later evaluate the value of sub-entries if a real need appears, for example to:
- better organize imports;
- clarify certain categories;
- improve the package’s overall readability.

Simplicity should remain the priority as long as a more complex structure does not provide a clear benefit.

---

## Integrated Playground

The project should include an integrated local playground/documentation environment directly inside the repository.

This playground should make it possible to:
- visualize components;
- document their usage;
- test variants;
- show concrete examples;
- serve as the foundation for more complete interactive documentation.

### First version
The first version of the playground should remain simple:

- focus on core and stable components first;
- one page per component;
- clear navigation;
- visual preview;
- key props;
- usage examples;
- code snippets.

### What to avoid at first
- complex sandboxing;
- advanced theming;
- heavy documentation tooling;
- unnecessary technical overhead.

---

## Evolution Principles

An evolution is relevant if it:

- reinforces the atomic / modular logic;
- improves reusability;
- makes the library clearer or more useful;
- stays consistent with the project’s positioning.

An evolution should be avoided or postponed if it:

- adds complexity without real benefit;
- weakens API consistency;
- blurs the identity of the library;
- pushes the project toward a framework that is too broad or too rigid.

---

## Current Priorities

1. Clarify the role and status of components.
2. Gradually harmonize the public API.
3. Stabilize the most representative components.
4. Build a simple and useful integrated playground.
5. Evolve the library without losing its direction.

---

## Short Definition

sf-Front is a React component library published on npm, built around reusable atomic components, ready-to-use modular components, and a customizable default style, while still giving users full freedom over integration and CSS.
