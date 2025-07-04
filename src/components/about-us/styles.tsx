import styled from 'styled-components';

export const StyledFeatureCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem; /* p-6 */
  background-color: transparent;
`;

export const VerticalLine = styled.div<{ lineColor: 'gold' | 'darkGold' }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px; /* Largura da linha */
  background-color: ${({ lineColor }) =>
    lineColor === 'gold' ? 'var(--color-gold)' : 'var(--color-darkGold)'};
`;

