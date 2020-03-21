import {
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonSearchbar,
  IonText,
} from "@ionic/react"
import React from "react"
import { CountriesApiRes } from "../../interfaces/ApiResponse"

interface CountriesPageContentProps {
  data: CountriesApiRes
}

const CountriesPageContent: React.FC<CountriesPageContentProps> = ({
  data,
}) => {
  const [searchText, setSearchText] = React.useState<string>("")
  return (
    <div className="">
      <h1 className="text-center">Coronavirus Cases Per Country</h1>
      <IonSearchbar
        value={searchText}
        onIonChange={e => setSearchText(e.detail.value!)}
      ></IonSearchbar>

      <IonList>
        {data
          .filter(d =>
            searchText
              ? d.country.toLowerCase().includes(searchText.toLowerCase())
              : d !== undefined,
          )
          .map(countrie => {
            return (
              <IonItem
                key={countrie.country}
                routerLink={`/countries/${countrie.country}`}
              >
                <IonLabel>{countrie.country}</IonLabel>

                {/* <IonItemOption routerLink={`/countries/${countrie.country}`}>
                <IonLabel slot="start">{countrie.country}</IonLabel>
              </IonItemOption> */}

                <IonNote slot="end">
                  <p>
                    <IonText color="primary">
                      Cases: <strong> {countrie.cases}</strong>
                    </IonText>
                  </p>
                  <IonText color="danger">
                    Deaths: <strong>{countrie.deaths}</strong>
                  </IonText>
                  <p>
                    <IonText color="success">
                      Recovered: <strong>{countrie.recovered}</strong>
                    </IonText>
                  </p>
                </IonNote>
              </IonItem>
            )
          })}
      </IonList>
    </div>
  )
}

export default CountriesPageContent
