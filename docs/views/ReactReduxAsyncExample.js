import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as WsListActions from '../actions/WsListActions';
import DocumentMeta from 'react-document-meta';
import { Link } from 'react-router';
import WorkspaceList from '../components/WorkspaceList';
import Button from '../../shared/react/components/button';
import Icon from '../../shared/react/components/icon';
import ScrollArea from '../../shared/react/components/scrollarea';
import DraggableApp from '../../shared/react/components/draggable/demo';

@connect((state) => ({ workspaces: state.workspaces }))
class WsList extends React.Component {

  constructor (...args) {
    super(...args);
  }

  // used to server async rendering.
  static needs = [
    (params) => WsListActions.getExistedWsList(params)
  ]
  // binding action creators.
  action = bindActionCreators(WsListActions, this.props.dispatch)

  componentDidMount () {
    let { dispatch } = this.props;
    console.log('componentDidMount()...');
    // dispatch(() => this.action.getWsListAsync('workspaceId'));
  }
  render () {
    let { workspaces, dispatch } = this.props;
    // place meta in all individule module root view.
    const meta = {
      title: 'the docs of react ui components',
      description: 'show user documents for react ui components',
      canonical: 'http://example.com/docs',
      meta: {
        name: {
          keywords: 'react ui, react components, react widgets, react component docs'
        }
      }
    };

    let isLoading = workspaces.isLoading;
    let loadingTxt = isLoading ? true : false;

    console.log('loading: ', loadingTxt);

    // manully dispatch action.
    return (
      <div>
        <DraggableApp />

        <ScrollArea speed={0.8} width={400} height={400} className="area" amSize={'sm'} contentClassName="content">
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>
          <p>sdfsf</p>

          <Button amSize={'sm'} disabled={isLoading} onClick={() => this.action.getExistedWsList({ timeout:5000 })} amStyle={'primary'}>
            <Icon amStyle={'secondary'} amSize={'sm'} spin={isLoading} icon={'comment'}/>
            Reload data
          </Button>
          <div><Link to="/about">About</Link></div>
          <DocumentMeta {...meta} />
          <WorkspaceList workspaces= { workspaces.list || workspaces } />
        </ScrollArea>
      </div>
    );
  }
}
export default WsList;
