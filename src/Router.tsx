import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react"
import { IonReactRouter } from "@ionic/react-router"
import { flag, globe, informationCircle } from "ionicons/icons"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import About from "./pages/about"
import Countries from "./pages/countries"
import CountriesDetail from "./pages/CountriesDetail"
import Global from "./pages/global"

const Router: React.FC = () => (
  <IonReactRouter>
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/global" component={Global} exact={true} />
        <Route path="/countries" component={Countries} exact={true} />
        <Route
          path="/countries/:name"
          component={CountriesDetail}
          exact={true}
        />
        <Route path="/About" component={About} />
        <Route path="/" render={() => <Redirect to="/global" />} exact={true} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="Global" href="/global">
          <IonIcon icon={globe} />
          <IonLabel>Global</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Countries" href="/countries">
          <IonIcon icon={flag} />
          <IonLabel>Countries</IonLabel>
        </IonTabButton>
        <IonTabButton tab="About" href="/About">
          <IonIcon icon={informationCircle} />
          <IonLabel>About us</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonReactRouter>
)

export default Router
