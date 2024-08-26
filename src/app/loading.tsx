"use client"
import style from "@/app/components/loading/style.module.scss"

export default function Loading () {
    return (
        <div className="z-50 absolute flex items-center justify-center top-0 left-0 w-full h-full bg-[#000000dd]">
            <div  className={style.spinner54344}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}