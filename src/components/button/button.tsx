"use client";

import { Container } from './styles';
import { Props } from './typo';

export default function Button({ href, radius, className, tag: Tag = 'button', children }: Props) {
  return (
    <Container radius={radius} href={href} className={`button ${className ?? ''}`} as={Tag}>
      {children}
    </Container>
  );
}

