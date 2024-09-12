import logo from "@/app/assets/faviconBranco.svg"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AiFillDashboard } from "react-icons/ai"

import { MdContacts, MdDashboard } from "react-icons/md"



export default function SideBar({ IndexSidebar, SetIndexSidebar }: any) {

    const dataSideBar = [
        {
            "index": 0,
            "title": "Dashboard",
            "icon": MdDashboard

        },
        {
            "index": 1,
            "title": "Leads",
            "icon": MdContacts


        },
        {
            "index": 2,
            "title": "Performance",
            "icon": AiFillDashboard

        },

    ]

    return (
        <>
            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100  bg-black ">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <motion.aside
                id="logo-sidebar" className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full  py-4 overflow-y-auto bg-[#000]">
                    <Link href={"https://uxgroup.com.br"} target="_blank" className="flex px-5 items-center  mb-5">
                        <Image width={100} height={100} src={logo.src} className="w-20" alt="Flowbite Logo" />

                    </Link>
                    <ul className="space-y-1 pl-5 font-medium">
                        {dataSideBar.map((s) => {
                            return (
                                <li onClick={() => { SetIndexSidebar(s.index) }} key={s.index}>
                                    <a href="#" className={`flex ${IndexSidebar === s.index ? "bg-white text-black hover:scale-100" : "text-white hover:scale-90 hover:bg-transparent"}  bg-black rounded-l-lg transition h-12  items-center p-2  group`}>
                                        <div className={`flex ${IndexSidebar === s.index ? "scale-90 transition" : ""}`}>
                                            <s.icon fontSize={20} />
                                            <span className="ms-3">{s.title}</span>
                                        </div>

                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </motion.aside>
        </>
    )
}