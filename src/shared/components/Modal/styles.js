import styled, { css } from 'styled-components';

import { mixin, zIndexValues } from 'shared/utils/styles';

export const ScrollOverlay = styled.div`
  z-index: ${zIndexValues.modal};
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  ${mixin.scrollableY}
`;

export const ClickableOverlay = styled.div`
  min-height: 100%;
  background: rgba(9, 30, 66, 0.54);
  ${(props) => clickOverlayStyles[props.variant]}
`;

const clickOverlayStyles = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
  `,
  aside: '',
};

export const StyledModal = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  background: #fff;
  ${(props) => modalStyles[props.variant]}
`;

const modalStyles = {
  center: css`
    max-width: ${(props) => props.width}px;
    vertical-align: middle;
    border-radius: 3px;
    ${mixin.boxShadowMedium}
  `,
  aside: css`
    min-height: 100vh;
    max-width: ${(props) => props.width}px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  `,
};
