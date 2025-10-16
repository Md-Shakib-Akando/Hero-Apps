import Image from "next/image";
import React from "react";
import contactImg from "../../../public/assets/Contact us-pana.png";

export default function Contact() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="w-full lg:max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-12 lg:px-16 items-center">
                {/* Left side - text & image */}
                <div className="flex flex-col items-start space-y-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Let’s talk!
                        </h2>
                        <p className="text-gray-600 mt-2">
                            We’d love to hear from you. Fill out the form and we’ll get back to you soon.
                        </p>
                    </div>

                    <div className="w-full flex justify-center md:justify-start">
                        <Image
                            src={contactImg}
                            alt="Contact Illustration"
                            className="w-[350px] md:w-[450px] h-auto"
                            priority
                        />
                    </div>
                </div>

                {/* Right side - form */}
                <form
                    noValidate
                    className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
                            Full name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Write your message..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 outline-none resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-3 font-bold text-white tracking-wide uppercase hover:cursor-pointer bg-violet-600 rounded-lg hover:bg-violet-700 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
