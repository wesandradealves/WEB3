"use client";
import Hero from "@/components/hero/hero";
import Section from "@/components/section/section";

export default function Home() {
  return (
    <>
      <Hero 
        btnAnimation='tada' 
        data={{
          title: 'Revolucionando Economias Digitais com<br/><b>Liberdade</b> e <b>Tecnologia</b>.',
          text: 'Na <b>BDM Digital</b>, unimos a inovação da <span>blockchain própria</span><br/>à missão de empoderar <span>pessoas</span> e <span>negócios</span>.',
          url: '/',
          btnLabel: 'Comece Agora',
          btnClass: '--primary',
          media: '/img/hero.mp4'
        }}/>

      <Section 
        backgroundattachment='fixed'
        backgroundimage='/img/copie-de-onde-o-dinheiro-se-transforma-em-ouro-3.png'
        title='Uma <span><b>Nova Era</b></span> de Prosperidade <b>Compartilhada</b>' >
        <p className='text-center'>O Metaverso e as criptomoedas estão redefinindo como negociamos, criamos e nos conectamos. <b>Na BDM Digital</b>, desenvolvemos a primeira <span>blockchain brasileira</span> com validação em segundos, 
        usando um <b>Proof-of-Stake aprimorado</b>, para garantir transações rápidas e seguras. <br/><br/>Combinada à <span><b>Dourado.cash</b></span>, nossa plataforma de pagamentos, oferecemos uma ponte entre o mundo físico e o digital, onde todos podem usufruir de liberdade financeira, seja em moeda social (BDM) ou em criptoativos globais.</p>
      </Section>

      <Section 
        backgroundsize='auto'
        backgroundposition='center center'
        backgroundattachment='fixed'
        backgroundimage='/img/tecnologia-que-transforma-realidades.png'
        title='Tecnologia que <span><b>Transforma Realidades</b></span>' >
        <>Conteudo</>
      </Section>

      <Section 
        title='Por que Escolher a <span><b>DBM Digital</b></span>?' 
        subtitle='O <b>BDM Digital</b> valorizou mais de <b>100 vezes</b> a poupança, isso em apenas 3 meses. <span>Aqui o seu dinheiro vale mais</span>!'>
        <>Conteudo</>
      </Section>

      <Section 
        background='linear-gradient(180deg, #161516 54.74%, #777777 91.02%)'
        title='<span><b>DBM Digital:</b></span>  <b>Sua Ponte para o Metaverso</b>' >
        <>Conteudo</>
      </Section>
    </>
  );
}