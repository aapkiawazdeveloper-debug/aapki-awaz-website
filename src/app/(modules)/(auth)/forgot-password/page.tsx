import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
        <div className="flex flex-col justify-start gap-y-8 bg-white p-6 shadow-md rounded-2xl border border-[#ccc] max-w-sm w-full">
          {/* auth header start here */}
          <div className="flex items-center flex-col gap-y-1">
            <div className="w-20 h-20 mx-auto">
              <Image
                src="/assets/images/aapki-awaz-logo.jpg"
                className="object-cover w-full h-full"
                width={900}
                height={900}
                alt="logo"
              />
            </div>
            <h1 className="text-xl font-semibold text-center text-gray-800">
              Forgot Password
            </h1>
            <p className="text-center text-gray-600 text-sm">
              Enter your registered email and we will send you a link to reset
              your password.
            </p>
          </div>
          {/* auth header end here */}

          <form className="flex flex-col gap-y-4">
            {/* email form field start here */}
            <div className="flex flex-col gap-y-1.5">
              <label className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your registered email"
                className="border border-[#ccc] focus:border-[#ccc] focus:ring-0 rounded-sm text-[#555] px-4 py-1 h-[34px] w-full outline-none placeholder:text-sm"
              />
            </div>
            {/* email form field end here */}

            {/* submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-sm transition duration-200 cursor-pointer"
            >
              Send Reset Link
            </button>
          </form>

          {/* back to login */}
          <div className="text-center text-sm">
            <span className="text-gray-600">Remember your password? </span>
            <Link href="/login" className="text-blue-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordPage;
