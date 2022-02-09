import { FC } from 'react';
import styled from 'styled-components';

interface RangeInputProps {
  className?: string;
  min: number;
  max: number;
  value: number;
  onInput?: () => void;
  onChange?: (e: any) => void;
}

export const RangeInput: FC<RangeInputProps> = ({
  className,
  min,
  max,
  value,
  onInput,
  onChange,
}) => {
  return (
    <Input
      className={className}
      type="range"
      min={min}
      max={max}
      value={value}
      onInput={onInput}
      onChange={onChange}
    />
  );
};

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  outline: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  background-color: transparent;
  pointer-events: none;

  &[type='range']::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 5px;
  }
  &[type='range']::-moz-range-track {
    -moz-appearance: none;
    height: 5px;
  }
  &[type='range']::-ms-track {
    appearance: none;
    height: 5px;
  }
  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1.7em;
    width: 1.7em;
    background-color: #3264fe;
    cursor: pointer;
    margin-top: -9px;
    pointer-events: auto;
    border-radius: 50%;
  }
  &[type='range']::-moz-range-thumb {
    -webkit-appearance: none;
    height: 1.7em;
    width: 1.7em;
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
    border: none;
  }
  &[type='range']::-ms-thumb {
    appearance: none;
    height: 1.7em;
    width: 1.7em;
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
  &[type='range']:active::-webkit-slider-thumb {
    background-color: #ffffff;
    border: 1px solid #3264fe;
  }
`;
