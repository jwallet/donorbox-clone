import styled, { css } from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const StyledCheck = styled.div`
  position: relative;
  display: inline-block;
  height: 32px;
  width: 100%;
`;

export const Label = styled.label`
  padding-bottom: 5px;
  padding-left: 1.5rem;
  cursor: pointer;
  color: ${color.textMedium};
  ${font.medium}
  ${font.size(15)}
  &:hover,
  &:focus-within {
    color: ${color.textDarkest};
  }
  ${props =>
    props.invalid &&
    css`
      &,
      &:focus {
        color: ${color.danger};
      }
    `}
`;

export const CheckElement = styled.span`
  width: 1.2em;
  height: 1.2em;
  border: 2px solid ${props => {
    if (props.invalid) return color.danger;
    if (props.checked) return color.primary;
    return color.borderLightest;
  }};
  border-radius: 15%;
  position: absolute;
  left: 0;
  top: 1px;
  cursor: pointer;
  transition: background 0.1s;
  label:focus-within & {
    border-color: ${color.borderInputFocus};
  }
  ${props =>
    props.checked &&
    css`
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${color.primary};
      }
      &::after {
        content: '';
        position: absolute;
        width: 0.5em;
        height: 1.2em;
        top: 8px;
        right: 8px;
        border-width: 0 0.2em 0.2em 0;
        border-color: white;
        border-style: solid;
        transform: translate3d(0.3em,-60%,0) scale(.7) rotate(40deg) skewY(20deg);
      }
    `}
`;
