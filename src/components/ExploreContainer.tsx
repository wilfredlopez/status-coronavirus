import React from "react"
import "./ExploreContainer.css"
import { IonText } from "@ionic/react"
import { ComponentLanguageMap } from "../context/LanguageContext"
import useLanguageContext from "../context/useLanguageContext"

interface ContainerProps {
  name: string
}

const ExploreContainerLanguage: ComponentLanguageMap<{
  Created: string
  Credits: string
}> = {
  EN: {
    Created: "Created By Wilfred Lopez.",
    Credits: "Credits",
  },
  ESP: {
    Created: "Creada por Wilfred Lopez.",
    Credits: "Creditos",
  },
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  const { language } = useLanguageContext()
  return (
    <div className="container container-md">
      <strong>{name}</strong>
      <div>
        <IonText>{ExploreContainerLanguage[language].Created}</IonText>
      </div>
      <hr />
      <div>
        <p>{ExploreContainerLanguage[language].Credits}: </p>

        <p>https://www.worldometers.info/coronavirus/</p>
        <p>https://github.com/javieraviles/covidAPI</p>
        <p>Javier Aviles, Ionic Framework, ReactJS</p>
      </div>
    </div>
  )
}

export default ExploreContainer
