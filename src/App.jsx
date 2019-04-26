import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import 'semantic-ui-css-offline';
import { Button, Header } from 'semantic-ui-react';
import HeroesTable from './components/HeroesTable';
import PlayerTable from './components/PlayerTable';
import ZaishenMissions_Table from './components/ZaishenMissions/ZaishenMissions_Table';

import './App.css';

const EMBED_URL = 'https://api.futuresaiyajin.de/gwbbcode/api.js';

class PrimaryLayout extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.setAttribute(
      'src', EMBED_URL
    );
    script.addEventListener('load', () => {
      window.GWConfig.lang = 'en'; // ou 'fr'
      window.GWOnLoad(function () {
        window.GWBBCodeParse('.gwbbcode');
      });
    });
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <Header as='h1'>Guild Wars Companion</Header>
        </header>

        <nav>
          <Button.Group vertical>
            <Button as={Link} to='/'>Hero Builds</Button>
            <Button as={Link} to='/player'>Player Builds</Button>
            <Button as={Link} to='/zaishen-missions'>Zaishen Missions</Button>
          </Button.Group>
        </nav>

        <main>
          <Switch>
            <Route path="/" exact component={HeroesTable} />
            <Route path="/player" component={PlayerTable} />
            <Route path="/zaishen-missions" component={ZaishenMissions_Table} />
            <Redirect to="/" />
          </Switch>
        </main>

        <aside />

        <footer />
      </div>
    );
  }
}

const App = () => (
  <Router>
    <PrimaryLayout />
  </Router>
)

export default App;
