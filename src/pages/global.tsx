import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import GlobalPageContent from "../components/globalPageContent"
import { useCountriesContext } from "../context/countriesContext"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"
import "./global.css"

const GlobalLanguage: ComponentLanguageMap<{ title: string }> = {
  EN: {
    title: "Global Cases - COVID-19 ",
  },
  ESP: {
    title: "Casos Globales - COVID-19",
  },
}

const Global: React.FC = () => {
  const { language } = useLanguageContext()
  const { globalData } = useCountriesContext()
  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText={GlobalLanguage[language].title} />

        <GlobalPageContent data={globalData} />
      </IonContent>
    </IonPage>
  )
}

export default Global
