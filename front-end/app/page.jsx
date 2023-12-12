'use client';
import SectionBanner from '@/components/SectionBanner';
import SectionPersona from '@/components/SectionPersona';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ClienteContext } from '@/contexts/cliente';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import ItemServico from '@/components/ItemServico';
import ItemProduto from '@/components/ItemProduto';
import BackToTop from '@/components/BackToTop';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [servicos, setServicos] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function getServicos() {
      const response = await fetch('http://localhost:3004/servicos');
      const dados = await response.json();
      setServicos(dados);
    }
    getServicos();

    async function getProdutos() {
      const response = await fetch('http://localhost:3004/produtos');
      const dados = await response.json();
      setProdutos(dados);
      console.log(dados);
    }
    getProdutos();
  }, []);

  const listaServicos = servicos.map((servico) => (
    <ItemServico key={servico.id} servico={servico} />
  ));
  const listaProdutos = produtos.map((produto) => (
    <ItemProduto key={produto.id} produto={produto} />
  ));

  return (
    <div>
      <AnimatePresence>
            <motion.div
            initial={{opacity: 0, y: 15}}
            animate={{opacity: 1, y:0}}
            exist={{opacity: 0, y:15}}
            transition={{delay: 0.30}}>
      <SectionBanner />
      <SectionPersona />
      
          
      <section id="services" className="bg-slate-200">
        <div className="flex justify-end items-center max-w-[1246px] gap-4 w-full mx-auto border-b-2 border-fuchsia-400 p-4 ">
          <div className="shadow-black h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="text-end text-4xl  font-bold text-slate-800">
            SERVIÇOS
          </div>
        </div>
        <div className="flex h-full mx-auto justify-center pt-4 pb-4">
          <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-slate-200 text-slate-800">
            {listaServicos}
          </div>
        </div>
        </section>
        <section id="products" className="bg-slate-200">
        <div className="flex justify-start items-center max-w-[1246px] gap-4 w-full mx-auto border-b-2 border-fuchsia-400 p-4 ">
          <div className="text-end text-4xl  font-bold text-slate-800">
            PRODUTOS
          </div>
          <div className="shadow-black h-5 w-5 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
        </div>
        <div className="flex h-full mx-auto justify-center pt-4 pb-4">
          <div className="grid xl:grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-1 bg-slate-200 text-slate-800">
            {listaProdutos}
          </div>
        </div>
        </section>
        <BackToTop />
        </motion.div>
          </AnimatePresence>
    </div>
  );
}
