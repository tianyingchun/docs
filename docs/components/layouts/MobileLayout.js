import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import BaseLayout from './BaseLayout';
import meta from './meta';

class MobileHeader extends Component {
  render () {
    return (
      <header className= "topbar topbar-inverse">
        <h1 className="topbar-brand">
          <a href="/docs" className="text-ir" to="/docs">React Mobile</a>
          <span className="badge badge-warning">mobile</span>
        </h1>
         <ul className="nav nav-pills topbar-nav">
          <li className="active">
            <a className="active" href="/docs/react" to="/docs">
              <span>Back </span>
            </a>
          </li>
        </ul>
      </header>
    );
  }
}
class HomeLayout extends Component {

  render () {
    const newMeta = Object.assign({}, meta, {
      title: meta.title + '| Mobile'
    });

    return (
      <BaseLayout className="mobile" header={<MobileHeader />} meta={newMeta}>
        {this.props.children}
      </BaseLayout>
    );
  }
}

export default HomeLayout;
