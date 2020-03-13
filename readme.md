# Front-End Boilerplate (Gulp)

This repository features a basic website project, including a sample SASS and TypeScript directory.

## Installation

Use the following commands once you've cloned this repo, and you've navigated into the folder:

```bash
npm install -g gulp-cli
```

```bash
npm install
```

## Usage

Run Gulp while in the project directory:

```bash
gulp
```

It will automatically watch the `src/scss/` and `src/ts/` folders for changes. Any detected change will trigger a recompile of the respective assets to the `css/` and `js/` folders.

You can cancel the watch using `CTRL + C`, when you're done.

### Additional Commands

If you'd just like to compile SASS, you may run:

```bash
gulp sass
```

If you'd just like to compile TypeScript, you may run:

```bash
gulp tsc
```
