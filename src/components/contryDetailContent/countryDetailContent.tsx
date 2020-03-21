import { IonItem, IonList, IonText } from "@ionic/react"
import React from "react"
import { Country } from "../../interfaces/ApiResponse"

interface CountryDetailContentProps {
  countrie: Country | null
}

const CountryDetailContent: React.FC<CountryDetailContentProps> = ({
  countrie,
}) => {
  return (
    <>
      <div className="">
        <h1 className="text-center">
          Coronavirus Cases In {countrie?.country}
        </h1>

        <IonList>
          <IonItem>
            <p>
              <IonText color="primary">
                Cases: <strong>{countrie?.cases}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText color="danger">
                Deaths: <strong>{countrie?.deaths}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText color="success">
                Recovered: <strong>{countrie?.recovered}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                Today Cases: <strong>{countrie?.todayCases}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                Today Deaths: <strong>{countrie?.todayDeaths}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                Active: <strong>{countrie?.active}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                Cases Per One Million:{" "}
                <strong> {countrie?.casesPerOneMillion}</strong>
              </IonText>
            </p>
          </IonItem>
          <IonItem>
            <p>
              <IonText>
                Critical: <strong>{countrie?.critical}</strong>
              </IonText>
            </p>
          </IonItem>
        </IonList>
      </div>
    </>
  )
}

export default CountryDetailContent
