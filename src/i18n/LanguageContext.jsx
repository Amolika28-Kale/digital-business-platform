import React, { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./translations";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const detectLang = () => {
    const saved = localStorage.getItem("lang");
    if (saved) return saved;
    return navigator.language.includes("mr") ? "mr" : "en";
  };

  const [lang, setLang] = useState(detectLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key) =>
    key.split(".").reduce((obj, i) => obj?.[i], translations[lang]) || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
