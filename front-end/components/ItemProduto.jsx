'use client';
import { useContext } from 'react';
import { ClienteContext } from '@/contexts/cliente';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa"

export default function ItemProduto(props) {
  return (
    <div className="rounded-md w-[395px] bg-white p-4 hover:shadow-lg">
      <div className="flex justify-center">
        <div>
          <img
            className=""
            src="https://www.coolinsuringarena.com/wp-content/uploads/2013/03/image-alignment-150x150.jpg"
            alt=""
          />
        </div>
      </div>

      <p className="font-bold text-indigo-800 text-xl pt-4">
        {props.produto.nome}
      </p>
      {props.produto.descricao}
      <div className="flex justify-between">
        <h1 className="font-bold">Preço R$: {props.produto.preco},00</h1>
        <h1><Link href="https://wa.me//5553981121098?text=Tenho%20interesse%20no%20Óleo%20de%20Massagem"><button className='text-2xl text-lime-600'><FaWhatsapp /></button></Link></h1>
      </div>
    </div>
  );
}
