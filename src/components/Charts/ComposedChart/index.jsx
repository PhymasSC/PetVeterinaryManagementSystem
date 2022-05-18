import React from "react";
import {ResponsiveContainer, ComposedChart, linearGradient, CartesianGrid, YAxis, Bar, Area, Tooltip, Legend} from "recharts"

const ComposedChart = () => {
    return (
        <ResponsiveContainer width="100%" height="93.5%">
            <ComposedChart
                width={400}
                height={250}
                data={rangeData}
                margin={{
                    top: 20,
                    right: 0,
                    bottom: 0,
                    left: 0,
                }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#4ECDD5"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#4ECDD5"
                            stopOpacity={0}
                        />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#4ECDD5"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#4ECDD5"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <YAxis orientation="right" />
                <Bar dataKey="pv" barSize={20} fill="#277F99" />
                <Area
                    type="monotone"
                    dataKey="temperature"
                    stroke="#4ECDD5"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
                <Tooltip />
                <Legend verticalAlign="bottom" height={16} />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default ComposedChart;