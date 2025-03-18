"use client";

import Section from "@/components/section/section";
import Box from "@/components/box/box";
import Card from "@/components/card/card";
import SocialNetworks from "@/components/socialNetworks/socialNetworks";
import { SocialWrapper } from "./style";
export default function SobreNos() {
    return (
        <>
            <Section
                backgroundattachment='fixed'
                className='pt-[117px]'
                backgroundimage='img/luz-lampada.png'
                title='<b>Sobre Nós</b>'
                barstitle="on">
                <p className='text-center xl:pt-[117px] pb-[30px]'>De Uma Moeda Social a uma <span><b>Revolução Global</b></span></p>
            </Section>
            <Section
                backgroundattachment='fixed'
                className='pt-[117px] pb-[117px]'
                backgroundimage='img/video-cidade-drone-1.png'
                title='Propósito que <b><span>Move</span></b>'>
                <Box className='p-6 flex-wrap gap-14 2xl:gap-[123px] flex-col lg:flex-row'>
                    <Card
                        className='flex-1'
                        image='img/insights.png'
                        title='Missão'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' />
                    <p className='text-center uppercase'>
                        O <b>BDM Digital</b> veio para<span><br /><b>romper paradigmas</b></span>
                    </p>
                    <Card
                        className='flex-1'
                        image='img/insights.png'
                        title='Valores'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' />
                </Box>
                <p className='text-center uppercase mt-[98px] mb-7'>
                    <span>Conecte-se</span> conosco
                </p>
                <Box className='p-6 flex-wrap w-full max-w-[1140px] m-auto gap-14 2xl:gap-[123px]'>
                    <Card
                        className='flex-1'
                        image='img/insights.png'
                        title='Endereço'
                        text='Escritório Central: R. Maracaju,<br/>1297 – Campo Grande/MS.' />
                    <SocialWrapper className='flex-1 text-center flex flex-col items-center justify-center'>
                        <SocialNetworks data={[
                            { title: 'Twitter', url: 'https://twitter.com' },
                            { title: 'Instagram', url: 'https://instagram.com' },
                            { title: 'Linkedin', url: 'https://linkedin.com' },
                            { title: 'Pinterest', url: 'https://pinterest.com' },
                        ]} />
                    </SocialWrapper>
                    <Card
                        className='flex-1'
                        image='img/insights.png'
                        title='Email'
                        text='<a href="mailto:comercial@bdm.digital">comercial@bdm.digital</a>' />
                </Box>
            </Section>
        </>
    );
}