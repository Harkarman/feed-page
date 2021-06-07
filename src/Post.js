import { format, fromUnixTime } from "date-fns";

export default function Post({ post }) {
  return (
    <div className="flex flex-wrap">
      <div className="container items-center px-5 py-12 lg:px-20">
        <div className="p-6 mx-auto bg-white border rounded-lg shadow-xl lg:w-1/2">
          <div className="flex flex-col items-start py-2 rounded-lg lg:flex-row">
            <div className="flex items-center justify-center w-full lg:justify-start lg:w-1/2">
              <img
                src={post.thumbnail_image}
                alt={post.id}
                className="rounded-lg max-h-52"
              />
            </div>
            <div className="flex flex-col w-full text-gray-500 lg:ml-4 items-center">
              <h1 className="mt-4 mb-8 text-md font-semibold tracking-widest text-black uppercase lg:mt-0 title-font">
                {post.id}
              </h1>
              <p className="mb-3 text-base leading-relaxed text-gray-500">
                {" "}
                {post.event_name}{" "}
              </p>
              <div className="flex flex-row">
                <small className="text-xs text-gray-600 px-10">
                  <b>Views</b> {post.views}
                </small>
                <small className="text-xs text-gray-600 px-10">
                  <b>Likes</b> {post.likes}
                </small>
                <small className="text-xs text-gray-600 px-10">
                  <b>Shares</b> {post.shares}
                </small>
              </div>
              <p className="text-sm py-5">
                {format(fromUnixTime(post.event_date), "dd/MM/yyyy")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
