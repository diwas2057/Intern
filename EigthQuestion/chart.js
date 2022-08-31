 import React from "react";
    import { PieChart, Pie, Legend, Tooltip } from "recharts";
    const data01 = [
    { name: "2021-07-11 ", value: 53 },
    { name: "2021-07-12", value: 42 },
    { name: "2021-07-13", value: 88 },
    { name: "2021-07-14", value: 14 },
    { name: "2021-07-15", value: 77 },
    { name: "2021-07-16", value: 68},
    { name: "2021-07-17", value: 43}
    ];
    export default function App() {
    return (
        <><h1 style={{marginLeft:"45%"}}>Sales</h1>
        <PieChart style={{marginLeft:"35%"}}width={2000} height={600}>
        <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label/>
        <Tooltip />
        </PieChart></>
    );}
