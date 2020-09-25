import { mixin } from 'shared/utils/styles';
import styled, { css } from 'styled-components';

const arrowStyle = css`
  overflow: hidden;
  width: 3rem;
  height: 3rem;
  transition: transform 125ms linear;
  &::before {
    content: '';
    width: 2rem;
    height: 0;
    ${mixin.cover}
    top: calc(50% - 2px);
    border-top: 4px solid white;
  }
  &::after {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    border: 4px solid white;
    transform: rotate(45deg) translate3d(70%, 0, 0);
    ${mixin.cover}
  }
`;

export const ForwardIcon = styled.div`
  ${arrowStyle}
  ${css`
    &::after {
      border-left: initial;
      border-bottom: initial;
    }
    &::before {
      transform: translate(20%);
    }
  `}
`;

export const BackIcon = styled.div`
  ${arrowStyle}
  ${css`
    &::after {
      border-top: initial;
      border-right: initial;
    }
    &::before {
      transform: translate(30%);
    }
  `}
`;

export const StyledForwardIcon = styled.span`
  margin-left: 1rem;
  position: relative;
`;
