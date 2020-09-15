import styled, { css } from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Container = styled.ul`
    position: relative;
`;

export const Option = styled.li`
    position: relative;
    padding: 12px 0;
    ${css`
        &:not(:last-child) {
            border-bottom: dotted thin ${color.borderLight};
        }
    `}
`;

export const Circle = styled.span`
    border: 2px solid ${props => props.active ? color.primary : color.backgroundMedium};
    background-color: ${props => props.active ? color.primary : 'white'};
    left: 0;
    top: 15px;
    width: 0.9rem;
    height: 0.9rem;
    transition-duration: .14s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    position: absolute;
    cursor: pointer;
    border-radius: 50%;
    ${css`
        label:focus-within & {
            border-color: ${color.borderInputFocus};
        }
    `}
`

export const Label = styled.label`
    width: 100%;
    line-height: 15px;
    ${font.size(12)}
    padding-left: 1.5rem;
    color: ${color.textDark};
    cursor: pointer;
    &:hover,
    &:focus {
      ${font.black}
    }
`;