import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GetPieChartDataQuestionaryResponse } from "../interfaces/GetPieChartDataQuestionaryResponse";

const API_URL = 'http://localhost:3000/empresa-perguntas/all';

const fetchData = async (): Promise<AxiosResponse<GetPieChartDataQuestionaryResponse>> => {
    let response: any;

    const options = {
        method: 'GET',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }


    response = await axios.request<GetPieChartDataQuestionaryResponse>(options);
    
    return response;
}
export function useClientDataQuestionary() {
    const mutation = useMutation<AxiosResponse<GetPieChartDataQuestionaryResponse>, Error>({
        mutationFn: fetchData
    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,

    };
}

