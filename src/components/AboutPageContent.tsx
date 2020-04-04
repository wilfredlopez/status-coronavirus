import React from "react"
import "./AboutPageContent.css"
import { IonText, IonItem, IonLabel, IonRouterLink } from "@ionic/react"
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

const AboutPageContent: React.FC<ContainerProps> = ({ name }) => {
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
      <IonItem className="mt-2 text-center" lines="none">
        <IonLabel>
          {" "}
          {ExploreContainerLanguage[language].Created}{" "}
          <IonText className="text-center">
            <strong>Wilfred Lopez.</strong>
          </IonText>
        </IonLabel>
      </IonItem>
      <IonItem className="mt-2" lines="none">
        <IonLabel className="text-center">
          <span>{ExploreContainerLanguage[language].INFO}</span>{" "}
          <IonText>
            {" "}
            <IonRouterLink href="https://worldometers.info" target="_blank">
              {/* <a href="www.worldometers.info" target="_blank"> */}
              www.worldometers.info
              {/* </a> */}
            </IonRouterLink>
          </IonText>
        </IonLabel>
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

export default AboutPageContent
