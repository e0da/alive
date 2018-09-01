// @flow
import React from "react";
import { render } from "react-dom";
import { Sprite, Stage } from "react-pixi-fiber";
import * as PIXI from "pixi.js";
import texture from "./unicorn.png";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { ROOT } from "./constants.json";

// Demonstrate Flow
type Foo = { bar: boolean };
const handleFoo = ({ bar }: Foo): boolean => !bar;
if (handleFoo({ bar: true })) {
  throw Error("True is false.");
}

// Demonstrate PIXI
const Unicorn = props => (
  <Sprite
    anchor={{ x: 0.5, y: 0.5 }}
    texture={PIXI.Texture.fromImage(texture)}
    {...props}
  />
);
const [width, height] = [800, 600];
const stageOptions = { backgroundColor: 0x10bb99 };
const stage = (
  <React.Fragment>
    <Stage width={width} height={height} options={stageOptions}>
      <Unicorn x={width / 2} y={height / 2} scale={0.15} />
    </Stage>
    <App />
  </React.Fragment>
);

// Render the app
const root = document.getElementById("root");
if (!root) {
  throw Error(`Couldn't find DOM node with ID ${ROOT}`);
}
render(stage, root);

// Serve assets from local cache in production
registerServiceWorker();
