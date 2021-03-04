import React from "react";
import youtube from "./apis/youtube";

import SearchBar from "./search-bar.component";
import VideoList from "./video-list.component";
import VideoDetail from "./video-detail.component";

const KEY = "AIzaSyBomXTm5jA2DDU-QTQJKAB73SqEmSJhtHc";

class App extends React.Component {
  state = { videos: [], selectedVid: null };

  componentDidMount() { 
    this.onUserInputSubmit('car')
  }
  onUserInputSubmit = async (userInput) => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        q: userInput,
        type: "video",
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVid: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVid: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onFormSubmit={this.onUserInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVid} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
