import { AnimatePresence, motion } from "framer-motion";
import logoUX from "@/app/assets/faviconBranco.svg";
import logoOndetah from "@/app/assets/logos/ondetah.svg";
import logoFusion from "@/app/assets/logos/fusion.svg";
import logoTrux from "@/app/assets/logos/trux.svg";
import logoPudos from "@/app/assets/logos/pudos.svg";
import logoFulfillment from "@/app/assets/logos/fulfillment.svg";
import logoTorre from "@/app/assets/logos/torre.svg";
import Image from "next/image";



export default function ResumoPaginaComMaisLeads() {

    const logosProdutos = [
        {
            cor: "#000000",
            logo: logoUX
        },
        {
            cor: "#fbc709",
            logo: logoFulfillment
        }, {
            cor: "linear-gradient(to right, #fbc709 0%, #ff7f13 100%)",
            logo: logoTorre
        },
        {
            cor: "#ff7f13",
            logo: logoPudos
        },

        {
            cor: "#29265b",
            logo: logoFusion
        },
        {
            cor: "linear-gradient(to right, #29265b 0%, #009580 100%)",
            logo: logoOndetah
        },
        {
            cor: "#009580",
            logo: logoTrux
        },

    ]

    return (
        <>
            <AnimatePresence>
                <motion.div exit={{ opacity: 0, translateY: -100 }} initial={{ opacity: 0, translateY: -100 }}
                    animate={{ opacity: 100, translateY: 0 }}
                    transition={{ duration: 0.3 }} className="w-full flex flex-col  hover:cursor-default rounded-2xl border shadow-md  h-full">
                    <div  className="w- h-10 p-10    ">
                        <motion.h1 initial={{ translateY: -10, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 1, ease: "backInOut" }} className="font-medium text-xl">
                            Total de leads por página:
                        </motion.h1>
                    </div>
                    <div className="h-full flex justify-evenly gap-5 w-full p-8 ">
                        {logosProdutos.map((logo, index) => {
                            return (
                                <motion.div initial={{ translateY: -10, opacity: 0 }} animate={{ translateY: 0, opacity: 1 }} transition={{ duration: 1, ease: "backInOut" }} key={index} className={`flex gap-5  items-center justify-start`}>
                                    <motion.div  style={{ background: `${logo.cor}` }} className={`w-10 flex items-center rounded-lg justify-center h-10 `} >
                                        <Image src={logo.logo} alt="logo" width={100} height={100} />
                                    </motion.div>
                                    <div className="pr-5 flex items-end justify-end flex-col">
                                        <h2 className="text-sm">
                                            Total
                                        </h2>
                                        <p className="text-xl font-medium">
                                            12
                                        </p>
                                    </div>
                                    <div className={`w-[1px] h-full ${index === 6 ? "w-0" : ""} bg-[#ededed]`}>

                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>


                </motion.div>
            </AnimatePresence>
        </>
    )
}