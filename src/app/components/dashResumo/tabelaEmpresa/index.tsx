"use client"
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import ModalConfirmation from "../../modalConfirmation";
import { AnimatePresence } from "framer-motion";
import ModalInfoEmpresa from "./infoEmpresa";


export default function TabelaEmpresas() {
    const [exclusaoEmpresaModal, setExclusaoEmpresaModal] = useState(false)
    const [showInfoEmpresaModal, setShowInfoEmpresaModal] = useState(false)

    const handleCloseShowEmpresa = () => {
        setShowInfoEmpresaModal(!showInfoEmpresaModal)
    }

    const handleClose = () => {
        setExclusaoEmpresaModal(!exclusaoEmpresaModal)
    }

    return (
        <div className="flex w-full h-full overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full shadow-md border text-sm text-left rtl:text-right text-black">
                <thead className="text-xs text-black uppercase bg-[#ededed] ">
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
        </div>
    )
}