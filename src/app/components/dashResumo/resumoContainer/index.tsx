"use client"
import dynamic from 'next/dynamic';
const PieChartComponent = dynamic(() => import('@/app/components/dashResumo/graficPizza/index'), { ssr: false });
import { useEffect, useReducer, useState } from "react";
// import PieChartComponent from "../graficPizza";
import ResumoQuantidade from "../resumoQuantidade";
import ResumoQuantidadeRespostas from "../resumoQuantidadeRespostas";
import TabelaEmpresas from "../tabelaEmpresa";
import ModalInfoEmpresa from '../tabelaEmpresa/infoEmpresa';

interface State {
    showModal: boolean;
    modalData: any | null;
}

const initialState: State = {
    showModal: false,
    modalData: null,
};

export type Action =
    | { type: 'SHOW_MODAL'; payload: any }
    | { type: 'CLOSE_MODAL' };



export default function ContainerResumo() {
    const [trocarComponet, setTrocarComponet] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState);;


    function reducer(state: State, action: Action): State {
        switch (action.type) {
            case 'SHOW_MODAL':
                return {
                    ...state,
                    showModal: true,
                    modalData: action.payload,
                };
            case 'CLOSE_MODAL':
                return {
                    ...state,
                    showModal: false,
                    modalData: null,
                };
            default:
                return state;
        }
    }


    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Browser-specific code here, like manipulating the DOM or accessing localStorage
      
        }
    }, []);

    return (
        <div className="w-full h-full p-20 ">
            {/* <Loading/> */}
            {/* <ModalConfirmation exclusao nomeEmpresa="UX Group"/> */}
            {!state.showModal ? (
                <>
                    <div className="w-full gap-14 pb-10 flex h-[300px]">
                        <ResumoQuantidade />
                        <ResumoQuantidadeRespostas />
                        <PieChartComponent />
                    </div>
                    <div className="flex w-full h-auto">
                        <TabelaEmpresas dispatch={dispatch} />
                    </div>
                </>
            ) : (
                <ModalInfoEmpresa empresa={state.modalData} closeModal={() => dispatch({ type: 'CLOSE_MODAL' })} />
            )}
        </div>
    )
}