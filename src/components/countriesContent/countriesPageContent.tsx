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
import useLanguageContext from "../../context/useLanguageContext"
import { ComponentLanguageMap } from "../../context/LanguageContext"

interface CountriesPageContentProps {
  data: CountriesApiRes
}

const CountriesPageContentLanguage: ComponentLanguageMap<{
  Header: string
  Credits: string
  Cases: string
  Deaths: string
  Recovered: string
  placeHolder: string
}> = {
  EN: {
    Header: "Coronavirus Cases Per Country",
    Credits: "Credits",
    Cases: "Cases",
    Deaths: "Deaths",
    Recovered: "Recovered",
    placeHolder: "Search",
  },
  ESP: {
    Header: "Casos de Coronavirus Por Pais",
    Credits: "Creditos",
    Cases: "Casos",
    Deaths: "Muertes",
    Recovered: "Recuperados",
    placeHolder: "Buscar",
  },
}

const CountriesPageContent: React.FC<CountriesPageContentProps> = ({
  data,
}) => {
  const [searchText, setSearchText] = React.useState<string>("")
  const { language } = useLanguageContext()
  return (
    <div className="">
      <h1 className="text-center">
        {CountriesPageContentLanguage[language].Header}
      </h1>
      <IonSearchbar
        placeholder={CountriesPageContentLanguage[language].placeHolder}
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
                      {CountriesPageContentLanguage[language].Cases}:{" "}
                      <strong> {countrie.cases}</strong>
                    </IonText>
                  </p>
                  <IonText color="danger">
                    {CountriesPageContentLanguage[language].Deaths}:{" "}
                    <strong> {countrie.deaths}</strong>
                  </IonText>
                  <p>
                    <IonText color="success">
                      {CountriesPageContentLanguage[language].Recovered}:{" "}
                      <strong> {countrie.recovered}</strong>
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
