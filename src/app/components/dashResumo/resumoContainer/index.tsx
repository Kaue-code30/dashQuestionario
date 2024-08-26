"use client"

import PieChartComponent from "../graficPizza";
import ResumoQuantidade from "../resumoQuantidade";
import ResumoQuantidadeRespostas from "../resumoQuantidadeRespostas";
import TabelaEmpresas from "../tabelaEmpresa";

export default function ContainerResumo() {
    return (
        <div className="w-full h-full p-20 ">
            {/* <Loading/> */}
            {/* <ModalConfirmation exclusao nomeEmpresa="UX Group"/> */}
            <div className="w-full gap-14 pb-10 flex h-[300px]">
                <ResumoQuantidade />
                <ResumoQuantidadeRespostas />
                <PieChartComponent/>
            </div>
            <div className="flex w-full h-auto">
                <TabelaEmpresas/>
            </div>
        </div>
    )
}