import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const StyledField = styled.div`
  flex: 1;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const StyledFieldInline = styled.div`
  display: flex;
`;

export const StyledForm = styled.div`
  margin: 0 10px;
`;

export const FieldLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  color: ${color.textMedium};
  ${font.medium}
  ${font.size(15)}
`;

export const FieldTip = styled.div`
  padding-top: 6px;
  color: ${color.textMedium};
  ${font.size(13)}
`;

export const FieldError = styled.div`
  margin-top: 6px;
  line-height: 1;
  color: ${color.danger};
  ${font.medium}
  ${font.size(13)}
`;
