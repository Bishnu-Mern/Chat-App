import React, { Dispatch, useState, SetStateAction } from "react";
import axios from 'axios';
import { REGISTER_TITLE } from "../config/dashboardConfig";
import appleIcon from "../assets/apple-icon.svg";
import googleIcon from "../assets/google-icon.svg";
import fbIcon from "../assets/fb-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";

const RegisterPage: React.FC<{
  setIsRegister: Dispatch<SetStateAction<boolean>>;
}> = (props: any) => {
  const { setIsRegister } = props;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      const res = await axios.post('http://localhost:3001/api/register', formData);
      setIsRegister(true);
    } catch (error) {
      console.warn(error)
    }
  };

  return (
    <div className="pt-20 pl-56 flex flex-col max-w-xl">
      <div className="text-white font-sans text-4xl font-bold flex flex-col items-center">
        <div>Welcome</div>
        <div className="py-2">{REGISTER_TITLE}</div>
        <div className="flex pt-6">
          <div className="bg-gray-300 mr-4 w-12 py-2 justify-center flex items-center rounded-lg cursor-pointer border border-transparent hover:border-blue-500 transition-colors duration-300 ">
            <img src={googleIcon} alt="Google" className="max-w-8 h-auto" />
          </div>
          <div className="bg-gray-300 mr-4 flex items-center w-12 py-2 justify-center rounded-lg cursor-pointer border border-transparent hover:border-blue-500 transition-colors duration-300">
            <img src={appleIcon} alt="apple" className="max-w-8 h-auto" />
          </div>
          <div className="bg-gray-300 mr-4 w-12 py-2 flex items-center justify-center rounded-lg cursor-pointer border border-transparent hover:border-blue-500 transition-colors duration-300">
            <img src={fbIcon} alt="facebook" className="max-w-8 h-auto" />
          </div>
          <div className="bg-gray-300 mr-4 w-12 py-2 flex items-center justify-center rounded-lg cursor-pointer border border-transparent hover:border-blue-500 transition-colors duration-300">
            <img src={twitterIcon} alt="twitter" className="max-w-8 h-auto" />
          </div>
        </div>
        <div className="py-5 flex items-center">
          <div className="w-32 border-t-2 border-gray-300 my-4"></div>
          <span className="text-xs text-gray-200 font-sans w-28 pl-1">
            {" "}
            Signup via Email{" "}
          </span>
          <div className="w-32 border-t-2 border-gray-300 my-4"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 pt-4 max-w-sm">
        <div>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your name"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
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
            placeholder="Enter your Password"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Enter your Password again"
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-3 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Signup
          </button>
        </div>
      </form>

      <div className="py-8 text-sm px-2">
        <span>
          Already have an account ? Then{" "}
          <a
            className="hover:text-white cursor-pointer text-blue-600 underline font-medium"
            onClick={() => setIsRegister(false)}
          >
            Login
          </a>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
