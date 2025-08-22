import { FiUser, FiLock } from "react-icons/fi";
import CustomInput from "./ui/form/CustomInput";
import CustomCheckbox from "./ui/form/CustomCheckbox";
import Button from "./ui/buttons/Button";

const MemberLoginForm = () => {
  return (
    <form className="bg-white shadow-lg p-6 rounded-2xl max-w-sm mx-auto mt-10 border border-gray-200">
      {/* Title */}
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-1">
        Member Login
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Access your account securely
      </p>

      {/* Inputs */}
      <div className="grid grid-cols-1 gap-4">
        <CustomInput
          id="userId"
          label="User ID"
          placeholder="Enter your user ID"
          icon={<FiUser />}
        />

        <CustomInput
          id="password"
          label="Password"
          placeholder="Enter your password"
          icon={<FiLock />}
        />
      </div>

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between mt-4">
        <CustomCheckbox id="rememberMe" label="Remember Me" />
        <a href="#" className="text-sm text-[#337ab7] hover:underline">
          Forgot Your Password?
        </a>
      </div>

      {/* Button */}
      <div className="mt-6">
        <Button title="Login" type="submit" />
      </div>
    </form>
  );
};

export default MemberLoginForm;
