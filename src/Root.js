import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Entry, Main, Document } from 'pages';

const Root = () => (
  <Switch>
    <Route path='/main' component={Main} />
    <Route path='/entry' component={Entry} />
    <Route path='/document' component={Document} />
  </Switch>
)

export default Root;