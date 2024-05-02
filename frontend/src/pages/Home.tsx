import { Link } from "react-router-dom";
import { HomeAppBar } from "../components/HomeAppBar";
import { TrandingCard } from "../components/TrandingCard";

export const Home = () => {
  return (
    <div>
      <div>
        <HomeAppBar />
      </div>
      <div className="grid grid-cols-3 max-h-[460px] bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="grid col-span-2">
          <div className="flex flex-col justify-center pb-48">
            <div className="flex justify-center font-serif text-6xl hover:uppercase font-medium">
              write in medium...
            </div>
            <div className="flex justify-center text-4xl p-8 font-mono font-light hover:uppercase text-slate-600">
              Stay curious!
            </div>
            <div className="flex justify-center font-thin text-xl pb-2">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </div>
            <div className="flex justify-center p-4">
              <Link to={"/signup"}>
                <button
                  type="button"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-50 text-xs px-8 py-4 rounded-3xl text-center ring  hover:border"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid col-span-1 h-screen">
          <div>
            <div className="text-9xl flex justify-end pt-36 pr-24 blur-sm hover:blur-none">
              WM
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 pl-8 text-slate-400 font-mono hover:text-slate-800">
        Trending on Write in Medium..
      </div>
      <div className="grid grid-cols-3">
        <div className="p-1">
          <div className="grid col-span-1 shadow-md p-4  hover:shadow-xl">
            <TrandingCard
              name="Anonymous"
              desc="“Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending.”"
            />
          </div>
        </div>
        <div className=" p-1">
          <div className="grid col-span-1 shadow-md p-4  hover:shadow-xl">
            <TrandingCard
              name="Unknown"
              desc="“It does not matter how slowly you go as long as you do not stop.”"
            />
          </div>
        </div>
        <div className="p-1">
          <div className="grid col-span-1 shadow-md p-4  hover:shadow-xl">
            <TrandingCard
              name="Lucky"
              desc="“Too much sanity may be madness. And maddest of all, to see life as it is and not as it should be.”"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="p-1">
          <div className="grid col-span-1 shadow-md p-4  hover:shadow-xl">
            <TrandingCard
              name="Anonymous"
              desc="“Sing in me, Muse, and through me tell the story of that man skilled in all ways of contending.”"
            />
          </div>
        </div>
        <div className=" p-1">
          <div className="grid col-span-1 shadow-md p-4  hover:shadow-xl">
            <TrandingCard
              name="Unknown"
              desc="“It does not matter how slowly you go as long as you do not stop.”"
            />
          </div>
        </div>
        <div className="p-1">
          <div className="grid col-span-1 shadow-md p-4 hover:shadow-xl">
            <TrandingCard
              name="Lucky"
              desc="“Too much sanity may be madness. And maddest of all, to see life as it is and not as it should be.”"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
