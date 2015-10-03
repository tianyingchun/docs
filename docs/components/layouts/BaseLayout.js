import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import UI from '../../../shared/react';
import Header from '../header/Header';
import meta from './meta';
const { Layout, LayoutSplitter } = UI.Layout;

// import doc styles for all sub modules.
if (process.env.BROWSER) {
  require('../../stylesheets/docs.less');
}

class BaseLayout extends Component {

  static propTypes = {
    meta: React.PropTypes.object,
    // react element <Header />
    header: React.PropTypes.element
  }

  render () {

    let Header = this.props.header || <Header />;

    return (
      <div className="wrapper">
        <DocumentMeta {...this.props.meta || meta} />
        <Layout fill='window' className="doc-page">
          <Layout layoutHeight={50} className= "layout-topnav">
            { Header }
          </Layout>
          <Layout layoutHeight='flex' className="page-body container">
            { this.props.children }
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default BaseLayout;
