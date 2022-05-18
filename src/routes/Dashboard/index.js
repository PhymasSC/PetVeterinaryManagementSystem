import React from "react";
import Header from "../../layouts/Header";
import Card from "../../components/Widget";

const Home = () => {
    return (
        <>
            <Header title="Dashboard" />
            <div className="flex">
                <Card cardType="appointment" />
                <Card cardType="appointment" />
            </div>
            <Card cardType="appointment" />
        </>
    );
};

export default Home;
