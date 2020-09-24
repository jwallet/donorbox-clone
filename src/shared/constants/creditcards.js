import Amex from '../../assets/svgs/cc-amex.svg';
import DinersClub from '../../assets/svgs/cc-diners-club.svg';
import Discover from '../../assets/svgs/cc-discover.svg';
import Jcb from '../../assets/svgs/cc-jcb.svg';
import Mastercard from '../../assets/svgs/cc-mastercard.svg';
import Visa from '../../assets/svgs/cc-visa.svg';

export const CreditCardsEnum = {
  AMEX: 'amex',
  DINERSCLUB: 'diners',
  DISCOVER: 'discover',
  JCB: 'jcb',
  MASTERCARD: 'mastercard',
  VISA: 'visa',
};

export const CreditCardSvgs = {
  [CreditCardsEnum.AMEX]: Amex,
  [CreditCardsEnum.DINERSCLUB]: DinersClub,
  [CreditCardsEnum.DISCOVER]: Discover,
  [CreditCardsEnum.JCB]: Jcb,
  [CreditCardsEnum.MASTERCARD]: Mastercard,
  [CreditCardsEnum.VISA]: Visa,
};
