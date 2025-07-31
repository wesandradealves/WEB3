"use client";

import classNames from 'classnames';
import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Props } from './typo';
import { MediaService } from '@/services/mediaService';
import { Container, SectionHeader, Subtitle, Title, Text, FilterGroup, FilterButton } from './styles';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const QuotationChart = (props: Props) => {
  const allData = {
    '1D': [
      { x: '01/07/2025', y: 12.20 },
      { x: '02/07/2025', y: 12.21 },
      { x: '03/07/2025', y: 12.40 },
      { x: '04/07/2025', y: 12.48 },
      { x: '05/07/2025', y: 13.01 },
      { x: '06/07/2025', y: 12.75 },
      { x: '07/07/2025', y: 12.94 },
      { x: '08/07/2025', y: 13.05 },
      { x: '09/07/2025', y: 13.21 },
    ],
    '5D': [...Array(5)].map((_, i) => ({ x: `0${i + 1}/11/2022`, y: Math.random() * 15 })),
    '1M': [...Array(30)].map((_, i) => ({ x: `${i + 1}/11/2022`, y: Math.random() * 15 })),
    '6M': [...Array(6)].map((_, i) => ({ x: `0${i + 1}/2023`, y: Math.random() * 15 })),
    '1A': [...Array(12)].map((_, i) => ({ x: `${i + 1}/2023`, y: Math.random() * 15 })),
    'Max': [
      { x: '01/2020', y: 3 },
      { x: '06/2020', y: 4 },
      { x: '01/2021', y: 5.19 },
      { x: '07/2021', y: 7.57 },
      { x: '01/2022', y: 8.27 },
      { x: '07/2022', y: 8.96 },
      { x: '01/2023', y: 9.94 },
      { x: '07/2023', y: 11.19 },
      { x: '01/2024', y: 11.64 },
      { x: '07/2024', y: 12.13 },
      { x: '02/2025', y: 12.93 },
    ],
  };


  const [period, setPeriod] = useState<'1D' | '5D' | '1M' | '6M' | '1A' | 'Max'>('Max');
  
  const [backgroundImageUrl, setBackgroundImageUrl] = useState<string | undefined>(undefined);

  const fetchBackgroundImage = useCallback(async () => {
    if (props.backgroundimage) {
      try {
        const bgImage = await MediaService(Number(props.backgroundimage));
        if (bgImage) setBackgroundImageUrl(bgImage?.source_url);
      } catch (error) {
        console.error("Error fetching background image:", error);
      }
    }
  }, [props.backgroundimage]);

  useEffect(() => {
    fetchBackgroundImage();
  }, [fetchBackgroundImage]);

  const data = allData[period];

  return (
    <Container
      id={props?.id}
      background={props?.background}
      backgroundcolor={props?.backgroundcolor}
      backgroundimage={backgroundImageUrl || ''}
      backgroundposition={props?.backgroundposition}
      backgroundsize={props?.backgroundsize}
      backgroundattachment={props?.backgroundattachment}
      className={classNames(`w-full section m-auto relative ${props?.classname}`, {
        'overflow-hidden': props?.opacity
      })}
    >
      <div className={classNames(
        `container flex-wrap text-lg lg:text-3xl leading-none relative z-10 m-auto flex`,
        `flex-${props?.direction ?? 'col'}`,
        `pt-[6rem] pb-[6rem]`,
        props?.gap?.toString().includes('px')
          ? `gap-[${props.gap}]`
          : `gap-${props.gap || 7}`,
      )}>
        {(props?.helper || props?.title || props?.subtitle) && (
          <SectionHeader className="flex flex-col justify-center items-center text-center w-full gap-7">
            {props?.title && (
              <span>
                {props?.title && (
                  <Title
                    barstitle={props?.barstitle?.toString()}
                    className={classNames(`text-center relative text-2xl lg:text-5xl`, {
                      'pt-2 pb-2 lg:ps-[150px] lg:pe-[150px]': !!props?.barstitle
                    })}
                    dangerouslySetInnerHTML={{ __html: props.title }}
                  />
                )}
              </span>
            )}
            {props?.subtitle && (
              <Subtitle
                className="text-center"
                dangerouslySetInnerHTML={{ __html: props.subtitle }}
              />
            )}
          </SectionHeader>
        )}

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <Image src="/img/br.png" alt="BR" width={24} height={24} className="w-6 h-6" />
            <span className="text-gray-800 font-semibold">BDM X REAIS</span>
          </div>
          <span className="text-sm text-gray-400">Atualizado há 10 min</span>
        </div>

        <div className="flex items-end justify-between mb-2">
          <div className="flex gap-2 items-center">
            <span className="text-3xl font-bold text-gray-900">R$ 12,93</span>
            <span className="text-green-600 font-semibold text-sm">▲ 0.47%</span>
          </div>
          <FilterGroup>
            {(['1D', '5D', '1M', '6M', '1A', 'Max'] as Array<'1D' | '5D' | '1M' | '6M' | '1A' | 'Max'>).map((p) => (
              <FilterButton
                key={p}
                className={p === period ? 'active' : ''}
                onClick={() => setPeriod(p)}
              >
                {p}
              </FilterButton>
            ))}
          </FilterGroup>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFB400" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FFB400" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="x" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} domain={[0, 16]} />
            <Tooltip
              formatter={(value: number) => [`R$ ${value.toFixed(2)}`, '1 BDM']}
              labelFormatter={(label: string) => `Data: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="y"
              stroke="#FFB400"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGold)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {props.children ? props.children : <>
          {props?.text && (
            <Text
              className="text-center relative text-md lg:text-lg xl:text-xl"
              dangerouslySetInnerHTML={{ __html: props.text }}
            />
          )}
        </>}
      </div>

      {props?.opacity && (
        <div className={classNames(
          `absolute z-1 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black`,
          `opacity-${props.opacity}`
        )} />
      )}
    </Container>
  );
};

export default QuotationChart;
