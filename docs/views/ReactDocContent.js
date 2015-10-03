import React, { Component } from 'react';
import UI from '../../shared/react';
import * as DocActions from '../actions/DocActions';
import DocMenu from '../components/DocMenu';
import DemoList from '../../shared/react/components/demo';
const { Layout, LayoutSplitter } = UI.Layout;
const { ScrollArea, Icon } = UI;

const {
  DraggableDemo,
  ButtonDemo,
  TableDemo,
  LayoutDemo,
  ScrollAreaDemo,
  MenuDemo,
  IconDemo,
  BreadcrumbDemo,
  MessageDemo,
  TagDemo,
  SelectDemo,
  DropdownDemo,
  PopconfirmDemo
} = DemoList;

console.log('ReactDocContent ->demos: ', DemoList);
class ReactDocContent extends Component {

  state = {
    layoutWidth: 230
  }

  getComponents (child) {
    // here cause of we used ScrollArea nested into Layout component,
    // we should not speficied the width and height for `ScrollArea`.
    return (
      <ScrollArea speed={0.8} ref="flexContainer" amSize={'sm'} contentClassName="content">
        <div className="container">{child}</div>
      </ScrollArea>
    );
  }

  render () {
    let params = this.props.params;
    let routes = this.props.routes;

    console.log('router info',params, routes);
    let { group, component, target } = params;
    let example;

    switch (component) {
      case 'flexlayout':
        example = <LayoutDemo target={target}/>;
        break;
      case 'scrollarea':
        example = <ScrollAreaDemo />;
        break;
      case 'button':
        example = this.getComponents(<ButtonDemo />);
        break;
      case 'table':
        example = this.getComponents(<TableDemo />);
        break;
      case 'draggable':
        example = this.getComponents(<DraggableDemo />);
        break;

      case 'menu':
        example = this.getComponents(<MenuDemo />);
        break;

      case 'breadcrumb':
        example = this.getComponents(<BreadcrumbDemo />);
        break;
      case 'icon':
        example = this.getComponents(<IconDemo />);
        break;
      case 'message':
        example = this.getComponents(<MessageDemo />);
        break;

      case 'tag':
        example = this.getComponents(<TagDemo />);
        break;
      case 'dropdown':
        example = this.getComponents(<DropdownDemo />);
        break;
      case 'select':
        example = this.getComponents(<SelectDemo />);
        break;
      case 'popconfirm':
       example = this.getComponents (<PopconfirmDemo />);
       break;
    }
    return (
      <Layout className="row" fill='container'>
          <Layout layoutWidth={this.state.layoutWidth}>
            <ScrollArea ref="leftContainer" speed={0.8} amSize={'sm'} contentClassName="content">
              <DocMenu group={group} component={component}/>
            </ScrollArea>
          </Layout>
          <LayoutSplitter layoutWidth={11} />
          <Layout layoutWidth='flex'>
            {example}
          </Layout>
      </Layout>
    );
  }
}

export default ReactDocContent;
