import React from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import { Container, Circle, Option, Label } from './styles';

const propTypes = {
    className: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.any,
    placeholder: PropTypes.string,
    invalid: PropTypes.bool,
    custom: PropTypes.bool,
    customValue: PropTypes.any,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    renderValue: PropTypes.func,
    renderCustom: PropTypes.func,
  };
  
  const defaultProps = {
    className: undefined,
    value: undefined,
    defaultValue: undefined,
    placeholder: 'Select',
    invalid: false,
    custom: false,
    customValue: '',
    renderValue: undefined,
    renderCustom: undefined,
  };

const getChoice = (options, stateValue, custom) => {
    const index = options.findIndex(o => o.value === stateValue);
    if (index >= 0) return index;
    return !!stateValue && custom ? options.length : null;
}

const Radio = React.forwardRef(({
    className,
    renderCustom,
    defaultValue,
    value,
    options,
    invalid,
    onChange,
    renderValue: propsRenderValue,
    custom,
    customValue,
    ...radioProps
  }, ref) => {
    const [stateValue, setStateValue] = React.useState(defaultValue);
    const [oldOptions, setOldOptions] = React.useState(options);

    const [stateChoice, setStateChoice] = React.useState(getChoice(options, stateValue, custom));

    React.useEffect(() => {
        if (options.length > 0 && !isEqual(options, oldOptions)) {
            const { value: newValue } = options[stateChoice] || {};
            if (newValue) {
                setStateValue(newValue);
                onChange(newValue);
            } else if (custom) {
                setStateChoice(options.length);
                setStateValue(value);
            }
        }
        setOldOptions(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);

    React.useEffect(() => {
        if (value !== stateValue) {
            setStateValue(value);
            setStateChoice(getChoice(options, value, custom));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateValue, value]);

    return (
        <Container className={className} invalid={invalid}>
            {options.map((o, i) => (
                <Option key={o.value}>
                    <Label>
                        <Circle active={i === stateChoice} />
                        {typeof propsRenderValue === 'function'
                            ? propsRenderValue(o, i === stateChoice)
                            : o.label
                        }
                        <input
                            {...radioProps}
                            type="radio"
                            ref={ref}
                            value={o.value}
                            checked={i === stateChoice}
                            onChange={event => {
                                setStateValue(o.value);
                                setStateChoice(i);
                                onChange(o.value, event);
                            }}
                        />
                    </Label>
                </Option>
            ))}
            {custom && (
                <Option>
                    <Label>
                        <Circle active={options.length === stateChoice} />
                        <input
                            {...radioProps}
                            type="radio"
                            ref={ref}
                            value={customValue}
                            checked={options.length === stateChoice}
                            onChange={event => {
                                setStateValue(customValue);
                                setStateChoice(options.length);
                                onChange(customValue, event);
                            }}
                        />
                        {renderCustom({
                            setValue: setStateValue,
                            setChoice: setStateChoice,
                            active: options.length === stateChoice,
                            error: radioProps.error,
                            onChange
                        })}
                    </Label>
                </Option>
            )}
        </Container>
    )
});

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default Radio;