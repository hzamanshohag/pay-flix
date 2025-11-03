"use client";

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <p className="text-base font-medium text-gray-500 mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Have questions or ready to start your project? We'd love to hear
            from you. Reach out and let's create something amazing together.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white p-12 shadow-2xl rounded-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">
                Get in touch
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-black p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 
                        005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 
                        0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 
                        3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Phone
                    </h4>
                    <p className="text-lg text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-black p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 
                        002.22 0L21 8M5 19h14a2 2 0 
                        002-2V7a2 2 0 00-2-2H5a2 2 
                        0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Email
                    </h4>
                    <p className="text-lg text-gray-600">hello@company.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-black p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 
                        1.998 0 01-2.827 0l-4.244-4.243a8 8 
                        0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 
                        11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Office
                    </h4>
                    <p className="text-lg text-gray-600">
                      123 Business Ave, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <div className="bg-black p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 
                        11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black mb-1">
                      Business Hours
                    </h4>
                    <p className="text-lg text-gray-600">
                      Mon - Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-lg font-medium text-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black text-lg outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg font-medium text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black text-lg outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-medium text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black text-lg outline-none"
                  />
                </div>

                <div>
                  <label className="block text-lg font-medium text-black mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black text-lg outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-black text-white text-lg font-medium hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
