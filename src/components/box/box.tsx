"use client";

import { Container } from './styles';
import { Props } from './typo';
import classNames from 'classnames';
export default function Box({ className, children, alignment, justify, wrap }: Props) {
  return (
    <Container 
      className={classNames(`box flex justify-${justify ?? 'between'} items-${alignment ?? 'center'} ${className}`, className, {
        'flex-wrap': wrap
      })}>
      {children}
    </Container>
  );
}