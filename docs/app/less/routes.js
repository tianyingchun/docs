import React from 'react';
import { Route, Redirect } from 'react-router';
import NoMatch from '../../components/NoMatch';
import LessLayout from '../../components/layouts/LessLayout';
import LessDocContent from '../../views/LessDocContent';

export default function () {
  return (
    <Route component={ LessLayout }>
      <Route path='/(docs)/less(/:component)' component={ LessDocContent } />
      <Redirect from="/" to="/docs" />
      <Route path="*" component={ NoMatch } />
    </Route>
  );
}
