import React from 'react';
import IScroll from '../../shared/react/components/iscroll';
import PullToRefresh from '../../shared/react/components/iscroll/PullToRefresh';
class MobileDocContent extends React.Component {
  refreshData () {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        console.log(11111);
        resolve('data....');
      }, 3000);
    })
  }
  render () {
    return (
      <IScroll>
       <PullToRefresh withInIscroll={true} loadingFunc={this.refreshData}>
          <div className="inner">
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet mollitia vero quam, nisi possimus dolorem asperiores, molestiae sit voluptatibus alias consequuntur laudantium repellat ea quidem quaerat rerum perspiciatis iste adipisci.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum facilis sed nihil numquam at accusamus eum error eaque alias hic sint rem consequatur impedit tempore, dolor, quos, quae esse?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maiores maxime corrupti quisquam. Dignissimos sunt error voluptatibus repellat consequatur illo, aliquid nihil maxime veniam repudiandae, provident et sit, reiciendis dicta.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae id amet deserunt voluptate maiores sunt aut eligendi totam nesciunt magnam illo consectetur aspernatur at voluptatem, qui unde ullam omnis voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id assumenda et fugiat placeat enim quas, voluptas odio aperiam in quibusdam beatae eaque minima. Consequuntur pariatur, doloremque, odit dolorem ullam sunt!</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet mollitia vero quam, nisi possimus dolorem asperiores, molestiae sit voluptatibus alias consequuntur laudantium repellat ea quidem quaerat rerum perspiciatis iste adipisci.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum facilis sed nihil numquam at accusamus eum error eaque alias hic sint rem consequatur impedit tempore, dolor, quos, quae esse?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maiores maxime corrupti quisquam. Dignissimos sunt error voluptatibus repellat consequatur illo, aliquid nihil maxime veniam repudiandae, provident et sit, reiciendis dicta.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae id amet deserunt voluptate maiores sunt aut eligendi totam nesciunt magnam illo consectetur aspernatur at voluptatem, qui unde ullam omnis voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id assumenda et fugiat placeat enim quas, voluptas odio aperiam in quibusdam beatae eaque minima. Consequuntur pariatur, doloremque, odit dolorem ullam sunt!</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet mollitia vero quam, nisi possimus dolorem asperiores, molestiae sit voluptatibus alias consequuntur laudantium repellat ea quidem quaerat rerum perspiciatis iste adipisci.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda earum facilis sed nihil numquam at accusamus eum error eaque alias hic sint rem consequatur impedit tempore, dolor, quos, quae esse?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore maiores maxime corrupti quisquam. Dignissimos sunt error voluptatibus repellat consequatur illo, aliquid nihil maxime veniam repudiandae, provident et sit, reiciendis dicta.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae id amet deserunt voluptate maiores sunt aut eligendi totam nesciunt magnam illo consectetur aspernatur at voluptatem, qui unde ullam omnis voluptates.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id assumenda et fugiat placeat enim quas, voluptas odio aperiam in quibusdam beatae eaque minima. Consequuntur pariatur, doloremque, odit dolorem ullam sunt!</p>
          </div>
        </PullToRefresh>
      </IScroll>
    );
  }
}

export default MobileDocContent;
