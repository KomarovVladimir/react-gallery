import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <AlbumGallery /> */}
        </Route>
        <Route path="/album">
          {/* <Album /> */}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;