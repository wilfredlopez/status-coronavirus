import { IonBackButton, IonButtons, IonContent, IonPage } from "@ionic/react"
import React from "react"
import { useHistory } from "react-router"
import AppHeader from "../components/AppHeader"
import CountryDetailContent from "../components/contryDetailContent/countryDetailContent"
import { Country } from "../interfaces/ApiResponse"
import "./countries.css"

const CountriesDetail: React.FC = () => {
  const [country, setCountry] = React.useState<Country | null>(null)

  const history = useHistory()

  React.useEffect(() => {
    const countryName = history.location.pathname.split("/")[2]

    fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setCountry(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [history])

  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText={country?.country.toUpperCase() ?? "Country"}>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/countries">Back</IonBackButton>
          </IonButtons>
        </AppHeader>
        <CountryDetailContent countrie={country} />
      </IonContent>
    </IonPage>
  )
}

export default CountriesDetail
