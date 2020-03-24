import {
  IonCol,
  IonHeader,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  IonText,
} from "@ionic/react"
import React, { PropsWithChildren } from "react"
import useLanguageContext from "../context/useLanguageContext"
import "./appHeader.css"
// import { ComponentLanguageMap } from "../context/LanguageContext"

// const AppHeaderLanguage: ComponentLanguageMap<{
//   language: string
// }> = {
//   EN: {
//     language: "Language",
//   },
//   ESP: {
//     language: "Idioma",
//   },
// }

interface Props extends PropsWithChildren<any> {
  titleText: string
  color?: "primary" | "secondary" | "danger" | "success" | "tertiary"
  size?: "large" | "small"
}

const AppHeader = ({ titleText, color, size, children }: Props) => {
  const { language, changeLanguage } = useLanguageContext()
  return (
    <IonHeader>
      <IonToolbar
        color={color ?? "primary"}
        className="ion-padding-sm"
        mode="md"
      >
        <IonTitle size={size ?? "large"}>{titleText}</IonTitle>
        {children}
        <IonCol slot="end" className="language-col">
          <IonText className="language-label">
            Language/Idioma
            {/* {AppHeaderLanguage[language].language}: */}
          </IonText>
          <IonSelect
            // interface="popover"
            interfaceOptions={{
              header: "Language/Idioma",
              // subHeader: "Select your toppings",
              // message: "$1.00 per topping",
              // translucent: true,
            }}
            className="language-select"
            value={language}
            onIonChange={e => {
              changeLanguage(e.detail.value)
            }}
          >
            <IonSelectOption value="ESP">ESP</IonSelectOption>
            <IonSelectOption value="EN">EN</IonSelectOption>
          </IonSelect>
        </IonCol>
      </IonToolbar>
    </IonHeader>
  )
}

export default AppHeader
