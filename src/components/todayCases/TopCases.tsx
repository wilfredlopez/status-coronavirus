import { IonCol, IonItem, IonLabel, IonList, IonText } from "@ionic/react"
import React from "react"
import { useCountriesContext } from "../../context/countriesContext"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import { formatNumber } from "../../utils/formatNumber"

const TopDeathsLanguage: ComponentLanguageMap<{
  Overall: string
  TopToday: string
}> = {
  EN: {
    Overall: "Total Cases",
    TopToday: `Today's Cases`,
  },
  ESP: {
    Overall: "Casos en Total",
    TopToday: `Casos Hoy`,
  },
}

const TopCases = () => {
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
            .filter((c) => c.country !== "World")
            .sort((a, b) => (a.cases > b.cases ? -1 : 1))
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.cases + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>
                    {i + 1}- {c.country}
                  </IonLabel>
                  <IonText>
                    <strong>{formatNumber(c.cases)}</strong>
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
            .filter((c) => c.country !== "World")
            .sort((a, b) => (a.todayCases > b.todayCases ? -1 : 1))
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.cases + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>
                    {i + 1}- {c.country}
                  </IonLabel>
                  <IonText>
                    <strong>{formatNumber(c.todayCases)}</strong>
                  </IonText>
                </IonItem>
              )
            })}
        </IonList>
      </IonCol>
    </div>
  )
}

export default TopCases
