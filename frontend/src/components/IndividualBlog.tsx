import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const IndividualBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 px-10 pt-6 w-full max-w-screen-2xl">
        <div className=" col-span-8 border border-gray-200 shadow-md hover:shadow-xl p-5">
          <div className="text-5xl text-slate-600 font-bold">{blog.title}</div>
          <div className=" text-md font-light text-slate-500 pt-3">
            Posted on Jan 1 2024
          </div>
          <div className="text-lg font-normal text-slate-600 pt-3">
            {blog.content}
          </div>
        </div>
        <div className="col-span-4 pl-6 border border-gray-100 p-2">
          <div className="text-sm text-slate-500 font-normal">Author</div>
          <div className="flex pt-4">
            <Avatar name={blog.author.name} size="small" />
            <div className="pl-5 font-semibold text-xl">{blog.author.name}</div>
          </div>
          <div className="pl-12 pt-3 text-slate-500 text-sm">
            When people ask me if I went to film school I tell them, no, I went
            to films.
          </div>
        </div>
      </div>
    </div>
  );
};
