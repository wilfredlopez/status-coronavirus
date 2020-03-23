import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import GlobalPageContent from "../components/globalPageContent"
import { GlobalApiRes } from "../interfaces/ApiResponse"
import "./global.css"
import useLanguageContext from "../context/useLanguageContext"
import { ComponentLanguageMap } from "../context/LanguageContext"

const GlobalLanguage: ComponentLanguageMap<{ title: string }> = {
  EN: {
    title: "Global Cases - COVID-19 ",
  },
  ESP: {
    title: "Casos Globales - COVID-19",
  },
}

const Global: React.FC = () => {
  const [globalData, setGlobalData] = React.useState<GlobalApiRes | null>(null)
  const { language } = useLanguageContext()

  React.useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setGlobalData(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

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
