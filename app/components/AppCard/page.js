"use client"
import React, { useEffect, useState } from "react";
import iconDownload from '../../../public/assets/icon-downloads.png';
import iconRating from '../../../public/assets/icon-ratings.png';
import Image from 'next/image';

export default function AppCards() {
    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchApps() {
            try {
                const res = await fetch("/api/apps");
                const data = await res.json();
                setApps(data);
            } catch (err) {
                console.error("Failed to fetch apps:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchApps();
    }, []);

    if (loading) return <p>Loading apps...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10 ">
            {apps.map((app) => (
                <div key={app._id} className="bg-white shadow-md rounded-md p-4 overflow-hidden border border-gray-100">
                    {/* Image */}
                    <div className="h-[200px]">
                        <Image
                            src={app.image}
                            alt={app.title}
                            className="w-full h-full object-cover rounded-lg"
                            width={400}
                            height={200}
                            unoptimized
                        />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#0B172A] font-semibold text-lg mt-2 mb-3">
                        {app.title}
                    </h3>

                    {/* Bottom stats */}
                    <div className="flex justify-between items-center">
                        {/* Downloads */}
                        <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                            <Image src={iconDownload} alt="Downloads" width={16} height={16} />
                            <span className="text-green-600 font-medium text-sm">{app.downloads}</span>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
                            <Image src={iconRating} alt="Rating" width={16} height={16} />
                            <span className="text-orange-600 font-medium text-sm">{app.ratingAvg}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
