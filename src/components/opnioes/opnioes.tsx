"use client";

import { Container, Title, Text, Rating, Rate, Item, ItemInner } from './styles';
import { Props } from './typo';
import { Data } from './typo';
import { FaStar, FaRegStar } from 'react-icons/fa';
import React from "react";
import Slider from "react-slick";

export const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
};

export default function Opnioes({ data = [{
  title: 'Lilia Ferreira',
  rating: 5,
  text: 'Já estou investindo e sinto que a forma como enxergamos o dinheiro nunca mais será a mesma. Isso é ótimo, pois o sistema convencional já está ultrapassado e nos impõe muitas restrições. Nos bancos tradicionais, o dinheiro que depositamos não está totalmente sob nosso controle. O BDM Digital, por outro lado, é algo único em termos de segurança e rentabilidade. Sinto-me muito segura investindo! Comecei no início do ano e fiquei impressionada com os rendimentos. É surreal! Estou muito feliz! 🥰'
}, {
  title: 'Claudio José',
  rating: 4,
  text: 'Excelente! Além de ser um meio de pagamento eficiente, o BDM permite manter e valorizar o fruto do nosso trabalho. A equipe de suporte é muito atenciosa. Recomendo!'
}, {
  title: 'DJ Medina',
  rating: 5,
  text: 'Aplicativo perfeito! Fácil de cadastrar, utilizar, realizar transações e muito seguro. Estou na plataforma há dois anos e nunca tive problemas. Sempre recebi os códigos de verificação por e-mail rapidamente e nunca fiquei sem acesso ao app. Após a atualização, foi incluída a opção "Esqueci a senha" para quem precisar recuperar o acesso. Meus investimentos só multiplicam! Não quero mais saber de outros meios para guardar e rentabilizar meu dinheiro. Super recomendo! O BDM Digital é o futuro. Prosperidade para todos! Parabéns!'
}, {
  title: 'Claudio Apdo de Paula',
  rating: 5,
  text: 'Parabéns aos desenvolvedores! O aplicativo é ótimo, muito intuitivo, prático e visualmente agradável. Além disso, percebo uma grande valorização do meu dinheiro digital (BDM). Estou gostando bastante da experiência.'
}, {
  title: 'Nina BP',
  rating: 5,
  text: 'Tive alguns problemas para acessar o aplicativo, mas entrei em contato com o suporte por e-mail e tudo foi resolvido. Voltei a investir e gosto muito da facilidade do app. Não tive nenhuma dificuldade, já realizei um Pix e o valor caiu rapidamente. O BDM tem grande potencial de crescimento no Brasil 🇧🇷 e está cada vez mais valorizado. Invistam sem medo! Que possamos ser os novos milionários.'
}, {
  title: 'Rafaela Wisdaleck',
  rating: 5,
  text: ' MARAVILHOSO Invisto no BDM desde 2020 e estou extremamente feliz com os rendimentos que obtive — meu capital quase dobrou! 🤩🤑😄✨ O novo aplicativo ficou EXCELENTE! Super prático e acessível, até mesmo para quem não tem muita familiaridade com tecnologia. As transações são fáceis de realizar. PARABÉNS! 👏👏'
}, {
  title: 'Jonatan Bernuncio',
  rating: 4,
  text: 'Super recomendo! A plataforma é de fácil acesso, bem estruturada e intuitiva. Essa moeda veio para competir e conquistar seu espaço. Quem está investindo nela não está desperdiçando dinheiro, pois o BDM se valoriza constantemente. Imagino o quanto ainda crescerá nos próximos anos!'
}, {
  title: 'Fábio Rodrigues',
  rating: 5,
  text: 'Interface simples e intuitiva, além de um ótimo suporte do moderador. Super recomendo! Em um futuro muito próximo, a digitalização das moedas será uma realidade. Ter uma criptomoeda confiável, sustentável e rentável é essencial, e o BDM é um projeto promissor e estável, com um grande grupo por trás. Se você é organizado e analítico como eu, recomendo fortemente!'
}] as Data[], className }: Props) {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container className={`${className}`}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Item title={item.text} className='h-full cursor-pointer' key={index}>
            <ItemInner className='flex text-base text-stone-900 p-9 flex-col gap-4 bg-white rounded-[48px] h-full'>
              <Rating className='flex items-center gap-2 list-none'>
                {[...Array(5)].map((_, i) => (
                  <Rate className='text-base lg:text-xl' key={i}>
                    {i < item.rating ? <FaStar /> : <FaRegStar />}
                  </Rate>
                ))}
              </Rating>
              {item.text && (<Text 
              className='flex-1 pe-8 overflow-auto max-h-[140px] lg:max-h-[100px]
              [&::-webkit-scrollbar]:w-1
              [&::-webkit-scrollbar-track]:bg-transparent
              [&::-webkit-scrollbar-track]:ms-7
              [&::-webkit-scrollbar-track]:me-7
              [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-yellow-500
              [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:cursor-move
            '>{item.text}</Text>)}
              <Title className='mt-auto font-bold'>{item.title}</Title>
            </ItemInner>
          </Item>
        ))}
      </Slider>
    </Container>
  );
}