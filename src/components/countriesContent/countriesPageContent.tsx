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
  Today: string
  Deaths: string
  Recovered: string
  placeHolder: string
  todayDeaths: string
}> = {
  EN: {
    Header: "Coronavirus Cases Per Country",
    Credits: "Credits",
    Cases: "Cases",
    Deaths: "Deaths",
    Recovered: "Recovered",
    placeHolder: "Search",
    Today: "Cases Today",
    todayDeaths: "Deaths Today",
  },
  ESP: {
    Header: "Casos de Coronavirus Por Pais",
    Credits: "Creditos",
    Cases: "Casos",
    Deaths: "Muertes",
    Recovered: "Recuperados",
    placeHolder: "Buscar",
    Today: "Casos Hoy",
    todayDeaths: "Muertes Hoy",
  },
}

const CountriesPageContent: React.FC<CountriesPageContentProps> = ({
  data,
}) => {
  const [searchText, setSearchText] = React.useState<string>("")
  const { language } = useLanguageContext()
  return (
    <div className="container-md">
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

                <IonNote
                  slot="end"
                  className="fontsize-1"
                  style={{ flex: "1 35%" }}
                >
                  <p>
                    <IonText>
                      {CountriesPageContentLanguage[language].Cases}:{" "}
                    </IonText>
                    <IonText color="primary">
                      <strong>
                        {" "}
                        {Intl.NumberFormat().format(countrie.cases)}
                      </strong>
                    </IonText>

                    <IonText className="pl-1">
                      {CountriesPageContentLanguage[language].Today}:{" "}
                    </IonText>
                    <IonText color="primary">
                      <strong>
                        {" "}
                        {Intl.NumberFormat().format(countrie.todayCases)}
                      </strong>
                    </IonText>
                  </p>

                  <IonText>
                    {CountriesPageContentLanguage[language].Deaths}:{" "}
                  </IonText>
                  <IonText color="danger">
                    <strong>
                      {" "}
                      {Intl.NumberFormat().format(countrie.deaths)}
                    </strong>
                  </IonText>
                  <IonText className="pl-1">
                    {CountriesPageContentLanguage[language].todayDeaths} :{" "}
                  </IonText>
                  <IonText color="danger">
                    <strong>
                      {" "}
                      {Intl.NumberFormat().format(countrie.todayDeaths)}
                    </strong>
                  </IonText>
                  <p>
                    <IonText>
                      {CountriesPageContentLanguage[language].Recovered}:{" "}
                    </IonText>
                    <IonText color="success">
                      <strong>
                        {" "}
                        {Intl.NumberFormat().format(countrie.recovered)}
                      </strong>
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
