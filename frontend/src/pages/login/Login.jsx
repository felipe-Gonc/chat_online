import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-500"> chatApp</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Ex: @felipe"
              className="w-full input bg-transparent focus:bg-base-100/40 input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full input bg-transparent focus:bg-base-100/40 input-bordered h-10"
            />
          </div>
          <a href="#" className="text-sm hover:underline hover:text-red-600 transition-colors duration-300 mt-2 inline-block">
            {"Não"} possui conta?
          </a>
          <div>
            <button className="btn btn-block bg-red-500 hover:bg-red-600 text-white btn-sm mt-2">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
