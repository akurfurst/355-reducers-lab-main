import { useReducer } from "react";

import { editorReducer, initialEditor } from "./state/editorReducer.js";
import Panel from "./components/Panel.jsx";
import PhotoStrip from "./components/PhotoStrip.jsx";
import Preview from "./components/Preview.jsx";

function App() {
  const [editor, dispatch] = useReducer(editorReducer, initialEditor);

  return (
    <div className="app">
      <header className="header">
        <h1 className="header-title">Lightbox</h1>
      </header>
      <main className="workspace">
        <Preview editor={editor} />
        <Panel editor={editor} dispatch={dispatch} />
      </main>
      <PhotoStrip current={editor.photo} dispatch={dispatch} />
    </div>
  );
}

export default App;
