import { Link } from "react-router-dom";

export const HomeAppBar = () => {
  return (
    <div>
      <div className="shadow p-4 grid grid-cols-2 bg-gray-50">
        <Link to={"/blogs"}>
          <div className="font-semibold text-slate-900 flex col-span-1 flex-col justify-center pl-6 cursor-pointer pt-2">
            W-Medium
          </div>
        </Link>
        <div className="flex col-span-1 text-slate-700 justify-end pr-4">
          <div className="pr-5 pt-2 underline text-sm text-slate-800 hover:text-purple-500">
            <Link to={"/publish"}>Write</Link>
          </div>
          <div className="pr-5 pt-2 underline text-sm text-slate-800 hover:text-purple-500">
            <Link to={"/blogs"}>Blogs</Link>
          </div>
          <div className="pr-5 pt-2 underline text-sm text-slate-800 hover:text-purple-500">
            <Link to={"/signin"}>Login</Link>
          </div>
          <div className="pr-3 pt-1">
            <Link to={"/signup"}>
              <button
                type="button"
                className="hover:bg-purple-500 focus:ring-2 focus:ring-green-400 bg-slate-600 text-slate-50 text-xs px-5 py-2 font-sans rounded-2xl text-center"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
