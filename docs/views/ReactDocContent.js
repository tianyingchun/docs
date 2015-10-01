import React, { Component } from 'react';
import ScrollArea from '../../shared/react/components/scrollarea';
import { Layout, LayoutSplitter } from '../../shared/react/components/layout';
import DocMenu from '../components/DocMenu';

import Demo from '../../shared/react/components/demo';

const {
  DraggableDemo,
  ButtonDemo,
  LayoutDemo,
  ScrollAreaDemo,
  MenuDemo,
  MessageDemo,
  TagDemo,
  SelectDemo
} = Demo;

console.log(Demo)
class ReactDocContent extends Component {
  state = {
    layoutWidth: 245,
    layoutHeight: 400,
    layoutWidthFlex: 0,
    layoutHeightFlex: 400
  }

  getComponents (child) {
    // here cause of we used ScrollArea nested into Layout component,
    // we should not speficied the width and height for `ScrollArea`.
    return (
      <ScrollArea speed={0.8} ref="flexContainer" amSize={'sm'} contentClassName="content">
        {child}
      </ScrollArea>
    );
  }
  render () {
    let params = this.props.params;
    let { group, component, target } = params;
    console.log('router params',params);
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

      case 'draggable':
        example = this.getComponents(<DraggableDemo />);
        break;

      case 'menu':
        example = this.getComponents(<MenuDemo />);
        break;

      case 'message':
        example = this.getComponents(<MessageDemo />);
        break;

      case 'tag':
        example = this.getComponents(<TagDemo />);
        break;
      case 'select':
        example = this.getComponents(<SelectDemo />);
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
