import { IonContent, IonPage } from "@ionic/react"
import React from "react"
import AppHeader from "../components/AppHeader"
import GlobalPageContent from "../components/globalPageContent"
import { GlobalApiRes } from "../interfaces/ApiResponse"
import "./global.css"

const Global: React.FC = () => {
  const [globalData, setGlobalData] = React.useState<GlobalApiRes | null>(null)

  React.useEffect(() => {
    fetch("https://coronavirus-19-api.herokuapp.com/all")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setGlobalData(data)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  return (
    <IonPage>
      <IonContent>
        <AppHeader titleText="COVID-19 Global Cases" />

        <GlobalPageContent data={globalData} />
      </IonContent>
    </IonPage>
  )
}

export default Global
