'use client'
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";

export default function SectionBanner() {
    return(
        <section id="banner">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-img_bg_home2 w-full bg-no-repeat bg-center h-[600px]">
            <div className="max-w-[1246px] w-full mx-auto">
            <div className="flex-1 md:max-w-[600px] max-w-[400px] md:pt-[80px] pt-[160px]">
            <AnimatePresence>
            <motion.div
            animate={{ x: [0, 200, 0] }}
            whileHover={{ scale: 1.1 }}>
                <h1 className=" text-slate-800 text-start md:text-9xl text-7xl font-bold ">
                    Relaxe Renove Revitalize:
                </h1>
                <p className="text-slate-800 text-start font-bold md:text-[31px] text-[18px] pl-2">
                    Descubra o Poder do Toque Terapêutico
                </p>
            </motion.div>
            </AnimatePresence>
            </div>
            </div>
        </div>
        </div>
        </section>
    )
}