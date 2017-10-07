class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="video-list">
        {this.props.videoListData.map((video, index) =>
          <VideoListEntry video = {video} key = {index} handleClick = {this.props.handleClick}/>
        )}
      </div>
    )
  }
}


/*

<div>
  {[1,2,3].map(video =>
  <VideoListEntry />
)}
</div>

*/
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
