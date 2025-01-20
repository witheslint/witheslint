# Contributing Guide

Hi! We are really excited that you are interested in contributing. Before submitting your contribution, please make sure to take a moment and read through the following guide.

## Set up your local development environment

This repository is a monorepo using pnpm workspaces. The package manager used to install and link dependencies must be [pnpm](https://pnpm.io/).

To develop this project, follow these steps:

1. Fork this repository to your own GitHub account and then clone it to your local environment.

2. Ensure you are using the latest Node.js LTS (>= 20.x).

3. If you are working on multiple projects with different versions of pnpm, it's recommended to enable [corepack](https://github.com/nodejs/corepack) by running `corepack enable`.

4. Install dependencies: run `pnpm install --frozen-lockfile` from project's root folder.

## Development Workflow

If you are working on a new feature or bug, follow these steps:

1. Check out a branch where you can work and commit your changes:

```shell
git checkout -b feature/xx # or bugfix/xx
```

2. Add the changes to the codebase.

3. Commit and push your changes to your fork using [**conventional commits**](#commit-convention). Then, create a **`Pull Request`** to the **`main`** branch of this repository:

```shell
git add .
git commit -m "feat: my new feature"
git push origin feature/xx
```
> If you don't know how to send a Pull Request, we recommend reading the [**guide**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).


## Commit Convention

We use [**conventional commits**](https://www.conventionalcommits.org/) for commit messages, which allows the changelog to be auto-generated based on the commits. Please read the guide through if you aren't familiar with it already.

Only `feat:` and `fix:` commits will appear in the changelog. For documentation or maintenance changes, use `docs:` or `chore:` respectively.
