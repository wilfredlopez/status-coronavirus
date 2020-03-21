import React from "react"
import "./ExploreContainer.css"
import { IonText } from "@ionic/react"

interface ContainerProps {
  name: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <div>
        <IonText>Created By Wilfred Lopez.</IonText>
      </div>
      <hr />
      <div>
        <p>Credits: </p>

        <p>https://github.com/javieraviles/covidAPI</p>
        <p>Javier Aviles, Ionic Framework, ReactJS</p>
      </div>
    </div>
  )
}

export default ExploreContainer
