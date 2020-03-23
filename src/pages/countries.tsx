import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import CountriesPageContent from "../components/countriesContent/countriesPageContent"
import { CountriesApiRes } from "../interfaces/ApiResponse"
import "./countries.css"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"

const CountriesLanguage: ComponentLanguageMap<{ Title: string }> = {
  EN: {
    Title: "Countries",
  },
  ESP: {
    Title: "Paises",
  },
}

const Countries: React.FC = () => {
  const [countries, setCountries] = React.useState<CountriesApiRes>([])
  const { language } = useLanguageContext()
  React.useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/countries")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCountries(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText={CountriesLanguage[language].Title} />

        {countries.length > 0 && <CountriesPageContent data={countries} />}
      </IonContent>
    </IonPage>
  )
}

export default Countries
