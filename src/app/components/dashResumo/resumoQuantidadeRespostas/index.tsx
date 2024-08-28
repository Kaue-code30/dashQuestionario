import { useClientDataQuestionary } from "@/app/hooks/getDataRespostas";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ResumoQuantidadeRespostas(){

    const {mutate, isPending,isSuccess,contentData} = useClientDataQuestionary()

    useEffect(() => {
        if (typeof window !== 'undefined') {
        mutate();
        }
      }, []);
      
    return(
        <motion.div initial={{ opacity: 0,  }}
        animate={{  opacity: 100 }}
        transition={{ duration: 0.3 }} className="w-1/3 hover:cursor-default rounded-2xl border shadow-md  h-full">
            <div className="flex flex-col items-center  justify-center p-9 w-full h-full">
                <h1 className="text-6xl text-[#009881] font-bold">
                   {contentData?.data.result}
                </h1>
                <p className="pt-5 text-black font-medium text-center">Total de respostas registradas</p>
            </div>
        </motion.div>
    )
}