# Multi-Select Filter

A React-based application with a multi-select filter component, built using Vite, TypeScript, and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
- [Design decisions](#design-decisions)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
  - [Development](#development)
  - [Building for Production](#building-for-production)
  - [Previewing the Production Build](#previewing-the-production-build)
  - [Running Tests](#running-tests)
  - [Linting](#linting)
  - [Storybook](#storybook)
- [Dependencies](#dependencies)

## Overview
This project is a multi-select filter component built with React, TypeScript, and Vite. It uses modern tools like Tailwind CSS for styling, Vitest for testing, and Storybook for component development.

## Design decisions

### 1. **Rendering Strategy for Checkboxes in CheckboxGroup Component**

To ensure simplicity, form integrity, and compatibility with native form behaviors, I made a key design decision regarding how checkbox items are rendered:

> **All checkbox items are always rendered in the DOM, regardless of the current filter input.** When a filter is applied, matching items are shown, and non-matching items are visually hidden, but not removed from the DOM.

#### ✅ Why this approach?

- **Form Submission Compatibility**: By rendering all checkboxes at all times, we can rely on native HTML form submission to include all checked items — even those that are currently filtered out of view. This removes the need for extra state management.
- **State Decoupling**: Avoids complex syncing logic between the visual layer (filtered view) and application state. The DOM acts as the single source of truth.
- **Simplicity**: Keeps the form logic lean and closer to standard HTML behavior, making the component more predictable and maintainable.

### 2. **Localized Data Fetching in a MultiSelectWrapper Component**

To promote simplicity and reusability, the data required for rendering the checkboxes is fetched within a wrapper component located close to the rendering of the checkbox list and the search input.

- `useFetchCheckboxOptions`: This hook fetches the checkbox options keeping the data-fetching logic isolated and reusable.

#### ✅ Why this approach?

- **Component Reusability**: Encapsulating the data-fetching logic within a dedicated wrapper keeps the multi-select filter self-contained and modular, making it easy to reuse or relocate without external dependencies.
- **Simplicity**: Keeping data loading logic close to where the data is used reduces cognitive overhead and makes the component easier to understand and maintain.
- **Avoids Prop Drilling**: By fetching the data locally, there's no need to pass data down from higher-level components, which can complicate the app structure.
- **Separation of Concerns**: This approach ensures that each component has a clear and focused responsibility — the wrapper handles data loading, and the child handles rendering and interaction.

### 3. **Separation of Concerns Using Custom Hooks for Filtering and Selection**

To keep logic clean, modular, and testable, the `MultiSelect` component leverages two custom hooks to manage **selection** and **filtering** independently:

- `useHandleCheckboxChange`: Manages selected checkbox values and persists them in `localStorage`.
- `useFilterCheckboxChange`: Handles dynamic filtering based on user input.

This separation of concerns improves maintainability and makes for easy testing and reusability.

#### ✅ Why this approach?

- **Encapsulation**: Each hook has a single responsibility — one for handling selection logic, the other for filtering based on a search query.
- **Reusability**: These hooks can be easily reused in other components or contexts that require similar selection/filtering behavior.
- **Persistence**: `useHandleCheckboxChange` stores selected values in `localStorage`, ensuring the UI state persists across reloads.
- **Clean Component Logic**: The `MultiSelect` component focuses solely on rendering and UI interaction, offloading logic to hooks.

### 4. **Simple and Clear Naming**

Component and hook names are kept short and descriptive (e.g., `Button` instead of `PrimaryButton`) to match the simplicity and scope of the project.

### 5. **TailwindCSS with Default Styling**

Standard TailwindCSS utility classes were used without heavy customization to keep the styling simple and functional, as the focus was on functionality over pixel-perfect design due to the absence of a detailed design specification.

### 6. **User Feedback via Counters (total, selected, and filtered items)**

To improve usability and compensate for design limitations, three counters were added: total items, selected items, and currently filtered items. These provide real-time feedback to users on the state of their selection.

#### ⚠️ Note:
This is a temporary solution to address clarity issues in the provided design. In a production setting, a better approach would be to display two separate, side-by-side lists: one for unchecked items and another for checked items — each with its own filter. This would make the selection state visually clear and reduce user error.

## Prerequisites
- **Node.js**: Version 18 or later recommended
- **npm**: Included with Node.js (Yarn or pnpm can also be used)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/XanderCodeBase/multi-select-filter
   cd multi-select-filter
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Running the App

### Development
To start the development server with hot reloading:
```bash
npm run dev
```
Open `http://localhost:5173` (or the port shown in the console) in your browser.

### Building for Production
To build the app for production:
```bash
npm run build
```
This compiles TypeScript and builds optimized assets in the `dist` folder.

### Previewing the Production Build
To preview the production build locally:
```bash
npm run preview
```
This serves the built assets, typically at `http://localhost:4173`.

### Running Tests
- Run tests once:
  ```bash
  npm run test
  ```
- Run tests in watch mode:
  ```bash
  npm run test:watch
  ```

### Linting
To check code quality with ESLint:
```bash
npm run lint
```

### Storybook
To run Storybook for component development:
```bash
npm run storybook
```
Access it at `http://localhost:6006`.

To build Storybook for deployment:
```bash
npm run build-storybook
```

## Dependencies
Key dependencies include:
- **React** and **React DOM** (`^19.1.0`)
- **TypeScript** (`~5.8.3`)
- **Vite** (`^6.3.5`) for fast builds
- **Tailwind CSS** (`^4.1.10`) for styling
- **Vitest** (`^3.2.3`) for testing
- **Storybook** (`^9.0.8`) for component development
- **ESLint** (`^9.28.0`) and **Prettier** (`^3.5.3`) for code quality

See `package.json` for the full list.
