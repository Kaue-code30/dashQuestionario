import { motion } from "framer-motion";
import Image from "next/image";
import PieChartComponent from "./PieChartPerformance";


export default function DashPerormance() {

    const data = [
        {
            "ImageProduto": "",
            "QuantidadeDeRespostasRegistradas": 110
        },
        {
            "ImageProduto": "",
            "QuantidadeDeRespostasRegistradas": 122
        },
        {
            "ImageProduto": "",
            "QuantidadeDeRespostasRegistradas": 13
        },

    ]

    const maxItemIndex = data.reduce((maxIndex, currentItem, currentIndex, array) => {
        return currentItem.QuantidadeDeRespostasRegistradas > array[maxIndex].QuantidadeDeRespostasRegistradas ? currentIndex : maxIndex;
    }, 0);

    const maxItem = data[maxItemIndex];

    const remainingItems = data.filter((_, index) => index !== maxItemIndex);


    const middleIndex = Math.floor(remainingItems.length / 2);
    remainingItems.splice(middleIndex, 0, maxItem);





    return (
        <div className="w-full flex flex-col gap-10 h-full p-20">
            <motion.div initial={{ opacity: 0, }}
                animate={{ opacity: 100 }}
                transition={{ duration: 0.3 }} className="w-full flex flex-col gap-2 h-[260px] p-9 rounded-2xl shadow-md border">
                <div className="w-full flex h-full">
                    <ul className="flex gap-2 w-full">
                        {remainingItems.map((d, index) => (
                            <li key={index} className={`w-1/3 ${maxItem.QuantidadeDeRespostasRegistradas === d.QuantidadeDeRespostasRegistradas ? "scale-100  rounded" : "scale-90"} flex items-center gap-2 justify-center flex-col h-full`}>
                                <Image src={d.ImageProduto} alt="icone Produto" className="w-20 h-20" />
                                <h2 className="text-base">
                                    Resultados: <span className="text-[#009881] font-bold">{d.QuantidadeDeRespostasRegistradas}</span>
                                </h2>
                            </li>
                        ))}
                    </ul>
                </div>

            </motion.div>
            <div className="w-full rounded-2xl p-9 shadow-md h-[130px] border">
                <div className="flex items-center w-full h-10">
                    <form className="">
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 ">Filtre por produto:</label>
                        <select id="countries" className="bg-[#EDEDED] border p-1 border-gray-300 text-gray-900 text-sm rounded-lg ">
                            <option selected>Escolha um produto</option>
                            <option value="US">Fusion</option>
                            <option value="CA">Ondetah</option>
                            <option value="FR">Torre</option>
                            <option value="DE">Fulfillment</option>
                            <option value="DE">Trux</option>
                            <option value="DE">Pudo</option>
                        </select>
                    </form>

                </div>
            </div>
            <div className="h-full flex gap-10 w-full">
                <div className="w-1/2 h-full">
                    <PieChartComponent />
                </div>
            </div>
        </div>
    )
}