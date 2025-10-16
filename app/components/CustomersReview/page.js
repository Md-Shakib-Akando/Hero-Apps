'use client';
import React from 'react';
import dynamic from 'next/dynamic';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function CustomerReviews() {
    const chartData = {
        series: [
            {
                name: 'Ratings',
                data: [83, 67, 50, 33, 17], // 5★ → 1★ (reverse order)
            },
        ],
        options: {
            chart: {
                type: 'bar',
                toolbar: { show: false },
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 6,
                    barHeight: '60%',
                    colors: {
                        ranges: [
                            {
                                from: 0,
                                to: 100,
                                color: '#f97316', // orange-500
                            },
                        ],
                    },
                },
            },
            grid: { borderColor: '#e5e7eb' },
            xaxis: {
                categories: ['5 Star', '4 Star', '3 Star', '2 Star', '1 Star'],
                title: { text: 'Percentage (%)' },
            },
            dataLabels: {
                enabled: true,
                formatter: (val) => `${val}%`,
                style: {
                    colors: ['#111827'],
                },
            },
            tooltip: {
                y: {
                    formatter: (val) => `${val}% users`,
                },
            },
        },
    };

    return (
        <div className="max-w-11/12 mx-auto p-8   ">
            <div className="flex flex-col w-full">

                <h2 className="text-3xl font-semibold text-center mb-4">
                    Customer Reviews
                </h2>


                <div className="flex flex-wrap items-center justify-center mb-2 space-x-2">
                    <div className="flex text-yellow-500 text-xl">
                        {'★'.repeat(3)}
                        <span className="text-gray-300">{'★'.repeat(2)}</span>
                    </div>
                    <span className="text-gray-600">4.5 out of 5</span>
                </div>
                <p className="text-sm text-center text-gray-500 mb-8">
                    861 global ratings
                </p>


                <Chart
                    options={chartData.options}
                    series={chartData.series}
                    type="bar"
                    height={300}
                />
            </div>
        </div>
    );
}
