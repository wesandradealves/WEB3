"use client";

import { Container } from './styles';
import Props from './typo';
import { Text, Title } from './styles';
import Button from '../button/button';
const Hero = (Props: Props) => {
  return (
       <Container className='w-full h-screen flex flex-col items-center justify-center relative overflow-hidden'>
        <video src={Props.data.media} className='opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0' autoPlay loop muted />
        <div className='container relative z-1 m-auto flex flex-col gap-16 items-center justify-center'>
          {Props.data.title && <Title className='text-center' dangerouslySetInnerHTML={{__html: Props.data.title}} />}
          {Props.data.text && <Text className='text-center' dangerouslySetInnerHTML={{__html: Props.data.text}} />}
          {Props.data.url && Props.data.btnLabel && <Button radius={999} tag="a" href={Props.data.url} className={`text-center ${Props.data.btnClass ?? ""}`}>{Props.data.btnLabel}</Button>}
        </div>
      </Container>
  );
};

export default Hero;