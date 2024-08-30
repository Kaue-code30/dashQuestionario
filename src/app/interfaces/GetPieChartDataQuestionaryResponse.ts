import { Empresa } from "./empresaData"

export interface GetPieChartDataQuestionaryResponse{
   
        data: {
            status: number,
            result: string | number
        }
    
}
export interface GetListDataQuestionaryResponse{
   
        data: {
            status: number,
            result: [
                Empresa
            ]
        }
    
}



export interface ClientDataResponse{
    content: GetPieChartDataQuestionaryResponse[]
}