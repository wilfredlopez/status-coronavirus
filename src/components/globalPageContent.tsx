import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonGrid,
  IonText,
} from "@ionic/react"
import React from "react"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"
import { GlobalApiRes } from "../interfaces/ApiResponse"
import { formatNumber } from "../utils/formatNumber"
import "./globalPageContent.css"
import TopDeaths from "./topDeaths/TopDeaths"

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
    header: "Global Cases - COVID-19",
    totalCases: "Total Cases",
    totalDeaths: "Total Deaths",
    totalRecovered: "Total Recovered",
  },
  ESP: {
    header: "Casos Globales - COVID-19",
    totalCases: "Casos en Total ",
    totalDeaths: "Muertes en Total",
    totalRecovered: "Recuperados en Total",
  },
}

const GlobalPageContent: React.FC<ContainerProps> = ({ data }) => {
  const { language } = useLanguageContext()
  return (
    <IonGrid>
      <div className="wrapper text-upper container-md ">
        <IonText className="title-size">
          {GlobalPageContentLanguage[language].header}
          {/* Coronavirus COVID-19 Global Cases */}
        </IonText>
        <IonCard>
          <IonCardContent>
            <IonCardHeader>
              {GlobalPageContentLanguage[language].totalCases}:
            </IonCardHeader>
            {/* <IonText className="font-20">
          </IonText> */}
            <IonText color="primary" className="font-20">
              <strong> {formatNumber(data?.cases)}</strong>
            </IonText>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            {GlobalPageContentLanguage[language].totalDeaths}:{" "}
          </IonCardHeader>
          <IonCardContent>
            {/* <IonText className="font-20"></IonText> */}
            <IonText color="danger" className="font-20">
              <strong>{formatNumber(data?.deaths)}</strong>
            </IonText>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonCardHeader>
              {GlobalPageContentLanguage[language].totalRecovered}:{" "}
            </IonCardHeader>
            {/* <IonText className="font-20">
          </IonText> */}
            <IonText color="success" className="font-20">
              <strong>{formatNumber(data?.recovered)}</strong>
            </IonText>
          </IonCardContent>
        </IonCard>
      </div>
      <TopDeaths />
    </IonGrid>
  )
}

export default GlobalPageContent
