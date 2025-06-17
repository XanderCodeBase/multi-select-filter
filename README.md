# Multi-Select Filter

A React-based application with a multi-select filter component, built using Vite, TypeScript, and Tailwind CSS.

## Table of Contents
- [Overview](#overview)
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
