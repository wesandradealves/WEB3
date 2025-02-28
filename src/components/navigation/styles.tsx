import styled, { css } from 'styled-components';
import { pxToRem } from "@/utils";

export interface Typo {
    gap?: number;
}

export const Container = styled.nav`
`;

export const ListItem = styled.li`
    font-weight: 700;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(24)};
`;

export const List = styled.ul<Typo>`
    ${({ gap }) => gap && css`
        gap: ${pxToRem(gap)};
    `}  
`;
      