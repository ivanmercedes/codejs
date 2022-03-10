import { useContext, useEffect } from "react";
import useSandboxConsole from "../hooks/useSandboxConsole";

import styled from "styled-components";

const Div = styled.div`
  padding: 0;
  font-size: 1.3rem;
  width: 100%;
  font-family: Consolas, "Courier New", monospace;

  .number {
    color: #6a6aff;
    font-weight: bold;
  }

  .error {
    color: red;
  }
`;

const Console = () => {
  useSandboxConsole();
  return (
    <>
      <Div className="console-log"></Div>
    </>
  );
};

export default Console;
