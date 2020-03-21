import {
  IonCol,
  IonHeader,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react"
import React, { PropsWithChildren } from "react"
import useLanguageContext from "../context/useLanguageContext"

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
        <IonCol slot="end">
          <IonSelect
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
