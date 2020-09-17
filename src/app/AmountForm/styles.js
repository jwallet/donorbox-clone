import styled from 'styled-components';
import { color, font } from 'shared/utils/styles';

export const Donation = styled.span`
  display: inline-block;
  position: relative;
  margin-left: 1.5rem;
  opacity: 0.7;
  width: calc(100% - 3rem);
  &:hover,
  &:focus {
    opacity: 1;
  }
  ${(props) => props.active && `opacity: 1;`}
`;

export const StyledDevice = styled.span`
  position: absolute;
  display: inline-block;
  left: 0;
`;

export const Device = styled.span`
  color: ${(props) => (props.invalid ? color.danger : color.textMedium)};
  ${font.size(15)}
  position: absolute;
  top: 0;
  right: 3px;
  line-height: 10px;
`;

export const Amount = styled.span`
  ${font.black}
  ${font.size(24)}
`;

export const Description = styled.span`
  color: ${color.textDarkest};
  ${font.medium}
  ${font.size(13)}
    line-height: 18px;
  display: block;
`;
