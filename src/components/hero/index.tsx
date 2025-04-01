"use client";

import { Container, Placeholder } from './styles';
import Props from './typo';
import { Text, Title } from './styles';
import Button from '../button/button';
import { useState, useEffect, useRef } from 'react';
import { MediaService } from '@/services/userService';

const Hero = (Props: Props) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [media, setMedia] = useState({
    backgroundimage: '',
    video: ''
  });

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

    const currentVideoRef = videoRef.current; // Copy the ref value to a local variable

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        if (Props.backgroundimage) {
          const backgroundimage = await MediaService(Props.backgroundimage);
          setMedia((prevMedia) => ({
            ...prevMedia,
            backgroundimage: backgroundimage.source_url,
          }));
        }
        if (Props.media) {
          const video = await MediaService(Props.media);
          setMedia((prevMedia) => ({
            ...prevMedia,
            video: video.source_url,
          }));
        }
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };
  
    fetchMedia();
  }, [Props.backgroundimage, Props.media]);

  return (
    <Container backgroundimage={media.backgroundimage} className='w-full pb-[205px] pt-[310px] flex flex-col items-center justify-center relative overflow-hidden'>
      {
        !media.backgroundimage && media.video && (
          <>
            {!isVideoLoaded && Props.placeholder && (
              <Placeholder
                loading='lazy'
                src={Props.placeholder}
                alt={Props.title}
                className='opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0'
              />
            )}
            <video
              ref={videoRef}
              src={media.video}
              className={`opacity-25 block w-full h-full object-cover absolute top-0 left-0 z-0 ${isVideoLoaded ? 'loaded' : ''}`}
              autoPlay
              loop
              muted
              onLoadedData={handleVideoLoad}
              preload="none"
            />
          </>
        )
      }
      <div className='container text-white relative z-1 m-auto flex flex-col gap-16 items-center justify-center'>
        {Props.title && <Title className='text-center text-3xl lg:text-6xl' dangerouslySetInnerHTML={{ __html: Props.title }} />}
        {Props.text && <Text className='text-center text-base lg:text-3xl' dangerouslySetInnerHTML={{ __html: Props.text }} />}
        {Props.btnLabel && Props.url && (<Button effect={Props.btnAnimation} radius={999} tag="a" href={Props.url} className={`${Props.btnClass}`}>{Props.btnLabel}</Button>)}
      </div>
    </Container>
  );
};

export default Hero;