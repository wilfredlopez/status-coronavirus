import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import ExploreContainer from "../components/ExploreContainer"
import "./about.css"

const About: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText="About" />
        <ExploreContainer name="About This App" />
      </IonContent>
    </IonPage>
  )
}

export default About
