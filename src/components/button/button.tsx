"use client";

import { Container } from './styles';
import { Props } from './typo';

export default function Button({ href, className, tag: Tag = 'button', children }: Props) {
  return (
    <Container href={href} className={`button ${className ?? ''}`} as={Tag}>
      {children}
    </Container>
  );
}

