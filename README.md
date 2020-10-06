# Combase

-   ⚛️ Open-source Customer Support Dashoard (PWA) built with React
-   🧩 Customer-Facing, Embeddable Widget
-   🦄 UI Component Library & Styling System powered by Styled Components & Storybook
-   👨‍🔬 Tooling Pipeline with Rollup (for shared libraries), Jest, ESLINT & more.

## Contents

-   [Contents](#contents)
-   [Setup](#setup)
    -   [Pre-Requisites](#pre-requisites)
    -   [Installation](#installation)
    -   [Workspace Tips](#workspace-tips)
-   [Usage](#usage)
    -   [UI & Styling Library](#ui-&-styling-library)
    -   [Dashboard](#dashboard)
    -   [Linting & Testing](#linting-&-testing)

## Setup

### Pre-Requisites

-   Yarn ^1.x
-   Node ^14.x

### Installation

```bash
git clone git@github.com:GetStream/combase.git
cd combase
yarn
```

### Workspace Tips

```bash
yarn workspace <workspace_name> <command>
```

This will run the chosen Yarn command in the selected workspace.

Example:

```bash
yarn workspace @combase/dashboard add react-router-dom --dev
```

This will add `react-router-dom` as a dev dependency in the `@combase/dashboard` package, you can any package-specific script in this way.

We have also included some handy root-level scripts to run commands across the entire workspace, or within multiple packages in parallel.

```json
    "scripts": {
        "bootstrap": "npx lerna bootstrap --use-workspaces", // Links together our shared packages locally
        "build": "npx lerna exec --parallel -- yarn build", // runs yarn build for every package in parallel
        "build:storybook": "build-storybook", // builds the production storybook
        "coverage": "jest --coverage", // runs jest for entire workspace, with coverage report
        "lerna:clean": "npx lerna clean", // Clear node_modules for all packages.
        "lerna:changed": "npx lerna changed", // Show which packages have changed since the last publish
        "lerna:version": "npx lerna version", // Generate version tags for each package and simulate a release.
        "lint": "eslint . --ext .js", // Run linting across all workspaces
        "publish": "yarn build && npx lerna publish --silent", // publishes all packages with changes to npm with Lerna.
        "start:dashboard": "yarn workspace @combase/dashboard start", // starts the development server for the dashboard pwa.
        "start:storybook": "start-storybook -p 9000", // starts the storybook component & design-system development server.
        "unit": "jest" // runs jest for entire workspace
    }
```

> Note: Run `yarn bootstrap` whenever we add a new package to the monorepo.

## Usage

### UI & Styling Library

To develop new components in an isolated environment and test visually, run the following script:

```bash
yarn start:storybook
```

### Dashboard

To start up the CRA development server for the `@combase/dashboard` run the following script:

```bash
yarn start:dashboard
```

### Widget

[WIP]

### Linting & Testing

```bash
yarn unit # or
yarn coverage
```
