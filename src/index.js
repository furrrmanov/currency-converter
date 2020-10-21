import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import App from "./App";

import "leaflet/dist/leaflet.css";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.register();
