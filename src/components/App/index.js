import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AlbumList from '../AlbumsList';
import ImagesList from '../ImagesList';
import typography from '../../scss/typography.module.scss';

function App() {
  // const currentAlbumTitle = useSelector(state => state.albums.currentAlbum.title);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <h1 className={typography.h1}>Albums</h1>
          <AlbumList />
        </Route>
        <Route path='/album'>
          <h1 className={typography.h1}><Link className={`${typography.h1} ${typography.a}`} to='/'>Albums</Link> / </h1>
          <ImagesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;