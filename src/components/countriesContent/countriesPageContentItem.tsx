import React from "react"
import { IonItem, IonLabel, IonNote, IonText } from "@ionic/react"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import { Country } from "../../interfaces/ApiResponse"

type IonColorsType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "medium"
  | "dark"

interface Props {
  country: Country
  color?: IonColorsType
}

const CountriesPageContentLanguage: ComponentLanguageMap<{
  //   Header: string
  //   Credits: string
  Cases: string
  Today: string
  Deaths: string
  Recovered: string
  placeHolder: string
  todayDeaths: string
  active: string
}> = {
  EN: {
    Cases: "Cases",
    Deaths: "Deaths",
    Recovered: "Recovered",
    placeHolder: "Search",
    Today: "Cases Today",
    todayDeaths: "Deaths Today",
    active: "Active",
  },
  ESP: {
    Cases: "Casos",
    Deaths: "Muertes",
    Recovered: "Recuperados",
    placeHolder: "Buscar",
    Today: "Casos Hoy",
    todayDeaths: "Muertes Hoy",
    active: "Activos",
  },
}

const CountriesPageContentItem = ({ country, color }: Props) => {
  const { language } = useLanguageContext()
  return (
    <IonItem
      color={color ? color : undefined}
      key={country.country}
      routerLink={`/countries/${country.country}`}
      detail
    >
      <IonLabel className="country-title-label">{country.country}</IonLabel>
      <IonNote
        slot="end"
        style={{ flex: "1 35%", textAlign: "right" }}
        className=" fontsize-1"
      >
        <p>
          <IonText>{CountriesPageContentLanguage[language].Cases}: </IonText>
          <IonText color="primary">
            <strong> {Intl.NumberFormat().format(country.cases)}</strong>
          </IonText>
        </p>
        <p>
          <IonText className="pl-1">
            {CountriesPageContentLanguage[language].Today}:{" "}
          </IonText>
          <IonText color="primary">
            <strong> {Intl.NumberFormat().format(country.todayCases)}</strong>
          </IonText>
        </p>

        <IonText>{CountriesPageContentLanguage[language].Deaths}: </IonText>
        <IonText color="danger">
          <strong> {Intl.NumberFormat().format(country.deaths)}</strong>
        </IonText>
        <p>
          <IonText className="pl-1">
            {CountriesPageContentLanguage[language].todayDeaths} :{" "}
          </IonText>
          <IonText color="danger">
            <strong> {Intl.NumberFormat().format(country.todayDeaths)}</strong>
          </IonText>
        </p>
        <p>
          <IonText>
            {CountriesPageContentLanguage[language].Recovered}:{" "}
          </IonText>
          <IonText color="success">
            <strong> {Intl.NumberFormat().format(country.recovered)}</strong>
          </IonText>
        </p>
        <p>
          <IonText>{CountriesPageContentLanguage[language].active}: </IonText>
          <IonText color="warning">
            <strong> {Intl.NumberFormat().format(country.active)}</strong>
          </IonText>
        </p>
      </IonNote>
    </IonItem>
  )
}

export default CountriesPageContentItem
