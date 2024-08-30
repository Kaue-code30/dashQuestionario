import { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { GetListDataQuestionaryResponse, GetPieChartDataQuestionaryResponse } from "../interfaces/GetPieChartDataQuestionaryResponse";

const API_URL = 'http://localhost:3000/empresa';

const fetchData = async (): Promise<AxiosResponse<GetListDataQuestionaryResponse>> => {
    let response: any;

    const options = {
        method: 'GET',
        url: API_URL,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }


    response = await axios.request<GetListDataQuestionaryResponse>(options);
    
    return response;
}
export function useClientDataQuestionary() {
    const mutation = useMutation<AxiosResponse<GetListDataQuestionaryResponse>, Error>({
        mutationFn: fetchData
    });

    return {
        mutate: mutation.mutate,
        contentData: mutation.data?.data,
        isPending: mutation.isPending,
        isSuccess: mutation.isSuccess,

    };
}

