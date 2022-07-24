import { createContext, useEffect, useState } from "react";

export const Language = createContext()

export const LanguageProvider = ({children}) =>{

    const [lang, setLang] = useState(localStorage.getItem("language") || "en")

    useEffect(() => {
		localStorage.setItem("language", lang);
	}, [lang]);

    const values ={
        lang,
        setLang
    }

    return <Language.Provider value={values}>{children}</Language.Provider>
}

