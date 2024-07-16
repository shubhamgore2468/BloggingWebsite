import BlogSkeleton from "../components/BlogSkeleton";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();

  const { loading, blog } = useBlog({ id: id || "" });
  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <BlogSkeleton />
        </div>
      </div>
    );
  }

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;
