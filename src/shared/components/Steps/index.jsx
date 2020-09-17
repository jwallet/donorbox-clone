import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Spacer } from './styles';

const Steps = ({ current, size }) => (
  <Container>
    {Array.from({ length: size }).map((_, index) => (
      <React.Fragment key={index}>
        {index !== 0 && <Spacer />}
        <Item active={current === index} />
      </React.Fragment>
    ))}
  </Container>
);

Steps.propTypes = {
  current: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Steps;
