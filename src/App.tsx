import { IonApp } from "@ionic/react"
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css"
import "@ionic/react/css/display.css"
import "@ionic/react/css/flex-utils.css"
import "@ionic/react/css/float-elements.css"
/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css"
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css"
import "@ionic/react/css/structure.css"
import "@ionic/react/css/text-alignment.css"
import "@ionic/react/css/text-transformation.css"
import "@ionic/react/css/typography.css"
import React from "react"

/* Theme variables */
import "./theme/variables.css"
import "./styles.css"
import RootProvider from "./RootProvider"
import Router from "./Router"

const App: React.FC = () => (
  <IonApp>
    <RootProvider>
      <Router />
    </RootProvider>
  </IonApp>
)

export default App
