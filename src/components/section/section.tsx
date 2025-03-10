"use client";

import { Container, SectionHeader, Subtitle, Title } from './styles';
import { Props } from './typo';

export default function Section({ barstitle, children, title, subtitle, className, id, background, backgroundcolor }: Props) {
  return (
    <Container 
        id={id ?? ""}
        background={background ?? ""}
        backgroundcolor={backgroundcolor ?? ""}
        className={`w-full m-auto overflow-hidden relative ${ className ?? "" }`}>
        <div className='container relative m-auto flex flex-col pt-11 pb-11 gap-7'>
            {barstitle}
            <SectionHeader className='flex flex-col justify-center items-center text-center w-full gap-7'>
                {title && <Title barstitle={barstitle} className='text-center' dangerouslySetInnerHTML={{ __html: title }} />}
                {subtitle && <Subtitle className='text-center' dangerouslySetInnerHTML={{ __html: subtitle }} />}
            </SectionHeader>
            {children}
        </div>
    </Container>
  );
}

