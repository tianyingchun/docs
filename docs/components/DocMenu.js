import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DocActions from '../actions/DocActions';
import { Link } from 'react-router';
import Menu, { SubMenu } from '../../shared/react/components/menu';
import Icon from '../../shared/react/components/icon';
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

    let openKeys = group ? [group] : this.state.openKeys;
    let selectedKeys = [this.state.current || component];

    return (
      isLoading === true
      ? <span><Icon icon="spinner6" spin /> 加载Doc列表...</span>
      :
      <Menu onClick={this.handleClick} style={{width:'100%'}} defaultOpenKeys={openKeys} className="nav-left-dock " selectedKeys={selectedKeys} mode="inline">
        <SubMenu key="layout" title={this.getMenuTitle("布局相关","Layout")}>
          <Menu.Item key="flexlayout">
            <Link to="/docs/react/layout/flexlayout" activeClassName="active">
              {this.getMenuTitle("弹性布局素","FlexLayout")}
            </Link>
          </Menu.Item>
          <Menu.Item key="scrollarea">
            <Link to="/docs/react/layout/scrollarea" activeClassName="active">
              {this.getMenuTitle("滚动条","ScrollArea")}
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="elements" title={this.getMenuTitle("HTML元素","Elements")}>
          <Menu.Item key="button">
            <Link to="/docs/react/elements/button" activeClassName="active">
              {this.getMenuTitle('按钮', 'Button')}
            </Link>
          </Menu.Item>
          <Menu.Item key="table">
            <Link to="/docs/react/elements/table" activeClassName="active">
              {this.getMenuTitle('表格', 'Table')}
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="navs" title={this.getMenuTitle("导航相关","Navs")}>
          <Menu.Item key="menu">
            <Link to="/docs/react/elements/menu" activeClassName="active">
              {this.getMenuTitle('导航菜单', 'Menu')}
            </Link>
          </Menu.Item>
          <Menu.Item key="breadcrumb">
            <Link to="/docs/react/navs/breadcrumb" activeClassName="active">
              {this.getMenuTitle('面包屑', 'Breadcrumb')}
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="forms" title={this.getMenuTitle("表单相关","Forms")}>
          <Menu.Item key="select">
            <Link to="/docs/react/forms/select" activeClassName="active">
              {this.getMenuTitle('选择器', 'Select')}
            </Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="interactive" title={this.getMenuTitle("交互组件","Interactive")}>
          <Menu.Item key="draggable">
            <Link to="/docs/react/interactive/draggable" activeClassName="active">
              {this.getMenuTitle('拖动部件', 'Draggable')}
            </Link>
          </Menu.Item>
          <Menu.Item key="message">
            <Link to="/docs/react/interactive/message" activeClassName="active">
              {this.getMenuTitle('全局消息', 'Message')}
            </Link>
          </Menu.Item>
          <Menu.Item key="tag">
            <Link to="/docs/react/interactive/tag" activeClassName="active">
              {this.getMenuTitle('标签', 'Tag')}
            </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="other" title={this.getMenuTitle("其他组件","others")}>
          <Menu.Item key="draggable">
            {this.getMenuTitle('暂未添加', 'notready')}
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default DockMenu;
