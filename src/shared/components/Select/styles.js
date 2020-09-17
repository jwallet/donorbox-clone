import styled, { css } from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';

export const StyledSelect = styled.div`
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  &:hover,
  &:focus {
    ${font.black}
  }
  ${font.size(14)}
  ${(props) => props.variant === 'empty' && `display: inline-block;`}
  ${(props) =>
    props.variant === 'normal' &&
    css`
      width: 100%;
      border: 1px solid ${color.borderLightest};
      background: ${color.backgroundLightest};
      &:hover {
        background: ${color.backgroundLight};
      }
    `}
  &:focus {
    outline: none;
    ${(props) =>
      props.variant === 'normal' &&
      css`
        border: 1px solid ${color.borderInputFocus};
        box-shadow: 0 0 0 1px ${color.borderInputFocus};
        background: #fff;
      }
    `}
  }
  ${(props) =>
    props.invalid &&
    css`
      &,
      &:focus {
        border: 1px solid ${color.danger};
        box-shadow: none;
      }
    `}
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${(props) =>
    props.variant === 'normal' &&
    css`
      min-height: 32px;
      padding: 5px 5px 5px 10px;
    `}
`;

export const Placeholder = styled.div`
  color: ${color.textLight};
`;

export const Chevron = styled.span`
  position: relative;
  overflow: hidden;
  display: flex;
  flex: auto;
  justify-content: right;
  &::after {
    content: '';
    width: 1rem;
    height: 1rem;
    border: 2px solid ${color.textMedium};
    ${(props) =>
      props.isDropdownOpen
        ? css`
            border-right-width: 0;
            border-bottom-width: 0;
            transform: translate(-30%, 20%) rotate(45deg);
          `
        : css`
            border-top-width: 0;
            border-left-width: 0;
            transform: translate(-20%, -30%) rotate(45deg); ;
          `}
  }
`;

export const ValueMulti = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${(props) => props.variant === 'normal' && `padding-top: 5px;`}
`;

export const ValueMultiItem = styled.div`
  margin: 0 5px 5px 0;
  ${mixin.tag()}
`;

export const AddMore = styled.div`
  display: inline-block;
  margin-bottom: 3px;
  padding: 3px 0;
  ${font.size(12.5)}
  ${mixin.link()}
  i {
    margin-right: 3px;
    vertical-align: middle;
    font-size: 14px;
  }
`;

export const Dropdown = styled.div`
  z-index: ${zIndexValues.dropdown};
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
  background: #fff;
  ${mixin.boxShadowDropdown}
  ${(props) => (props.width ? `width: ${props.width}px;` : 'width: 100%;')}
`;

export const DropdownInput = styled.input`
  padding: 10px 14px 8px;
  width: 100%;
  border: none;
  color: ${color.textDarkest};
  background: none;
  &:focus {
    outline: none;
  }
`;

export const Options = styled.div`
  max-height: 200px;
  color: ${color.textMedium};
  ${mixin.scrollableY};
  ${mixin.customScrollbar()};
`;

export const Option = styled.div`
  padding: 8px 14px;
  word-break: break-word;
  cursor: pointer;
  &:hover {
    color: ${color.textDarkest};
  }
  &:last-of-type {
    margin-bottom: 8px;
  }
  &.jira-select-option-is-active {
    background: ${color.backgroundLightPrimary};
  }
`;

export const OptionsNoResults = styled.div`
  padding: 5px 15px 15px;
  color: ${color.textLight};
`;
