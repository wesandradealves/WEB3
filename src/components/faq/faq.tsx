"use client";

import { useState } from 'react';
import { Container, FaqItem, Question, Answer, ArrowIcon } from './styles';
import { Props } from './typo';

export default function Faq({}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Container className={`w-full`}>
      <div className="container p-0 m-auto grid grid-cols-1 md:grid-cols-2 gap-6 auto-cols-auto">
        {[
          {
            question: "O que é o BDM Digital??",
            answer: "BDM Digital (Bônus Dourado Mercantil Digital) é um dinheiro digital que só pode ser transacionado dentro do aplicativo blockchain BDM Digital. Com ele é possível realizar compras e valorizar!"
          },
          {
            question: "Existe tarifa?",
            answer: "Instalar o APP é sem custo, não existe mensalidade nem anuidades, muito menos taxa de adesão. Para transferências entre contas BDM é cobrado 0,01 BDM, independente dos valores transferidos. Para a venda de BDM DIGITAL, existe um deságio de 10% em cima do valor solicitado, que corresponde exatamente com a cotação de venda. Tudo isso já é calculado pelo aplicativo."
          },
        ].map((item, index) => (
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