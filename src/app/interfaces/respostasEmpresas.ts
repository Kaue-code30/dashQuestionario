export interface RespostaEmpresa {
    id_empresa: number;
    pergunta: string;
    respostas: string;

}

export interface ResponseEmpresa {
    data: RespostaEmpresa[];
}