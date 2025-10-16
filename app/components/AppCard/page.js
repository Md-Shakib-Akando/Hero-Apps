'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import iconDownload from '../../../public/assets/icon-downloads.png';
import iconRating from '../../../public/assets/icon-ratings.png';
import Link from "next/link";

export default function AppCards({ searchTerm }) {
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


    const filteredApps = searchTerm
        ? apps.filter(app =>
            app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (app.description && app.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        : apps;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
            {filteredApps.length > 0 ? (
                filteredApps.map((app) => (
                    <Link href={`/apps/${app._id}`} key={app._id}>
                        <div className="bg-white shadow-md rounded-md p-4 overflow-hidden border border-gray-100">
                            {/* Image */}
                            <div className="h-[250px]">
                                <Image
                                    src={app.image}
                                    alt={app.title}
                                    className="w-full h-full object-cover rounded-lg"
                                    width={400}
                                    height={200}
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[#0B172A] font-semibold text-lg mt-2 mb-3">
                                {app.title}
                            </h3>


                            <div className="flex justify-between items-center">

                                <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-md">
                                    <Image src={iconDownload} alt="Downloads" width={16} height={16} />
                                    <span className="text-green-600 font-medium text-sm">{app.downloads}</span>
                                </div>


                                <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
                                    <Image src={iconRating} alt="Rating" width={16} height={16} />
                                    <span className="text-orange-600 font-medium text-sm">{app.ratingAvg}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            ) : (
                <p className="text-gray-500 col-span-full text-center">
                    No apps found matching “{searchTerm}”.
                </p>
            )}
        </div>
    );
}
