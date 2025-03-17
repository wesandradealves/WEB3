"use client";

import { Container } from './styles';
import { Props } from './typo';
import { Title, Text } from './styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Card({ className, title, text, image, gap }: Props) {
  return (
    <Container className={`card flex flex-col gap-${gap ?? 3 } ${className}`}>
      {image && (
        <LazyLoadImage className='max-w-[100%] me-auto ' alt={title} src={image} />
      )}
      {title && (
        <Title dangerouslySetInnerHTML={{ __html: title }} />
      )}
      {text && (
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      )}
    </Container>
  );
}