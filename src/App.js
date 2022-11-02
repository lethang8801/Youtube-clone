import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
function App() {
  const [result, setResult] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit("Carryminati");
  }, []);

  const onTermSubmit = async (term) => {
    setLoading(true);
    const response = await youtube.get("/search", {
      params: {
        q: term,
        key: "AIzaSyD3WgUHAzjhJCiV_zE36z5Hl37sxOfnPVk",
        maxResults: 5,

        part: "snippet",

        type: "video",
      },
    });
    console.log(response.data.items);
    setResult(response.data.items);
    setSelectedVideo(response.data.items[0]);
    setLoading(false);
  };
  const onVideoSelect = (video) => {
    console.log(video);
    setSelectedVideo(video);
  };
  return (
    <div className="ui container">
      <Searchbar searchTerm={onTermSubmit} />

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            {isloading ? (
              <h1>Loading...</h1>
            ) : (
              <VideoList videos={result} onVideoSelect={onVideoSelect} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
