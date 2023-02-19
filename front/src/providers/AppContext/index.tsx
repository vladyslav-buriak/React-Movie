import { createContext, useEffect } from "react";
import { useReducer } from "react";
import { useInitialState } from "./useInitialState";
import { childType } from "../../types";
import { contextType } from "../../types";
import { localesAction } from "../../types";
import { localesState } from "../../types";
import { setLsLanguage } from "../../localStorage";

export const AppContext = createContext({} as contextType);

const reducer = (state: localesState, action: localesAction) => {
  switch (action.type) {
    case "SET_LOCALE_LANGUAGE": {
      setLsLanguage("locale", action.locale);
      return { ...state, locale: action.locale };
    }
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: childType) => {
  const initialState = useInitialState();

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
