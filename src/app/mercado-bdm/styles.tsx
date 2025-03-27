import styled from 'styled-components';

export const Heading = styled.h3`
`;

export const Text = styled.p`
`;

export const Item = styled.li`
`;

export const Numbers = styled.ul`
    ${Item} {
        ${Heading} {
            span {
                color: inherit
            }
        }
    }
`;

export const BigTitle = styled.h4`
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;