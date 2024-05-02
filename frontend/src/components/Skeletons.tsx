
export const Skeletons = () => {
  return (
    <div className="w-96">
    <div role="status" className="max-w-sm animate-pulse">
      <div className="flex">
        <div className="h-4 w-48 bg-gray-200 rounded-full  mb-4"></div>
        <div className="font-serif font-thin pl-2 pt-1 text-sm text-slate-900 flex justify-center">
           <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className=" font-serif pl-1 pt-1 font-thin text-slate-400 text-sm flex justify-center">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
      </div>
      <div className="text-xl font-semibold pt-2"></div>

      <div className="text-sm font-light pt-1">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>
      <div className="font-serif text-slate-400 text-sm font-thin pt-6">
        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
