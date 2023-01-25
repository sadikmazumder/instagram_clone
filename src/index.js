// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import FirebaseContext from "./context/firebase";
// import { firebase, FieldValue } from "./lib/firebase";

import React from "react";
//import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";

import App from "./App";
import FirebaseContext from "./context/firebase";
import { Firebase, FieldValue } from "./lib/firebase";
import "./styles/app.css";

/**
 * 
import React from 'react'
import ReactDOM from 'react-dom/client'
import Switch from './components/Switch'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Switch />
    </React.StrictMode>,
)


 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ Firebase, FieldValue }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>
);

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ Firebase, FieldValue }}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById("root")
// );

// client side rendered  app : react(cra)

// --> database which is Firebase
// --> react-loading-skeleton
// tailwind

// folder structure
//src
// --> components,
// --> constants,
// --> context ,
// --> helpers ,
// --> hooks,
// --> pages,
// --> lib (firebase is going to live in here),
// --> services (firebase functions in here )
// --> styles(tailwind's folder (app/tailwind))
