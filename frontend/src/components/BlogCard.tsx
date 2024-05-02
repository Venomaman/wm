import { Link } from "react-router-dom";

interface BlogcardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogcardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="shadow-md border border-slate-200 hover:bg-gray-50 hover:shadow-xl p-3 w-screen max-w-lg cursor-pointer">
        <div className="flex p-4">
          <Avatar size="small" name={authorName} />
          <div className="font-serif font-thin pl-2 pt-1 text-sm text-slate-900 flex justify-center">
            {authorName}{" "}
          </div>
          <div className="pl-1 pt-4">
            <Circle />
          </div>
          <div className=" font-serif pl-1 pt-1 font-thin text-slate-400 text-sm flex justify-center">
            {" "}
            {publishedDate}{" "}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{title}</div>

        <div className="text-sm font-light pt-1">
          {content.length > 100 ? content.slice(0, 200) + "....." : content}
        </div>

        <div className="font-serif text-slate-400 text-sm font-thin pt-6">
          {`${Math.ceil(content.length / 100)} minute(s) read `}
        </div>
      </div>
    </Link>
  );
};
export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
}) {
  return (
    <div
      className={`${
        size === "small" ? "size-7" : "size-10"
      } relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 pb-1`}
    >
      <span className="font-normal text-gray-700 dark:text-gray-200 text-sm">
        {name[0]}
      </span>
    </div>
  );
}

export function Circle() {
  return <div className="size-0.5 rounded-full dark:bg-gray-700"></div>;
}
