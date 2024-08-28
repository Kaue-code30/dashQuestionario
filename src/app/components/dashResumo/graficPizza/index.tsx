import React, { useEffect } from "react";
import ApexCharts from "apexcharts";
import { motion } from "framer-motion";
import { useClientDataQuestionary } from "@/app/hooks/getDataPieChart";

export default function PieChartComponent() {

    const { contentData, isPending, mutate, isSuccess } = useClientDataQuestionary();

    useEffect(() => {
        mutate();
    }, [])


    useEffect(() => {
        if (typeof window !== "undefined") {
            let result = typeof contentData?.data.result === 'string'
                ? Number.parseFloat(contentData.data.result)
                : contentData?.data.result ?? 100;

            let resultadoPieChart = 100 - result

            const chartConfig = {
                series: [result, resultadoPieChart],
                chart: {
                    type: "donut",
                    width: 300,
                    height: 200,
                    toolbar: { show: false },
                },
                title: { show: false },
                dataLabels: { enabled: false },
                colors: [
                    `${result <= 25.9 ? "#CB1919" : result <= 50.9 ? "#FBC709" : "#258DCD"}`,
                    `#009881`
                ],

                legend: { show: true, },
                labels: ['Aproveitamento', 'Total']

            };

            const chart = new ApexCharts(document.querySelector("#pie-chart"), chartConfig);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, [contentData]);


    return (
        <motion.div initial={{ opacity: 0, }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.3 }} className="w-1/3 hover:cursor-default rounded-2xl border shadow-md h-full">

            {isPending ? (
                <div className="flex flex-col items-center justify-center p-9 w-full h-full">
                    <div className="w-32 h-32 flex animate-spin items-center justify-center rounded-full">
                        <div className="w-[80px] h-[80px] border-b-2 rounded-full border-[#009881] bg-white"></div>
                    </div>
                </div>
            ) :
                (
                    <div className="flex flex-col items-center justify-center p-9 w-full h-full">
                        <div id="pie-chart"></div>
                        <p className="pt-5 text-black font-medium">Aproveitamento do Questionário</p>
                    </div>
                )
            }


        </motion.div>
    );
}
