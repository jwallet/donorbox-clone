import styled, { css } from 'styled-components';
import { color } from 'shared/utils/styles';

export const Container = styled.div`
  background-color: ${color.backgroundDarkPrimary};
  display: flex;
  justify-content: center;
  padding: 2px 0;
`;

export const SubMenu = styled.button`
  background: none;
  flex: auto;
  padding: 1rem;
  color: ${color.backgroundLightPrimary};
  fill: ${color.backgroundLightPrimary};
  cursor: pointer;
  border-bottom: 4px solid transparent;
  font-variant: all-small-caps;
  opacity: 0.8;
  &:not(:disabled) {
    ${(props) =>
      props.active &&
      css`
        background: ${color.backgroundDarkPrimary} !important;
        cursor: initial;
        color: white;
        fill: white;
        border-color: white;
        opacity: 1;
      `}
  }
`;

export const StyledSvg = styled.div`
  margin: auto;
`;
