import React, { Component } from 'react';
import Table from '../../shared/react/components/table';

class Demo extends Component {

}

class DemoRender  extends Component {

}

class DemoContainer extends Component {

}

class DemoApiTable extends Component {

  render () {
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>网站名称</th>
            <th>网址</th>
            <th>创建时间</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Amaze UI</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
          </tr>
          <tr className="am-active">
            <td>Amaze UI(Active)</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
          </tr>
          <tr>
            <td>Amaze UI</td>
            <td>http://amazeui.org</td>
            <td>2012-10-01</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}

Demo.Render = DemoRender ;
Demo.Container = DemoContainer;
Demo.ApiTable = DemoApiTable;

export default Demo;
