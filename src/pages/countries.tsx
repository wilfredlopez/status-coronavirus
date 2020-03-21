import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import CountriesPageContent from "../components/countriesContent/countriesPageContent"
import { CountriesApiRes } from "../interfaces/ApiResponse"
import "./countries.css"

const Countries: React.FC = () => {
  const [countries, setCountries] = React.useState<CountriesApiRes>([])

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
        <AppHeader titleText={"Countries"} />

        <CountriesPageContent data={countries} />
      </IonContent>
    </IonPage>
  )
}

export default Countries
