import React from 'react';
import { Route, Redirect } from 'react-router';
import HomeLayout from '../../components/layouts/HomeLayout';
import NoMatch from '../../components/NoMatch';
import Home from '../../views/Home';

export default function () {
  return (
    <Route component={ HomeLayout }>
      <Route path='/(docs)' component={ Home } />
      <Route path="*" component={ NoMatch } />
    </Route>
  );
}
