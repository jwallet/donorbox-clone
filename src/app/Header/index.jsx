import React from 'react';
import PropTypes from 'prop-types';
import Steps from "shared/components/Steps";
import { StepsEnum } from 'shared/constants/steps';
import { Container, Back, Forward } from "./styles";

const stepsSize = Object.keys(StepsEnum).length;

const Header = ({ step, onStepChange: setStep }) => {

    const canDecrease = step > 1;
    const canIncrease = step < stepsSize;

    const decreaseStep = () => canDecrease && setStep(step - 1);

    return (
        <Container>
            <Back type="button" onClick={decreaseStep} disabled={!canDecrease} />
            <Steps current={step - 1} size={stepsSize} />
            <Forward type="submit" disabled={!canIncrease} />
        </Container>
    );
};

Header.propTypes = {
    step: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired,
}

export default Header;