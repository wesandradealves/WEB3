'use client'; 

import styled from 'styled-components';

export const ChatButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: fixed;
  bottom: 2rem; /* Distância do fundo */
  right: 2rem; /* Distância da direita */
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #D79822; 
  color: white; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  z-index: 1000; /* Garante que fique acima de outros elementos */

  &:hover {
    background-color: var(--color-darkGold); /* Dourado mais escuro no hover */
    transform: scale(1.05);
  }

  /* Estilo do ícone de balão/X */
  svg {
    transition: transform 0.3s ease-in-out;
    /* Gira para 'X' quando aberto, ou permanece normal para balão */
    transform: rotate(${({ isOpen }) => (isOpen ? '45deg' : '0deg')});
  }

  /* Responsividade para mobile: botão menor */
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 1rem;
    right: 1rem;
    font-size: 1.5rem;
  }
`;

export const ChatContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: fixed;
  bottom: 90px; /* Acima do botão */
  right: 2rem;
  width: 350px; /* Largura padrão para desktop */
  height: 450px; /* Altura padrão para desktop */
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  transform: scale(${({ isOpen }) => (isOpen ? '1' : '0.7')});
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform-origin: bottom right; /* Animação a partir do canto inferior direito */
  z-index: 999; /* Abaixo do botão */

  /* Responsividade para mobile: container menor e mais próximo das bordas */
  @media (max-width: 768px) {
    width: 90vw; /* 90% da largura da viewport */
    max-width: 300px; /* Limita a largura máxima */
    height: 400px;
    bottom: 70px; /* Acima do botão menor */
    right: 1rem;
    left: auto; /* Garante que a posição da direita seja prioritária */
  }
`;
