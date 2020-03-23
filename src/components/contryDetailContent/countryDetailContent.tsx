import { IonItem, IonList, IonText } from "@ionic/react"
import React from "react"
import { Country } from "../../interfaces/ApiResponse"
import useLanguageContext from "../../context/useLanguageContext"
import { ComponentLanguageMap } from "../../context/LanguageContext"
import { formatNumber } from "../../utils/formatNumber"

interface CountryDetailContentProps {
  countrie: Country | null
}

const CountryDetailContentLanguage: ComponentLanguageMap<{
  Header: string
  Cases: string
  Deaths: string
  Recovered: string
  TodayCases: string
  TodayDeaths: string
  Active: string
  casePer: string
  Critical: string
}> = {
  EN: {
    Header: "Coronavirus Cases In",
    Cases: "Cases",
    Deaths: "Deaths",
    Recovered: "Recovered",
    TodayCases: "Today Cases",
    TodayDeaths: "Today Deaths",
    Active: "Active",
    casePer: "Cases Per One Million",
    Critical: "Critical",
  },
  ESP: {
    Header: "Casos de Coronavirus en",
    Cases: "Casos",
    Deaths: "Muertes",
    Recovered: "Recuperados",
    TodayCases: "Casos Hoy",
    TodayDeaths: "Muertes Hoy",
    Active: "Activos",
    casePer: "Casos Por Million",
    Critical: "Critico",
  },
}

const CountryDetailContent: React.FC<CountryDetailContentProps> = ({
  countrie,
}) => {
  const { language } = useLanguageContext()
  return (
    <>
      <div className="container-md">
        <h1 className="text-center">
          <span>{CountryDetailContentLanguage[language].Header}</span>{" "}
          {countrie?.country}
        </h1>

        <IonList>
          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].Cases}:{" "}
              </IonText>
              <IonText color="primary">
                <strong> {formatNumber(countrie?.cases)}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].TodayCases}:{" "}
              </IonText>
              <IonText color="primary">
                <strong> {formatNumber(countrie?.todayCases)}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].Deaths}:{" "}
              </IonText>
              <IonText color="danger">
                <strong> {formatNumber(countrie?.deaths)}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].TodayDeaths}:{" "}
              </IonText>
              <IonText color="danger">
                <strong> {formatNumber(countrie?.todayDeaths)}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].Recovered}:{" "}
              </IonText>
              <IonText color="success">
                <strong> {formatNumber(countrie?.recovered)}</strong>
              </IonText>
            </p>
          </IonItem>

          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].Active}:{" "}
                <strong> {formatNumber(countrie?.active)}</strong>
              </IonText>
            </p>
          </IonItem>

          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].Critical}:{" "}
                <strong> {formatNumber(countrie?.critical)}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                {CountryDetailContentLanguage[language].casePer}:{" "}
                <strong> {formatNumber(countrie?.casesPerOneMillion)}</strong>
              </IonText>
            </p>
          </IonItem>
        </IonList>
      </div>
    </>
  )
}

export default CountryDetailContent
