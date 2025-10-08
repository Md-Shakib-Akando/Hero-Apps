import React from 'react'

export default function AddToApps() {
    return (
        <div className="min-h-screen bg-[#efeeee] pt-32 pb-10 px-4 sm:px-6 lg:px-8">

            <div className="mb-8 flex flex-col items-center text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">App Listing Form</h1>
                <p className="text-gray-600 mt-3">Fill in the details to create a new app listing</p>
            </div>

            <div className="max-w-10/12 mx-auto bg-white rounded-2xl shadow-xl p-8">


                <div className="space-y-6">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-6 lg:space-y-0">
                        {/* Image File */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                App Image
                            </label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 file:cursor-pointer"
                            />
                        </div>

                        {/* Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                App Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter app title"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="Enter company name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* ID */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                App ID
                            </label>
                            <input
                                type="number"
                                name="id"
                                placeholder="Enter app ID"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Size */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Size (MB)
                            </label>
                            <input
                                type="number"
                                name="size"
                                placeholder="Enter app size in MB"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Reviews */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Number of Reviews
                            </label>
                            <input
                                type="number"
                                name="reviews"
                                placeholder="Enter number of reviews"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>

                        {/* Rating Average */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Average Rating
                            </label>
                            <select
                                name="ratingAvg"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
                            >
                                <option value="">Select average rating</option>
                                <option value="0.5">0.5</option>
                                <option value="1.0">1.0</option>
                                <option value="1.5">1.5</option>
                                <option value="2.0">2.0</option>
                                <option value="2.5">2.5</option>
                                <option value="3.0">3.0</option>
                                <option value="3.5">3.5</option>
                                <option value="4.0">4.0</option>
                                <option value="4.5">4.5</option>
                                <option value="5.0">5.0</option>
                            </select>
                        </div>

                        {/* Downloads */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Downloads
                            </label>
                            <input
                                type="number"
                                name="downloads"
                                placeholder="Enter number of downloads"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Description - Full Width */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            rows="4"
                            placeholder="Enter app description"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none"
                        />
                    </div>

                    <div className=" pt-2">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Ratings Breakdown</h3>
                        <div className="flex items-center gap-4">
                            <select
                                name="rating_type"
                                className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
                            >
                                <option value="">Select</option>
                                <option value="5_star">5 star</option>
                                <option value="4_star">4 star</option>
                                <option value="3_star">3 star</option>
                                <option value="2_star">2 star</option>
                                <option value="1_star">1 star</option>
                            </select>
                            <input
                                type="number"
                                name="rating_count"
                                placeholder="Enter count"
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="button"
                            className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#8c4ee3] transition duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer"
                        >
                            Submit App Listing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
