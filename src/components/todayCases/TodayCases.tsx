import { IonGrid, IonText, IonRow, IonCol } from "@ionic/react"
import React from "react"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import TopDeaths from "../topDeaths/TopDeaths"
import "./todayCases.css"
import TopCases from "./TopCases"
import TopTests from "../topTests/TopTests"
const TodayCasesLanguage: ComponentLanguageMap<{
  TopToday: string
  TopCases: string
  Tests: string
}> = {
  EN: {
    TopToday: `Deaths (Top 10 Countries)`,
    TopCases: `Cases (Top 10 Countries)`,
    Tests: "Tests (Top 10)",
  },
  ESP: {
    TopToday: `Muertes (Top 10 Paises)`,
    TopCases: "Casos (Top 10 Paises)",
    Tests: "Pruevas (Top 10)",
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
      <hr className="special-divider" />
      <IonRow>
        <IonCol sizeSm="10" offsetSm="1" className=" ">
          <div className="ion-text-center">
            <IonText
              className="title-size ion-text-center text-upper "
              color="success"
            >
              {TodayCasesLanguage[language].Tests}
            </IonText>
          </div>
          <TopTests />
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default TodayCases
