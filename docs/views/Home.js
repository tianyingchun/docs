import React from 'react';

if (process.env.BROWSER) {
  require('../stylesheets/home.less');
}
export default class Home extends React.Component {

  render () {
    return (
      <div className="docs-page home-page">
        <div className="banner"> </div>
      </div>
    );
  }
}

