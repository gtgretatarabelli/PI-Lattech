import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="text-gray-400 bg-black body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to reach out to us with any inquiries.</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form className="flex flex-wrap -m-2">
              {/* Name Field */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"

                    className="w-full bg-gray-950 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />

                </div>
              </div>

              {/* Email Field */}
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"

                    className="w-full bg-gray-950 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />

                </div>
              </div>

              {/* Message Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                  <textarea
                    id="message"
                    name="message"

                    className="w-full bg-gray-100 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />

                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <a className="text-indigo-400">example@email.com</a>
              <p className="leading-normal my-5">49 Smith St.<br />Saint Cloud, MN 56301</p>
              <span className="inline-flex">
                <a className="text-gray-500">
                  {/* SVG for social icons */}
                </a>
                {/* Additional social icons */}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact
