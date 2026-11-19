import { useReducer } from "react";

import { editorReducer, initialEditor } from "./state/editorReducer.js";
import Panel from "./components/Panel.jsx";
import PhotoStrip from "./components/PhotoStrip.jsx";
import Preview from "./components/Preview.jsx";
import { EditorProvider } from "./context/EditorContext.jsx";


function App() {

  return (
    <EditorProvider>
      <div className="app">
        <header className="header">
          <h1 className="header-title">Lightbox</h1>
        </header>
        <main className="workspace">
          <Preview />
          <Panel />
        </main>
        <PhotoStrip />
      </div>
    </EditorProvider>
  );
}

export default App;
