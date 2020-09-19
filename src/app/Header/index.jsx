import React from 'react';
import PropTypes from 'prop-types';
import Steps from 'shared/components/Steps';
import { StepsEnum, StepsHeading } from 'shared/constants/steps';
import { Heading, Title, Container, Back, Forward } from './styles';

const stepsSize = Object.keys(StepsEnum).length;

const Header = ({ step, onStepChange: setStep }) => {
  const canDecrease = step > 1;
  const canIncrease = step < stepsSize;

  const decreaseStep = () => canDecrease && setStep(step - 1);

  return (
    <Container>
      <Back type="button" onClick={decreaseStep} disabled={!canDecrease} />
      <Heading>
        <Title>{StepsHeading[step]}</Title>
        <Steps current={step - 1} size={stepsSize} />
      </Heading>
      <Forward type="submit" disabled={!canIncrease} />
    </Container>
  );
};

Header.propTypes = {
  step: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};

export default Header;
