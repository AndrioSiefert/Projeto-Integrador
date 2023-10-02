'use client'
import Link from "next/link";

export default function SectionPersona() {
    return(
        <section id="">
        <div className=" bg-slate-200 pt-4">
        <div className="flex h-full mx-auto max-w-[1246px] bg-slate-200 pl-4 pr-4">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center ">
                <div className="">
                    <img className=" h-[400px] border-[15px] rounded-full border-r-slate-800 " src="./images/persona.png" alt="" />
                </div>
                <div className="text-slate-800">
                    <h1 className="font-bolt text-3xl">Quem sou eu?</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi in itaque aperiam non amet, possimus, blanditiis sint deserunt autem explicabo dolorem inventore delectus ipsam quae error, laborum nam ab earum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi quidem et repellendus amet, sapiente mollitia. Commodi labore sequi recusandae! Quod ea fuga doloribus. Minus unde ducimus maxime autem cupiditate?
                </div>
            </div>

        </div>
        </div>
        </section>

        // <div className="text-slate-800 bg-slate-200 ">   
        // <div className="text-slate-800 bg-slate-200  max-w-[1246px] mx-auto">
        //     <div className="p-4 flex flex-row">
        //         <div className="basis-1/2 bg-orange-200">
        //             <h1>TESTE</h1>
        //         </div>
        //         <div className="basis-1/2 p-4 bg-orange-500">
        //             <img className="rounded-full h-[400px] border-4 border-slate-800 " src="/images/persona.png" alt="" />
        //         </div>
        //     </div>
        // </div>
        // </div>


        

    )
}