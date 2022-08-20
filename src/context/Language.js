import { createContext, useEffect, useState } from "react";

export const Language = createContext()

export const LanguageProvider = ({children}) =>{

    const [lang, setLang] = useState(localStorage.getItem("language") || "en")
    const [format, setFormat] = useState("mp3")

    useEffect(() => {
		localStorage.setItem("language", lang);
	}, [lang]);

    const values ={
        lang,
        setLang,
        setFormat,
        format
        
    }

    return <Language.Provider value={values}>{children}</Language.Provider>
}

