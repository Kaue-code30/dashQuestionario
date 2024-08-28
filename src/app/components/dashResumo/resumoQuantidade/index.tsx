import { useClientDataQuestionary } from "@/app/hooks/getDataEmpresas";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function ResumoQuantidade(){

    const {contentData,isPending,isSuccess,mutate} = useClientDataQuestionary();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            mutate()
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
                <p className="pt-5 text-black font-medium">Total de conversas iniciadas</p>
            </div>
        </motion.div>
    )
}