import styled from 'styled-components';

export const StyledFeatureCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5.5rem; /* mt-6 */
  padding: 1.5rem; /* p-6 */
  background-color: transparent;
`;

export const VerticalLine = styled.div<{ lineColor: 'gold' | 'darkGold' }>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: 1.5rem;
  width: 4px; /* Largura da linha */
  background-color: ${({ lineColor }) =>
    lineColor === 'gold' ? '#FFD700' : '#FFFFFF'};
`;

