import { createContext, useState } from "react";

export const Language = createContext()

export const LanguageProvider = ({children}) =>{

    const [lang, setLang] = useState("en")

    const values ={
        lang,
        setLang
    }

    return <Language.Provider value={values}>{children}</Language.Provider>
}

