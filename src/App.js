import React, { useState } from "react";
import { AppDataContextProvider } from "./contexts/appDataContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customers from "./components/pages/Customers";
import Invoices from "./components/pages/Invoices";
import Packages from "./components/pages/Packages";
import LayoutAppBar from "./components/NavBar/AppBar";
import SideList from "./components/NavBar/SideList";
import "./App.css";
import CreateInvoice from "./components/pages/CreateInvoice";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppDataContextProvider>
      <div className="App">
        <Router>
          <LayoutAppBar setOpenDrawer={setOpenDrawer} />
          <Switch>
            <Route key={1} exact path="/">
              <Customers />
            </Route>
            <Route  key={2} exact path="/customers/:id/create-invoices">
              <CreateInvoice />
            </Route>
            <Route  key={3} path="/packages">
              <Packages />
            </Route>
            <Route key={4} path="/invoices">
              <Invoices />
            </Route>
          </Switch>
          <SideList openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </Router>
      </div>
    </AppDataContextProvider>
  );
}

export default App;
