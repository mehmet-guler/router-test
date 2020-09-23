import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import { Routes as Router22 } from 'react-router-dom'
import RouteWrapper from './router/RouteWrapper';
import { One, Two, Three, Four } from './router/pages';
import { LayoutOne, LayoutTwo } from './router/layouts/layout';

import Routes1 from './Routes1'
import Routes2 from './Routes2'
import Links from './Links';

function App() {
  return (

    <div>

      <Router >
        {/* <h3>Content of main App component</h3>
        <ul>
          <li><Link to="/one">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
          <li><Link to="/four">Four</Link></li>
        </ul> */}
        <Links />

        <Switch>
          {/* <Route >
            <Routes1 />
            <Routes2 />
          </Route> */}


          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route path="/three" component={Three} />
          <Route path="/four" component={Four} />
          {/* <RouteWrapper path="/one" component={One} layout={LayoutOne} sensitive={true} /> */}
          {/* <RouteWrapper path="/two" component={Two} layout={LayoutOne} />
          <RouteWrapper path="/three" component={Three} layout={LayoutTwo} />
          <RouteWrapper path="/four" component={Four} layout={LayoutTwo} /> */}
          <Route path="*">
            <h1>Eşleşme bulunamadı</h1>
          </Route>

        </Switch>
      </Router>
    </div >
  );
}

export default App;
