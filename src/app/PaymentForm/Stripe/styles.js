import { color, font } from 'shared/utils/styles';
import styled, { css } from 'styled-components';

/* 
The StripeElement class is applied to the Element container by default.
More info: https://stripe.com/docs/stripe-js/reference#element-options
*/
export const StyledStripeElement = styled.div`
  height: 100%;
  ${css`
    .StripeElement,
    .StripeElementIdeal,
    .StripeElementFpx {
      height: 100%;
      width: 100%;
      padding: 0 7px;
      border-radius: 3px;
      border: 1px solid ${color.borderLightest};
      color: ${color.textDark};
      background: ${color.backgroundLightest};
      transition: background 0.1s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      ${font.regular}
      ${font.size(15)}
      
      ${(props) =>
        props.invalid &&
        css`
          &,
          &:focus {
            border: 1px solid ${color.danger};
            box-shadow: none;
          }
        `}
    }

    .StripeElement--focus,
    .StripeElementIdeal--focus,
    .StripeElementFpx--focus {
      ${font.black}
      background: #fff;
      border: 1px solid ${color.borderInputFocus};
      box-shadow: 0 0 0 1px ${color.borderInputFocus};
    }

    .StripeElement.loading {
      height: 41.6px;
      opacity: 0.6;
    }

    .StripeElementIdeal,
    .StripeElementFpx {
      padding: 0;
    }
  `}
`;

export const StyledStripeError = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  border: 1px solid red;
  border-radius: 4px;
  padding: 2px 10px 10px;
  background-color: #fef;
`;

export const StyledCard = styled.span`
  width: 40px;
  color: ${color.textMedium};
`;

export const CreditCards = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  div {
    display: flex;
    width: 400px;
    justify-content: space-around;
    min-width: 300px;
  }
`;
