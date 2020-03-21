import { createContext, useCallback } from "react"
import React, { useState, useMemo } from "react"

import { LOCAL_STORAGE_THEME_NAME } from "../constants"
import MyStorage from "../utils/MyStorage"

export type ThemeModeType = "dark" | "light"
export interface ThemeContextType {
  themeMode: ThemeModeType
  changeTheme: (theme: ThemeModeType) => void
}

const initialContext: ThemeContextType = {
  themeMode: "light",
  changeTheme: () => {},
}

const ThemeContext = createContext(initialContext)

const ThemeContextProvider: React.FC = props => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(
    initialContext.themeMode,
  )

  const wilfredStorage = new MyStorage()

  // Use matchMedia to check the user preference

  React.useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
    const handleListener = (mediaQuery: MediaQueryListEvent) => {
      toggleDarkTheme(mediaQuery.matches)
      const isDark: ThemeModeType = mediaQuery.matches ? "dark" : "light"

      setThemeMode(isDark)
    }

    prefersDark.addListener(handleListener)

    return () => prefersDark.removeListener(handleListener)
  }, [themeMode])
  // Listen for changes to the prefers-color-scheme media query

  // Add or remove the "dark" class based on if the media query matches
  function toggleDarkTheme(shouldBeDark: boolean) {
    document.body.classList.toggle("dark", shouldBeDark)
  }

  React.useEffect(() => {
    document.body.classList.toggle("light") //default
    async function getThemeReady() {
      // const isThemeLocal: ThemeModeType | null = localStorage.getItem(
      //   config.LOCAL_STORAGE_THEME_NAME
      // ) as any;

      const isThemeLocal: ThemeModeType | null = (await wilfredStorage.getItem(
        LOCAL_STORAGE_THEME_NAME,
      )) as ThemeModeType

      if (isThemeLocal) {
        console.log("is Theme Local = true")
        toggleDarkTheme(isThemeLocal === "dark")

        if (isThemeLocal !== initialContext.themeMode) {
          setThemeMode(isThemeLocal)
        } else {
          setThemeMode(initialContext.themeMode)
        }
      } else {
        wilfredStorage.setItem({
          key: LOCAL_STORAGE_THEME_NAME,
          value: initialContext.themeMode,
        })
        // toggleDarkTheme(initialContext.themeMode === "dark")

        // localStorage.setItem(
        //   config.LOCAL_STORAGE_THEME_NAME,
        //   initialContext.themeMode
        // );
        console.log("is Theme Local = false")
      }
    }

    getThemeReady()
  }, [wilfredStorage])

  const memoTheme = useMemo(
    () => ({
      themeMode,
      setThemeMode,
    }),
    [themeMode, setThemeMode],
  )

  const changeTheme = useCallback(
    (t: ThemeModeType) => {
      // localStorage.setItem(config.LOCAL_STORAGE_THEME_NAME, t);
      wilfredStorage.setItem({
        key: LOCAL_STORAGE_THEME_NAME,
        value: t,
      })
      toggleDarkTheme(t === "dark")
      setThemeMode(t)
    },

    [setThemeMode, wilfredStorage],
  )
  //   function changeTheme(t: ThemeModeType){

  //   }

  return (
    <ThemeContext.Provider
      value={{
        themeMode: memoTheme.themeMode,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
