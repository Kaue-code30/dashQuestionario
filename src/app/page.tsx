import Image from "next/image";
"use client"
import SideBar from "./components/sideBar";
import ContainerResumo from "./components/dashResumo/resumoContainer";
import { Suspense, useEffect } from "react";
import Loading from "./loading";
import ModalInfoEmpresa from "./components/dashResumo/tabelaEmpresa/infoEmpresa";

export default function Home() {

  useEffect(() => {
    setTimeout(function(){ location.reload(); }, 100000);
  })

  return (
    <main className="flex flex-row h-screen max-h-screen bg-white items-start justify-between">
        <SideBar/>
        <Suspense fallback={<Loading/>}>
        <ContainerResumo/>
        </Suspense>
        
       
    </main>
  );
}
