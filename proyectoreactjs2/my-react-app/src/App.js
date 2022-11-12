
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar/Navbar.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./componentes/Home/Home"




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route>
          <Home />

        </Route>
        <Route>

        </Route>
      </Switch >
    </BrowserRouter>
  );
}


export default App;
