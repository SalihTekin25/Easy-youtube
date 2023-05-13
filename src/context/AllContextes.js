import { createContext, useContext, useEffect, useState } from "react";

export const AllContextes = createContext();

export const AllContextesProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("language") || "en");
  const [format, setFormat] = useState("audioandvideo");
  const [quality, setQuality] = useState();

  useEffect(() => {
    if (format === "audioonly") {
      setQuality(null);
    } else {
      setQuality("lowest");
    }
  }, [format]);

  const values = {
    lang,
    setLang,
    setFormat,
    format,
    quality,
    setQuality,
  };
  return (
    <AllContextes.Provider value={values}>{children}</AllContextes.Provider>
  );
};

export const useAllContext = () => useContext(AllContextes);

