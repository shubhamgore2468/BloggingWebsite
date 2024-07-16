const BlogSkeleton = () => {
  return (
    <div>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="flex justify-center flex-col">
            <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
          </div>
          <div className="text-sm font-extralight pl-2">
            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="h-1 w-1 text-xs pl-1 text-slate-400">.</div>
          <div className="text-sm pl-2 font-thin text-slate-400">
            <div className="h-2 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
          </div>
        </div>
        <div className="text-3xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-2 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        </div>
        <div className="pt-4 text-xs font-thin text-slate-400">
          <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
