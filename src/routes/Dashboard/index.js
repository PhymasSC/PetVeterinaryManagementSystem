import React from "react";
import Header from "../../layouts/Header";
import Widget from "../../components/Widget";

const datasets = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
];

const configuration = {
    type: "pieChart",
    data: datasets,
};

const COLORS = ["#4ECDD5", "#277F99", "#FFBB28", "#FF8042"];
const datasets2 = [
    {
        day: "05-01",
        temperature: 10,
        pv: 8,
    },
    {
        day: "05-01",
        temperature: 10,
        pv: 8,
    },
    {
        day: "05-01",
        temperature: 10,
        pv: 8,
    },
    {
        day: "05-01",
        temperature: 10,
        pv: 8,
    },
];

const chartData = {
    type: "composedChart",
    data: datasets2,
    barName: "pv",
    areaName: "temperature",
    cartesianGridConfig: {
        vertical: false,
    },
};
const chartData2 = {
    type: "pieChart",
};

const Home = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="flex">
                <Widget cardTitle="Appointment" chartConfig={chartData} />
                <Widget cardTitle="Appointment" chartConfig={chartData} />
            </div>
            <Widget
                cardTitle="Appointment"
                chartConfig={configuration}
            ></Widget>
        </>
    );
};

export default Home;
