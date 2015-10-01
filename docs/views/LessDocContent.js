import React from 'react';
import { Layout, LayoutSplitter } from '../../shared/react/components/layout';

class LessDocContent extends React.Component {
  render () {
    return (
      <Layout fill='container'>
          <Layout layoutWidth={220}>
            col menus.
          </Layout>
          <LayoutSplitter />
          <Layout layoutWidth='flex'>
            col content.
          </Layout>
      </Layout>
    );
  }
}

export default LessDocContent;
