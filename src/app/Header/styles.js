import styled from 'styled-components';
import { color, mixin, font } from 'shared/utils/styles';

export const Container = styled.span`
  background: ${color.backgroundDarkPrimary};
  padding: 1rem 2%;
  display: flex;
  justify-content: space-between;
`;

export const ArrowButton = styled.button`
  padding: 0;
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
