"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AppsForm() {
    async function onsubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const imageFile = formData.get("image");
        let imageUrl = " ";
        if (imageFile && imageFile.size > 0) {
            if (imageFile && imageFile.size > 0) {
                const imgBBKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
                const imageData = new FormData();
                imageData.append("image", imageFile);

                const uploadRes = await fetch(`https://api.imgbb.com/1/upload?key=${imgBBKey}`, {
                    method: "POST",
                    body: imageData,
                });

                const uploadResult = await uploadRes.json();
                if (uploadResult.success) {
                    imageUrl = uploadResult.data.url;

                } else {
                    toast.error("Image upload failed");
                    return;
                }
            }
        }


        formData.set("image", imageUrl);


        const data = Object.fromEntries(formData.entries());

        const res = await fetch("/api/apps", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await res.json();
        if (result.success) {
            toast.success("App add successfully!");
            e.currentTarget.reset();
        }
        else toast.error("Error: " + (result.errors ? result.errors.join(", ") : result.message));
    }

    return (
        <div className="max-w-10/12 mx-auto bg-white rounded-2xl shadow-xl p-8">


            <form onSubmit={onsubmit} className="space-y-6">
                <div className="lg:grid lg:grid-cols-2 lg:gap-6 space-y-6 lg:space-y-0">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            App Image
                        </label>
                        <input
                            type="file"
                            name="image"
                            required
                            accept="image/*"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 file:cursor-pointer"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            App Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Enter app title"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company Name
                        </label>
                        <input
                            type="text"
                            name="companyName"
                            required
                            placeholder="Enter company name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            App ID
                        </label>
                        <input
                            type="number"
                            name="AppId"
                            required
                            placeholder="Enter app ID"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Size (MB)
                        </label>
                        <input
                            type="number"
                            name="size"
                            required
                            placeholder="Enter app size in MB"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Reviews
                        </label>
                        <input
                            type="number"
                            name="reviews"
                            required
                            placeholder="Enter number of reviews"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>


                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Average Rating
                        </label>
                        <select
                            name="ratingAvg"
                            required
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

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Downloads
                        </label>
                        <input
                            type="number"
                            name="downloads"
                            required
                            placeholder="Enter number of downloads"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>
                </div>


                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                    </label>
                    <textarea
                        name="description"
                        required
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
                            required
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
                            required
                            placeholder="Enter count"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                        />
                    </div>
                </div>

                <div className="pt-6">
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#8c4ee3] transition duration-200 shadow-lg hover:shadow-xl hover:cursor-pointer"
                    >
                        Submit App Listing
                    </button>
                </div>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </div>
    )
}
