export const initialEditor = {
  photo: "fjord",
  preset: "original",
  brightness: 100,
  contrast: 100,
  saturation: 100,
  sepia: 0,
  rotation: 0,
  flipped: false,
};

export function editorReducer(editor, action) {
  switch (action.type) {
    case "slider_moved":
      return { ...editor, [action.name]: action.value };

    case "rotated_left":
      return {
        ...editor,
        rotation: editor.rotation === 0 ? 270 : editor.rotation - 90,
      };

    case "edits_reset":
      editor.preset = "original";
      editor.brightness = 100;
      editor.contrast = 100;
      editor.saturation = 100;
      editor.sepia = 0;
      editor.rotation = 0;
      editor.flipped = false;
      return editor;

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
