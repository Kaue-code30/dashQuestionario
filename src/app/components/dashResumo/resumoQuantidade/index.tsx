import { useEffect } from "react";

export default function ResumoQuantidade(){
    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Browser-specific code here, like manipulating the DOM or accessing localStorage
          console.log(window.innerWidth);
        }
      }, []);
    return(
        <div className="w-1/3 hover:cursor-default rounded-2xl border shadow-md  h-full">
            <div className="flex flex-col items-center  justify-center p-9 w-full h-full">
                <h1 className="text-6xl text-[#009881] font-bold">
                    100
                </h1>
                <p className="pt-5 text-black font-medium">Total de conversas iniciadas</p>
            </div>
        </div>
    )
}