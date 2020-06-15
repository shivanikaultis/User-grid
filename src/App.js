import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserGrid from './component/UserGrid';
import UserForm from './component/UserForm';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" key="landing" component={UserGrid} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
