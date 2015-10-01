import React from 'react';
import { Route, Redirect } from 'react-router';
import NoMatch from '../../components/NoMatch';
import ReactLayout from '../../components/layouts/ReactLayout';
import ReactDocContent from '../../views/ReactDocContent';

export default function () {
  return (
    <Route component={ ReactLayout }>
      <Route path='/(docs)/react(/:group)(/:component)(/:target)' component={ ReactDocContent } />
      <Redirect from="/" to="/docs" />
      <Route path="*" component={ NoMatch } />
    </Route>
  );
}
