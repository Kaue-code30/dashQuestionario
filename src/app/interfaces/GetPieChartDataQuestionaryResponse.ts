export interface GetPieChartDataQuestionaryResponse{
   
        data: {
            status: number,
            result: string | number
        }
    
}

export interface ClientDataResponse{
    content: GetPieChartDataQuestionaryResponse[]
}