import Image from "next/image";
import logo from "@/app/assets/faviconBranco.svg"
import bannerLogin from "@/app/assets/ondetah.png"
import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface data {
    auth: () => void;
}

export default function LoginComponent({ auth }: data) {

    let username = "admin";
    let passwordName = "admin";
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {

    })

    const Login = () => {
        if (user.length <= 0 || password.length <= 0) {
            setError("Os campos não podem estar vazios :(")
        } else if (user === username && password === passwordName) {
            auth();
        } else {
            setError("Usuário ou senha inválidos")
        }
    }


    const handleUserChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    return (
        <>
            <motion.div initial={{ opacity: 0, }}
                animate={{ opacity: 100 }}
                transition={{ duration: 0.1 }} className="w-[45%] px-14 py-14 bg-black h-full">
                <Image className="w-40" src={logo} alt="" width={100} height={100} />
                <div className="w-full pl-7  flex flex-col gap-4 h-3/4 rounded-lg">
                    <h1 className=" pt-10 font-semibold text-4xl text-white">
                        Bem-vindo :{")"}
                    </h1>
                    <p className="text-white w-4/5">Por favor digite o usuário e senha para ter acesso.</p>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <IoPersonSharp />

                        </span>
                        <input onChange={handleUserChange} type="text" id="website-admin" className="rounded-none h-12 w-[280px] pl-2  rounded-e-lg bg-gray-50 border text-gray-900 " placeholder="Seu login" />
                    </div>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <FaLock />
                        </span>
                        <input type="password" onChange={handlePasswordChange} id="website-admin" className="shadow-md rounded-none h-12 w-[280px] pl-2  rounded-e-lg bg-gray-50 border text-gray-900 " placeholder="Sua senha" />
                    </div>
                    {error && (
                        <p className="font-base text-[#CB1919]">{error}</p>
                    )}
                    <button onClick={() => Login()} className="w-[320px] shadow-md h-12 rounded-lg hover:bg-white hover:text-black transition hover:scale-95 bg-black border text-white">
                        entrar
                    </button>
                </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, }}
                animate={{ opacity: 100 }}
                transition={{ duration: 0.1 }} className="relative bg-cover bg-right bg-no-repeat w-full h-full" style={{ backgroundImage: `url(${bannerLogin.src})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </motion.div>
        </>
    )
}