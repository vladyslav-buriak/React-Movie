import React, { Fragment } from "react";
import { LOCALES } from "../../config";
import { IntlProvider } from "react-intl";
import flatten from "flat";
import messages from "../../messages";

interface IProviderProps {
  children: JSX.Element;
  locale: string;
}

const Provider = ({ children, locale = LOCALES.ENGLISH }: IProviderProps) => (
  <IntlProvider
    textComponent={Fragment}
    locale={locale}
    messages={flatten(messages[locale])}
  >
    {children}
  </IntlProvider>
);

export default Provider;
