import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <Avatar name={authorName} />{" "}
          </div>
          <div className="text-sm font-extralight pl-2">{authorName}</div>
          <div className="h-1 w-1 text-xs pl-1 text-slate-400">.</div>
          <div className="text-sm pl-2 font-thin text-slate-400">
            {publishedDate}
          </div>
        </div>
        <div className="text-3xl font-semibold pt-2">{title}</div>
        <div className="text-md font-thin">{content.slice(0, 100)} ...</div>
        <div className="pt-4 text-xs font-thin text-slate-400">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
        {/* <div className="bg-slate-200 h-1 w-full"></div> */}
      </div>
    </Link>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-sm text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
