import React from "react"
import { ThemeContextProvider } from "./context/themeContext"

interface Props {}

class RootProvider extends React.Component<Props> {
  render() {
    return <ThemeContextProvider>{this.props.children}</ThemeContextProvider>
  }
}

export default RootProvider
