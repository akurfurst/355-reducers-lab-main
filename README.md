# Lightbox

The starter project for the SDEV 355 lab on writing a reducer.

A small photo editor. Every control on the page sends an action, and one
reducer, `editorReducer`, decides what each action changes. Only the sliders and
Rotate left work at the start; in the lab you write the rest of the reducer.

## Running it

```bash
npm install
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.

The reducer can also run without React. `check.mjs` sends a list of actions
through it and prints the state after each one:

```bash
node check.mjs start
```

## What is where

| file | what it does |
|---|---|
| `src/state/editorReducer.js` | the editor's state and the reducer that changes it |
| `src/state/presets.js` | the slider values for each preset |
| `src/App.jsx` | holds the `useReducer` and lays out the page |
| `src/components/Preview.jsx` | draws the photo with the current edits |
| `src/components/Panel.jsx` | the preset, the sliders and the buttons |
| `src/components/PhotoStrip.jsx` | the four photos to choose from |
| `check.mjs` | runs the reducer in Node over a list of actions |

## Photos

From [Unsplash](https://unsplash.com/license), by Alexey Topolyanskiy (fjord),
Matthew Wiebe (pug), veeterzy (strawberries) and Marat Gilyadzinov (jellyfish).

## The finished version

The `solution` branch holds the app as it is at the end of the lab:

```bash
git checkout solution
```
