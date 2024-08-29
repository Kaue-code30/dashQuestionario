import { motion } from "framer-motion"
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io"

interface data {
    closeModal: () => void;
}

export default function ModalInfoEmpresa({closeModal} : data) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
          // Browser-specific code here, like manipulating the DOM or accessing localStorage
          console.log(window.innerWidth);
        }
      }, []);
    return (
        <div onClick={() => closeModal()} className="absolute z-50 flex items-center justify-center w-full h-full top-0 left-0 bg-[#000000a5]">
            <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                animate={{ opacity: 100 }}
                className="w-2/3 flex items-center justify-center flex-col p-5 h-3/4 bg-white rounded-2xl shadow-md">
                <div className="h-full w-full ">
                    <div className="flex items-center justify-end h-7 w-full ">
                    <IoMdClose onClick={closeModal} fontSize={30} className="p-1 hover:bg-[#CB1919] rounded-2xl hover:text-white text-[#CB1919] flex items-center justify-center hover:rotate-180 transition" />

                    </div>
                </div>

            </motion.div>
        </div>
    )
}