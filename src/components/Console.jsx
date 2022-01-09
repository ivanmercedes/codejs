import { useContext } from "react";
import appContext from "../context/app/appContext";
import logToString from "../hooks/logToString";

import styled from "styled-components";

const Div = styled.div`
  padding: 1rem;
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
  const AppContext = useContext(appContext);
  const { code } = AppContext;
  const response = logToString(code);

  return (
    <Div
      dangerouslySetInnerHTML={{
        __html: response,
      }}
    />
  );
};

export default Console;
