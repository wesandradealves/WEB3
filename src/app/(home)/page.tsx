"use client";
import Hero from "@/components/hero/hero";
import Section from "@/components/section/section";
import Box from "@/components/box/box";
import Card from "@/components/card/card";
import { Props } from "@/components/card/typo";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { motion } from 'framer-motion';
import SectionSwitcher from "@/components/sectionSwitcher/sectionSwitcher";

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
        }} />

      <Section
        backgroundattachment='fixed'
        backgroundimage='/img/copie-de-onde-o-dinheiro-se-transforma-em-ouro-3.png'
        title='Uma <span><b>Nova Era</b></span> de Prosperidade <b>Compartilhada</b>' >
        <div className='flex justify-between items-center flex-wrap'>
          <div className='flex-1 hidden sm:block'><LazyLoadImage className='w-min-[100%]' src={'img/1.gif'} /></div>
          <div className='m-auto'>
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            >
              <LazyLoadImage className='w-auto' src={'img/coin.png'} />
            </motion.div>
          </div>
          <div className='flex-1 hidden sm:block'><LazyLoadImage className='w-min-[100%]' src={'img/1.gif'} /></div>
        </div>
        <p className='text-center'>O Metaverso e as criptomoedas estão redefinindo como negociamos, criamos e nos conectamos. <b>Na BDM Digital</b>, desenvolvemos a primeira <span>blockchain brasileira</span> com validação em segundos,
          usando um <b>Proof-of-Stake aprimorado</b>, para garantir transações rápidas e seguras. <br /><br />Combinada à <span><b>Dourado.cash</b></span>, nossa plataforma de pagamentos, oferecemos uma ponte entre o mundo físico e o digital, onde todos podem usufruir de liberdade financeira, seja em moeda social (BDM) ou em criptoativos globais.</p>
      </Section>

      <Section
        backgroundsize='auto'
        backgroundposition='center center'
        backgroundattachment='fixed'
        backgroundimage='/img/tecnologia-que-transforma-realidades.png'
        title='Tecnologia que <span><b>Transforma Realidades</b></span>' >
        <Box alignment='stretch' className='ps-10 pe-10 xl:ps-[6rem] pt-10 xl:pe-[6rem] pb-10 xl:mt-[8rem] xl:mb-7 gap-8 xl:gap-16 flex-col lg:flex-row'>
          <>
            {[
              {
                image: '/img/insights.png',
                title: 'Blockchain BDM',
                text: 'Plataforma 100% nacional, criptografada e escalável para transações ilimitadas.'
              }, {
                image: '/img/insights.png',
                title: 'Dourado.cash',
                text: 'Sua carteira digital para o Metaverso: compre, venda e invista em criptomoedas.'
              }, {
                image: '/img/insights.png',
                title: 'Aplicativo BDM ',
                text: 'Disponível para uso em diversas plataformas. O App é simples, prático, intuitivo e está em pleno funcionamento.'
              }, {
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
        <Box className='p-5'>
          <svg className='rounded-[16px]' width="100%" height="434" aria-label="A chart.">
            <defs id="_ABSTRACT_RENDERER_ID_0">
              <clipPath id="_ABSTRACT_RENDERER_ID_1">
                <rect x="70" y="83" width="100%" height="268"></rect>
              </clipPath>
              <filter id="_ABSTRACT_RENDERER_ID_2">
                <feGaussianBlur in="SourceAlpha" stdDeviation="2"></feGaussianBlur>
                <feOffset dx="1" dy="1"></feOffset>
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.1"></feFuncA>
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <rect x="0" y="0" width="100%" height="434" stroke="none" strokeWidth="0" fill="#ffffff"></rect>
            <g>
              <text textAnchor="start" x="70" y="41.9" fontFamily="Arial" fontSize="14"
                fontWeight="bold" stroke="none" strokeWidth="0" fill="#333333">BDM X REAIS - MÉDIA
                MENSAL</text>
              <rect x="70" y="30" width="100%" height="14" stroke="none" strokeWidth="0" fillOpacity="0"
                fill="#ffffff"></rect>
            </g>
            <g>
              <rect x="70" y="53" width="148" height="14" stroke="none" strokeWidth="0" fillOpacity="0"
                fill="#ffffff"></rect>
              <g>
                <rect x="70" y="53" width="148" height="14" stroke="none" strokeWidth="0"
                  fillOpacity="0" fill="#ffffff"></rect>
                <g>
                  <text textAnchor="start" x="103" y="64.9" fontFamily="Arial" fontSize="14"
                    stroke="none" strokeWidth="0" fill="#fcb441">Cotação em Reais</text>
                </g>
                <path d="M70,60L98,60" stroke="#ff9900" strokeWidth="2" fillOpacity="1" fill="none"></path>
              </g>
            </g>
            <g>
              <rect x="70" y="83" width="100%" height="268" stroke="none" strokeWidth="0" fill="#ffffff"></rect>
              <g clipPath="url(https://app.dourado.cash/chartBDM2024.php#_ABSTRACT_RENDERER_ID_1)">
                <g>
                  <rect x="70" y="350" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                  <rect x="70" y="306" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                  <rect x="70" y="261" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                  <rect x="70" y="217" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                  <rect x="70" y="172" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                  <rect x="70" y="128" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                  <rect x="70" y="83" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#cccccc"></rect>
                </g>
                <g>
                  <rect x="70" y="350" width="100%" height="1" stroke="none" strokeWidth="0"
                    fill="#333333"></rect>
                </g>
                <g>
                  <path
                    d="M81.6140350877193,297.1L103.84210526315789,279.3L126.0701754385965,271.28999999999996L148.29824561403507,269.51L170.5263157894737,270.93399999999997L192.75438596491227,269.154L214.98245614035088,259.186L237.21052631578948,260.254L259.43859649122805,258.118L281.66666666666663,250.998L303.89473684210526,248.32799999999997L326.1228070175439,245.836L348.35087719298247,240.67399999999998L370.57894736842104,222.162L392.8070175438596,219.136L415.03508771929825,216.822L437.2631578947368,216.10999999999999L459.49122807017545,212.90599999999998L481.719298245614,210.236L503.9473684210526,208.278L526.1754385964912,207.744L548.4035087719299,206.498L570.6315789473683,204.36199999999997L592.859649122807,199.73399999999998L615.0877192982456,196.174L637.3157894736842,191.01199999999997L659.5438596491227,185.138L681.7719298245614,184.60399999999998L704,180.51L726.2280701754386,181.044L748.4561403508771,179.976L770.6842105263157,177.48399999999998L792.9122807017544,173.568L815.140350877193,171.60999999999999L837.3684210526316,170.364L859.5964912280701,169.82999999999998L881.8245614035087,152.742L904.0526315789474,151.674L926.280701754386,150.606L948.5087719298245,149.894L970.7368421052631,148.648L992.9649122807017,147.402L1015.1929824561403,146.33399999999997L1037.421052631579,145.79999999999998L1059.6491228070176,145.266L1081.877192982456,144.55399999999997L1104.1052631578948,143.842L1126.3333333333333,138.32399999999998L1148.561403508772,135.298L1170.7894736842104,134.23L1193.017543859649,133.16199999999998L1215.2456140350878,132.80599999999998L1237.4736842105262,131.38199999999998L1259.701754385965,130.67L1281.9298245614034,129.424L1304.157894736842,128.178L1326.3859649122808,119.81199999999998"
                    stroke="#ff9900" strokeWidth="2" fillOpacity="1" fill="none"></path>
                </g>
                <g>
                  <rect x="81.6140350877193" y="285.1" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="103.84210526315789" y="267.3" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="126.0701754385965" y="259.28999999999996" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="148.29824561403507" y="257.51" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="170.5263157894737" y="258.93399999999997" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="192.75438596491227" y="257.154" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="214.98245614035088" y="247.18599999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="237.21052631578948" y="248.25400000000002" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="259.43859649122805" y="246.118" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="281.66666666666663" y="238.998" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="303.89473684210526" y="236.32799999999997" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="326.1228070175439" y="233.836" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="348.35087719298247" y="228.67399999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="370.57894736842104" y="210.162" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="392.8070175438596" y="207.136" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="415.03508771929825" y="204.822" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="437.2631578947368" y="204.10999999999999" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="459.49122807017545" y="200.90599999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="481.719298245614" y="198.236" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="503.9473684210526" y="196.278" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="526.1754385964912" y="195.744" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="548.4035087719299" y="194.498" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="570.6315789473683" y="192.36199999999997" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="592.859649122807" y="187.73399999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="615.0877192982456" y="184.174" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="637.3157894736842" y="179.01199999999997" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="659.5438596491227" y="173.138" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="681.7719298245614" y="172.60399999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="704" y="168.51" width="1" height="12" stroke="none" strokeWidth="0"
                    fill="#999999"></rect>
                  <rect x="726.2280701754386" y="169.044" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="748.4561403508771" y="167.976" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="770.6842105263157" y="165.48399999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="792.9122807017544" y="161.568" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="815.140350877193" y="159.60999999999999" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="837.3684210526316" y="158.364" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="859.5964912280701" y="157.82999999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="881.8245614035087" y="140.742" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="904.0526315789474" y="139.674" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="926.280701754386" y="138.606" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="948.5087719298245" y="137.894" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="970.7368421052631" y="136.648" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="992.9649122807017" y="135.402" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="1015.1929824561403" y="134.33399999999997" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1037.421052631579" y="133.79999999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1059.6491228070176" y="133.266" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="1081.877192982456" y="132.55399999999997" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1104.1052631578948" y="131.842" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="1126.3333333333333" y="126.32399999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1148.561403508772" y="123.298" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="1170.7894736842104" y="122.22999999999999" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1193.017543859649" y="121.16199999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1215.2456140350878" y="120.80599999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1237.4736842105262" y="119.38199999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1259.701754385965" y="118.66999999999999" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                  <rect x="1281.9298245614034" y="117.424" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="1304.157894736842" y="116.178" width="1" height="12" stroke="none"
                    strokeWidth="0" fill="#999999"></rect>
                  <rect x="1326.3859649122808" y="107.81199999999998" width="1" height="12"
                    stroke="none" strokeWidth="0" fill="#999999"></rect>
                </g>
              </g>
              <g>
                <g>
                  <circle cx="1193.017543859649" cy="133.16199999999998" r="6.5" stroke="#ff9900"
                    strokeWidth="1" fill="#ffffff"></circle>
                  <circle cx="1193.017543859649" cy="133.16199999999998" r="4" stroke="none"
                    strokeWidth="0" fill="#ff9900"></circle>
                </g>
              </g>
              <g>
                <g>
                  <text textAnchor="end" x="83.3640350877193" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 83.3640350877193 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">01/02/20</text>
                </g>
                <g>
                  <text textAnchor="end" x="127.8201754385965" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 127.8201754385965 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">16/06/20</text>
                </g>
                <g>
                  <text textAnchor="end" x="172.2763157894737" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 172.2763157894737 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">05/08/20</text>
                </g>
                <g>
                  <text textAnchor="end" x="216.73245614035088" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 216.73245614035088 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">27/10/20</text>
                </g>
                <g>
                  <text textAnchor="end" x="261.18859649122805" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 261.18859649122805 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">09/12/20</text>
                </g>
                <g>
                  <text textAnchor="end" x="305.64473684210526" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 305.64473684210526 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">01/02/21</text>
                </g>
                <g>
                  <text textAnchor="end" x="350.10087719298247" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 350.10087719298247 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">04/04/21</text>
                </g>
                <g>
                  <text textAnchor="end" x="394.5570175438596" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 394.5570175438596 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">03/06/21</text>
                </g>
                <g>
                  <text textAnchor="end" x="439.0131578947368" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 439.0131578947368 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">05/08/21</text>
                </g>
                <g>
                  <text textAnchor="end" x="483.469298245614" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 483.469298245614 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">05/10/21</text>
                </g>
                <g>
                  <text textAnchor="end" x="527.9254385964912" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 527.9254385964912 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">06/12/21</text>
                </g>
                <g>
                  <text textAnchor="end" x="572.3815789473683" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 572.3815789473683 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">07/02/22</text>
                </g>
                <g>
                  <text textAnchor="end" x="616.8377192982456" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 616.8377192982456 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">04/04/22</text>
                </g>
                <g>
                  <text textAnchor="end" x="661.2938596491227" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 661.2938596491227 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">06/06/22</text>
                </g>
                <g>
                  <text textAnchor="end" x="705.75" y="365.0310889132455" fontFamily="Arial"
                    fontSize="10" transform="rotate(-30 705.75 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">03/08/22</text>
                </g>
                <g>
                  <text textAnchor="end" x="750.2061403508771" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 750.2061403508771 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">04/10/22</text>
                </g>
                <g>
                  <text textAnchor="end" x="794.6622807017544" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 794.6622807017544 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">02/12/22</text>
                </g>
                <g>
                  <text textAnchor="end" x="839.1184210526316" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 839.1184210526316 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">08/02/23</text>
                </g>
                <g>
                  <text textAnchor="end" x="883.5745614035087" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 883.5745614035087 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">19/04/23</text>
                </g>
                <g>
                  <text textAnchor="end" x="928.030701754386" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 928.030701754386 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">12/06/23</text>
                </g>
                <g>
                  <text textAnchor="end" x="972.4868421052631" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 972.4868421052631 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">08/08/23</text>
                </g>
                <g>
                  <text textAnchor="end" x="1016.9429824561403" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1016.9429824561403 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">12/11/23</text>
                </g>
                <g>
                  <text textAnchor="end" x="1061.3991228070176" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1061.3991228070176 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">12/01/24</text>
                </g>
                <g>
                  <text textAnchor="end" x="1105.8552631578948" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1105.8552631578948 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">04/03/24</text>
                </g>
                <g>
                  <text textAnchor="end" x="1150.311403508772" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1150.311403508772 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">19/05/24</text>
                </g>
                <g>
                  <text textAnchor="end" x="1194.767543859649" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1194.767543859649 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">04/07/24</text>
                </g>
                <g>
                  <text textAnchor="end" x="1239.2236842105262" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1239.2236842105262 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">21/09/24</text>
                </g>
                <g>
                  <text textAnchor="end" x="1283.6798245614034" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1283.6798245614034 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">04/11/24</text>
                </g>
                <g>
                  <text textAnchor="end" x="1328.1359649122808" y="365.0310889132455"
                    fontFamily="Arial" fontSize="10"
                    transform="rotate(-30 1328.1359649122808 365.0310889132455)" stroke="none"
                    strokeWidth="0" fill="#222222">27/02/25</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="354" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">0.0</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="309.5" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">2.5</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="265" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">5.0</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="220.5" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">7.5</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="176" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">10.0</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="131.5" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">12.5</text>
                </g>
                <g>
                  <text textAnchor="end" x="60" y="87" fontFamily="Arial" fontSize="10"
                    stroke="none" strokeWidth="0" fill="#444444">15.0</text>
                </g>
              </g>
              <g>
                <g>
                  <g>
                    <rect x="76.5" y="274.5" width="11" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="81.6140350877193" y="283.6"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">3</text>
                      <text textAnchor="middle" x="81.6140350877193" y="283.6"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">3</text>
                    </g>
                    <rect x="78.6140350877193" y="275.1" width="6" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="98.5" y="256.5" width="11" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="103.84210526315789" y="265.8"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">4</text>
                      <text textAnchor="middle" x="103.84210526315789" y="265.8"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">4</text>
                    </g>
                    <rect x="100.84210526315789" y="257.3" width="6" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="114.5" y="248.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="126.0701754385965" y="257.78999999999996"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">4.45</text>
                      <text textAnchor="middle" x="126.0701754385965" y="257.78999999999996"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">4.45</text>
                    </g>
                    <rect x="116.5701754385965" y="249.28999999999996" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="136.5" y="246.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="148.29824561403507" y="256.01"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">4.55</text>
                      <text textAnchor="middle" x="148.29824561403507" y="256.01"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">4.55</text>
                    </g>
                    <rect x="138.79824561403507" y="247.51" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="159.5" y="247.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="170.5263157894737" y="257.43399999999997"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">4.47</text>
                      <text textAnchor="middle" x="170.5263157894737" y="257.43399999999997"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">4.47</text>
                    </g>
                    <rect x="161.0263157894737" y="248.93399999999997" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="181.5" y="246.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="192.75438596491227" y="255.654"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">4.57</text>
                      <text textAnchor="middle" x="192.75438596491227" y="255.654"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">4.57</text>
                    </g>
                    <rect x="183.25438596491227" y="247.154" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="203.5" y="236.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="214.98245614035088" y="245.68599999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">5.13</text>
                      <text textAnchor="middle" x="214.98245614035088" y="245.68599999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">5.13</text>
                    </g>
                    <rect x="205.48245614035088" y="237.18599999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="225.5" y="237.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="237.21052631578948" y="246.75400000000002"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">5.07</text>
                      <text textAnchor="middle" x="237.21052631578948" y="246.75400000000002"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">5.07</text>
                    </g>
                    <rect x="227.71052631578948" y="238.25400000000002" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="247.5" y="235.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="259.43859649122805" y="244.618"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">5.19</text>
                      <text textAnchor="middle" x="259.43859649122805" y="244.618"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">5.19</text>
                    </g>
                    <rect x="249.93859649122805" y="236.118" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="270.5" y="227.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="281.66666666666663" y="237.498"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">5.59</text>
                      <text textAnchor="middle" x="281.66666666666663" y="237.498"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">5.59</text>
                    </g>
                    <rect x="272.16666666666663" y="228.998" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="292.5" y="225.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="303.89473684210526" y="234.82799999999997"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">5.74</text>
                      <text textAnchor="middle" x="303.89473684210526" y="234.82799999999997"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">5.74</text>
                    </g>
                    <rect x="294.39473684210526" y="226.32799999999997" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="314.5" y="222.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="326.1228070175439" y="232.336"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">5.88</text>
                      <text textAnchor="middle" x="326.1228070175439" y="232.336"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">5.88</text>
                    </g>
                    <rect x="316.6228070175439" y="223.836" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="336.5" y="217.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="348.35087719298247" y="227.17399999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">6.17</text>
                      <text textAnchor="middle" x="348.35087719298247" y="227.17399999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">6.17</text>
                    </g>
                    <rect x="338.85087719298247" y="218.67399999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="359.5" y="199.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="370.57894736842104" y="208.662"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.21</text>
                      <text textAnchor="middle" x="370.57894736842104" y="208.662"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.21</text>
                    </g>
                    <rect x="361.07894736842104" y="200.162" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="381.5" y="196.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="392.8070175438596" y="205.636"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.38</text>
                      <text textAnchor="middle" x="392.8070175438596" y="205.636"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.38</text>
                    </g>
                    <rect x="383.3070175438596" y="197.136" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="403.5" y="193.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="415.03508771929825" y="203.322"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.51</text>
                      <text textAnchor="middle" x="415.03508771929825" y="203.322"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.51</text>
                    </g>
                    <rect x="405.53508771929825" y="194.822" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="425.5" y="193.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="437.2631578947368" y="202.60999999999999"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.55</text>
                      <text textAnchor="middle" x="437.2631578947368" y="202.60999999999999"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.55</text>
                    </g>
                    <rect x="427.7631578947368" y="194.10999999999999" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="447.5" y="189.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="459.49122807017545" y="199.40599999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.73</text>
                      <text textAnchor="middle" x="459.49122807017545" y="199.40599999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.73</text>
                    </g>
                    <rect x="449.99122807017545" y="190.90599999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="470.5" y="187.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="481.719298245614" y="196.736"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.88</text>
                      <text textAnchor="middle" x="481.719298245614" y="196.736"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.88</text>
                    </g>
                    <rect x="472.219298245614" y="188.236" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="492.5" y="185.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="503.9473684210526" y="194.778"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">7.99</text>
                      <text textAnchor="middle" x="503.9473684210526" y="194.778"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">7.99</text>
                    </g>
                    <rect x="494.4473684210526" y="186.278" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="514.5" y="184.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="526.1754385964912" y="194.244"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">8.02</text>
                      <text textAnchor="middle" x="526.1754385964912" y="194.244"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">8.02</text>
                    </g>
                    <rect x="516.6754385964912" y="185.744" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="536.5" y="183.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="548.4035087719299" y="192.998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">8.09</text>
                      <text textAnchor="middle" x="548.4035087719299" y="192.998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">8.09</text>
                    </g>
                    <rect x="538.9035087719299" y="184.498" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="559.5" y="181.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="570.6315789473683" y="190.86199999999997"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">8.21</text>
                      <text textAnchor="middle" x="570.6315789473683" y="190.86199999999997"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">8.21</text>
                    </g>
                    <rect x="561.1315789473683" y="182.36199999999997" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="581.5" y="176.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="592.859649122807" y="186.23399999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">8.47</text>
                      <text textAnchor="middle" x="592.859649122807" y="186.23399999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">8.47</text>
                    </g>
                    <rect x="583.359649122807" y="177.73399999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="603.5" y="173.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="615.0877192982456" y="182.674"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">8.67</text>
                      <text textAnchor="middle" x="615.0877192982456" y="182.674"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">8.67</text>
                    </g>
                    <rect x="605.5877192982456" y="174.174" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="625.5" y="168.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="637.3157894736842" y="177.51199999999997"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">8.96</text>
                      <text textAnchor="middle" x="637.3157894736842" y="177.51199999999997"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">8.96</text>
                    </g>
                    <rect x="627.8157894736842" y="169.01199999999997" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="648.5" y="162.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="659.5438596491227" y="171.638"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">9.29</text>
                      <text textAnchor="middle" x="659.5438596491227" y="171.638"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">9.29</text>
                    </g>
                    <rect x="650.0438596491227" y="163.138" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="670.5" y="161.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="681.7719298245614" y="171.10399999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">9.32</text>
                      <text textAnchor="middle" x="681.7719298245614" y="171.10399999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">9.32</text>
                    </g>
                    <rect x="672.2719298245614" y="162.60399999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="692.5" y="157.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="704" y="167.01" fontFamily="Arial"
                        fontSize="10" stroke="#ffffff" strokeWidth="3" fill="#ff9900"
                        aria-hidden="true">9.55</text>
                      <text textAnchor="middle" x="704" y="167.01" fontFamily="Arial"
                        fontSize="10" stroke="none" strokeWidth="0" fill="#ff9900">9.55</text>
                    </g>
                    <rect x="694.5" y="158.51" width="19" height="10" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="714.5" y="158.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="726.2280701754386" y="167.544"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">9.52</text>
                      <text textAnchor="middle" x="726.2280701754386" y="167.544"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">9.52</text>
                    </g>
                    <rect x="716.7280701754386" y="159.044" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="736.5" y="156.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="748.4561403508771" y="166.476"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">9.58</text>
                      <text textAnchor="middle" x="748.4561403508771" y="166.476"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">9.58</text>
                    </g>
                    <rect x="738.9561403508771" y="157.976" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="759.5" y="154.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="770.6842105263157" y="163.98399999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">9.72</text>
                      <text textAnchor="middle" x="770.6842105263157" y="163.98399999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">9.72</text>
                    </g>
                    <rect x="761.1842105263157" y="155.48399999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="781.5" y="150.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="792.9122807017544" y="160.068"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">9.94</text>
                      <text textAnchor="middle" x="792.9122807017544" y="160.068"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">9.94</text>
                    </g>
                    <rect x="783.4122807017544" y="151.568" width="19" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="800.5" y="148.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="815.140350877193" y="158.10999999999999"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">10.05</text>
                      <text textAnchor="middle" x="815.140350877193" y="158.10999999999999"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">10.05</text>
                    </g>
                    <rect x="802.640350877193" y="149.60999999999999" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="822.5" y="147.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="837.3684210526316" y="156.864"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">10.12</text>
                      <text textAnchor="middle" x="837.3684210526316" y="156.864"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">10.12</text>
                    </g>
                    <rect x="824.8684210526316" y="148.364" width="25" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="845.5" y="146.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="859.5964912280701" y="156.32999999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">10.15</text>
                      <text textAnchor="middle" x="859.5964912280701" y="156.32999999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">10.15</text>
                    </g>
                    <rect x="847.0964912280701" y="147.82999999999998" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="867.5" y="129.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="881.8245614035087" y="139.242"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.11</text>
                      <text textAnchor="middle" x="881.8245614035087" y="139.242"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.11</text>
                    </g>
                    <rect x="869.8245614035087" y="130.742" width="24" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="890.5" y="128.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="904.0526315789474" y="138.174"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.17</text>
                      <text textAnchor="middle" x="904.0526315789474" y="138.174"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.17</text>
                    </g>
                    <rect x="892.0526315789474" y="129.674" width="24" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="912.5" y="127.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="926.280701754386" y="137.106"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.23</text>
                      <text textAnchor="middle" x="926.280701754386" y="137.106"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.23</text>
                    </g>
                    <rect x="914.280701754386" y="128.606" width="24" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="934.5" y="126.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="948.5087719298245" y="136.394"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.27</text>
                      <text textAnchor="middle" x="948.5087719298245" y="136.394"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.27</text>
                    </g>
                    <rect x="936.5087719298245" y="127.894" width="24" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="956.5" y="125.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="970.7368421052631" y="135.148"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.34</text>
                      <text textAnchor="middle" x="970.7368421052631" y="135.148"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.34</text>
                    </g>
                    <rect x="958.7368421052631" y="126.648" width="24" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="978.5" y="124.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="992.9649122807017" y="133.902"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.41</text>
                      <text textAnchor="middle" x="992.9649122807017" y="133.902"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.41</text>
                    </g>
                    <rect x="980.9649122807017" y="125.40199999999999" width="24" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1001.5" y="123.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1015.1929824561403" y="132.83399999999997"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.47</text>
                      <text textAnchor="middle" x="1015.1929824561403" y="132.83399999999997"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.47</text>
                    </g>
                    <rect x="1003.1929824561403" y="124.33399999999997" width="24" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1025.5" y="122.5" width="24" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1037.421052631579" y="132.29999999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.5</text>
                      <text textAnchor="middle" x="1037.421052631579" y="132.29999999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.5</text>
                    </g>
                    <rect x="1027.921052631579" y="123.79999999999998" width="19" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1045.5" y="122.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1059.6491228070176" y="131.766"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.53</text>
                      <text textAnchor="middle" x="1059.6491228070176" y="131.766"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.53</text>
                    </g>
                    <rect x="1047.6491228070176" y="123.26599999999999" width="24" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1067.5" y="121.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1081.877192982456" y="131.05399999999997"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.57</text>
                      <text textAnchor="middle" x="1081.877192982456" y="131.05399999999997"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.57</text>
                    </g>
                    <rect x="1069.877192982456" y="122.55399999999997" width="24" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1090.5" y="120.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1104.1052631578948" y="130.342"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.61</text>
                      <text textAnchor="middle" x="1104.1052631578948" y="130.342"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.61</text>
                    </g>
                    <rect x="1092.1052631578948" y="121.84200000000001" width="24" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1112.5" y="115.5" width="29" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1126.3333333333333" y="124.82399999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">11.92</text>
                      <text textAnchor="middle" x="1126.3333333333333" y="124.82399999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">11.92</text>
                    </g>
                    <rect x="1114.3333333333333" y="116.32399999999998" width="24" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1134.5" y="112.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1148.561403508772" y="121.798"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.09</text>
                      <text textAnchor="middle" x="1148.561403508772" y="121.798"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.09</text>
                    </g>
                    <rect x="1136.061403508772" y="113.298" width="25" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1156.5" y="111.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1170.7894736842104" y="120.72999999999999"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.15</text>
                      <text textAnchor="middle" x="1170.7894736842104" y="120.72999999999999"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.15</text>
                    </g>
                    <rect x="1158.2894736842104" y="112.22999999999999" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1178.5" y="110.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1193.017543859649" y="119.66199999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.21</text>
                      <text textAnchor="middle" x="1193.017543859649" y="119.66199999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.21</text>
                    </g>
                    <rect x="1180.517543859649" y="111.16199999999998" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1200.5" y="109.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1215.2456140350878" y="119.30599999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.23</text>
                      <text textAnchor="middle" x="1215.2456140350878" y="119.30599999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.23</text>
                    </g>
                    <rect x="1202.7456140350878" y="110.80599999999998" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1222.5" y="108.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1237.4736842105262" y="117.88199999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.31</text>
                      <text textAnchor="middle" x="1237.4736842105262" y="117.88199999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.31</text>
                    </g>
                    <rect x="1224.9736842105262" y="109.38199999999998" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1245.5" y="107.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1259.701754385965" y="117.16999999999999"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.35</text>
                      <text textAnchor="middle" x="1259.701754385965" y="117.16999999999999"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.35</text>
                    </g>
                    <rect x="1247.201754385965" y="108.66999999999999" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1267.5" y="106.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1281.9298245614034" y="115.924"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.42</text>
                      <text textAnchor="middle" x="1281.9298245614034" y="115.924"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.42</text>
                    </g>
                    <rect x="1269.4298245614034" y="107.424" width="25" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1289.5" y="105.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1304.157894736842" y="114.678"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.49</text>
                      <text textAnchor="middle" x="1304.157894736842" y="114.678"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.49</text>
                    </g>
                    <rect x="1291.657894736842" y="106.178" width="25" height="10" stroke="none"
                      strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="1311.5" y="96.5" width="30" height="12" stroke="none" strokeWidth="0"
                      fillOpacity="0" fill="#ffffff"></rect>
                    <g>
                      <text textAnchor="middle" x="1326.3859649122808" y="106.31199999999998"
                        fontFamily="Arial" fontSize="10" stroke="#ffffff" strokeWidth="3"
                        fill="#ff9900" aria-hidden="true">12.96</text>
                      <text textAnchor="middle" x="1326.3859649122808" y="106.31199999999998"
                        fontFamily="Arial" fontSize="10" stroke="none" strokeWidth="0"
                        fill="#ff9900">12.96</text>
                    </g>
                    <rect x="1313.8859649122808" y="97.81199999999998" width="25" height="10"
                      stroke="none" strokeWidth="0" fillOpacity="0" fill="#ffffff"></rect>
                  </g>
                </g>
              </g>
            </g>
            <g></g>
          </svg>
        </Box>
        <p className='w-full text-center mt-[4rem] mb-6'>Empresas e Parceiros que confiam na <b>BDM Digital</b></p>
        <Box className='p-5 overflow-auto flex items-center max-w-100
          [&::-webkit-scrollbar]:h-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-track]:ms-7
          [&::-webkit-scrollbar-track]:me-7
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-yellow-500
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:cursor-move
        '>
          {[
            'img/logo-rodape-bdmbank.png',
            'img/logo-rodape-bdmdigital.png',
            'img/logo-rodape-bkc-ceramica.png',
            'img/logo-rodape-dakila-pesquisas.png',
            'img/logo-rodape-ecossistema-dakila.png',
            'img/logo-rodape-kimberlito.png',
            'img/logo-rodape-kion.png',
            'img/logo-rodape-ratanaba.png',
            'img/logo-rodape-recanto-avalon.png',
            'img/logo-rodape-recanto-peabiru.png',
            'img/logo-rodape-ta-na-mao.png',
            'img/logo-rodape-universidade-dakila.png',
            'img/logo-rodape-zigurats-materiais-construcao.png',
            'img/logo-rodape-zigurats.png',
            'img/logo-rodape-ziguratur.png'
          ].map((logo, index) => (
            <LazyLoadImage key={index} src={logo} />
          ))}
        </Box>
      </Section>

      <SectionSwitcher 
        data={[
          {
            machineName: 'media',
            label: 'Media'
          },
          {
            machineName: 'faq',
            label: 'FAQ'
          }, {
            machineName: 'opnioes',
            label: 'Opniões'
          }
        ]}
        background='linear-gradient(180deg, #161516 54.74%, #777777 91.02%)' 
        title='<span><b>DBM Digital:</b></span>  <b>Sua Ponte para o Metaverso</b>' />
    </>
  );
}