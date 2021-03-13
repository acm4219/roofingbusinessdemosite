import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import About from "./views/About";
import Backend from "./views/Backend";
import Entry from "./views/Entry";
import FormPage from "./views/FormPage";
import LeadPage from "./views/LeadPage";
import Products from "./views/Products";

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/roofingbusinessdemosite2/">
            <Entry />
          </Route>
          <Route path="/roofingbusinessdemosite2/about">
            <About />
          </Route>
          <Route path="/roofingbusinessdemosite2/backend">
            <Backend />
          </Route>
          <Route path="/roofingbusinessdemosite2/form">
            <FormPage />
          </Route>
          <Route path="/roofingbusinessdemosite2/leads">
            <LeadPage />
          </Route>
          <Route path="/roofingbusinessdemosite2/products">
            <Products />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
