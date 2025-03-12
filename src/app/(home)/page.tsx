"use client";
import Hero from "@/components/hero/hero";
import Section from "@/components/section/section";
import Box from "@/components/box/box";
import Card from "@/components/card/card";
import { Props } from "@/components/card/typo";

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
          <Box alignment='stretch' className='ps-10 pe-10 xl:ps-[6rem] pt-10 xl:pe-[6rem] pb-10 xl:mt-[8rem] xl:mb-7 gap-8 xl:gap-16'> 
            <>
              {[
                {
                  image: '/img/insights.png',
                  title: 'Blockchain BDM',
                  text: 'Plataforma 100% nacional, criptografada e escalável para transações ilimitadas.'
                },              {
                  image: '/img/insights.png',
                  title: 'Dourado.cash',
                  text: 'Sua carteira digital para o Metaverso: compre, venda e invista em criptomoedas.'
                },              {
                  image: '/img/insights.png',
                  title: 'Aplicativo BDM ',
                  text: 'Disponível para uso em diversas plataformas. O App é simples, prático, intuitivo e está em pleno funcionamento.'
                },              {
                  image: '/img/insights.png',
                  title: 'BDMap',
                  text: 'Mapa com a localização  e informações de todos que utilizam o BDM Digital.  Ele é uma vitrine que facilita a visibilidade do seu negócio para o público em geral.'
                }
              ].map((item: Props, j: number) => {
                return (
                  <Card className='xl:flex-1' key={j} image={item.image} title={item.title} text={item.text} />
                );
              })}
            </>
          </Box>
          <div className='flex items-stretch flex-col xl:flex-row justify-between gap-7 xl:gap-4'>
            <Box alignment='stretch' className='p-8'> 
                <>
                  {[
                    {
                      image: '/img/insights.png',
                      title: 'Com o BDM Digital<br/>tudo é possível',
                      text: 'Pague suas contas, seu café e até as férias dos seus sonhos. A Blockchain descentraliza suas finanças e coloca infinitas possibilidades na sua mão.'
                    }
                  ].map((item: Props, j: number) => {
                    return (
                      <Card className='xl:flex-1' key={j} image={item.image} title={item.title} text={item.text} />
                    );
                  })}
                </>
            </Box>
            <Box alignment='stretch' className='p-8'> 
              <>
                {[
                  {
                    image: '/img/insights.png',
                    title: 'BDM Negócios',
                    text: 'É uma plataforma exclusiva para empresários, comerciantes e autônomos que buscam mais do que bons negócios. Conheça as vantagens de ser nosso parceiro!'
                  }
                ].map((item: Props, j: number) => {
                  return (
                    <Card className='xl:flex-1' key={j} image={item.image} title={item.title} text={item.text} />
                  );
                })}
              </>
            </Box>
          </div>
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