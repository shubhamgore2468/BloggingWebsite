import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks/index";
import BlogSkeleton from "../components/BlogSkeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            {/* <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton /> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name || ""}
              title={blog.title}
              content={blog.content}
              publishedDate={blog.publishedDate}
              id={blog.id}
            />
          ))}
          {/* <BlogCard
            authorName={"Shubham"}
            title={"My first Blog"}
            content={
              "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            publishedDate={"11th July 2024"}
            id={1}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
