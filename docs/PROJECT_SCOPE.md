# SimpleFramework Front - Project Scope

## Overview

SimpleFramework Front is a React component library published on npm as `simpleframework-front`.

The project focuses on reusable atomic components, modular building blocks, and a customizable styling foundation. Its goal is to help developers build interfaces faster without locking them into a rigid structure or fixed design system.

## Project Direction

SimpleFramework Front is intended to remain:

- simple to understand
- modular in structure
- customizable in styling and integration
- consistent in public API direction
- progressive in how it evolves

The project does not aim to become a heavy framework.

## Library Model

The package is built around two main ideas:

- atomic components, which act as reusable building blocks
- modular components, which combine those building blocks into more complete UI pieces

This structure should remain central to the package as it evolves.

## Public API Direction

The public API should stay:

- clear
- predictable
- reasonably consistent across components
- focused on practical reuse rather than excessive abstraction

When possible, the package should move toward shared prop conventions, but without forcing uniformity where it does not improve usability.

## Styling Direction

SimpleFramework Front ships with a default styling foundation, but that styling should remain optional.

Consumers should be able to:

- use the provided styles as a starting point
- extend them with their own classes
- replace them entirely with their own CSS if needed

The styling layer should help adoption, not constrain integration.

## Component Stability Framing

The current public messaging uses a lightweight stability framing:

- `Core`: components recommended as first entry points
- `Stable`: public and maintained components

This framing is meant to keep the package easier to understand while API stabilization is still ongoing.

## Current Focus

Current work is mainly focused on:

- stabilizing Core components first
- improving API consistency across atomic components
- continuing TypeScript migration progressively
- consolidating packaging for better compatibility with modern tooling
- continuously improving documentation and examples

## Packaging Direction

The package should remain simple to consume while improving compatibility with modern tooling over time.

Short-term and medium-term packaging decisions should prioritize:

- clarity for consumers
- minimal unnecessary runtime assumptions
- compatibility with modern build tools
- a package surface that remains understandable

## Playground Direction

A local integrated playground/documentation environment is planned inside the repository.

Its purpose is to support:

- visual component documentation
- quick local testing during development
- concrete examples for the most important components

The first version should remain simple and focused.

## Scope Guardrails

Changes are aligned with the project scope when they:

- reinforce the atomic/modular model
- improve reusability
- clarify the public API
- make the package easier to adopt or maintain

Changes should be questioned when they:

- add complexity without clear value
- blur the package identity
- introduce unnecessary consumer constraints
- push the project toward a framework-like scope

## Short Definition

SimpleFramework Front is a React component library published on npm as `simpleframework-front`, built around reusable atomic components, modular building blocks, and a customizable styling foundation, while still giving users freedom over integration and CSS.
