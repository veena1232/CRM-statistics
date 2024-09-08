"use client";
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import PieChart from '@/components/PieChart';
import LineChart from '@/components/LineChart';

// Define a type for the time range keys
type TimeRange = '1d' | '1w' | '1m' | '1y';

// Dummy data for different time ranges
const dataByTimeRange: Record<TimeRange, {
    stats: { label: string; value: number }[];
    pieData: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
        }[];
    };
    lineData: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            borderColor: string;
            fill: boolean;
        }[];
    };
}> = {
    '1d': {
        stats: [
            { label: 'Total Sales', value: 100 },
            { label: 'New Customers', value: 5 },
            { label: 'Active Users', value: 30 },
        ],
        pieData: {
            labels: ['Sales', 'Customers', 'Users'],
            datasets: [
                {
                    data: [100, 5, 30],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        },
        lineData: {
            labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM'],
            datasets: [
                {
                    label: 'Sales Over Time',
                    data: [10, 20, 30, 40, 50],
                    borderColor: 'rgba(75,192,192,1)',
                    fill: false,
                },
            ],
        },
    },
    '1w': {
        stats: [
            { label: 'Total Sales', value: 500 },
            { label: 'New Customers', value: 20 },
            { label: 'Active Users', value: 100 },
        ],
        pieData: {
            labels: ['Sales', 'Customers', 'Users'],
            datasets: [
                {
                    data: [500, 20, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        },
        lineData: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [
                {
                    label: 'Sales Over Time',
                    data: [100, 200, 300, 400, 500],
                    borderColor: 'rgba(75,192,192,1)',
                    fill: false,
                },
            ],
        },
    },
    '1m': {
        stats: [
            { label: 'Total Sales', value: 2000 },
            { label: 'New Customers', value: 80 },
            { label: 'Active Users', value: 400 },
        ],
        pieData: {
            labels: ['Sales', 'Customers', 'Users'],
            datasets: [
                {
                    data: [2000, 80, 400],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        },
        lineData: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [
                {
                    label: 'Sales Over Time',
                    data: [500, 700, 800, 1000],
                    borderColor: 'rgba(75,192,192,1)',
                    fill: false,
                },
            ],
        },
    },
    '1y': {
        stats: [
            { label: 'Total Sales', value: 24000 },
            { label: 'New Customers', value: 1000 },
            { label: 'Active Users', value: 5000 },
        ],
        pieData: {
            labels: ['Sales', 'Customers', 'Users'],
            datasets: [
                {
                    data: [24000, 1000, 5000],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        },
        lineData: {
            labels: ['January', 'April', 'July', 'October'],
            datasets: [
                {
                    label: 'Sales Over Time',
                    data: [6000, 8000, 9000, 11000],
                    borderColor: 'rgba(75,192,192,1)',
                    fill: false,
                },
            ],
        },
    },
};

const CRMStatsPage = () => {
    const [timeRange, setTimeRange] = useState<TimeRange>('1d'); // Type for timeRange
    const [stats, setStats] = useState(dataByTimeRange['1d'].stats);
    const [pieData, setPieData] = useState(dataByTimeRange['1d'].pieData);
    const [lineData, setLineData] = useState(dataByTimeRange['1d'].lineData);

    const handleTimeRangeChange = (range: TimeRange) => {
        setTimeRange(range);
        const { stats, pieData, lineData } = dataByTimeRange[range]; // No TypeScript error now
        setStats(stats);
        setPieData(pieData);
        setLineData(lineData);
    };

    return (
        <div className="min-h-screen bg-[#FCF9FF] p-4">
            <Header onSelectTimeRange={handleTimeRangeChange} />
            <div className="mt-8">
                <StatsCard stats={stats} />
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full h-[300px]">
                    <PieChart data={pieData} />
                </div>
                <div className="w-full h-[300px]">
                    <LineChart data={lineData} />
                </div>
            </div>
        </div>
    );
};

export default CRMStatsPage;
