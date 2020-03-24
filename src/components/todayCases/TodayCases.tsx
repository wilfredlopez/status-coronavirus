import { IonGrid, IonText } from "@ionic/react"
import React from "react"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import TopDeaths from "../topDeaths/TopDeaths"
import TopCases from "./TopCases"
import "./todayCases.css"
const TodayCasesLanguage: ComponentLanguageMap<{
  TopToday: string
  TopCases: string
}> = {
  EN: {
    TopToday: `Today's Deaths (Top 10 Countries)`,
    TopCases: `Today's Cases (Top 10 Countries)`,
  },
  ESP: {
    TopToday: `Muertes Hoy (Top 10 Paises)`,
    TopCases: "Casos Hoy (Top 10 Paises)",
  },
}

const TodayCases = () => {
  const { language } = useLanguageContext()
  return (
    <IonGrid>
      <div className="wrapper text-upper container-md ">
        <IonText className="title-size" color="primary">
          {TodayCasesLanguage[language].TopCases}
          {/* Coronavirus COVID-19 Global Cases */}
        </IonText>
      </div>
      <TopCases />
      <hr className="special-divider" />
      <div className="wrapper text-upper container-md ">
        <IonText className="title-size" color="danger">
          {TodayCasesLanguage[language].TopToday}
          {/* Coronavirus COVID-19 Global Cases */}
        </IonText>
      </div>
      <TopDeaths />
    </IonGrid>
  )
}

export default TodayCases
