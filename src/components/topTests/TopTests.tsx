import { IonCol, IonItem, IonLabel, IonList, IonText } from "@ionic/react"
import React from "react"
import { useCountriesContext } from "../../context/countriesContext"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import { formatNumber } from "../../utils/formatNumber"

const TopTestsLanguage: ComponentLanguageMap<{
  Overall: string
  TopToday: string
}> = {
  EN: {
    Overall: "Total Tested",
    TopToday: `Tested Per One Million`,
  },
  ESP: {
    Overall: "Pruevas en Total",
    TopToday: `Pruevas Por Millon`,
  },
}

const TopTests = () => {
  const { countries } = useCountriesContext()
  const { language } = useLanguageContext()

  return (
    <div className="container-md">
      <IonCol>
        <IonText className="title-size">
          {TopTestsLanguage[language].Overall}
        </IonText>
        <IonList>
          {/* <IonListHeader>
          <IonText className="text-center">Top Tests by Country</IonText>
        </IonListHeader> */}
          {countries
            .filter((c) => c.country !== "World")
            .sort((a, b) => (a.totalTests > b.totalTests ? -1 : 1))
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.totalTests + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>
                    {i + 1}- {c.country}
                  </IonLabel>
                  <IonText color="success">
                    <strong>{formatNumber(c.totalTests)}</strong>
                  </IonText>
                </IonItem>
              )
            })}
        </IonList>
      </IonCol>
      <IonCol>
        <IonText className="title-size">
          {TopTestsLanguage[language].TopToday}
        </IonText>
        <IonList>
          {countries
            .filter((c) => c.country !== "World")
            .sort((a, b) =>
              a.testsPerOneMillion > b.testsPerOneMillion ? -1 : 1,
            )
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.testsPerOneMillion + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>
                    {i + 1}- {c.country}
                  </IonLabel>
                  <IonText color="success">
                    <strong>{formatNumber(c.testsPerOneMillion)}</strong>
                  </IonText>
                </IonItem>
              )
            })}
        </IonList>
      </IonCol>
    </div>
  )
}

export default TopTests
