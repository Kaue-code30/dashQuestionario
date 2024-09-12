"use client"
import { useClientDataQuestionary } from "@/app/hooks/DeleteEmpresa";
import { Empresa } from "@/app/interfaces/empresaData";
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react";
import { CgDanger } from "react-icons/cg"
import { FaRegCheckCircle } from "react-icons/fa"

interface data {
    id_empresa?: number;
    nomeEmpresa?: string | undefined;
    exclusao: boolean;
    closeModal: () => void;
    atualizar: () => void;

}

export default function ModalConfirmation({ nomeEmpresa, exclusao, id_empresa, closeModal, atualizar }: data) {

    const { mutate, contentData } = useClientDataQuestionary()

    useEffect(() => {
        if (exclusao === false) {
            setTimeout(() => {
                closeModal();
            }, 3000)
        }
    })

    const HandleDelete = () => {
        mutate(id_empresa!)
        closeModal();
        atualizar();
    }

    return (

        <div className="absolute z-50 flex items-center justify-center w-full h-full top-0 left-0 bg-[#00000048]">

            <motion.div initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{ ease: "easeOut", duration: 0.6 }} animate={{ opacity: 100 }} className="w-[400px] flex items-center justify-center flex-col p-5 h-[300px] bg-white rounded-2xl shadow">
                <div className="w-full flex items-center justify-center h-1/3">
                    <AnimatePresence>
                        {
                            exclusao ? (
                                <CgDanger fontSize={100} color="#FBC709" />
                            ) : <FaRegCheckCircle
                                fontSize={100} color="#009881" />
                        }
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    <div className="w-full h-auto  flex-col pt-10 gap-3 flex items-center justify-center">
                        <AnimatePresence>
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
                                            <button onClick={() => HandleDelete()} className="h-12 w-32 border hover:bg-[#ededed] hover:transition hover:scale-95 rounded-lg">
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
                        </AnimatePresence>
                    </div>
                </AnimatePresence>
            </motion.div>
        </div>

    )
}