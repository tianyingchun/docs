import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import BaseLayout from './BaseLayout';
import Header from '../header/Header';
import meta from './meta';

class LessLayout extends Component {

  render () {
    const newMeta = Object.assign({}, meta, {
      title: meta.title + '| less'
    });
    return (
      <BaseLayout header={<Header />} meta={newMeta}>
        {this.props.children}
      </BaseLayout>
    );
  }
}

export default LessLayout;
