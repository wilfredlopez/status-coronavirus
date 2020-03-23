import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
// serviceWorker.register({
//   onUpdate: async registration => {
//     // We want to run this code only if we detect a new service worker is
//     // waiting to be activated.
//     // Details about it: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle
//     if (registration && registration.waiting) {
//       console.log("Unregistering Service Worker")
//       await registration.unregister()
//       // Once the service worker is unregistered, we can reload the page to let
//       // the browser download a fresh copy of our app (invalidating the cache)
//       window.location.reload()
//     }
//   },
// })
