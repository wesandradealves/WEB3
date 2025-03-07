"use client";

import { Container, Placeholder } from './styles';
import Props from './typo';
import { Text, Title } from './styles';
import Button from '../button/button';
import { useState, useEffect, useRef } from 'react';

const Hero = (Props: Props) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.load();
        }
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <Container className='w-full h-screen flex flex-col items-center justify-center relative overflow-hidden'>
      {!isVideoLoaded && Props.data.placeholder && (
        <Placeholder
          loading='lazy'
          src={Props.data.placeholder}
          alt={Props.data.title}
          className='opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0'
        />
      )}
      <video
        ref={videoRef}
        src={Props.data.media}
        className={`opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0 ${isVideoLoaded ? 'loaded' : ''}`}
        autoPlay
        loop
        muted
        onLoadedData={handleVideoLoad}
        preload="none"
      />
      <div className='container relative z-1 m-auto flex flex-col gap-16 items-center justify-center'>
        {Props.data.title && <Title className='text-center' dangerouslySetInnerHTML={{ __html: Props.data.title }} />}
        {Props.data.text && <Text className='text-center' dangerouslySetInnerHTML={{ __html: Props.data.text }} />}
        {Props.data.url && Props.data.btnLabel && <Button radius={999} tag="a" href={Props.data.url} className={`text-center ${Props.data.btnClass ?? ""}`}>{Props.data.btnLabel}</Button>}
      </div>
    </Container>
  );
};

export default Hero;