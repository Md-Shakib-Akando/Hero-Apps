'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import iconDownload from '../../../public/assets/icon-downloads.png';
import iconRating from '../../../public/assets/icon-ratings.png';
import Link from "next/link";

export default function TopRatedApps() {
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

    if (loading) return <p className="text-center text-gray-600">Loading top rated apps...</p>;


    const topRatedApps = apps
        .filter(app => Number(app.ratingAvg) >= 4.3)
        .slice(0, 8);

    return (
        <section className="">


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {topRatedApps.length > 0 ? (
                    topRatedApps.map((app) => (
                        <Link href={`/apps/${app._id}`} key={app._id}>
                            <div className="bg-white shadow-md rounded-md p-4 overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">

                                <div className="h-[250px]">
                                    <Image
                                        src={app.image}
                                        alt={app.title}
                                        className="w-full h-full object-cover rounded-lg"
                                        width={400}
                                        height={200}
                                    />
                                </div>


                                <h3 className="text-[#0B172A] font-semibold text-lg mt-2 mb-3 line-clamp-1">
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
                        No apps found with rating above 4.3 ⭐
                    </p>
                )}
            </div>

            <div className="mt-8 mb-4 text-center  ">
                <Link href="/apps" className=" p-3  text-white tracking-wide uppercase bg-violet-600 rounded-lg hover:bg-violet-700 transition-all">Show All</Link>
            </div>
        </section>
    );
}
