'use client'
import Link from "next/link";

export default function SectionPersona() {
    return(
        <section id="">
        <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="flex h-full mx-auto max-w-[1246px] pl-4 pr-4 pb-4 md:pt-4">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 items-center justify-items-center">
                <div className="p-4">
                    <img className=" md:h-[400px] h-[200] border-[15px] rounded-full border-r-slate-800 " src="./images/persona.png" alt="" />
                </div>
                <div className="text-slate-800 p-4 border-2 border-opacity-100 rounded-xl shadow-xl">
                    <h1 className="text-3xl font-bold">Quem sou eu?</h1>
                    <p className="text-white text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi in itaque aperiam non amet, possimus, blanditiis sint deserunt autem explicabo dolorem inventore delectus ipsam quae error, laborum nam ab earum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi quidem et repellendus amet, sapiente mollitia. Commodi labore sequi recusandae! Quod ea fuga doloribus. Minus unde ducimus maxime autem cupiditate?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi quidem et repellendus amet, sapiente mollitia. Commodi labore sequi recusandae! Quod ea fuga doloribus. Minus unde ducimus maxime autem cupiditate?
                    {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam excepturi quidem et repellendus amet, sapiente mollitia. Commodi labore sequi recusandae! Quod ea fuga doloribus. Minus unde ducimus maxime autem cupiditate? */}
                    </p>
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