import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import ExploreContainer from "../components/ExploreContainer"
import "./about.css"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"

const AboutLanguage: ComponentLanguageMap<{ Title: string; name: string }> = {
  EN: {
    Title: "About",
    name: "About This App",
  },
  ESP: {
    Title: "Acerca de",
    name: "Acerca de esta aplicacion",
  },
}

const About: React.FC = () => {
  const { language } = useLanguageContext()
  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText={AboutLanguage[language].Title} />
        <ExploreContainer name={AboutLanguage[language].name} />
      </IonContent>
    </IonPage>
  )
}

export default About
