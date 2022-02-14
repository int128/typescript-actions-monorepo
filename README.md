# typescript-actions-monorepo

This is a template of monorepo for GitHub Actions written in TypeScript.
Ready to develop on Visual Studio Code.
It is based on https://github.com/int128/typescript-action.

## Features

- Configuration for both yarn and vscode
  - [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
  - TypeScript
  - Jest
  - ESLint
  - Prettier
- Continuous update of dependencies using Renovate
- Automated release


## Actions

| Name | Description | Status
|------|-------------|-------
| [hello-world](hello-world) | Hello World | [![hello-world](https://github.com/int128/typescript-actions-monorepo/actions/workflows/hello-world.yaml/badge.svg)](https://github.com/int128/typescript-actions-monorepo/actions/workflows/hello-world.yaml)


## Development

### Release workflow

When a pull request is merged into main branch, a new minor release is created by GitHub Actions.
See https://github.com/int128/release-typescript-action for details.

### Dependency update

You can enable Renovate to update the dependencies.
This repository is shipped with the config https://github.com/int128/typescript-action-renovate-config.
