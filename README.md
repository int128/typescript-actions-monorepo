# typescript-actions-monorepo

This is a template of monorepo for GitHub Actions written in TypeScript.
Ready to develop on Visual Studio Code.

It is based on https://github.com/actions/typescript-action.

## Features

- Configuration for both yarn and vscode
  - [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
  - TypeScript
  - Jest
  - ESLint
  - Prettier
- Continuous update of dependencies
  - Regenerate `dist` on pull request from Renovate


## Example action

[![hello-world](https://github.com/int128/typescript-actions-monorepo/actions/workflows/hello-world.yaml/badge.svg)](https://github.com/int128/typescript-actions-monorepo/actions/workflows/hello-world.yaml)
