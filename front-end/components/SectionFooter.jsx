'use client';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function SectionFooter() {
  return (
    <section id="">
      <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <div className="flex h-full mx-auto max-w-[1246px] pl-4 pr-4 pb-4 md:pt-4 justify-center items-center">
          <div className="text-white font-bold text-3xl ">
            Agende seu Horário
          </div>
          <div className="text-white font-bold text-4xl pl-4">
            <Link href="https://wa.me//5553981121098?text=Quero%20Marcar%20uma%20Massagem">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className="flex h-full mx-auto max-w-[1246px] pl-4 pr-4 pb-4 md:pt-4 justify-between items-center">
          <div className="text-white text-xl ">
            Eliane Siefert Massoterapeuta - Camaquã/RS
          </div>
          <div className="text-white  text-xl ">Telefone: (53) 98112-1098</div>
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
  );
}
