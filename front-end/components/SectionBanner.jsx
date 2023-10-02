'use client'
import Link from "next/link";

export default function SectionBanner() {
    return(
        <section id="banner">
        <div className="bg-img_bg_home2 w-full bg-no-repeat bg-center md:h-[600px] h-[400px]">
            <div className="flex max-w-[1246px] w-full mx-auto">
            <div className="flex-1 md:max-w-[600px] max-w-[400px] pt-[80px]">
                <h1 className=" text-slate-800 text-start md:text-9xl text-7xl font-bold ">
                    Relaxe Renove Revitalize:
                </h1>
                <p className="text-slate-800 text-start font-bold md:text-[32px] text-[18px]">
                    Descubra o Poder do Toque Terapêutico
                </p>
            </div>
            </div>
        </div>
        </section>
    )
}