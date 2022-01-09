import { useContext, useEffect } from "react";

import Editor from "@monaco-editor/react";
import appContext from "../context/app/appContext";

const MonacoEditor = () => {
  const AppContext = useContext(appContext);
  const { code, setInitialState, updateStateCode } = AppContext;

  const editorDidMount = (editor, monaco) => {
    //  console.log("editorDidMount", code);
    //  editor.focus();
  };

  const editorDidChange = (value, event) => {
    updateStateCode(value);
  };

  useEffect(() => {
    setInitialState();
  }, [code]);

  return (
    <Editor
      height="100vh"
      theme="vs-dark"
      width="100%"
      defaultLanguage="javascript"
      defaultValue={code}
      options={{
        minimap: {
          enabled: false,
        },
        deltaDecorations: false,
      }}
      onMount={editorDidMount}
      onChange={editorDidChange}
    />
  );
};

export default MonacoEditor;
