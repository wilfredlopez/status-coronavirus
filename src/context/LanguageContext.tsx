import { createContext, useCallback } from "react"
import React, { useState, useMemo } from "react"

import { LOCAL_STORAGE_LANGUAGE_NAME } from "../constants"
import MyStorage from "../utils/MyStorage"

export type AppLanguages = "EN" | "ESP"

export type ComponentLanguageMap<T extends {}> = { EN: T; ESP: T }

export const Example: ComponentLanguageMap<{ title: string }> = {
  EN: {
    title: "COVID-19 Global Cases",
  },
  ESP: {
    title: "COVID-19 Casos Globales",
  },
}

export interface LanguageContextType {
  language: AppLanguages
  changeLanguage: (language: AppLanguages) => void
}

const initialContext: LanguageContextType = {
  language: "ESP",
  changeLanguage: () => {},
}

const LanguageContext = createContext(initialContext)

const LanguageContextProvider: React.FC = props => {
  const [language, setlanguage] = useState<AppLanguages>(
    initialContext.language,
  )

  const wilfredStorage = new MyStorage()

  React.useEffect(() => {
    async function getlanguageReady() {
      const islanguageLocal = (await wilfredStorage.getItem(
        LOCAL_STORAGE_LANGUAGE_NAME,
      )) as AppLanguages | null

      if (islanguageLocal) {
        console.log("is language Local = true")

        if (islanguageLocal !== initialContext.language) {
          setlanguage(islanguageLocal)
        } else {
          setlanguage(initialContext.language)
        }
      } else {
        wilfredStorage.setItem({
          key: LOCAL_STORAGE_LANGUAGE_NAME,
          value: initialContext.language,
        })
      }
    }

    getlanguageReady()
  }, [wilfredStorage])

  const memolanguage = useMemo(
    () => ({
      language,
      setlanguage,
    }),
    [language, setlanguage],
  )

  const changeLanguage = useCallback(
    (t: AppLanguages) => {
      wilfredStorage.setItem({
        key: LOCAL_STORAGE_LANGUAGE_NAME,
        value: t,
      })
      setlanguage(t)
    },

    [setlanguage, wilfredStorage],
  )

  return (
    <LanguageContext.Provider
      value={{
        language: memolanguage.language,
        changeLanguage,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}

export { LanguageContext, LanguageContextProvider }
