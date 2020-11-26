import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AlbumList from '../AlbumsList';
import ImagesList from '../ImagesList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AlbumList />
        </Route>
        <Route path="/album">
          <ImagesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;