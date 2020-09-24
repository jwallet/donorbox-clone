import styled, { css } from 'styled-components';
import { color, mixin, font } from 'shared/utils/styles';

export const Container = styled.span`
  background: ${color.backgroundDarkPrimary};
  padding: 1rem 2%;
  display: flex;
  justify-content: space-between;
`;

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

const arrowButtonStyle = css`
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  background-color: ${color.backgroundDarkPrimary};
  &:not(:disabled):hover::after,
  &:not(:disabled):hover::before {
    border-color: white;
  }
  &:not(:disabled):hover {
    background-color: ${mixin.lighten(color.backgroundDarkPrimary, 0.15)};
  }
  &:disabled {
    cursor: default;
  }
  &:disabled::after,
  &:disabled::before {
    border-color: transparent;
  }
`;

export const Back = styled.button`
  ${arrowStyle}
  ${arrowButtonStyle}
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

export const Forward = styled.button`
  ${arrowStyle}
  ${arrowButtonStyle}
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

export const Heading = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  ${font.medium}
  ${font.size(20)}
  color: ${color.backgroundLightPrimary};
  text-align: center;
`;
