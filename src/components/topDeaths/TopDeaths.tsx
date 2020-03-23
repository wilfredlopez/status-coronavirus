import { IonCol, IonItem, IonLabel, IonList, IonText } from "@ionic/react"
import React from "react"
import { useCountriesContext } from "../../context/countriesContext"
import { CountriesApiRes } from "../../interfaces/ApiResponse"
import { formatNumber } from "../../utils/formatNumber"

const TopDeaths = () => {
  const { countries } = useCountriesContext()
  const TopCountries: CountriesApiRes = countries
    .sort((a, b) => (a.deaths > b.deaths ? -1 : 1))
    .slice(0, 10)
  //   React.useEffect(() => {
  //     console.log(TopCountries)
  //   }, [countries])
  return (
    <>
      <IonCol>
        <IonText className="title-size">Top Overall Deaths By Country</IonText>
        <IonList>
          {/* <IonListHeader>
          <IonText className="text-center">Top Deaths by Country</IonText>
        </IonListHeader> */}
          {TopCountries.map((c, i) => {
            return (
              <IonItem
                key={c.country + c.deaths + i}
                color={i % 2 ? undefined : "light"}
              >
                <IonLabel>{c.country}</IonLabel>
                <IonText color="danger">
                  <strong>{formatNumber(c.deaths)}</strong>
                </IonText>
              </IonItem>
            )
          })}
        </IonList>
      </IonCol>
      <IonCol>
        <IonText className="title-size">Top Deaths Today By Country</IonText>
        <IonList>
          {/* <IonListHeader>
          <IonText className="text-center">Top Deaths by Country</IonText>
        </IonListHeader> */}
          {countries
            .sort((a, b) => (a.todayDeaths > b.todayDeaths ? -1 : 1))
            .slice(0, 10)
            .map((c, i) => {
              return (
                <IonItem
                  key={c.country + c.deaths + i}
                  color={i % 2 ? undefined : "light"}
                >
                  <IonLabel>{c.country}</IonLabel>
                  <IonText color="danger">
                    <strong>{formatNumber(c.todayDeaths)}</strong>
                  </IonText>
                </IonItem>
              )
            })}
        </IonList>
      </IonCol>
    </>
  )
}

export default TopDeaths
