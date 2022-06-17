import React from "react";
import Header from "./styles";
import Card from "../Card";
import ComposedChart from "../Charts/ComposedChart";
import PieChart from "../Charts/PieChart";

const CardUi = props => {
    const { cardTitle, chartConfig, ...rest } = props;
    return (
        <>
            <Card {...rest}>
                <Header>{cardTitle}</Header>
                {chartConfig.type === "composedChart" && (
                    <ComposedChart configuration={chartConfig} />
                )}
                {chartConfig.type === "pieChart" && (
                    <PieChart data={chartConfig.data} />
                )}
            </Card>
        </>
    );
};

export default CardUi;
