import React from "react";
import CardStyles from "./styles";
import ComposedChart from "../Charts/ComposedChart";
import PieChart from "../Charts/PieChart";

const CardUi = ({ cardTitle, chartConfig }) => {
    return (
        <>
            <CardStyles>
                <span className="header">{cardTitle}</span>
                {chartConfig.type === "composedChart" && (
                    <ComposedChart configuration={chartConfig} />
                )}
                {chartConfig.type === "pieChart" && (
                    <PieChart data={chartConfig.data} />
                )}
            </CardStyles>
        </>
    );
};

export default CardUi;
