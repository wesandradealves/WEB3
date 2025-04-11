"use client";

import { useState } from 'react';
import { Container, FaqItem, Question, Answer } from './styles';
import classNames from 'classnames';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { ContentItem } from '@/services/ContentService';

const Faq = ({ data, classname }: { data: ContentItem[]; classname?: string }) => {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <Container className={`w-full items-start grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-auto ${classname}`}>
        {data && (data.map((item, index) => (
          <FaqItem
            key={index}
            className={classNames('p-6 rounded-[12px]', {
              'active': expandedItems[index]
            })}
            onClick={() => toggleItem(index)}
          >
            <Question className="flex text-lg xl:text-xl font-bold justify-between items-center gap-4 text-stone-900">{item.title.rendered} {
              expandedItems[index] ? <FaAngleUp className='icon ms-auto pointer-events-auto -ms-5 cursor-pointer' /> : <FaAngleDown className='icon ms-auto pointer-events-auto -ms-5 cursor-pointer' />
            }</Question>
            <Answer
              dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              className={classNames('mt-4 cursor-pointer overflow-auto text-base xl:text-lg', {
                'block': expandedItems[index],
                'hidden': !expandedItems[index],
              })} />
          </FaqItem>
        )))}
    </Container>
  );
}

Faq.expectsArrayData = true;
export default Faq;