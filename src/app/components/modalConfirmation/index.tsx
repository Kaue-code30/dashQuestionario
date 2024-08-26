"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react";
import { CgDanger } from "react-icons/cg"
import { FaRegCheckCircle } from "react-icons/fa"

interface data {
    id_empresa?: number;
    nomeEmpresa: string
    exclusao: boolean;
    closeModal: () => void;
}

export default function ModalConfirmation({ nomeEmpresa, exclusao, id_empresa, closeModal }: data) {


    useEffect(() => {
        if(exclusao === false) {
            setTimeout(() =>{
                closeModal();
            }, 3000)
        }
    })

    return (
        <div className="absolute z-50 flex items-center justify-center w-full h-full top-0 left-0 bg-[#000000a5]">

            <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.5 }} animate={{ opacity: 100 }} className="w-[400px] flex items-center justify-center flex-col p-5 h-[300px] bg-white rounded-2xl shadow-md">
                <div className="w-full flex items-center justify-center h-1/3">
                    {
                        exclusao ? (
                            <CgDanger fontSize={100} color="#FBC709" />
                        ) : <FaRegCheckCircle
                            fontSize={100} color="#009881" />
                    }

                </div>
                <div className="w-full h-auto  flex-col pt-10 gap-3 flex items-center justify-center">
                    {
                        exclusao ? (
                            <>
                                <h1 className="text-black font-normal text-base text-center">
                                    Tem certeza que deseja excluir {nomeEmpresa}?
                                </h1>
                                <div className="flex gap-5">
                                    <button onClick={closeModal} className="h-12 w-32 border hover:bg-[#CB1919] hover:scale-95 hover:text-white transition hover:border-transparent rounded-lg">
                                        cancelar
                                    </button>
                                    <button className="h-12 w-32 border hover:bg-[#ededed] hover:transition hover:scale-95 rounded-lg">
                                        excluir
                                    </button>
                                </div>

                            </>


                        ) : <div>
                            <h1 className="text-black font-semibold text-base text-center">
                                {nomeEmpresa} Foi deletada com sucesso!
                            </h1>
                        </div>
                    }
                </div>
            </motion.div>
        </div>
    )
}