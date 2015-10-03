import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DocActions from '../actions/DocActions';
import { Link } from 'react-router';
import UI, { Menu, Icon } from '../../shared/react';
import classNames from 'classnames';

@connect((state) => ({ docMenus: state.docMenu }))
class DockMenu extends Component {

  componentWillUpdate() {
    console.log('dockMenu....update.');
  }

  static propTypes = {
    component: React.PropTypes.string,
    group: React.PropTypes.string
  }

  static defaultProps = {
    component: 'flexlayout',
    group: 'layout'
  }

  // for server rendering, use this feature we must move this into react-router
  // components, `` views/ReactDocContent.js
  // static needs = [
  //   (params) => DocActions.loadDocCatalogs(params)
  // ]

  state = {
    current: '',
    openKeys: []
  }
   // binding action creators.
  action = bindActionCreators(DocActions, this.props.dispatch)

  componentDidMount() {
    let { dispatch } = this.props;
    console.log('componentDidMount()...');
    dispatch(() => this.action.loadDocCatalogs());
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  }

  getMenuTitle (title, subTitle, iconName) {

    let iconClasses = {};

    if (iconName) {
      iconClasses["glyph-icon"] = true;
      iconClasses['glyph-'+iconName] = true
    }

    return (
      <span>
        { iconName ? <i className={classNames(iconClasses)}></i>: null}
        <span>{title}</span>
        <span className="menu-title-en">{subTitle}</span>
      </span>
    );
  }
  render() {
    let isLoading =  true;
    let { docMenus, group, component } = this.props;
    isLoading = docMenus.isLoading ? true : false;

    if (isLoading === true) {
      return (
        <span><Icon icon="spinner6" spin /> 加载Doc列表...</span>
      );
    }

    let openKeys = group ? [group] : this.state.openKeys;
    let selectedKeys = [this.state.current || component];

    if (!docMenus.data) {
      return <span>获取列表失败!</span>
    }
    let groups = docMenus.data.groups;

    const SubMenu = Menu.SubMenu;

    return (
      <Menu onClick={this.handleClick} style={{width:'100%'}} defaultOpenKeys={openKeys} className="nav-left-dock " selectedKeys={selectedKeys} mode="inline">
        {
          groups.map((group) => {
            return (
              <SubMenu key={group.key} title={this.getMenuTitle(group.cName, group.enName)}>
                {
                  group.children.map((component)=> {
                    return (
                      <Menu.Item key={component.key}>
                        <Link to={ "/docs/react/" + group.key + '/' + component.key} activeClassName="active">
                          {this.getMenuTitle(component.cName, component.enName)}
                        </Link>
                      </Menu.Item>
                    );
                  })
                }
              </SubMenu>
            );
          })
        }
      </Menu>
    );
  }
}

export default DockMenu;
