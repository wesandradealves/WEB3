"use client";

import { useState } from 'react';
import { Container, FaqItem, Question, Answer } from './styles';
import { Props } from './typo';
import classNames from 'classnames';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function Faq({ data = [
  {
    question: "O que é o BDM Digital??",
    answer: "BDM Digital (Bônus Dourado Mercantil Digital) é um dinheiro digital que só pode ser transacionado dentro do aplicativo blockchain BDM Digital. Com ele é possível realizar compras e valorizar!"
  },
  {
    question: "Existe tarifa?",
    answer: "Instalar o APP é sem custo, não existe mensalidade nem anuidades, muito menos taxa de adesão. Para transferências entre contas BDM é cobrado 0,01 BDM, independente dos valores transferidos. Para a venda de BDM DIGITAL, existe um deságio de 10% em cima do valor solicitado, que corresponde exatamente com a cotação de venda. Tudo isso já é calculado pelo aplicativo."
  },
] as { question: string; answer: string }[], className }: Props) {
  const [expandedItems, setExpandedItems] = useState<{ [key: number]: boolean }>({});

  const toggleItem = (index: number) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <Container className={`w-full items-start grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-auto ${className}`}>
        {data.map((item, index) => (
          <FaqItem
            key={index}
            className={classNames('p-6', {
              'active': expandedItems[index]
            })}
            onClick={() => toggleItem(index)}
          >
            <Question className="flex font-bold justify-between items-center gap-4">{item.question} {
              expandedItems[index] ? <FaAngleUp className='icon ms-auto pointer-events-auto -ms-5 cursor-pointer' /> : <FaAngleDown className='icon ms-auto pointer-events-auto -ms-5 cursor-pointer' />
            }</Question>
            <Answer
              className={classNames('mt-4 cursor-pointer overflow-auto', {
                'block': expandedItems[index],
                'hidden': !expandedItems[index],
              })}>
              {item.answer}
            </Answer>
          </FaqItem>
        ))}
    </Container>
  );
}