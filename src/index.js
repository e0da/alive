// @flow
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ROOT } from "./constants.json";

const root = document.getElementById("root");
if (!root) {
  throw Error(`Couldn't find DOM node with ID ${ROOT}`);
}

type Foo = { bar: boolean };

const handleFoo = ({ bar }: Foo): boolean => !bar;

if (handleFoo({ bar: true })) {
  throw Error("True is false.");
}

ReactDOM.render(<App />, root);
registerServiceWorker();
