import { format, fromUnixTime } from "date-fns";

export default function Post({ post }) {
  return (
    <div
      key={post.thumbnail_image}
      style={{
        display: "flex",
        padding: 10,
        justifyContent: "space-evenly",
      }}
    >
      <p>{post.id}</p>
      <img src={post.thumbnail_image} alt={post.id} style={{ width: 150 }} />
      <p>{post.event_name}</p>
      <p>Views: {post.views}</p>
      <p>Likes: {post.likes}</p>
      <p>Shares: {post.shares}</p>
      <p>{format(fromUnixTime(post.event_date), "dd/MM/yyyy")}</p>
    </div>
  );
}
