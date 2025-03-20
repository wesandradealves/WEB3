"use client";

import classNames from 'classnames';
import { Container, SectionHeader, Subtitle, Title, Helper } from './styles';
import { Props } from './typo';

export default function Section({ barstitle, direction, helper, children, backgroundimage, title, subtitle, className, id, background, backgroundcolor, backgroundattachment, backgroundposition, backgroundsize }: Props) {
  return (
    <Container 
        id={id}
        background={background}
        backgroundcolor={backgroundcolor}
        backgroundimage={backgroundimage}
        backgroundposition={backgroundposition}
        backgroundsize={backgroundsize}
        backgroundattachment={backgroundattachment}
        className={`w-full m-auto overflow-hidden relative ${ className }`}>
        <div className={`container relative m-auto flex flex-${direction ?? 'col'} pt-[6rem] pb-[6rem] gap-7`}>
            <SectionHeader className='flex flex-col justify-center items-center text-center w-full gap-7'>
                {(helper || title) && (<span>
                  {helper && <Helper className='text-center' dangerouslySetInnerHTML={{ __html: helper }} />}
                  {title && <Title barstitle={barstitle} 

                  className={classNames(`text-center relative`, { 'pt-2 pb-2 ps-[150px] pe-[150px]': !!barstitle })}
                  dangerouslySetInnerHTML={{ __html: title }} />}
                </span>)}
                {subtitle && <Subtitle className='text-center' dangerouslySetInnerHTML={{ __html: subtitle }} />}
            </SectionHeader>
            {children}
        </div>
    </Container>
  );
}

