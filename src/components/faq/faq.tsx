"use client";

import { useState } from 'react';
import { Container, FaqItem, Question, Answer, ArrowIcon } from './styles';
import { Props } from './typo';

export default function FAQ({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className="w-full">
      <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <FaqItem 
            key={index}
            className={`p-6 ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleItem(index)}
          >
            <div className="flex justify-between items-start gap-4">
              <Question className="flex-1">{item.question}</Question>
              <ArrowIcon $isOpen={openIndex === index} />
            </div>
            
            <Answer $isOpen={openIndex === index}>
              <div className="pt-4">{item.answer}</div>
            </Answer>
          </FaqItem>
        ))}
      </div>
    </Container>
  );
}