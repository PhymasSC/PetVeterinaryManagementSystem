import React from "react";
import Card, {CardPie} from "./styles";

const CardComponent = (props) => <Card>{props.children}</Card>;
const CardComponentPie = (props) => <CardPie>{props.children}</CardPie>;

export default CardComponent;
export {CardComponentPie};
