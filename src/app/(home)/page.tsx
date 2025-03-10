"use client";
import Hero from "@/components/hero/hero";
import Section from "@/components/section/section";

export default function Home() {
  return (
    <>
      <Hero data={{
        title: 'Revolucionando Economias Digitais com<br/><b>Liberdade</b> e <b>Tecnologia</b>.',
        text: 'Na <b>BDM Digital</b>, unimos a inovação da <span>blockchain própria</span><br/>à missão de empoderar <span>pessoas</span> e <span>negócios</span>.',
        url: '/',
        btnLabel: 'Comece Agora',
        btnClass: '--primary',
        media: '/img/hero.mp4'
      }}/>

      <Section 
        title='Uma <span><b>Nova Era</b></span> de Prosperidade <b>Compartilhada</b>' >
        <>Conteudo</>
      </Section>

      <Section 
        title='Tecnologia que <span><b>Transforma Realidades</b></span>' >
        <>Conteudo</>
      </Section>

      <Section 
        title='Por que Escolher a <span><b>DBM Digital</b></span>?' 
        subtitle='O <b>BDM Digital</b> valorizou mais de <b>100 vezes</b> a poupança, isso em apenas 3 meses. <span>Aqui o seu dinheiro vale mais</span>!'>
        <>Conteudo</>
      </Section>

      <Section 
        title='<span><b>DBM Digital:</b></span>  <b>Sua Ponte para o Metaverso</b>' >
        <>Conteudo</>
      </Section>
    </>
  );
}