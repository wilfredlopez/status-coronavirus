import React, { PropsWithChildren } from "react"
import { IonHeader, IonToolbar, IonTitle } from "@ionic/react"

interface Props extends PropsWithChildren<any> {
  titleText: string
  color?: "primary" | "secondary" | "danger" | "success" | "tertiary"
  size?: "large" | "small"
}

const AppHeader = ({ titleText, color, size, children }: Props) => {
  return (
    <IonHeader>
      <IonToolbar
        color={color ?? "primary"}
        className="ion-padding-sm"
        mode="md"
      >
        <IonTitle size={size ?? "large"}>{titleText}</IonTitle>
        {children}
      </IonToolbar>
    </IonHeader>
  )
}

export default AppHeader
