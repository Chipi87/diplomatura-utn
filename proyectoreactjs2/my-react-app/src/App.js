import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componentes/Home/Home"
import Contacto from './componentes/Contacto/contacto';
import Cabaña from "./componentes/Cabañas/cabañas";




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/Home">
          <Home />

        </Route>
        <Route exact path="/contacto">
          <Contacto />

        </Route>
        <Route exact path="/Cabaña">
          <Cabaña/>

        </Route>
      </Switch >
    </BrowserRouter>
  );
}

export default App;
