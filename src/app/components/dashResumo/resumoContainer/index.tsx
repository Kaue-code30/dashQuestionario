"use client"
import dynamic from 'next/dynamic';

const PieChartComponent = dynamic(() => import('@/app/components/dashResumo/graficPizza/index'), { ssr: false });




import { useEffect } from "react";
// import PieChartComponent from "../graficPizza";
import ResumoQuantidade from "../resumoQuantidade";
import ResumoQuantidadeRespostas from "../resumoQuantidadeRespostas";
import TabelaEmpresas from "../tabelaEmpresa";

export default function ContainerResumo() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Browser-specific code here, like manipulating the DOM or accessing localStorage
          console.log(window.innerWidth);
        }
      }, []);

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