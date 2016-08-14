class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData,
      query: ''
    };
  }
  onTitleClick(video) {
    this.setState({
      video: video
    });
  }
  queryYouTube() {
    this.props.searchYouTube({
      key: this.props.APP_KEY,
      q: this.state.query,
      maxResults: 10,
    }, (items) => {
      this.setState({
        video: items[0],
        videos: items
      });
      console.log('data:', items);
    });
    
  }
  componentDidMount() {
    this.queryYouTube(text);
  }
  searchText(text) {
    this.setState({
      query: text
    });
    this.queryYouTube();
  }
  render() {
    return (
      <div>
        <Nav typing={this.searchText}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.video}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} onClick={this.onTitleClick.bind(this)} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
