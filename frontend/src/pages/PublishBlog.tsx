import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PublishBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if(!token){
      navigate("/signin")
    }
  },[token]);

  return (
    <div> 
      <AppBar />
      <div className="text-4xl font-light flex justify-center p-4 font-serif text-slate-600">
        Write In Medium...
      </div>
      <div className="flex justify-center font-light text-lg font-mono text-slate-400">
        Publish your Blog here.
      </div>
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-3/5">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="title"
            className="bg-gray-50 border border-gray-500 rounded-lg p-2 block w-full text-sm focus:ring-blue-500"
          ></input>
          <TextEditor
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <button
            onClick={async() => {
            const response= await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content: description,
              },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
              });
              navigate(`/blog/${response.data.id}`)
            }}
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-gray-600 rounded-lg focus:ring-2 focus:ring-green-200 dark:focus:ring-green-500 hover:bg-green-500"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <form>
      <div className="w-full mb-4 rounded-lg pt-4 ">
        <textarea
          onChange={onChange}
          id="editor"
          className=" bg-gray-50 border border-gray-500 p-2 h-52 block w-full rounded-lg text-sm text-gray-800 focus:ring-0 dark:text-black dark:placeholder-gray-400"
          placeholder="Write an article..."
          required
        ></textarea>
      </div>
    </form>
  );
}
