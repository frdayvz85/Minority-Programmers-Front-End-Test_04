import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CoreTeam from './components/CoreTeam/CoreTeam';
import HomePage from './components/HomePage';
import Manager from './components/Manager/Manager';
import Moderator from './components/Moderator/Moderator';
import NotFound from './components/NotFound/NotFound';
import User from './components/User/User';
import data from "./data.json"


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user" component={User} />
          <Route path="/manager" component={Manager} />
          <Route path="/moderator" component={Moderator} />
          <Route path="/core-team" component={CoreTeam} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
