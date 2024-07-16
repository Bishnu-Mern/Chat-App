import axios from "axios";
import React, { Dispatch, useState, SetStateAction } from "react";
import { useNavigate } from 'react-router-dom';
import { LOGIN_TITLE } from "../config/dashboardConfig";

const LoginPage: React.FC<{setIsRegister: Dispatch<SetStateAction<boolean>>}> = (props:any) => {
  const {setIsRegister} = props
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const res = await axios.post('http://localhost:3001/api/login', formData);
      if (res.status === 200){
        navigate('/chatPage')
      }
    } catch (error) {
      console.warn(error)
    }
  };

  return (
    <div className="pt-32 pl-56 flex-col max-w-2xl flex">
      <div className="text-white font-sans text-4xl font-bold">
        <span>Welcome back.</span>
        <div>{LOGIN_TITLE}</div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-4 max-w-sm">
        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <input
            type="text"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            onClick={()=> handleSubmit}
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="py-5 flex items-center">
        <div className="w-36 border-t-2 border-gray-300 my-4"></div>
        <span className="px-8 text-gray-200 font-sans text-xs"> OR </span>
        <div className="w-36 border-t-2 border-gray-300 my-4"></div>
      </div>
      <button
        type="submit"
        className="w-96 h-10 cursor-pointer hover:bg-indigo-500 bg-[#61A1A1] rounded-md"
      >
        <span className="text-white font-sans font-medium">
          Sign In with Google
        </span>
      </button>
      <div className="py-5">
        <span className="text-xs">
          By logging in, you agree to our{" "}
          <a className="hover:text-white cursor-pointer text-blue-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="hover:text-white cursor-pointer text-blue-600 underline">
            Terms & Conditions
          </a>
        </span>
      </div>
      <div className="py-12 flex">
        <div className="flex text-sm">
          <div className="flex flex-col">
            <div>Lost password?</div>
            <div>
              <a className="hover:text-white cursor-pointer text-blue-600 underline font-bold">
                Click here to request
              </a>
            </div>
          </div>
          <div className="flex flex-col pl-10">
            <div>Don't have an account?</div>
            <div>
              <a
                className="hover:text-white cursor-pointer text-blue-600 underline font-bold"
                onClick={() => setIsRegister(false)}
              >
                Click here to register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
