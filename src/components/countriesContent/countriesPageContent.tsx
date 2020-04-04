import { IonList, IonSearchbar, IonVirtualScroll } from "@ionic/react"
import React from "react"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import useLanguageContext from "../../context/useLanguageContext"
import { CountriesApiRes } from "../../interfaces/ApiResponse"
import CountriesPageContentItem from "./countriesPageContentItem"

interface Cell {
  i: number
  index: number
  value: any
  type: CellType
  height: number
  reads: number
  visible: boolean
}
type CellType = "item" | "header" | "footer"

interface CountriesPageContentProps {
  data: CountriesApiRes
}

const CountriesPageContentLanguage: ComponentLanguageMap<{
  Header: string
  placeHolder: string
}> = {
  EN: {
    Header: "Coronavirus Cases Per Country",
    placeHolder: "Search",
  },
  ESP: {
    Header: "Casos de Coronavirus Por Pais",
    placeHolder: "Buscar",
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
        onIonChange={(e) => setSearchText(e.detail.value!)}
      ></IonSearchbar>
      <IonVirtualScroll
        approxItemHeight={256}
        items={data
          .filter((d) =>
            searchText
              ? d.country.toLowerCase().includes(searchText.toLowerCase())
              : d !== undefined,
          )
          .sort((a, b) => (a.cases > b.cases ? -1 : 1))}
      >
        <IonList>
          {data
            .filter((d) =>
              searchText
                ? d.country.toLowerCase().includes(searchText.toLowerCase())
                : d !== undefined,
            )
            .sort((a, b) => (a.cases > b.cases ? -1 : 1))
            .map((country, index) => {
              return (
                <CountriesPageContentItem
                  color={index % 2 ? "light" : undefined}
                  country={country}
                  key={country.country}
                />
              )
            })}
        </IonList>
      </IonVirtualScroll>
    </div>
  )
}

export default CountriesPageContent
