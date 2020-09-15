import styled, { css } from 'styled-components';

import { color, mixin } from 'shared/utils/styles';

export const Container = styled.span`
  display: flex;
  margin: auto;
`;

export const Spacer = styled.span`
  width: 1rem;
`;

export const Item = styled.span`
  position: relative;
  height: 1rem;
  width: 1rem;
  flex-direction: row;
  ${css`
    &::before {
      content: '';
      border-radius: 50%;
      border: 2px solid ${color.backgroundLightPrimary};
      ${props => `
        background-color: ${props.active ? color.backgroundLightPrimary : ''};
      `}
      ${mixin.cover}
    }
  `}
`;