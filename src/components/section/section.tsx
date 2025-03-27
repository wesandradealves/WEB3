"use client";

import classNames from 'classnames';
import { Container, SectionHeader, Subtitle, Title, Helper } from './styles';
import { Props } from './typo';

export default function Section({ barstitle, gap, direction, helper, children, opacity, backgroundimage, title, subtitle, className, id, background, backgroundcolor, backgroundattachment, backgroundposition, backgroundsize }: Props) {
  return (
    <Container
      id={id}
      background={background}
      backgroundcolor={backgroundcolor}
      backgroundimage={backgroundimage}
      backgroundposition={backgroundposition}
      backgroundsize={backgroundsize}
      backgroundattachment={backgroundattachment}
      className={classNames(`w-full m-auto overflow-hidden relative ${className}`, {
        'overflow-hidden': opacity
      })}
    >
      <div className={`container relative z-10 m-auto flex flex-${direction ?? 'col'} pt-[6rem] pb-[6rem] gap-${gap || 7}`}>
        {(helper || title || subtitle) && (<SectionHeader className='flex flex-col justify-center items-center text-center w-full gap-7'>
          
          {(helper || title) && (<span>
            {helper && <Helper className='text-center' dangerouslySetInnerHTML={{ __html: helper }} />}

            {title && <Title barstitle={barstitle}
              className={classNames(`text-center relative`, { 'pt-2 pb-2 ps-[150px] pe-[150px]': !!barstitle })}
              dangerouslySetInnerHTML={{ __html: title }} />}
          </span>)}

          {subtitle && <Subtitle className='text-center' dangerouslySetInnerHTML={{ __html: subtitle }} />}

        </SectionHeader>)}
        
        {children}
      </div>

      {opacity && (
        <div className={`absolute z-1 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-${opacity}`}></div>
      )}
    </Container>
  );
}

