import React from "react";
import CardStyles from "./styles";
import {
    ComposedChart,
    Bar,
    CartesianGrid,
    YAxis,
    Area,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
const rangeData = [
    {
        day: "05-01",
        temperature: 10,
        pv: 8,
    },
    {
        day: "05-02",
        temperature: 15,
        pv: 21,
    },
    {
        day: "05-03",
        temperature: 12,
        pv: 15,
    },
    {
        day: "05-04",
        temperature: 12,
        pv: 8,
    },
    {
        day: "05-05",
        temperature: 16,
        pv: 6,
    },
    {
        day: "05-06",
        temperature: 16,
        pv: 7,
    },
    {
        day: "05-07",
        temperature: 12,
        pv: 3,
    },
    {
        day: "05-08",
        temperature: 8,
        pv: 11,
    },
    {
        day: "05-09",
        temperature: 5,
        pv: 0,
    },
];

const content = {
    appointment: {
        title: "Appointment",
    },
};
const CardUi = ({ cardType }) => {
    return (
        <>
            <CardStyles>
                <span className="header">{content[cardType]["title"]}</span>
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
                            <linearGradient
                                id="colorUv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
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
                            <linearGradient
                                id="colorPv"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
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
            </CardStyles>
        </>
    );
};

export default CardUi;
