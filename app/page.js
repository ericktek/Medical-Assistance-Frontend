'use client'
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between relative overflow-hidden">
        {/* Video Background */}
        <video autoPlay muted loop className="absolute w-full h-screen object-cover">
          <source src="/videos/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Mesh Blur Effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 mix-blend-multiply filter blur-3xl opacity-70 bg-purple-200 rounded-full animate-blob" style={{ marginRight: '-15rem' }}></div>
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 mix-blend-multiply filter blur-3xl opacity-70 bg-green-200 rounded-full animate-blob animation-delay-2000" style={{ marginLeft: '-15rem' }}></div>
          <div className="absolute w-72 h-72 lg:w-96 lg:h-96 mix-blend-multiply filter blur-3xl opacity-70 bg-blue-200 rounded-full animate-blob animation-delay-4000" style={{ bottom: '0rem' }}></div>
        </div>

        {/* Navigation */}
        <div className="container max-w-6xl mx-auto px-4 py-6 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#">
                <Image
                  src="/logo.png"
                  alt="Medikea"
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                  width={48}
                  height={48}
                />
              </a>
              <span className="hidden sm:flex text-lg sm:text-xl md:text-2xl text-gray-600 font-bold">
                <h1 className="Montserrat text-gray-100">Medikea</h1>
              </span>
            </div>
            <div className="flex space-x-4 sm:space-x-6 items-center">
              <a href="#" className="text-base text-gray-100 sm:text-lg font-medium hover:underline">Log in</a>
              <a
                href="#"
                className="text-base sm:text-lg md:text-xl font-semibold px-4 sm:px-6 py-1.5 md:py-2.5 rounded-full text-white bg-gradient-to-r from-emerald-400 to-indigo-400 transition duration-300 ease-in-out hover:from-indigo-400 hover:to-teal-400 hover:text-gray-200"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className="flex flex-col items-center justify-center text-center space-y-5 py-10 md:py-16 px-3 relative z-10">
          <h1 className="text-white font-extrabold mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl">
         
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline">
              Medikea
            </span>
            , your personal medical assistant and{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent inline">
              trusted partner
            </span>{" "}
            
               <Typewriter
              words={[
                " in medical assistance.",
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-white font-normal mx-auto max-w-3xl text-base sm:text-lg md:text-xl">
            

            <Typewriter
              words={[
                "Our AI platform provides fast, reliable health information to help you manage your healthcare with confidence."
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
          <a
            href="#"
            className="text-base sm:text-lg md:text-xl font-semibold p-2 sm:p-3 md:p-4 px-8 sm:px-10 md:px-16 rounded-full text-white bg-gradient-to-r from-emerald-400 to-indigo-400 transition duration-300 ease-in-out hover:from-indigo-400 hover:to-teal-400 hover:text-gray-200"
          >
            Try Now
          </a>
        </div>

        {/* Footer */}
        <div className="container max-w-6xl mx-auto px-4 mt-12 md:mt-16 py-6 relative z-10">
          <div className="flex justify-between items-center">
            <span className="text-xs sm:text-sm md:text-lg text-gray-300">
              &copy; 2024 Medikea
            </span>
            <span className="text-xs sm:text-sm md:text-lg text-gray-300">
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
