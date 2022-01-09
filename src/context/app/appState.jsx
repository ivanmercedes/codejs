import { useReducer } from "react";
import appContext from "./appContext";
import appReducer from "./reducer";
import { types } from "../../types";
import { getDbData, setDbData } from "../../helpers/database";

const appState = ({ children }) => {
  const initialState = {
    code: "",
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  // Get code
  const setInitialState = async () => {
    const data = getDbData();
    console.log(data);
    dispatch({
      type: types.getOldCode,
      payload: data,
    });
  };

  const updateStateCode = (value) => {
    console.log(value);
    setDbData(value);
    dispatch({
      type: types.updateCode,
      payload: value,
    });
  };

  return (
    <appContext.Provider
      value={{
        code: state.code,
        setInitialState,
        updateStateCode,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default appState;
