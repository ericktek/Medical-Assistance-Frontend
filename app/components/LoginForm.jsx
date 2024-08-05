import React from "react";

const LoginPage = () => {
  return (
    <>
  <div className="bg-gradient-to-r from-[#2FA0AB] via-[#6DD2DB] to-[#B2DCE2] flex flex-col min-h-screen justify-end">
  <div className="relative mx-auto max-w-7xl">
    
    {/* Circle 1: Left-aligned */}
    <div className="absolute top-1/4 left-0 transform -translate-y-1/2">
      <div className="bg-[#BEFAFF] w-28 h-28 rounded-full flex justify-center items-center">
        <div className="bg-[#81D5DD] w-24 h-24 rounded-full flex justify-center items-center filter blur-2xl">
          {/* Inner circle, commented out */}
          {/* <div className="bg-[#69CFD8] w-16 h-16 rounded-full blur"></div> */}
        </div>
      </div>
    </div>
    
    {/* Circle 2: Middle left-aligned */}
    <div className="absolute top-0 left-1/4 transform -translate-y-1/2">
      <div className="bg-[#BEFAFF] w-36 h-36 rounded-full flex justify-center items-center">
        <div className="bg-[#81D5DD] w-28 h-28 rounded-full flex justify-center items-center filter blur-lg">
          <div className="bg-[#69CFD8] w-23 h-23 rounded-full blur"></div>
        </div>
      </div>
    </div>

    {/* Circle 3: Right center-aligned */}
    <div className="absolute top-1/4 right-0 transform -translate-y-1/2">
      <div className="bg-[#BEFAFF] w-44 h-44 rounded-full flex justify-center items-center">
        <div className="bg-[#81D5DD] w-36 h-36 rounded-full flex justify-center items-center filter blur-xl">
          <div className="bg-[#69CFD8] w-24 h-24 rounded-full blur"></div>
        </div>
      </div>
    </div>

    {/* Centered Rectangular Area */}
    <div className="relative w-full h-[25rem] flex justify-center mt-4 overflow-hidden">
      <div className="bg-[#BEFAFF] w-[50rem] h-[25rem] rounded-t-full flex justify-center items-center">
        <div className="bg-[#81D5DD] w-[47rem] h-[23.5rem] rounded-t-full flex justify-center items-center filter blur-lg">
          <div className="bg-[#69CFD8] w-[42rem] h-[21rem] rounded-t-full blur"></div>
        </div>
      </div>
    </div>

  </div>
</div>


    </>
  );
};

export default LoginPage;
