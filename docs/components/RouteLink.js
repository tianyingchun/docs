import React from 'react';
import { Link, History } from 'react-router';
import URI from '../../utils/URI';
const RouteLink = React.createClass({
  mixins:[History],

  getDefaultProps() {
    return {
      refresh: false
    }
  },
  getPropTypes() {
    return {
      // for refresh page, the whole page reload.
      refresh: React.PropTypes.bool,
      // cutomized regex match to test if current RouteLink is `active` state.
      match: React.PropTypes.string
    };
  },

  render () {
    // Note there is an bug in ie <=11, this.history is undefined.
    // the mixin has some problem in windows <IE10 use ES5 instead.
    let { to, match, refresh } = this.props;
    let isActive;
    let currentURL = window.location.href;
    let currentHash = currentURL.replace(URI.getUrl(), '/');

    if (match) {
      let regExpStr = match.replace(/\//g,'\/');
      isActive = new RegExp(regExpStr).test(currentHash);
    } else {
      isActive = this.history.isActive(to, this.props.query);
    }

    let className = isActive ? 'active' : '';
    if (refresh === true) {
      if(className) {
        return (<li className={className}><a>{this.props.children}</a></li>);
      } else {
        return (<li className={className}><a href= {this.props.to}>{this.props.children}</a></li>);
      }
    } else {
      return (<li className={className}><Link {...this.props} activeClassName={null} /></li>);
    }
  }
});

module.exports = RouteLink;
