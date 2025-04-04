"use client";

import classNames from 'classnames';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, SectionHeader, Subtitle, Title } from '../section/styles';
import { Props } from '../section/typo';
import { MediaService, MediaItem } from '@/services/userService';

const Mediascroll = (props: Props) => {
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);

  const mediaKeys = useMemo(() => {
    return Object.keys(props)
      .filter(key => key.startsWith("media_") && key.endsWith("_media"))
      .sort((a, b) => {
        const indexA = parseInt(a.split("_")[1], 10);
        const indexB = parseInt(b.split("_")[1], 10);
        return indexA - indexB;
      });
  }, [props]);

  const media = useMemo(() => mediaKeys.map(key => props[key] as number), [mediaKeys, props]);

  const fetchMediaUrls = useCallback(async () => {
    try {
      const mediaItems: MediaItem[] = await Promise.all(media.map(id => MediaService(id)));
      setMediaUrls(mediaItems.map(item => item.source_url));
    } catch (error) {
      console.error("Error fetching media URLs:", error);
    }
  }, [media]);

  useEffect(() => {
    fetchMediaUrls();
  }, [fetchMediaUrls]);

  return (
    <Container id={props?.id} className={classNames(`w-full m-auto relative ${props?.classname}`)}>
      <div className="container flex-wrap text-lg lg:text-3xl leading-none relative z-10 m-auto flex flex-col pb-[6rem] gap-7">
        {(props?.helper || props?.title || props?.subtitle) && (
          <SectionHeader className="flex flex-col justify-center items-center text-center w-full gap-7">
            {(props?.helper || props?.title) && (
              <span>
                {/* Helper can be included here if needed */}
                {props?.title && (
                  <Title
                    barstitle={props?.barstitle}
                    className={classNames(`text-center relative text-3xl lg:text-5xl`, {
                      'pt-2 pb-2 ps-[150px] pe-[150px]': !!props?.barstitle,
                    })}
                    dangerouslySetInnerHTML={{ __html: props?.title }}
                  />
                )}
              </span>
            )}

            {props?.subtitle && (
              <Subtitle className="text-center" dangerouslySetInnerHTML={{ __html: props?.subtitle }} />
            )}
          </SectionHeader>
        )}

        {mediaUrls.length > 0 && (
          <div>
            {mediaUrls.map((url, index) => (
              <div key={index} className="flex-1 flex justify-center items-center flex-wrap">
                <LazyLoadImage src={url} alt={`Media ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default Mediascroll;
