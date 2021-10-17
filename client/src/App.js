import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createPost, home, profile } from './config/routes';

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
          <Route exact path={home} component={Home} />
          <Route exact path={profile} component={Profile} />
          <Route exact path={createPost} component={CreatePost} />
          <Route component={NotFound} />
        </Switch>
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
