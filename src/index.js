import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Beers } from "./Pages/Beers";
import { RandomBeer } from "./Pages/RandomBeer";
import { NewBeer } from "./Pages/NewBeer";
// import { SingleBeer } from "./Pages/SingleBeer";
import { BeerDetails } from "./Pages/beerDetails";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <App />
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/beers/:beerId" element={<BeerDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
