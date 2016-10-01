// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer/>
//     </div>
//     <div className="col-md-5">
//       <VideoList/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: fakeVideoData.concat(moreFakeVideoData),
      currentVideo: fakeVideoData[1],
    };

  },

  // setVideo() {
  //   return this.state.currentVideo;
  // },

  setVideo(video) {
    console.log('SETTING STATE ON APP!!')
    this.setState({currentVideo: video});
  },

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videos} setVideo = {this.setVideo.bind(this)}/>
        </div>
      </div>
      );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
