import ResumoPaginaComMaisLeads from "./resumoPaginaComMaisLeads";

export default function DashResumoLeads() {
    return (
        <div className="w-full flex  h-full p-20">
            <div className="h-[230px]  flex gap-5 w-full">
                {/* <div className="h-full w-1/3">
                    <ResumoQuantidade />
                </div> */}
                <div className="w-full">
                    <ResumoPaginaComMaisLeads/>
                </div>
                <div className="h-full">

                </div>

            </div>
        </div>
    )
}