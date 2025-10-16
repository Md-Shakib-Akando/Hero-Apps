'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import iconDownload from '../../../public/assets/icon-downloads.png';
import iconRating from '../../../public/assets/icon-ratings.png';
import iconReview from '../../../public/assets/icon-review.png';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function AppDetails() {
    const { id } = useParams();
    const [app, setApp] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchApp() {
            try {
                const res = await fetch(`/api/apps/${id}`);
                const data = await res.json();
                setApp(data);
            } catch (err) {
                console.error("Failed to fetch app:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchApp();
    }, [id]);

    if (loading) return <p>Loading app details...</p>;
    if (!app) return <p>App not found</p>;

    // ApexCharts setup
    const chartOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
        },
        plotOptions: {
            bar: { horizontal: true, barHeight: '50%' }
        },
        xaxis: {
            categories: ['5 star', '4 star', '3 star', '2 star', '1 star'],
            labels: { formatter: val => val }
        },
        colors: ['#FB923C'],
        tooltip: { enabled: true }
    };

    const chartSeries = [{
        name: 'Ratings',
        data: app.ratingsCount || [11000, 7000, 4000, 2000, 1000]
    }];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-30 pb-10" >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                {/* App Image */}
                <div className="flex-shrink-0 w-full md:w-1/4 h-48 md:h-48 relative">
                    <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* App Info */}
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-gray-900">{app.title}</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Developed by <span className="text-blue-600">{app.
                            companyName || 'Unknown'}</span>
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        {/* Downloads */}
                        <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-md">
                            <Image src={iconDownload} alt="Downloads" width={20} height={20} />
                            <span className="text-green-600 font-medium">{app.downloads}</span>
                        </div>

                        {/* Average Rating */}
                        <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-md">
                            <Image src={iconRating} alt="Rating" width={20} height={20} />
                            <span className="text-orange-600 font-medium">{app.ratingAvg}</span>
                        </div>

                        <div className="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-md">
                            <Image src={iconReview} alt="Reviews" width={20} height={20} />
                            <span className="text-purple-600 font-medium">{app.totalReviews}</span>
                        </div>

                    </div>
                    <div>
                        <button className="mt-6 w-fit bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md  md:w-auto transition">
                            Install Now ({app.size || 'N/A'})
                        </button>
                    </div>

                </div>

            </div>



            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Ratings</h2>
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    height={300}
                />
            </div>


            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700 whitespace-pre-line">{app.description}</p>
            </div>
        </div>
    );
}
