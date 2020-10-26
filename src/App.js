import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './views/Index';

export default () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Index} exact />
      </Switch>
    </>
  );
};