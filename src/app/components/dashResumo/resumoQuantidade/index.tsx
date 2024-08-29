import { useClientDataQuestionary } from "@/app/hooks/getDataEmpresas";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ResumoQuantidade() {

    const { contentData, isPending, isSuccess, mutate } = useClientDataQuestionary();
    const [numeroIncrementado, setNumeroIncrementado] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            mutate()
        }
    }, []);

    useEffect(() => {
        IncrementarNumeros();
    })


    const IncrementarNumeros = () => {
        let result = typeof contentData?.data.result === 'string'
            ? Number.parseFloat(contentData.data.result)
            : contentData?.data.result;

        if (result === undefined) {
            result = 100; 
        }

        const setIntervalId = setInterval(() => {
            setNumeroIncrementado(prev => {
                if (prev < result) {
                    return prev + 1;
                } else {
                    clearInterval(setIntervalId);
                    return prev;
                }
            });
        }, 100);
    };





    return (
        <motion.div initial={{ opacity: 0, }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.3 }} className="w-1/3 hover:cursor-default rounded-2xl border shadow-md  h-full">
            <div className="flex flex-col items-center  justify-center p-9 w-full h-full">
                <h1 className="text-6xl text-[#009881] font-bold">
                    {numeroIncrementado}
                </h1>
                <p className="pt-5 text-black font-medium">Total de conversas iniciadas</p>
            </div>
        </motion.div>
    )
}