import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { home } from './config/routes';

import CustomLayout from './components/CustomLayout';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <Switch>
          <Route exact path={home} component={Home} />
          <Route component={NotFound} />
        </Switch>
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
