import { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";

export default function App() {
  const urls = [
    "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e",
    "http://www.mocky.io/v2/59ac28a9100000ce0bf9c236",
    "http://www.mocky.io/v2/59ac293b100000d60bf9c239",
  ];
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState([urls[0]]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => console.log(err));
  }, [url]);

  const sortArray = (type) => {
    const types = {
      likes: "likes",
      views: "views",
      shares: "shares",
      event_date: "event_date",
    };
    const sortProperty = types[type];
    const sorted = [...posts].sort((a, b) => b[sortProperty] - a[sortProperty]);
    setPosts(sorted);
  };

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setUrl(urls[0]);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setUrl(urls[1]);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setUrl(urls[2]);
          }}
        >
          3
        </button>
      </div>
      <div>
        <select onChange={(e) => sortArray(e.target.value)}>
          <option value="likes">Likes</option>
          <option value="views">Views</option>
          <option value="shares">Shares</option>
          <option value="event_date">Date</option>
        </select>
      </div>
      <div>
        {posts.length > 1 ? (
          <div>
            {posts.map((post) => (
              <Post post={post} />
            ))}
          </div>
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
}
