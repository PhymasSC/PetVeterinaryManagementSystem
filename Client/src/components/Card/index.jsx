import React from "react";
import Card, { CardPie } from "./styles";

const CardComponent = props => {
    const { children, ...rest } = props;
    return <Card {...rest}>{children}</Card>;
};
// const CardComponentPie = (props) => <CardPie>{props.children}</CardPie>;

export default CardComponent;
// export {CardComponentPie};
