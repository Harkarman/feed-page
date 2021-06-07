import { useState, useEffect } from "react";
import { format, fromUnixTime } from "date-fns";
import "./App.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [url, setUrl] = useState([
    "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e",
  ]);
  // const urls = [
  //   "http://www.mocky.io/v2/59b3f0b0100000e30b236b7e",
  //   "http://www.mocky.io/v2/59ac28a9100000ce0bf9c236",
  //   "http://www.mocky.io/v2/59ac293b100000d60bf9c239",
  // ];

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

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setUrl("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e");
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setUrl("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236");
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setUrl("http://www.mocky.io/v2/59ac293b100000d60bf9c239");
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
              <div
                key={post.thumbnail_image}
                style={{
                  display: "flex",
                  padding: 10,
                  justifyContent: "space-evenly",
                }}
              >
                <p>{post.id}</p>
                <img
                  src={post.thumbnail_image}
                  alt={post.id}
                  style={{ width: 150 }}
                />
                <p>{post.event_name}</p>
                <p>Views: {post.views}</p>
                <p>Likes: {post.likes}</p>
                <p>Shares: {post.shares}</p>
                <p>{format(fromUnixTime(post.event_date), "MM/dd/yyyy")}</p>
              </div>
            ))}
          </div>
        ) : (
          <div>No posts found</div>
        )}
      </div>
    </div>
  );
}
