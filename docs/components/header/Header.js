import React, { Component } from 'react';
import { Link } from 'react-router';
import RouteLink from '../RouteLink';
import ThemeSelector from './ThemeSelector';

class Header extends Component {

  render () {

    return (
      <header className= "topbar topbar-inverse">
        <h1 className="topbar-brand">
          <a href="/docs" className="text-ir" to="/docs">RUI</a>
          <span className="badge badge-warning">React</span>
        </h1>
        <ul className="nav nav-pills topbar-nav">
          <RouteLink refresh={true} match="/docs/less/*" to="/docs/less" activeClassName="active">LESS UI</RouteLink>
          <RouteLink refresh={true} match="/docs/react/*" to="/docs/react/layout/flexlayout" activeClassName="active">React UI</RouteLink>
          <RouteLink refresh={true} match="/docs/mobile/*" to="/docs/mobile" activeClassName="active">React Mobile</RouteLink>
        </ul>
        <div className="topbar-right">
         <ThemeSelector />
        </div>
      </header>
    );
  }
}

export default Header;
