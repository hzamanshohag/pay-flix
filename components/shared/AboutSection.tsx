"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 max-w-7xl mx-auto">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              We capture emotions, stories and unforgettable moments. Our
              mission is to create timeless photos with creativity, passion and
              professional artistry.
            </p>

            <div className="mt-8">
              <Link
                href="/about"
                className="text-blue-500 hover:text-blue-600 font-medium inline-flex items-center"
              >
                Learn more about us
                <span className="ml-2 text-xl">&#8594;</span>
              </Link>
            </div>
          </div>

          {/* YouTube Video */}
          <div className="w-full rounded-xl overflow-hidden shadow-xl">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Pw-0pbY9JeU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
