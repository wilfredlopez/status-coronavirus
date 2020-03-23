import { IonText, IonCard, IonCardContent, IonCardHeader } from "@ionic/react"
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
    <div className="container text-upper container-md ">
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
            <strong> {Intl.NumberFormat().format(data?.cases ?? 0)}</strong>
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
            <strong>{Intl.NumberFormat().format(data?.deaths!)}</strong>
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
            <strong>{Intl.NumberFormat().format(data?.recovered!)}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
    </div>
  )
}

export default GlobalPageContent
