"use client";

import classNames from 'classnames';
import { Container, SectionHeader, Subtitle, Title, Helper, Text } from './styles';
import { Props } from './typo';
import { useEffect, useState } from 'react';
import { MediaService, MediaItem } from '@/services/userService';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Section = (Props: Props) => {
  const [processedProps, setProcessedProps] = useState<Props & { content?: number[], mediaUrls?: string[], backgroundImageUrl?: string }>({
    ...Props,
    mediaUrls: [],
    backgroundImageUrl: '',
  });

  useEffect(() => {
    const mediaKeys = Object.keys(Props).filter(
      (key) => key.startsWith("media_") && key.endsWith("_media")
    );

    mediaKeys.sort((a, b) => {
      const indexA = parseInt(a.split("_")[1], 10);
      const indexB = parseInt(b.split("_")[1], 10);
      return indexA - indexB;
    });

    const media = mediaKeys.map((key) => Props[key] as number);

    const fetchMediaUrls = async () => {
      try {
        const mediaItems: MediaItem[] = await Promise.all(
          media.map((id) => MediaService(id))
        );
        const mediaUrls = mediaItems.map((item) => item.source_url);

        setProcessedProps((prev) => ({
          ...prev,
          mediaUrls
        }));
      } catch (error) {
        console.error("Error fetching media URLs:", error);
      }
    };

    const fetchBackgroundImage = async () => {
      if (Props.backgroundimage) {
        try {
          const bgImage = await MediaService(Props.backgroundimage);
          setProcessedProps((prev) => ({
            ...prev,
            backgroundimage: bgImage.source_url
          }));
        } catch (error) {
          console.error("Error fetching background image:", error);
        }
      }
    };

    fetchBackgroundImage();

    fetchMediaUrls();
  }, [Props]);

  return (
    <Container
      id={Props?.id}
      background={Props?.background}
      backgroundcolor={Props?.backgroundcolor}
      backgroundimage={processedProps.backgroundimage}
      backgroundposition={Props?.backgroundposition}
      backgroundsize={Props?.backgroundsize}
      backgroundattachment={Props?.backgroundattachment}
      className={classNames(`w-full m-auto relative ${Props?.classname}`, {
        'overflow-hidden': Props?.opacity
      })}
    >
      <div className={`container flex-wrap text-lg lg:text-3xl leading-none relative z-10 m-auto flex flex-${Props?.direction ?? 'col'} pt-[6rem] pb-[6rem] gap-${Props?.gap || 7}`}>
        {(Props?.helper || Props?.title || Props?.subtitle) && (
          <SectionHeader className='flex flex-col justify-center items-center text-center w-full gap-7'>

            {(Props?.helper || Props?.title) && (
              <span>
                {Props?.helper && <Helper className='text-center uppercase' dangerouslySetInnerHTML={{ __html: Props?.helper }} />}
                {Props?.title && (
                  <Title
                    barstitle={Props?.barstitle}
                    className={classNames(`text-center relative text-3xl lg:text-5xl`, {
                      'pt-2 pb-2 ps-[150px] pe-[150px]': !!Props?.barstitle
                    })}
                    dangerouslySetInnerHTML={{ __html: Props?.title }}
                  />
                )}
              </span>
            )}

            {Props?.subtitle && <Subtitle className='text-center' dangerouslySetInnerHTML={{ __html: Props?.subtitle }} />}
          </SectionHeader>
        )}

        {processedProps?.mediaUrls && processedProps.mediaUrls.length > 0 && (
          <div className="flex flex-wrap justify-between">
            {processedProps.mediaUrls.map((url: string, index: number) => (
                <div key={index} className='flex-1 flex justify-center items-center flex-wrap'>
                  <LazyLoadImage  src={url} alt={`Media ${index + 1}`} />
                </div>
            ))}
          </div>
        )}

        {Props?.text && (
          <Text
            className={classNames(`text-center relative text-md lg:text-lg xl:text-xl`)}
            dangerouslySetInnerHTML={{ __html: Props?.text }}
          />
        )}
      </div>

      {Props?.opacity && (
        <div className={`absolute z-1 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black opacity-${Props?.opacity}`}></div>
      )}
    </Container>
  );
};

export default Section;
