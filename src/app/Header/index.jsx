import React from 'react';
import PropTypes from 'prop-types';
import Steps from 'shared/components/Steps';
import { StepsEnum, StepsHeading } from 'shared/constants/steps';
import { BackIcon, ForwardIcon } from 'app/styles';
import { Heading, Title, Container, ArrowButton } from './styles';

const stepsSize = Object.keys(StepsEnum).length;

const Header = ({ step, onStepChange: setStep }) => {
  const canDecrease = step > 1;
  const canIncrease = step < stepsSize;

  const decreaseStep = () => canDecrease && setStep(step - 1);

  return (
    <Container>
      <ArrowButton type="button" onClick={decreaseStep} disabled={!canDecrease}>
        <BackIcon />
      </ArrowButton>
      <Heading>
        <Title>{StepsHeading[step]}</Title>
        <Steps current={step - 1} size={stepsSize} />
      </Heading>
      <ArrowButton type="submit" disabled={!canIncrease}>
        <ForwardIcon />
      </ArrowButton>
    </Container>
  );
};

Header.propTypes = {
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default Header;
