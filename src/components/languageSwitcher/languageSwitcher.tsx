"use client";

import { Container, Item, Flag } from './styles';
import { Props, Data } from './typo';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
export default function LanguageSwitcher({ data, float, effect, className }: Props) {
  const [currentLang, setCurrentLang] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentLang(localStorage.getItem('lang'));
    }
  }, []);

  const handleLanguageChange = (code: string) => {
    localStorage.setItem('lang', code);
    setCurrentLang(code);
  };


  return (
    <Container 
      className={classNames('flex items-center gap-4', {
        'fixed bottom-0 p-12 right-0': float === 'on',
        [className || '']: className
      })}
    >
      {data && data.length && (
        data.map(function(item: Data, j: number){
          const isCurrentLang = currentLang === item.code;
          const shouldHide = float === 'on' && currentLang && !isCurrentLang;

          return (
            <Item 
              key={j}
              onClick={() => handleLanguageChange(item.code)}
              className={classNames('block cursor-pointer', {
                'current': isCurrentLang,
                'hidden': shouldHide,
              })}
            >
              <Flag 
              data-code={item.code} 
              title={item.title}
              onMouseEnter={() => setHoveredItem(j)}
              onMouseLeave={() => setHoveredItem(null)}
              className={classNames(`block relative fi fi-${item.code}`, {
                [`animate__animated animate__${effect}`]: effect && hoveredItem === j
              })}
              float={float} />
            </Item>
          );
        })
      )}
    </Container>
  );
}