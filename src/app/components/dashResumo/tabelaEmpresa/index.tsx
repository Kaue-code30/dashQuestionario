"use client"
import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { Empresa } from "@/app/interfaces/empresaData";
import ModalInfoEmpresa from "./infoEmpresa";
import ModalConfirmation from "../../modalConfirmation";
import { useClientDataQuestionary } from "@/app/hooks/getDataListEmpresas";
import { Action } from "../resumoContainer";

interface TabelaEmpresasProps {
    dispatch: React.Dispatch<Action>;
}

export default function TabelaEmpresas({ dispatch }: TabelaEmpresasProps) {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            mutate();
        }
    }, []);

    // const content: Empresa[] = [{
    //     id: 0,
    //     nomeEmpresa: "UX Group",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "Tecnologia"
    // }, {
    //     id: 1,
    //     nomeEmpresa: "Carrefour",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "abelha"
    // }, {
    //     id: 2,
    //     nomeEmpresa: "Chilli Beans",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "logistica"
    // }, {
    //     id: 3,
    //     nomeEmpresa: "Leroy Merlin",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "logistica"
    // }, {
    //     id: 4,
    //     nomeEmpresa: "Amazon",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "logistica"
    // }, {
    //     id: 5,
    //     nomeEmpresa: "Americanas",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "logistica"
    // }, {
    //     id: 6,
    //     nomeEmpresa: "Whirpoll",
    //     email: "uxgroup@gmail.com",
    //     tipoNegocio: "logistica"
    // },]

    const [exclusaoEmpresaModal, setExclusaoEmpresaModal] = useState(false)
    const [showInfoEmpresaModal, setShowInfoEmpresaModal] = useState(false)
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [tipoNegocio, setTipoNegocio] = useState("");
    const { mutate, contentData, isPending } = useClientDataQuestionary();
    const [empresaSelect, setEmpresa] = useState<Empresa>();
    const [atualizar, setAtualizar] = useState(false);



    useEffect(() => {
        if (atualizar) {
            const timer = setTimeout(() => {
                location.reload();
                setAtualizar(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [atualizar, mutate]); // Adiciona `atualizar` e `mutate` como dependências

    // Atualiza o estado de `atualizar` após a mutação ser concluída
    useEffect(() => {
        if (contentData?.data) {
            filteredContent = contentData.data.result;
        }
        setAtualizar(false);
    }, [contentData]);

    let filteredContent = contentData?.data.result.filter((empresa) => {
        return (
            empresa?.nomeEmpresa?.toLowerCase().includes(nomeEmpresa.trim().toLowerCase()) &&
            empresa?.tipoEmpresa?.toLowerCase().includes(tipoNegocio.trim().toLowerCase())
        );
    });


    const handleEmpresaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNomeEmpresa(event.target.value);

    };
    const handleTipoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTipoNegocio(event.target.value);
    }

    const handleExclusaoEmpresa = (empresa: Empresa) => {
        setExclusaoEmpresaModal(!exclusaoEmpresaModal);
        setEmpresa(empresa)

    }
    const handleShowEmpresa = (empresa: Empresa) => {
        setShowInfoEmpresaModal(!showInfoEmpresaModal);
        setEmpresa(empresa);
        dispatch({ type: 'SHOW_MODAL', payload: empresa });


    }

    const AtualizarLista = () => {
        setAtualizar(true);
    }

    const handleCloseShowEmpresa = () => {
        setShowInfoEmpresaModal(!showInfoEmpresaModal)
    }

    const handleCloseExclusao = () => {
        setExclusaoEmpresaModal(!exclusaoEmpresaModal)
    }




    return (
        
        <motion.div
            initial={{ opacity: 0, }}
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
                        <input value={nomeEmpresa} onChange={handleEmpresaChange} type="text" id="website-admin" className="rounded-none h-12 w-[200px] pl-2  rounded-e-lg bg-gray-50 border text-gray-900 " placeholder="Nome Empresa" />
                    </div>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </span>
                        <input value={tipoNegocio} onChange={handleTipoChange} type="text" id="website-admin" className="rounded-none h-12 w-[200px] pl-2  rounded-e-lg bg-gray-50 border text-gray-900 " placeholder="Telefone" />
                    </div>

                </div>
            </div>
            <div className="overflow-y-auto h-[370px]">
                <table className="w-full rounded-t-lg shadow-md border text-sm text-left rtl:text-right text-black">
                    <thead className="text-xs  rounded-t-lg text-black uppercase bg-[#ededed]">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id Empresa</th>
                            <th scope="col" className="px-6 py-3">Nome</th>
                            <th scope="col" className="px-6 py-3">E-mail</th>
                            <th scope="col" className="px-6 py-3">Telefone</th>
                            <th scope="col" className="px-10 py-3">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            filteredContent?.map((data, key) => {
                                return (
                                    <tr key={key} className={` ${key % 2 === 0 ? " bg-white" : "bg-[#edededb9]"} text-black`}>
                                        <th scope="row" className={`  px-6 py-4 font-medium`}>{data.id}</th>
                                        <td className="px-6 py-4">{data.nomeEmpresa}</td>
                                        <td className="px-6 py-4">{data.emailEmpresa}</td>
                                        <td className="px-6 py-4">{data.tipoEmpresa}</td>
                                        <td className="px-6 flex items-center justify-start gap-2 py-4">
                                            <button onClick={() => handleShowEmpresa(data)} className="p-2 hover:scale-90 transition hover:bg-[#009881] hover:border-transparent hover:text-[#fff] border rounded-full">
                                                <IoEyeSharp fontSize={15} />
                                            </button>
                                            <button onClick={() => handleExclusaoEmpresa(data)} className="p-2 hover:scale-90 transition hover:bg-[#CB1919] hover:border-transparent hover:text-[#fff] border rounded-full">
                                                <FaRegTrashAlt fontSize={15} />
                                            </button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

            {showInfoEmpresaModal && (
                <ModalInfoEmpresa empresa={empresaSelect} closeModal={handleCloseShowEmpresa} />
            )}

            {exclusaoEmpresaModal && (
                <ModalConfirmation atualizar={() => AtualizarLista()} nomeEmpresa={empresaSelect?.nomeEmpresa} id_empresa={empresaSelect?.id} exclusao closeModal={handleCloseExclusao} />
            )}
            {
                atualizar && (
                    <ModalConfirmation closeModal={handleCloseExclusao} atualizar={() => AtualizarLista()} exclusao={false} />
                )}

        </motion.div>
    )
}