import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import TodayCases from "../components/todayCases/TodayCases"
import { useCountriesContext } from "../context/countriesContext"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"
import "./countries.css"

const TopCasesLanguage: ComponentLanguageMap<{ Title: string }> = {
  EN: {
    Title: "Top Cases",
  },
  ESP: {
    Title: "Top Casos",
  },
}

const TopCasesToday: React.FC = () => {
  const { language } = useLanguageContext()
  const { countries } = useCountriesContext()

  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText={TopCasesLanguage[language].Title} />

        {countries.length > 0 ? (
          <TodayCases />
        ) : (
          <div>
            <h2 className="text-center">Loading...</h2>
          </div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default TopCasesToday
