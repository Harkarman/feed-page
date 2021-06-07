import { useState, useEffect } from "react";
import "./styles/App.css";
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
      <nav
        className="relative z-0 flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <button
          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          onClick={() => {
            setUrl(urls[0]);
          }}
        >
          1
        </button>
        <button
          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          onClick={() => {
            setUrl(urls[1]);
          }}
        >
          2
        </button>
        <button
          className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
          onClick={() => {
            setUrl(urls[2]);
          }}
        >
          3
        </button>
      </nav>
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
              <Post post={post} key={post.thumbnail_image} />
            ))}
          </div>
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
}
