import React from 'react';
import { Route, Redirect } from 'react-router';
import MobileLayout from '../../components/layouts/MobileLayout';
import NoMatch from '../../components/NoMatch';
import MobileDocContent from '../../views/MobileDocContent';

export default function () {
  return (
    <Route component={ MobileLayout }>
      <Route path='/(docs)/mobile' component={ MobileDocContent } />
      <Route path="*" component={ NoMatch } />
    </Route>
  );
}
