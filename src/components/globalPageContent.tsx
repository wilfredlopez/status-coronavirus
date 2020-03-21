import { IonText, IonCard, IonCardContent } from "@ionic/react"
import React from "react"
import { GlobalApiRes } from "../interfaces/ApiResponse"
import "./globalPageContent.css"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"

interface ContainerProps {
  data: GlobalApiRes | null
}

const GlobalPageContentLanguage: ComponentLanguageMap<{
  header: string
  totalCases: string
  totalDeaths: string
  totalRecovered: string
}> = {
  EN: {
    header: "Coronavirus COVID-19 Global Cases",
    totalCases: "Total Cases",
    totalDeaths: "Total Deaths",
    totalRecovered: "Total Recovered",
  },
  ESP: {
    header: "Coronavirus COVID-19 Casos Globales",
    totalCases: "Casos en Total ",
    totalDeaths: "Muertes en Total",
    totalRecovered: "Recuperados en Total",
  },
}

const GlobalPageContent: React.FC<ContainerProps> = ({ data }) => {
  const { language } = useLanguageContext()
  return (
    <div className="container text-upper ">
      <IonText className="title-size">
        {GlobalPageContentLanguage[language].header}
        {/* Coronavirus COVID-19 Global Cases */}
      </IonText>
      <IonCard>
        <IonCardContent>
          <IonText color="primary" className="font-20">
            {GlobalPageContentLanguage[language].totalCases}:
            <strong> {data?.cases}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonText color="danger" className="font-20">
            {GlobalPageContentLanguage[language].totalDeaths}:{" "}
            <strong>{data?.deaths}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonText color="success" className="font-20">
            {GlobalPageContentLanguage[language].totalRecovered}:{" "}
            <strong>{data?.recovered}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
    </div>
  )
}

export default GlobalPageContent
