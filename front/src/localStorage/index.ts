export const setLsLanguage = (key: string, lang: string) => {
  if (!window || !window.localStorage) return;
  localStorage.setItem(key, JSON.stringify(lang));
};

export const getLsLanguage = (key: string) => {
  if (!window || !window.localStorage) return null;
  try {
    //@ts-ignore
    return JSON.parse(localStorage.getItem(key));
  } catch (e: any) {
    alert(e.message);
  }
};
