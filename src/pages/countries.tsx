import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import CountriesPageContent from "../components/countriesContent/countriesPageContent"
import { useCountriesContext } from "../context/countriesContext"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"
import "./countries.css"

const CountriesLanguage: ComponentLanguageMap<{ Title: string }> = {
  EN: {
    Title: "Countries",
  },
  ESP: {
    Title: "Paises",
  },
}

const Countries: React.FC = () => {
  const { language } = useLanguageContext()
  const { countries } = useCountriesContext()

  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText={CountriesLanguage[language].Title} />

        {countries.length > 0 ? (
          <CountriesPageContent data={countries} />
        ) : (
          <div>
            <h2 className="text-center">Loading...</h2>
          </div>
        )}
      </IonContent>
    </IonPage>
  )
}

export default Countries
