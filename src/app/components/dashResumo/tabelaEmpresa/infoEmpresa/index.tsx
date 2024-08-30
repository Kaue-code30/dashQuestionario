import { useClientDataQuestionary } from "@/app/hooks/getDataRespostasEmpresa";
import { Empresa } from "@/app/interfaces/empresaData";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaArrowRight, FaStar } from "react-icons/fa";

interface Data {
    closeModal: () => void;
    empresa: Empresa | undefined;
}

export default function ModalInfoEmpresa({ closeModal, empresa }: Data) {
    const [index, setIndex] = useState(0);
    const [oportunidade, setOportunidade] = useState(false);
    const { mutate, contentData, isPending, isSuccess } = useClientDataQuestionary();

    useEffect(() => {
        if (empresa?.id) {
            mutate(empresa.id); // Faz a requisição com o ID da empresa
        }
    }, [empresa?.id, mutate]);

    console.log(contentData?.data)

    const handleInformationView = (index: number) => {
        setIndex(index);
    }

    const handleOportunidade = () => {
        setOportunidade(!oportunidade);
    }

    

    return (
        <div className="z-50 flex items-center justify-center w-full h-full">
            <motion.div
                initial={{ opacity: 0, translateX: -1000 }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                animate={{ opacity: 100, translateX: 0 }}
                className="w-full flex items-center gap-5 justify-start flex-col h-full bg-white rounded-2xl"
            >
                <div className="h-auto w-full">
                    <div
                        onClick={closeModal}
                        className="flex items-center justify-center hover:cursor-pointer gap-2 h-10 border hover:scale-95 transition rounded-lg w-[100px]"
                    >
                        <BiArrowBack fontSize={20} className="rounded-2xl flex items-center justify-center" />
                        <p>Voltar</p>
                    </div>
                </div>
                <div className="w-full h-full rounded-2xl flex flex-col">
                    <div className="h-16 w-full font-normal text-sm flex gap-2 items-center">
                        <ul className="flex gap-5">
                            <li
                                onClick={() => handleInformationView(0)}
                                className={`${index === 0 ? "border-[#009881] border-b transition-all bg-[#ededed42]" : "border-b bg-transparent"
                                    } hover:cursor-pointer p-2 hover:border-[#009881] transition hover:bg-[#ededed42]`}
                            >
                                Informações
                            </li>
                            <li
                                onClick={() => handleInformationView(1)}
                                className={`${index === 1 ? "border-[#009881] border-b transition-all bg-[#ededed42]" : "border-b bg-transparent"
                                    } hover:cursor-pointer p-2 hover:border-[#009881] transition hover:bg-[#ededed42]`}
                            >
                                Respostas questionário
                            </li>
                        </ul>
                    </div>
                    {index === 0 ? (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, translateX: -100 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                            animate={{ opacity: 100, translateX: 0 }}
                            className="h-full mt-5 p-5 border-t bg-white w-full"
                        >
                            <div className="flex pt-3 flex-col gap-2">
                                <h1 className="text-3xl font-medium">
                                    Informações sobre a Empresa
                                </h1>
                                <p>Aqui é possível ver todas informações sobre a empresa.</p>
                                <div className="flex pt-3 gap-2 flex-col">
                                    <ul className="flex flex-col gap-2">
                                        <li className="text-base">
                                            <p>
                                                <span className="font-bold">.</span> Id da empresa: <span className="font-bold pl-1">{empresa?.id}</span>
                                            </p>
                                        </li>
                                        <li className="text-base">
                                            <p>
                                                <span className="font-bold">.</span> Nome da empresa: <span className="font-bold pl-1">{empresa?.nomeEmpresa}</span>
                                            </p>
                                        </li>
                                        <li className="text-base">
                                            <p>
                                                <span className="font-bold">.</span> Nome do funcionário: <span className="font-bold pl-1">{empresa?.nomeFuncionario}</span>
                                            </p>
                                        </li>
                                        <li className="text-base">
                                            <p>
                                                <span className="font-bold">.</span> E-mail para contato: <span className="font-bold pl-1">{empresa?.emailEmpresa}</span>
                                            </p>
                                        </li>
                                        <li className="text-base">
                                            <p>
                                                <span className="font-bold">.</span> Telefone para contato: <span className="font-bold pl-1">{empresa?.tipoEmpresa}</span>
                                            </p>
                                        </li>
                                        <li className="text-base flex gap-3 items-center pt-4">
                                            <p className="flex font-normal items-center justify-start gap-2">
                                                Marcar como uma oportunidade <FaArrowRight className="font-normal" fontWeight={400} />
                                            </p>
                                            <div onClick={handleOportunidade} className="w-10 flex items-center text-[#b0b0b0] transition justify-center h-10 border rounded-xl">
                                                {oportunidade ? (
                                                    <motion.div
                                                        initial={{ rotate: 0, translateX: 0, translateY: 0 }}
                                                        transition={{ ease: "easeInOut", duration: 2, repeat: 0 }}
                                                        className="w-full flex items-center hover:cursor-pointer justify-center h-full relative"
                                                    >
                                                        <motion.div
                                                            style={{ position: "absolute" }}
                                                            animate={{ scale: [0.5, 1.5, 1] }}
                                                            transition={{ duration: 1, ease: "easeInOut", repeat: 0 }}
                                                        >
                                                            <FaStar color="#FBC709" fontSize={20} />
                                                        </motion.div>
                                                    </motion.div>
                                                ) : (
                                                    <div className="w-full hover:cursor-pointer flex hover:scale-75 transition items-center justify-center h-full">
                                                        <FaStar fontSize={20} />
                                                    </div>
                                                )}
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, translateX: 100 }}
                            transition={{ ease: "easeOut", duration: 0.3 }}
                            animate={{ opacity: 100, translateX: 0 }}
                            className="h-full mt-5 p-5 border-t bg-white w-full"
                        >
                            <div className="flex pt-3 flex-col gap-2">
                                <h1 className="text-3xl font-medium">
                                    Interação com o Questionário
                                </h1>
                                <p>Aqui é possível ver todas as respostas que a empresa forneceu ao nosso questionário.</p>
                                {contentData?.data.length! > 0 ? (
                                    <table className="w-full rounded-t-lg mt-5 shadow-md border text-sm text-left">
                                        <thead>
                                            <tr className="bg-[#EDEDED] border-b">
                                                {/* <th className="px-4 py-2">ID</th> */}
                                                <th className="px-4 py-2">Pergunta</th>
                                                <th className="px-4 py-2">Resposta</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contentData?.data.map((item, index) => (
                                                <tr key={item.id_empresa} className={`${index % 2 === 0 ? "bg-white" : "bg-[#ededed]"} text-black`}>
                                                    {/* <td className="px-4 py-2">{item.id_empresa}</td> */}
                                                    <td className="px-4 w-[35%] py-2">{item.pergunta}</td>
                                                    <td className="px-4 py-2">{item.respostas}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No data available.</p>
                                )}
                            </div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}
