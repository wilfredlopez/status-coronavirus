import React from "react"
import "./ExploreContainer.css"
import { IonText, IonItem, IonLabel } from "@ionic/react"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"

interface ContainerProps {
  name: string
}

const ExploreContainerLanguage: ComponentLanguageMap<{
  Created: string
  Credits: string
  INFO: string
}> = {
  EN: {
    Created: "Created By",
    Credits: "Credits",
    INFO: "Information from",
  },
  ESP: {
    Created: "Creada por",
    Credits: "Creditos",
    INFO: "Informacion de",
  },
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { language } = useLanguageContext()
  return (
    <div className="container container-md">
      <strong
        style={{
          textDecoration: "underline",
        }}
      >
        {name}
      </strong>
      <div></div>
      <IonItem className="mt-2 text-center">
        <IonLabel slot="start">
          {" "}
          {ExploreContainerLanguage[language].Created}:
        </IonLabel>
        <IonText className="text-center">
          <strong>Wilfred Lopez.</strong>
        </IonText>
      </IonItem>
      <IonItem className="mt-2">
        <IonLabel slot="start">
          <span>{ExploreContainerLanguage[language].INFO}</span>{" "}
        </IonLabel>
        <IonText>
          {" "}
          <a href="www.worldometers.info" target="_blank">
            www.worldometers.info
          </a>
        </IonText>
      </IonItem>
      <hr />
      <div className="mt-2">
        <p>
          <strong>{ExploreContainerLanguage[language].Credits}: </strong>
        </p>

        <p>https://www.worldometers.info/coronavirus/</p>
        <p>https://github.com/javieraviles/covidAPI</p>
        <p>Javier Aviles, Ionic Framework, ReactJS</p>
      </div>
    </div>
  )
}

export default ExploreContainer
