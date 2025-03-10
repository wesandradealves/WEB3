"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Container } from './styles';

export default function Footer() {
  return (
    <Container className="bg-white py-5 rounded-t-2xl">
      <div className="container m-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-5">
          <Link href="/" className="mb-4">
            <Image 
              src="/img/bdm-logo.svg" 
              alt="BDM Digital" 
              width={160} 
              height={40}
              className="w-24 h-auto"
              priority
            />
          </Link>
          
          <div className="flex flex-col gap-4 md:max-w-[300px]">
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener" className="text-black hover:opacity-70">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="text-black hover:opacity-70">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" className="text-black hover:opacity-70">
                <FaLinkedin size={24} />
              </a>
            </div>
            
            <p className="text-sm text-gray-700 leading-normal mt-2">
              © 2025 DBM Digital. Todos os direitos reservados.
              <br />
              Desenvolvido por Dourado.cash
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20">
            <div className="min-w-[200px]">
              <h4 className="font-bold text-lg mb-3">Explore</h4>
              <ul className="space-y-2">
                <li><Link href="/sobre" className="text-gray-600 hover:text-black hover:underline">Sobre nós</Link></li>
                <li><Link href="/pos" className="text-gray-600 hover:text-black hover:underline">BDM POS</Link></li>
                <li><Link href="/mapa" className="text-gray-600 hover:text-black hover:underline">BDMAP</Link></li>
                <li><Link href="/mercado" className="text-gray-600 hover:text-black hover:underline">Mercado BDM</Link></li>
              </ul>
            </div>

            <div className="min-w-[100px]">
              <h4 className="font-bold text-lg mb-3">Recursos</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-600 hover:text-black hover:underline">Blog</Link></li>
                <li><Link href="/suporte" className="text-gray-600 hover:text-black hover:underline">Suporte</Link></li>
                <li><Link href="/documentacao" className="text-gray-600 hover:text-black hover:underline">Documentação</Link></li>
                <li><Link href="/api" className="text-gray-600 hover:text-black hover:underline">API</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}