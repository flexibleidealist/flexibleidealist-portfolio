import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home";
import './App.css';

function App() {
  const [admin, setAdmin] = useState()

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          {/* <Login setAdmin={setAdmin} /> */}
        </Route>
        <Route exact path="/update">
          {/* <UpdatePortfolio admin={admin} setAdmin={setAdmin} /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
