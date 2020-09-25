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
  height: auto;
  align-self: center;
  border: none;
  position: relative;
  background-color: ${color.backgroundDarkPrimary};
  &:not(:disabled) {
    color: white;
    ${font.size(20)}
    &:hover {
      cursor: pointer;
      border-radius: ${(props) => (props.isText ? 4 : 50)}%;
      background-color: ${mixin.lighten(color.backgroundDarkPrimary, 0.15)};
      box-shadow: ${(props) =>
        props.isText ? `0 0 0 10px ${mixin.lighten(color.backgroundDarkPrimary, 0.15)}` : 'none'};
    }
  }
  &:disabled {
    & > ::after,
    & > ::before {
      border-color: ${color.backgroundLightPrimary};
    }
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
