import React from "react";
import {
    ResponsiveContainer,
    ComposedChart,
    CartesianGrid,
    YAxis,
    Bar,
    Area,
    Tooltip,
    Legend,
} from "recharts";

const ComposedChartComponent = ({ configuration }) => {
    return (
        <ResponsiveContainer width="100%" height="93.5%">
            <ComposedChart
                width={configuration.width || 400}
                height={configuration.height || 400}
                data={configuration.data}
                margin={
                    configuration.margin || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }
                }
            >
                <defs>
                    <linearGradient id="theme-1" x1="0" y1="0" x2="0" y2="1">
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
                    <linearGradient id="theme-2" x1="0" y1="0" x2="0" y2="1">
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
                <CartesianGrid {...configuration.cartesianGridConfig} />
                <YAxis orientation="right" />
                <Bar
                    dataKey={configuration.barName}
                    barSize={20}
                    fill="#277F99"
                />
                <Area
                    type="monotone"
                    dataKey={configuration.areaName}
                    stroke="#4ECDD5"
                    fillOpacity={1}
                    fill="url(#theme-1)"
                />
                <Tooltip />
                <Legend verticalAlign="bottom" height={16} />
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default ComposedChartComponent;
