import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects.jsx";
import About from "./screens/About/About.jsx";
import Contact from "./screens/Contact/Contact.jsx";
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
