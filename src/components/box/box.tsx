"use client";

import { Container } from './styles';
import { Props } from './typo';

export default function Box({ className, children, alignment }: Props) {
  return (
    <Container className={`box flex flex-wrap justify-between items-${alignment ?? 'center'} ${className}`}>
      {children}
    </Container>
  );
}