import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuthContext from '../../Hooks/useAuthContext';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const DashboardHome = () => {
    const [stats, setStats] = useState({});
    const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();

    const {
        acceptedInterestsCount = 0,
        pendingInterestsCount = 0,
        totalCropsListed = 0,
        approximateProfit = 0
    } = stats;

    useEffect(() => {
        if (!user?.email) return;

        axiosSecure
            .get(`/dashboard/stats?email=${user.email}`)
            .then(res => setStats(res.data));
    }, [user, axiosSecure]);

    const pieData = [
        { name: "Crops", value: totalCropsListed }
    ];

    const profitData = [
        { name: "Start", profit: 0 },
        { name: "Estimated", profit: approximateProfit }
    ];

    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                    Dashboard Overview
                </h1>
                <p className="text-sm text-gray-500">
                    Summary of your crops, interests, and estimated earnings
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-green-50 border border-green-200 p-5">
                    <p className="text-sm text-green-700 font-medium">
                        Accepted Interests
                    </p>
                    <h2 className="text-3xl font-bold text-green-800 mt-2">
                        {acceptedInterestsCount}
                    </h2>
                </div>

                <div className="rounded-xl bg-yellow-50 border border-yellow-200 p-5">
                    <p className="text-sm text-yellow-700 font-medium">
                        Pending Interests
                    </p>
                    <h2 className="text-3xl font-bold text-yellow-800 mt-2">
                        {pendingInterestsCount}
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Total Crops pie-chart */}
                <div className="rounded-xl bg-white border border-primary/10 p-5">
                    <h3 className="font-semibold text-gray-700 mb-4">
                        Total Crops Listed
                    </h3>

                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    animationDuration={1200}
                                >
                                    <Cell fill="#4CAF50" />
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-2">
                        {totalCropsListed} crops currently listed
                    </p>
                </div>

                {/* Profit Line Chart */}
                <div className="rounded-xl bg-white border border-primary/10 p-5">
                    <h3 className="font-semibold text-gray-700 mb-4">
                        Approximate Profit
                    </h3>

                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={profitData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="profit"
                                    stroke="#43A047"
                                    strokeWidth={3}
                                    dot={{ r: 5 }}
                                    animationDuration={1400}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <p className="text-sm text-gray-600 mt-2">
                        Estimated profit from accepted interests
                    </p>
                </div>

            </div>
        </div>
    );
};

export default DashboardHome;
