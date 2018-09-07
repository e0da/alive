// @flow strict
import React from "react";
import ReactDOM from "react-dom";

import { ROOT, NO_ROOT_NODE } from "./constants";
import { interpolate } from "./util";

const root = document.getElementById(ROOT);
if (!root) {
  throw Error(interpolate(NO_ROOT_NODE, { ROOT }));
}

const template = "hi #{name}!";
const greeting = interpolate(template, { name: "you" });
ReactDOM.render(<h1>{greeting}</h1>, root);
