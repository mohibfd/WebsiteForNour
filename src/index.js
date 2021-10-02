import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, BrowserRouter } from "react-router-dom";
import CustomizedFragrances from "./Screens/CustomizedFragrances";
import CreativePerfumeLab from "./Screens/CreativePerfumeLab";
import Themed from "./Screens/Themed";
import Private from "./Screens/Private";
import NourAkoum from "./Screens/NourAkoum";

const routs = (
   <BrowserRouter>
      <div>
         <Route exact path="/" component={App} />
         <Route path="/CustomizedFragrances" component={CustomizedFragrances} />
         <Route path="/CreativePerfumeLab" component={CreativePerfumeLab} />
         <Route path="/Themed" component={Themed} />
         <Route path="/Private" component={Private} />
         <Route path="/NourAkoum" component={NourAkoum} />
      </div>
   </BrowserRouter>
);
ReactDOM.render(routs, document.getElementById("root"));
