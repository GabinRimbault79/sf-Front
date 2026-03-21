# Releasing

## Purpose

This document defines the release and changelog conventions used in `sf-Front`.

The goal is to keep releases clear, consistent, and easy to understand for both maintainers and users of the library.

## Versioning

`sf-Front` follows a `major.minor.patch` versioning scheme.

- `patch` is used for small fixes, targeted adjustments, and low-risk improvements.
- `minor` is used for meaningful progress in the library, such as new components, notable quality improvements, tooling upgrades, or API stabilization work.
- `major` is reserved for a mature release milestone. `1.0.0` will mark the point where the library is considered stable enough in terms of components, documentation, and TypeScript support.

The project is currently in a `0.x` phase, which means some API evolution is still expected. However, breaking changes must never be silent.

## Changelog

The changelog lives in [`CHANGELOG.md`](./CHANGELOG.md).

Each release entry should:

- use the version number as the heading
- include the release date, or `Unreleased` for the next version in progress
- group changes by project area when relevant
- describe the user-facing impact of the change in short, concrete bullet points

Preferred changelog sections:

- `Components`
- `Styles`
- `Tooling`
- `CI`
- `Docs`
- `Breaking Changes`

## Breaking Changes

Any breaking change must be explicitly documented in the changelog, including during the `0.x` phase.

Typical examples include:

- renaming a public component
- removing a component
- renaming or removing a public prop
- changing an expected public behavior in an incompatible way

If a release contains a breaking change, add a dedicated `Breaking Changes` section in `CHANGELOG.md`.

## Release Process

Use the following checklist when preparing a release:

1. Finish the current milestone scope.
2. Make sure the relevant checks pass locally.
3. Update `CHANGELOG.md` with the version entry and the notable changes.
4. Bump the version in `package.json`.
5. Create the release commit.
6. Tag and publish the release.

## Notes

The release process is intentionally lightweight. The priority is to keep the project structured and readable without adding unnecessary ceremony.
