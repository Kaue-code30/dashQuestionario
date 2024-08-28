"use client"
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import ModalConfirmation from "../../modalConfirmation";
import { AnimatePresence, motion } from "framer-motion";
import ModalInfoEmpresa from "./infoEmpresa";


export default function TabelaEmpresas() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Browser-specific code here, like manipulating the DOM or accessing localStorage
            console.log(window.innerWidth);
        }
    }, []);

    const [exclusaoEmpresaModal, setExclusaoEmpresaModal] = useState(false)
    const [showInfoEmpresaModal, setShowInfoEmpresaModal] = useState(false)

    const handleCloseShowEmpresa = () => {
        setShowInfoEmpresaModal(!showInfoEmpresaModal)
    }

    const handleClose = () => {
        setExclusaoEmpresaModal(!exclusaoEmpresaModal)
    }


    return (
        <motion.div initial={{ opacity: 0, }}
            animate={{ opacity: 100 }}
            transition={{ duration: 0.3 }} className="flex w-full gap-5 flex-col h-full overflow-x-auto  sm:rounded-lg">
            <div className="w-full shadow-md border rounded-t-lg h-28 text-sm text-left rtl:text-right text-black">
                <div className="w-full flex items-center justify-start px-4 rounded-t-lg h-10 bg-[#ededed]">
                    <h1 className="text-base font-semibold">
                        Filtros
                    </h1>
                </div>
                <div className="flex gap-10 px-4 w-full h-[70px]  items-center justify-start">
                    
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" id="website-admin" className="rounded-none h-12 w-[200px] pl-2  rounded-e-lg bg-gray-50 border text-gray-900 " placeholder="Nome Empresa" />
                    </div>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input type="text" id="website-admin" className="rounded-none h-12 w-[200px] pl-2  rounded-e-lg bg-gray-50 border text-gray-900 " placeholder="Nome funcionário" />
                    </div>

                </div>
            </div>
            <table className="w-full rounded-t-lg shadow-md border text-sm text-left rtl:text-right text-black">
                <thead className="text-xs rounded-t-lg text-black uppercase bg-[#ededed] ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Id Empresa
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nome
                        </th>
                        <th scope="col" className="px-6 py-3">
                            E-mail
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tipo negócio
                        </th>
                        <th scope="col" className="px-10 py-3">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="odd:bg-white text-black ">
                        <th scope="row" className="px-6 py-4 font-medium">
                            1
                        </th>
                        <td className="px-6 py-4">
                            UX Group
                        </td>
                        <td className="px-6 py-4">
                            uxgroup@uxgroup.com.br
                        </td>
                        <td className="px-6 py-4">
                            Tecnologia
                        </td>
                        <td className="px-6 flex items-center justify-start gap-2 py-4">
                            <button onClick={() => setShowInfoEmpresaModal(true)} className="p-2 hover:scale-90 transition hover:bg-[#009881] hover:border-transparent hover:text-[#fff] border rounded-full"><IoEyeSharp fontSize={15} /></button>
                            <button onClick={() => setExclusaoEmpresaModal(true)} className="p-2 hover:scale-90 transition hover:bg-[#CB1919] hover:border-transparent hover:text-[#fff] border rounded-full"><FaRegTrashAlt fontSize={15} /></button>
                        </td>
                    </tr>
                    {
                        exclusaoEmpresaModal && (
                            <AnimatePresence>
                                <ModalConfirmation closeModal={handleClose} exclusao nomeEmpresa="UX GROUP" />
                            </AnimatePresence>

                        )
                    }
                    {
                        showInfoEmpresaModal && (
                            <AnimatePresence>
                                <ModalInfoEmpresa closeModal={handleCloseShowEmpresa} />
                            </AnimatePresence>

                        )
                    }
                </tbody>
            </table>
        </motion.div>
    )
}