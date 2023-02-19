import { useSearchParams } from "react-router-dom";
import { LOCALES } from "../../../config";
import { getLsLanguage } from "../../../localStorage";

export const useInitialState = () => {
  const [searchParams] = useSearchParams();

  return {
    locale:
      getLsLanguage("locale") ||
      searchParams.get("language") ||
      LOCALES.UKRANIAN,
  };
};
