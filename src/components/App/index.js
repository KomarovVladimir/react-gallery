import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AlbumList from '../AlbumsList';
import ImagesList from '../ImagesList';
import Loader from '../Loader';
import typography from '../../scss/typography.module.scss';

function App() {
  const isLoading = useSelector(state => state.albums.isLoading);

  return (
    <Router basename="/react-gallery">
      <Switch>
        <Route exact path='/'>
          <h1 className={typography.h1}>Albums</h1>
          {isLoading && <Loader />}
          <AlbumList />
        </Route>
        <Route path='/album'>
          <h1 className={typography.h1}><Link className={`${typography.h1} ${typography.a}`} to='/'>Back to albums</Link></h1>
          {isLoading && <Loader />}
          <ImagesList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;