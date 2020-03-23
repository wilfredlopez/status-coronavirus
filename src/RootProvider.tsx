import React from "react"
import { ThemeContextProvider } from "./context/themeContext"
import { LanguageContextProvider } from "./context/LanguageContext"
import { CountriesContextProvider } from "./context/countriesContext"

interface Props {}

class RootProvider extends React.Component<Props> {
  render() {
    return (
      <ThemeContextProvider>
        <CountriesContextProvider>
          <LanguageContextProvider>
            {this.props.children}
          </LanguageContextProvider>
        </CountriesContextProvider>
      </ThemeContextProvider>
    )
  }
}

export default RootProvider
