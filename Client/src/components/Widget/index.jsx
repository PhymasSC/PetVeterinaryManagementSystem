import React from "react";
import Header from "./styles";
import Card from "../Card";
import ComposedChart from "../Charts/ComposedChart";
import PieChart from "../Charts/PieChart";

const CardUi = ({ cardTitle, chartConfig }) => {
    return (
        <>
            {/* <Card>
                <Header>{cardTitle}</Header>
                {chartConfig.type === "composedChart" && (
                    <ComposedChart configuration={chartConfig} />
                )}
                {cartConfig.type === "pieChart" && (
                    <PieChart data={chartConfig.data} />
                )}
            </Card> */}

            <Card>
                <Header>{cardTitle}</Header>
                {chartConfig.type === "composedChart" && (
                    <ComposedChart configuration={chartConfig} />
                )}
                <div>
                    {chartConfig.type === "pieChart" && (
                        <PieChart data={chartConfig.data} />
                    )}
                </div>
            </Card>
        </>
    );
};

export default CardUi;
