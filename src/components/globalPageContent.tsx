import { IonText, IonCard, IonCardContent } from "@ionic/react"
import React from "react"
import { GlobalApiRes } from "../interfaces/ApiResponse"
import "./globalPageContent.css"

interface ContainerProps {
  data: GlobalApiRes | null
}

const GlobalPageContent: React.FC<ContainerProps> = ({ data }) => {
  return (
    <div className="container text-upper ">
      <IonText className="title-size">
        Coronavirus COVID-19 Global Cases
      </IonText>
      <IonCard>
        <IonCardContent>
          <IonText color="primary" className="font-20">
            Total Cases:
            <strong> {data?.cases}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonText color="danger" className="font-20">
            Total Deaths: <strong>{data?.deaths}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardContent>
          <IonText color="success" className="font-20">
            Total Recovered: <strong>{data?.recovered}</strong>
          </IonText>
        </IonCardContent>
      </IonCard>
    </div>
  )
}

export default GlobalPageContent
