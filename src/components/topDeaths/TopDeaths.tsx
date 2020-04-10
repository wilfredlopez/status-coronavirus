import { IonCol, IonItem, IonLabel, IonList, IonText } from "@ionic/react"
import React from "react"
import { useCountriesContext } from "../../context/countriesContext"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import { formatNumber } from "../../utils/formatNumber"
import { EXCLUDED_COUNTRY_NAMES } from "../../constants"

const TopDeathsLanguage: ComponentLanguageMap<{
  Overall: string
  TopToday: string
}> = {
  EN: {
    Overall: "Total Deaths",
    TopToday: `Today's Deaths`,
  },
  ESP: {
    Overall: "Muertes en Total",
    TopToday: `Muertes Hoy`,
  },
}

const TopDeaths = () => {
  const { countries } = useCountriesContext()
  const { language } = useLanguageContext()

  return (
    <div className="container-md">
      <IonCol>
        <IonText className="title-size">
          {TopDeathsLanguage[language].Overall}
        </IonText>
        <IonList>
          {/* <IonListHeader>
          <IonText className="text-center">Top Deaths by Country</IonText>
        </IonListHeader> */}
          {countries
            .filter(
              (c) =>
                !EXCLUDED_COUNTRY_NAMES.some(
                  (v) => v.toLowerCase() === c.country.toLowerCase(),
                ),
            )
            .sort((a, b) => (a.deaths > b.deaths ? -1 : 1))
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.deaths + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>
                    {i + 1}- {c.country}
                  </IonLabel>
                  <IonText color="danger">
                    <strong>{formatNumber(c.deaths)}</strong>
                  </IonText>
                </IonItem>
              )
            })}
        </IonList>
      </IonCol>
      <IonCol>
        <IonText className="title-size">
          {TopDeathsLanguage[language].TopToday}
        </IonText>
        <IonList>
          {countries
            .filter(
              (c) =>
                !EXCLUDED_COUNTRY_NAMES.some(
                  (v) => v.toLowerCase() === c.country.toLowerCase(),
                ),
            )
            .sort((a, b) => (a.todayDeaths > b.todayDeaths ? -1 : 1))
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.deaths + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>
                    {i + 1}- {c.country}
                  </IonLabel>
                  <IonText color="danger">
                    <strong>{formatNumber(c.todayDeaths)}</strong>
                  </IonText>
                </IonItem>
              )
            })}
        </IonList>
      </IonCol>
    </div>
  )
}

export default TopDeaths
