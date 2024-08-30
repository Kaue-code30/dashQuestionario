import Image from "next/image";
import notFound from "@/app/assets/404.png"

export default function habfk(){
    return(
        <main className="w-full flex items-center justify-center bg-black h-screen">
           <Image className="flex w-auto h-full" quality={100} width={1000} height={1000} alt="" src={notFound.src}/>
        </main>
    )
}