import React from "react";

const LoginPage = () => {
  return (
    <>
      {/* Background gradient for the entire page */}
      <div className="bg-gradient-to-r from-[#2FA0AB] via-[#6DD2DB] to-[#B2DCE2] relative min-h-screen flex flex-col items-center justify-center">
        
  {/* Card container */}
  <div className="absolute backdrop-blur-sm bg-gradient-to-t from-[#ADE3E8] to-[#ffffff] opacity-95 h-[700px] w-[90%] sm:w-[560px] rounded-2xl flex flex-col justify-center items-center p-6 z-10">
    <div>
      <h1 className="text-center text-2xl">Hello</h1>
    </div>
  </div>


        <div className="w-full hidden md:block">
          <div>
            {/* Main container for the content, centered and padded */}
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex lg:mr-72 md:mr-72 justify-center">
                {/* Outer circle with inner blurred circle */}
                <div className="bg-[#BEFAFF] w-28 h-28 rounded-full flex justify-center items-center">
                  <div className="bg-[#81D5DD] w-24 h-24 rounded-full flex justify-center items-center filter blur-2xl">
                    {/* Optional content could be added here */}
                  </div>
                </div>
              </div>
              <div>
                {/* Another set of nested circles with blur effects */}
                <div className="bg-[#BEFAFF] w-36 h-36 rounded-full flex justify-center items-center">
                  <div className="bg-[#81D5DD] w-28 h-28 rounded-full flex justify-center items-center filter blur-lg">
                    <div className="bg-[#69CFD8] w-23 h-23 rounded-full blur"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end mb-96">
                {/* Another circular pattern with different dimensions */}
                <div className="bg-[#BEFAFF] w-44 h-44 rounded-full flex justify-center items-center">
                  <div className="bg-[#81D5DD] w-36 h-36 rounded-full flex justify-center items-center filter blur-xl">
                    <div className="bg-[#69CFD8] w-24 h-24 rounded-full blur"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with a half-circle shape */}
        <div className="w-full absolute bottom-0 flex justify-center overflow-hidden">
          <div className="bg-[#BEFAFF] w-[50rem] h-[25rem] rounded-t-full flex justify-center items-center">
            <div className="bg-[#81D5DD] w-[47rem] h-[23.5rem] rounded-t-full flex justify-center items-center filter blur-lg">
              <div className="bg-[#69CFD8] w-[42rem] h-[21rem] rounded-t-full blur"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
