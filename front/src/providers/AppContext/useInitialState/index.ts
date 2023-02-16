import { LOCALES } from "../../../config";
import { getLsLanguage } from "../../../localStorage";
export const useInitialState = () => {
  const initialState = {
    //@ts-ignore
    locale: getLsLanguage("locale") || LOCALES.UKRANIAN,
  };

  return { initialState };
};
