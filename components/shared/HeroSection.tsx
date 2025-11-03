import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
      <div>
        {/* Hero Section */}
        <section className="pt-16 lg:pt-32 bg-gradient-to-b from-[#121212] to-purple-800 px-4 sm:px-8 lg:px-20 pb-16">
          <div className="mx-auto max-w-7xl relative text-center">
            {/* Tag */}
            <div className="mt-8 lg:mt-0 border border-indigo-400/60 p-1 w-56 sm:w-60 mx-auto rounded-full flex items-center justify-between mb-4 bg-white/5 backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs font-medium text-white ml-3">
                Explore how to use for brands.
              </span>
              <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex justify-center items-center bg-indigo-500 hover:bg-indigo-600 transition">
                <svg width="17" height="16" fill="none">
                  <path
                    d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Title */}
            <h1 className="max-w-2xl mx-auto font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-4">
              Control your Finances with our
              <span className="text-indigo-300"> Smart Tool </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-sm mx-auto text-sm sm:text-base font-normal leading-7 text-gray-200 mb-8 px-2">
              Invest intelligently and discover a better way to manage your
              entire wealth easily.
            </p>

            {/* CTA Button */}
            <Link
              href="#"
              className="inline-flex items-center justify-center py-3 px-6 sm:px-7 text-sm sm:text-base font-semibold text-white rounded-full bg-indigo-500 hover:bg-indigo-600 shadow-lg transition-all duration-300 mb-10"
            >
              Create an account
              <svg className="ml-2" width="20" height="20" fill="none">
                <path
                  d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="https://i.ibb.co.com/cc5YDgsG/Green-Modern-and-Elegant-Fashion-Super-Sale-Promotion-Facebook-Post.png"
                alt="Dashboard interface"
                className="w-full max-w-4xl drop-shadow-2xl rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    );
};

export default HeroSection;