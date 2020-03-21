import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

const useLanguageContext = () => {
  const { language, changeLanguage } = useContext(LanguageContext)

  return {
    language,
    changeLanguage,
  }
}

export default useLanguageContext
