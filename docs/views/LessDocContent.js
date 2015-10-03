import React from 'react';
import UI from '../../shared/react';
const { Layout, LayoutSplitter } = UI.Layout;

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
