# Changelog

All notable changes to this project will be documented in this file.

The format is version-based and organized by project area. Breaking changes must always be called out explicitly, including during the `0.x` phase.

## [0.14.0] - Unreleased

### Components
- Renamed `GptCards` to `CardGroup`.
- Renamed `GptTabs` to `InteractiveTabs`.
- Removed the unfinished `GptAccordion` component.
- Cleaned up `ButtonGrp` by removing dead props and unused classes, and improving `children` handling.

### Styles
- Added the `build:scss` script and clarified the SCSS build pipeline.

### Tooling
- Added ESLint configuration and project lint scripts.
- Added initial unit tests for `Input` and `Button`.

### CI
- Added a simple GitHub Actions workflow for install, build, and test checks.
- Added a dedicated `test:ci` script using `--passWithNoTests` for CI.

### Breaking Changes
- `GptCards` has been replaced by `CardGroup`.
- `GptTabs` has been replaced by `InteractiveTabs`.
- `GptAccordion` has been removed.

## [0.13.1] - 2026-03-20

### Components
- Fixed `Input` label and id association.
- Fixed `List` external link behavior.
- Decoupled `Button`, `Img`, and `Tag` from `react-router-dom`.
- Improved accessibility across several components.
- Audited and corrected risky default props.

## [0.13.0] - 2026-03-18

### Tooling
- Moved `react` and `react-dom` to `peerDependencies`.
- Removed development-only packages from runtime dependencies.
- Validated package generation locally before publication.
- Fixed a public export issue related to `WrapperExample`.

### Docs
- Cleaned up and clarified the README.
- Moved contribution and release notes into `CONTRIBUTING.md`.
- Documented peer dependency requirements more clearly.

### Notes
- Cross-platform build validation remained planned as a follow-up.

## [0.12.0] - 2024-05-08

### Components
- Added title and `iconsTitle` props to `HeadBar`.
- Added the `ToggleSwitch` component.

### Styles
- Updated `Breadcrumb`.
- Added the `toggle-switch` class for `ToggleSwitch`.

## [0.11.4 - 0.11.12] - 2024-04-30

### Components
- Minor modifications across the library.

## [0.11.0] - 2024-04-14

### Components
- Added `variant` and `size` props to `Button`.
- Updated the `HeadBar` logo.
- Added the `Tooltip` component.

### Styles
- Removed the `position` property from `_sidebar`.
- Added rounded corners to `_progress_bar`.

## [0.10.0] - 2023-09-03

### Components
- Added the `GptAccordion` component.

### Styles
- Added the `accordion` class.

## [0.9.0] - 2023-09-02

### Components
- Added the `Carousel` composite component.

### Styles
- Added the `gpt-list` class.

## [0.8.0] - 2023-09-01

### Components
- Added the `Cards` composite component.

### Styles
- Added the `$color-grey5` variable.
- Added the `cards` class.
- Updated the `sidebar` class.

## [0.7.0] - 2023-09-01

### Components
- Added `BlocInformation`.
- Added the `Table` composite component.
- Added the `SideBar` composite component.

## [0.6.0] - 2023-08-31

### Components
- Added `Cards.Header`, `Cards.Body`, and `Cards.Footer`.
- Added `className` support to `Footer`.
- Made `HeadBar` icons optional.
- Changed image sizing in `HeadProduct`.
- Updated `ProgressBar` to accept an integer instead of a string.
- Allowed `Tag` to contain a link.

### Styles
- Added PrismJS integration.
- Refactored CSS class names.
- Added new gray variables and a font file.

## [0.5.0] - 2023-08-27

### Components
- Added the `additionalContent` prop to `Alert`.
- Turned `Cards` into a composite component with `Header`, `Body`, and `Footer`.
- Added `GptCards` to handle card layout and alignment.

### Styles
- Added font size and font weight variables.
- Added rounded support to `_tag`.
- Updated `_cards` to match React behavior changes.
- Added the `_font` file.
- Updated `_alert` to match the component changes.

## [0.4.0] - 2023-08-27

### Components
- Added the `Code` component.
- Updated `List` to convert `a.href` values to `Link.to`.
- Added a `data` prop to `HeadBar` for navigation links.
- Replaced cat images with fakeimg in `HeadProduct`.

### Styles
- Added the `$color-grey2` variable.
- Added the `_code` style file.

## [0.3.0] - 2023-08-26

### Components
- Added `Lame`.
- Updated `List` to manage received links.
- Added `GptTabs` and `Tabs`.
- Added `Footer` and `HeadBar`.
- Added `BlocProduct`, `HeadProduct`, and `ExposeProduct`.
- Reorganized block components into modules.

### Styles
- Overhauled `_variables` and introduced a new font.
- Updated `_list` and `_tag`.
- Added form styles in `_input` for checkbox and radio inputs.
- Added global utility classes for links, alignment, and images.
- Reworked status color classes.
- Added the `_tabs` class.
- Updated navigation-related styles.
- Added product-related style files.

## [0.2.0] - 2023-01-06

### Components
- Added `Breadcrumb` and `Tag`.
- Renamed `Notification` to `Alert`.
- Added `type` and `icon` props to `Alert`.
- Removed `Skills`.

### Styles
- Added `bread` and `tag` classes.
- Updated variables and alert styles.
- Updated `bloc_information` and `status`.
- Added global SCSS styles.
- Removed `_skills.scss`.

## [0.1.0] - 2023-01-06

### Components
- Added the initial base components: `Button`, `Content`, `List`, `Img`, `Title`, and `Wrapper`.
- Added the initial block components: `ProgressBar`, `BlocInformation`, `Cards`, `NavBar`, `Alert`, and `Skills`.
- Added the initial form components: `Input` and `InputSelect`.

### Styles
- Added the initial component styles for the base, block, and form components.
- Added utilities including variables, base styles, bootstrap helpers, and responsive helpers.
