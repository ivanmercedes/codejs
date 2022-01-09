import { types } from "../../types";

const appReducer = (state, action) => {
  switch (action.type) {
    case types.updateCode:
    case types.getOldCode:
      return {
        ...state,
        code: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
