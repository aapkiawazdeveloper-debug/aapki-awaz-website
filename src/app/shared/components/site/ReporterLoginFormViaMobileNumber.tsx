"use client";

import { useState } from "react";
import { FiUnlock, FiPhone, FiRefreshCcw } from "react-icons/fi";
import CustomInput from "./ui/form/CustomInput";
import Button from "./ui/buttons/Button";

const ReporterLoginFormViaMobileNumber = () => {
  // captcha state
  const [captcha, setCaptcha] = useState(generateCaptcha());

  function generateCaptcha() {
    // generate a 6-digit random number
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
  };

  return (
    <form className="bg-white shadow-lg p-6 rounded-2xl max-w-sm mx-auto mt-10 border border-gray-200">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">
        Mobile Login
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Login via mobile passcode / verification code
      </p>

      <div className="grid grid-cols-1 gap-4">
        <CustomInput
          id="mobile"
          label="Mobile Number"
          placeholder="Enter your mobile number"
          icon={<FiPhone />}
        />

        <CustomInput
          id="securityCode"
          label="Security Code"
          placeholder="Enter the security code"
          icon={<FiUnlock />}
        />
      </div>

      {/* Captcha */}
      <div className="flex items-center justify-between mt-4">
        <div className="px-4 py-2 bg-gray-100 rounded-md font-mono text-lg tracking-widest">
          {captcha}
        </div>
        <button
          type="button"
          onClick={refreshCaptcha}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium cursor-pointer"
        >
          <FiRefreshCcw /> Refresh
        </button>
      </div>

      {/* Button */}
      <div className="mt-4">
        <Button title="Get Passcode" type="submit" />
      </div>
    </form>
  );
};

export default ReporterLoginFormViaMobileNumber;
