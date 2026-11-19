import PresetPicker from "./PresetPicker.jsx";
import Sliders from "./Sliders.jsx";
import ToolButtons from "./ToolButtons.jsx";

function Panel({ editor, dispatch }) {
  return (
    <aside className="panel">
      <PresetPicker preset={editor.preset} dispatch={dispatch} />
      <Sliders editor={editor} dispatch={dispatch} />
      <ToolButtons dispatch={dispatch} />
    </aside>
  );
}

export default Panel;
