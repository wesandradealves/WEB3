"use client";

import ContentBox from "@/components/ContentBox/ContentBox";
import Section from "@/components/section/section";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@/components/button/button";
import { Client, Clients, Tag, Taglist, Title } from "./style";
import { ClientsTypo } from "./typo";

const clients: ClientsTypo[] = [
  {
    image: 'img/thumbnail.png',
    title: 'Empório Nattu Saúde',
    tags: ['campo grande/ms', 'saúde', 'produtos naturais'],
  },
  {
    image: 'img/thumbnail.png',
    title: 'Empório Nattu Saúde',
    tags: ['campo grande/ms', 'saúde', 'produtos naturais'],
  },
  {
    image: 'img/thumbnail.png',
    title: 'Empório Nattu Saúde',
    tags: ['campo grande/ms', 'saúde', 'produtos naturais'],
  },
];

export default function Clientes() {
  return (
    <>
      <Section
        barstitle="on"
        title="<b>Clientes</b>"
        className="pt-[117px] -mb-[6rem]"
      >
        <div className="flex items-center justify-between">
          <LazyLoadImage className="m-auto lg:me-auto lg:ms-0" src="img/trabalhe-na-modernizacao-da-sua-marca.png" />
          <Button effect="pulse" radius={999} className="--secondary hidden lg:block" href="#" tag="a">
            Clientes BDM
          </Button>
        </div>

        <Clients className="grid sm:grid-cols-2 items-stretch list-none gap-5">
          {clients.map((client, index) => (
            <Client key={index} className="flex-col gap-2 flex">
              <LazyLoadImage className="w-full" src={client.image} />
              <Title className="flex items-center gap-2 font-bold text-lg">
                <LazyLoadImage src="img/dot.png" />
                {client.title}
              </Title>
              <Taglist className="list-none flex-wrap flex items-center gap-2">
                {client.tags.map((tag, j) => (
                  <Tag key={j} className="lowercase text-stone-900 text-sm overflow-hidden text-ellipsis whitespace-nowrap bg-white p-4 pt-[2px] pb-[2px] rounded-[2px]">
                    {tag}
                  </Tag>
                ))}
              </Taglist>
            </Client>
          ))}
        </Clients>
      </Section>

      <Section>
        <ContentBox
          reverse={true}
          img="/img/negocios-1.png"
          title="<b><span>Empresas</span> e <span>Clientes</span></b>"
          text="
          <ul>
            <li>Seus clientes e fornecedores também podem utilizar o <span>BDM DIGITAL</span>.</li>
            <li>O aquecimento do comércio incentiva uma maior movimentação de valores, criando um ciclo completo onde o <span>BDM</span> circula e volta para o seu negócio.</li>
          </ul>
        "
          url="#"
          btnLabel="Cadastrar Oferta"
          btnClass="--primary inline-block me-auto"
          btnAnimation="pulse"
        />
      </Section>
    </>
  );
}
