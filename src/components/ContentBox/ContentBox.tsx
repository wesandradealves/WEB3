import React from "react";
import classNames from 'classnames';

import { Props } from "./typo";
import { Container, Title, Text } from "./styles";
import Button from "../button/button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContentBox: React.FC<Props> = ({
  className,
  img,
  title,
  text,
  btnLabel,
  url,
  btnClass,
  btnAnimation,
  alignment,
  justify,
  wrap,
  reverse
}) => {
  return (
    <Container className={classNames(className)}>
      <div 
      className={classNames(`box container gap-10 flex flex-col lg:gap-20 justify-${justify ?? 'between'} items-${alignment ?? 'start'}`, {
        'flex-wrap': wrap,
        'lg:flex-row': !reverse,
        'lg:flex-row-reverse': reverse
      })}>
        {img && (<div className='flex-1'>
          <LazyLoadImage className='min-w-[100%] object-cover' src={img} />
        </div>)}

        <div className='flex-1 flex flex-col gap-10 leading-1'>
          {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
          {text && <Text dangerouslySetInnerHTML={{ __html: text }} />}
          {url && btnLabel && <Button effect={btnAnimation} radius={16} tag="a" href={url} className={`${btnClass}`}>{btnLabel}</Button>}
        </div>
      </div>
    </Container>
  );
};

export default ContentBox;