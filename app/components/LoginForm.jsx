import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <>
      {/* Background gradient for the entire page */}
      <div className="bg-gradient-to-r from-[#2FA0AB] via-[#6DD2DB] to-[#B2DCE2] relative min-h-screen flex flex-col items-center justify-center">
        
        {/* Card container */}
        <div className="absolute backdrop-blur-sm bg-gradient-to-t from-[#bbf3f8e5] to-[#ffffffc7] h-[80vh] w-[90%] sm:w-[560px] sm:h-[650px] md:w-[600px] md:h-[700px] lg:w-[600px] lg:h-[700px] rounded-2xl flex flex-col p-6 z-10 ">
          
          <div className="">
            {/* Header with logo and title */}
            <div className="flex flex-col justify-center items-center mt-12 space-y-6">
              <Image width={60} height={60} src={"/logo.png"} />
              <h1 className="montserrat text-[#686868] font-medium text-[28px]">
                Medical Assistance
              </h1>
            </div>
            
            {/* Form container */}
            <div className="mx-14">
              
              {/* Email input */}
              <div className="m-6 ">
                <div className="flex justify-between">
                  <label className="text-right text-gray-400">Email</label>
                  
                  {/* Email icon */}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 31 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.6357 7.25C27.6357 5.92084 26.5437 4.83334 25.209 4.83334H5.79511C4.46041 4.83334 3.36838 5.92084 3.36838 7.25M27.6357 7.25V21.75C27.6357 23.0792 26.5437 24.1667 25.209 24.1667H5.79511C4.46041 24.1667 3.36838 23.0792 3.36838 21.75V7.25M27.6357 7.25L15.5021 15.7083L3.36838 7.25"
                      stroke="#90A2A5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full h-9 text-gray-600 border-b-2 bg-transparent border-gray-400 flex-1 py-3 outline-none focus:border-blue-400"
                />
              </div>
              
              {/* Password input */}
              <div className="m-6 ">
                <div className="flex justify-between">
                  <label className="text-right text-gray-400">Password</label>
                  
                  {/* Password icon */}
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2166 20.1825C18.2855 21.6484 15.9341 22.4605 13.5063 22.5C5.59846 22.5 1.07971 13.5 1.07971 13.5C2.48492 10.8921 4.43391 8.61368 6.79593 6.8175M11.1339 4.77C11.9115 4.58874 12.7077 4.49813 13.5063 4.5C21.4141 4.5 25.9328 13.5 25.9328 13.5C25.2471 14.7776 24.4293 15.9803 23.4927 17.0887M15.9012 15.885C15.5909 16.2166 15.2168 16.4826 14.8011 16.667C14.3853 16.8515 13.9366 16.9507 13.4815 16.9587C13.0265 16.9667 12.5745 16.8833 12.1525 16.7136C11.7305 16.5438 11.3471 16.2912 11.0253 15.9707C10.7035 15.6502 10.4498 15.2684 10.2793 14.8482C10.1089 14.4279 10.0252 13.9778 10.0332 13.5246C10.0412 13.0715 10.1408 12.6246 10.3261 12.2106C10.5113 11.7966 10.7784 11.424 11.1113 11.115M1.07971 1.125L25.9328 25.875"
                      stroke="#8C999B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="password"
                  className="w-full h-9 text-gray-600 border-b-2 bg-transparent border-gray-400 flex-1 py-3 outline-none focus:border-blue-400"
                />
              </div>
              
              {/* Forgot Password link */}
              <Link href="/forgot-password">
                <p className="flex flex-col m-6 text-[#3579F8] text-end hover:underline">
                  Forgot Password?
                </p>
              </Link>
              
              {/* Sign In button */}
              <div className="flex justify-center m-6 bg-[#3579F8] py-3 rounded-lg hover:bg-[#3579f8d0]">
                <Link href="">
                  <h1 className="poppins text-[20px] font-[600] text-white">
                    SIGN IN
                  </h1>
                </Link>
              </div>
              
              {/* OR separator */}
              <div className="flex items-center text-gray-400 justify-center">
                <span className="w-20 border-t-2 border-gray-400"></span>
                <h1 className="mx-4 text-sm font-semibold">OR</h1>
                <span className="w-20 border-t-2 border-gray-400"></span>
              </div>
              
              {/* Continue with Google button */}
              <div className="flex justify-center m-6 bg-white hover:bg-[#ffffffbd] py-4 rounded-lg space-x-3 ">
                <Link className="flex space-x-3" href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 262"
                    id="google"
                  >
                    <path
                      fill="#4285F4"
                      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.906 13.925 59.75l1.335.635 39.896-30.43-1.875-2.606"
                    ></path>
                    <path
                      fill="#E94F35"
                      d="M130.55 48.832c15.215 0 29.652 5.267 41.067 14.605l29.05-29.048C168.95 6.875 150.007 0 130.55 0 79.49 0 35.393 29.328 8.99 71.342l.527 1.464 40.298 31.187c10.444-31.478 39.745-54.256 74.269-54.256"
                    ></path>
                  </svg>
                  <h1 className="text-[#4285F4] font-semibold text-lg">
                    Continue with Google
                  </h1>
                </Link>
              </div>
              
              {/* Sign Up link */}
              <Link href="/sign-up">
                <p className="flex flex-col items-center mt-6 mb-12 text-gray-400">
                  Don’t have an account?
                  <span className="text-[#3579F8] cursor-pointer">
                    Sign Up
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
