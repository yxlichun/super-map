import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Polygon from './pages/Polygon';
import Navigate from './pages/Navigate';
import TrackPlayer from './pages/TrackPlayer';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/polygon">Polygon</Link>
            </li>
            <li>
              <Link to="/navigate">Navigate</Link>
            </li>
            <li>
              <Link to="/trackplayer">TrackPlayer</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/polygon">
            <Polygon />
          </Route>
          <Route path="/navigate">
            <Navigate />
          </Route>
          <Route path="/trackplayer">
            <TrackPlayer />
          </Route>
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}