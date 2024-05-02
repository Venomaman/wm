import { InputLabel } from "./InputLabel";
import { useState } from "react";
import { SignupInput } from "@venomamank/common";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AuthSignup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendReq() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signup`,
        postInput
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
      setLoading(false);
    } catch (e) {
      alert("error while sign up");
      setLoading(false);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col max-w-md ">
      {loading ? (
        <div className="flex items-center justify-center pl-24">
          <div
            className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite] pl-5"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center max-w-md pl-24">
            <div>
              <div className=" text-2xl font-bold">Create an Account?</div>
              <div className="text-slate-500 ">
                Already have an account?
                <Link to={"/signin"} className="p-1 text-slate-400 underline">
                login
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col pl-24 p-3">
            <div className="max-w-md">
              <InputLabel
                label="username"
                placeholder="Ex. @Test User"
                onChange={(e) => {
                  setPostInput({
                    ...postInput,
                    name: e.target.value,
                  });
                }}
              />
              <InputLabel
                label="email"
                placeholder="Ex. xyz@email.com"
                onChange={(e) => {
                  setPostInput({
                    ...postInput,
                    username: e.target.value,
                  });
                }}
              />
              <InputLabel
                label="password"
                type={"password"}
                placeholder="****"
                onChange={(e) => {
                  setPostInput({
                    ...postInput,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="pt-4 max-w-md flex justify-center">
              <button
                onClick={sendReq}
                type="button"
                className=" w-32 text-white bg-gray-600 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Signup
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
