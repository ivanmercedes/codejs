import Split from "react-split";
import Console from "./Console";
import MonacoEditor from "./MonacoEditor";

const SplitGrid = () => {
  return (
    <Split
      className="split"
      sizes={[60, 40]}
      minSize={100}
      expandToMin={false}
      gutterSize={10}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <MonacoEditor />
      <Console />
    </Split>
  );
};

export default SplitGrid;
