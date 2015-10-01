import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import BaseLayout from './BaseLayout';
import Header from '../header/Header';
import meta from './meta';

class HomeLayout extends Component {

  render () {
    const newMeta = Object.assign({}, meta, {
      title: meta.title + '| home'
    });
    return (
      <BaseLayout header={<Header />} meta={newMeta}>
        {this.props.children}
      </BaseLayout>
    );
  }
}

export default HomeLayout;
