import React from "react"
import { ThemeContextProvider } from "./context/themeContext"
import { LanguageContextProvider } from "./context/LanguageContext"

interface Props {}

class RootProvider extends React.Component<Props> {
  render() {
    return (
      <ThemeContextProvider>
        <LanguageContextProvider>{this.props.children}</LanguageContextProvider>
      </ThemeContextProvider>
    )
  }
}

export default RootProvider
