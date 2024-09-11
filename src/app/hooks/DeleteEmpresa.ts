import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ResponseEmpresa } from "../interfaces/respostasEmpresas";

// Ajuste da função fetchData para retornar o tipo correto
const fetchData = async (id: number): Promise<ResponseEmpresa> => {
    const API_URL = `https://backend-questionarioux.onrender.com/empresa/delete/${id}`;

    const response = await axios.delete<ResponseEmpresa>(API_URL, {
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
        },
    });


    
    return response.data; // Retorna apenas os dados
}

// Ajuste do hook useClientDataQuestionary para utilizar o tipo correto
export function useClientDataQuestionary() {
    const mutation = useMutation<ResponseEmpresa, Error, number>({
        mutationFn: fetchData,
    });

    return {
        mutate: mutation.mutate, // Função para iniciar a mutação
        contentData: mutation.data, // Acesso direto aos dados da resposta
        isPending: mutation.isPending, // Estado de carregamento
        isSuccess: mutation.isSuccess, // Estado de sucesso
    };
}
