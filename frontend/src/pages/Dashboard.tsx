import React, { useState } from "react";
import "./Dashboard.css";
import {
  COMPANY_LOGO,
  COMPANY_NAME,
  LOGIN_TITLE,
} from "../config/dashboardConfig";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const Dashboard: React.FC = () => {
  const [isAlreadyRegister, setIsAlreadyRegister] = useState(false);
  return (
    <div className="dashboard-page flex flex-col h-screen">
      <div className="flex justify-between h-12 px-16 pt-16 items-center">
        <div className="flex items-center">
          <div className="">
            <img src={COMPANY_LOGO} className="" />
          </div>
          <div>
            <div className="relative inline-block pl-2.5">
              <span className="text-white font-sans text-xl">
                {COMPANY_NAME}
              </span>
            </div>
          </div>
        </div>
      </div>
      {isAlreadyRegister ? <LoginPage setIsRegister={setIsAlreadyRegister}/> : <RegisterPage setIsRegister={setIsAlreadyRegister}/>}
    </div>
  );
};

export default Dashboard;
