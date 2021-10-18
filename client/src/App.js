import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createPostUrl, homeUrl, profileUrl } from './config/routes';

import CustomLayout from './components/CustomLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <Switch>
          <Route exact path={homeUrl} component={Home} />
          <Route exact path={profileUrl} component={Profile} />
          <Route exact path={createPostUrl} component={CreatePost} />
          <Route component={NotFound} />
        </Switch>
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
