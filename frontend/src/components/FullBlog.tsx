import Appbar from "./Appbar";
import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-2xl pt-10">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-4">
              Posted on {blog.publishedDate}
            </div>
            <div>{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="pb-2 text-lg text-slate-500">Author</div>
            <div className="flex">
              <div className="pr-3 flex flex-col justify-center">
                <Avatar name={blog.author.name || "Anonymous"} />
              </div>
              <div>
                <div className="text-lg font-bold">
                  {" "}
                  {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the
                  user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;
