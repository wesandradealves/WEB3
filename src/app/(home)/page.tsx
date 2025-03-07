"use client";
import Hero from "@/components/hero/hero";
export default function Home() {
  return (
    <Hero data={{
      title: 'Revolucionando Economias Digitais com<br/><b>Liberdade</b> e <b>Tecnologia</b>.',
      text: 'Na <b>BDM Digital</b>, unimos a inovação da <span>blockchain própria</span><br/>à missão de empoderar <span>pessoas</span> e <span>negócios</span>.',
      url: '/',
      btnLabel: 'Comece Agora',
      btnClass: '--primary',
      media: '/img/hero.mp4'
    }}/>
  );
}
