import React, { Component } from 'react';
import UI from '../../shared/react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DocActions from '../actions/DocActions';
import DocMenu from '../components/DocMenu';
import DemoList from '../../shared/react/components/demo';
import isShallowEqual from '../../shared/react/utils/shallowEqual';
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
  SelectDemo
} = DemoList;

console.log('ReactDocContent ->demos: ', DemoList);
@connect((state) => ({ docDetail: state.docDetail }))
class ReactDocContent extends Component {

  state = {
    layoutWidth: 230,
    hydrating: {
      group:'',
      component:'',
      target: '',
    }
  }

  action = bindActionCreators(DocActions, this.props.dispatch)

  componentDidMount() {
    console.log('componentDidMount...');
    this.fetchDocDetail();
  }

  componentDidUpdate (prevProps) {
    console.log('componentDidUpdate...');
    let canUpdate = !isShallowEqual(prevProps.params, this.props.params);
    if (canUpdate) {
      this.fetchDocDetail();
    }
  }

  // fetch doc detail data.
  fetchDocDetail (_params) {
    let { dispatch, params } = this.props;
    dispatch(() => this.action.loadDocDetail(_params || params));
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
    let docDetail = this.props.docDetail;
    let isLoading = true;

    isLoading = docDetail.isLoading || false;

    console.log("docDetail" , docDetail);
    console.log('router info',params, routes);

    let { group, component, target } = params;

    let example;

    if (isLoading) {
      example = <div style={{padding: '10px'}}><Icon icon="spinner6" spin /> 加载Doc详情...</div>;
    } else if (!isLoading && docDetail.data && docDetail.data.length) {
      console.warn('docDetail', docDetail.data)
      example = this.getComponents(
         <div className="guide-detail" dangerouslySetInnerHTML={{__html:docDetail.data.join('')}}>
        </div>
      );
    } else {
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
        case 'select':
          example = this.getComponents(<SelectDemo />);
          break;
      }
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
