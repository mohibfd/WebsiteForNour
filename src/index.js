import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter } from "react-router-dom";
import CustomizedFragrances from "./Screens/CustomizedFragrances";
// import ContactUs from "./ContactUs";

const routs = (
   <BrowserRouter>
      <div>
         {/* <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/ aboutus ">Users</Link>
            </li>
            <li>
               <Link to="/ contactus ">Contact</Link>
            </li>
         </ul> */}
         <Route exact path="/" component={App} />
         <Route path="/CustomizedFragrances" component={CustomizedFragrances} />
         {/* <Route path="/contactus" component={ContactUs} /> */}
      </div>
   </BrowserRouter>
);
ReactDOM.render(routs, document.getElementById("root"));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
