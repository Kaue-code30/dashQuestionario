import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

export default function PieChartComponent() {
    useEffect(() => {
        // Ensure this runs only in the browser
        if (typeof window !== "undefined") {
            const chartConfig = {
                series: [60, 40],
                chart: {
                    type: "donut",
                    width: 200,
                    height: 200,
                    toolbar: { show: false },
                },
                title: { show: false },
                dataLabels: { enabled: false },
                colors: ["#009881", "#FBC709"],
                legend: { show: false },
            };

            const chart = new ApexCharts(document.querySelector("#pie-chart"), chartConfig);
            chart.render();

            // Clean up the chart when the component unmounts
            return () => {
                chart.destroy();
            };
        }
    }, []); // Empty dependency array ensures this runs only once after the component mounts

    return (
        <div className="w-1/3 hover:cursor-default rounded-2xl border shadow-md h-full">
            <div className="flex flex-col items-center justify-center p-9 w-full h-full">
                <div id="pie-chart"></div>
                <p className="pt-5 text-black font-medium">Aproveitamento das perguntas</p>
            </div>
        </div>
    );
}
