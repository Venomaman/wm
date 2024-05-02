import { Link, useNavigate } from "react-router-dom";
import { InputLabel } from "./InputLabel";
import { useState } from "react";
import { SigninInput } from "@venomamank/common";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const AuthSignin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputes, setInputs] = useState<SigninInput>({
    username: "",
    password: "",
  });

  async function sendRequest() {
    setLoading(true);
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        inputes
      );
      const jwt = res.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
      setLoading(false);
    } catch (error) {
      alert("error while logging in....");
      setLoading(false);
    }
  }

  return (
    <div className="h h-screen flex justify-center flex-col max-w-md">
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
              <div className=" text-2xl font-bold">Login an Account</div>
              <div className="text-slate-500 ">
                Don't have an account?
                <Link to={"/signup"} className="p-1 text-slate-400 underline">
                  signup
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col pl-24 p-3">
            <InputLabel
              label="email"
              placeholder="xyz@email.com"
              onChange={(e) => {
                setInputs({
                  ...inputes,
                  username: e.target.value,
                });
              }}
            />
            <InputLabel
              label="password"
              type="password"
              placeholder="******"
              onChange={(e) => {
                setInputs({
                  ...inputes,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div className="pt-4 max-w-md flex justify-center pl-24">
            <button
              onClick={sendRequest}
              type="button"
              className=" w-32 text-white bg-gray-600 hover:bg-gray- focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
};
