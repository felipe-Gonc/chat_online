import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChage = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-sm bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-red-500"> chatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Nome Completo</span>
            </label>
            <input
              type="text"
              placeholder="Ex: João Pedro"
              className="w-full input bg-transparent focus:bg-base-100/40 input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">User</span>
            </label>
            <input
              type="text"
              placeholder="Ex: @Jao"
              className="w-full input bg-transparent focus:bg-base-100/40 input-bordered h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Senha</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full input bg-transparent focus:bg-base-100/40 input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirme a senha</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full input bg-transparent focus:bg-base-100/40 input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckboxChange={handleCheckboxChage}
            selectedGender={inputs.gender}
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-red-600 transition-colors duration-300 mt-2 inline-block"
          >
            Você já possui uma conta?
          </Link>

          <div>
            <button className="btn btn-block bg-red-500 hover:bg-red-600 text-white btn-sm mt-2">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
