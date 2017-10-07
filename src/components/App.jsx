class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      searchTerm: ''
    }
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.handleSearchVideoClick = this.handleSearchVideoClick.bind(this);
    this.handleYouTubeData = this.handleYouTubeData.bind(this);
  }
  handleVideoSelection(video) {
    this.setState({
      video: video
    })
  }
  handleSearchTerm(searchTerm) {
    console.log('the search term is ', searchTerm);
    this.setState({
      searchTerm: searchTerm
    })
  }
  handleSearchVideoClick() {
    console.log('video search clicked');
    window.searchYouTube({query: this.state.searchTerm, max:5, key: window.YOUTUBE_API_KEY}, this.handleYouTubeData);
  }

  handleYouTubeData(data) {
    console.log('the youtube data is ', data)
    this.setState({
      videos: data.items,
      video: data.items[0]
    })
  }

  componentDidMount() {
    //console.log('data is ', data);
    window.searchYouTube({query: 'cats', max: 5, key: window.YOUTUBE_API_KEY}, this.handleYouTubeData);
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchTerm = {this.handleSearchTerm} handleSearchVideoClick = {this.handleSearchVideoClick}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video = {this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList videoListData = {this.state.videos} handleClick = {this.handleVideoSelection}/>
          </div>
        </div>
      </div>
  )
}
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
