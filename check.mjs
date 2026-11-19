import { editorReducer, initialEditor } from "./src/state/editorReducer.js";

const runs = {
  start: [
    { type: "slider_moved", name: "brightness", value: 130 },
    { type: "rotated_left" },
    { type: "rotated_left" },
    { type: "preset_chosen", preset: "noir" },
  ],
  presets: [
    { type: "preset_chosen", preset: "warm" },
    { type: "slider_moved", name: "sepia", value: 60 },
    { type: "preset_chosen", preset: "noir" },
  ],
  reset: [
    { type: "preset_chosen", preset: "faded" },
    { type: "rotated_left" },
    { type: "edits_reset" },
    { type: "slider_moved", name: "contrast", value: 120 },
  ],
  rules: [
    { type: "preset_chosen", preset: "noir" },
    { type: "rotated_left" },
    { type: "rotated_right" },
    { type: "rotated_right" },
    { type: "flip_toggled" },
    { type: "photo_chosen", photo: "pug" },
  ],
  own: [
    { type: "preset_chosen", preset: "noir" },
    { type: "rotated_right" },
    { type: "flip_toggled" },
    { type: "straightened" },
  ],
};

const name = process.argv[2];
const actions = runs[name];

if (!actions) {
  console.log(`Name a run: node check.mjs ${Object.keys(runs).join(" | ")}`);
  process.exit(1);
}

let editor = initialEditor;
show("initialEditor", editor);

for (const action of actions) {
  try {
    const next = editorReducer(editor, action);
    const result = next === editor ? "the same object" : "a new object";
    show(`${describe(action)}  ->  ${result}`, next);
    editor = next;
  } catch (error) {
    console.log(`${describe(action)}  ->  ${error.message}\n`);
  }
}

function describe(action) {
  const { type, ...fields } = action;
  const parts = Object.entries(fields).map(([key, value]) => `${key}: ${value}`);
  return [type, ...parts].join("  ");
}

function show(heading, e) {
  console.log(heading);
  console.log(
    `  photo: ${e.photo}   preset: ${e.preset}   rotation: ${e.rotation}   flipped: ${e.flipped}`
  );
  console.log(
    `  brightness: ${e.brightness}   contrast: ${e.contrast}   saturation: ${e.saturation}   sepia: ${e.sepia}\n`
  );
}
