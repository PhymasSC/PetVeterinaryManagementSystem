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
        temperature: 18,
        pv: 8,
    },
    {
        day: "05-01",
        temperature: 12,
        pv: 17,
    },
    {
        day: "05-01",
        temperature: 28,
        pv: 9,
    },
    {
        day: "05-01",
        temperature: 7,
        pv: 20,
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
            <div className="flex justify-around">
                <Widget
                    cardTitle="Appointment"
                    chartConfig={configuration}
                    className="!w-[42%] !m-0"
                ></Widget>
                <div className="w-[52%] bg-white shadow-md rounded-xl p-10 overflow-y-auto h-[35rem]">
                    <table>
                        <div className="border-b-[1px] pb-2 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Kim Yi Han</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">10:30</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Jane</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">11:30</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Tan Qian En</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">12:30</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">John</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">13:00</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Audrey</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">14:25</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Andrew</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">15:20</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Leroy</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">16:20</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Lan Xin Yue</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">17:00</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Muhammad Ali</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">17:30</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Susan</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">18:00</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                        <div className="border-b-[1px] pb-4 pt-4">
                            <tr>
                                <td className="pr-6">Picture</td>
                                <td className="pr-10">Stanly</td>
                                <td className="pr-4">12 Jan 2022</td>
                                <td className="pr-4">20:00</td>
                                <td className="">Appointment</td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
            <div className="flex gap-2 flex-wrap">
                <Widget cardTitle="Appointment" chartConfig={chartData} />
                <Widget cardTitle="Appointment" chartConfig={chartData} />
            </div>
        </>
    );
};

export default Home;
