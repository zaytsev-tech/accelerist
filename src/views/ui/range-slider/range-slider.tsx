import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import { RangeInput } from './range-input';

interface OnChangeProps {
  firstValue: number;
  secondValue: number;
}

interface RangeSliderProps {
  maxValue: number;
  firstValue: number;
  secondValue: number;
  onChange: (value: OnChangeProps) => void;
}

export const RangeSlider: FC<RangeSliderProps> = ({
  maxValue,
  firstValue,
  secondValue,
  onChange,
}) => {
  const sliderMaxValue = maxValue;
  const [sliderOneValue, setSliderOneValue] = useState(firstValue);
  const [sliderTwoValue, setSliderTwoValue] = useState(secondValue);
  const [backgroundTrack, setBackgroundTrack] = useState('');

  useEffect(() => {
    slideOne(sliderOneValue);
    slideTwo(sliderTwoValue);
  }, []);

  useEffect(() => {
    onChange({ firstValue: sliderOneValue, secondValue: sliderTwoValue });
  }, [sliderOneValue, sliderTwoValue, onChange]);

  function slideOne(currentValue: number) {
    if (0 <= currentValue && sliderTwoValue >= currentValue) {
      setSliderOneValue(currentValue);
    }
    fillColor();
  }
  function slideTwo(currentValue: number) {
    if (sliderMaxValue >= currentValue && currentValue >= sliderOneValue) {
      setSliderTwoValue(currentValue);
    }
    fillColor();
  }
  function fillColor() {
    const percent1 = (sliderOneValue / sliderMaxValue) * 100;
    const percent2 = (sliderTwoValue / sliderMaxValue) * 100;
    setBackgroundTrack(
      `background: linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`,
    );
  }

  return (
    <Wrapper>
      <Values>
        <span id="range1">{sliderOneValue}</span>
        <span> - </span>
        <span id="range2">{sliderTwoValue}</span>
      </Values>
      <Container>
        <SliderTrack $bgValue={backgroundTrack}></SliderTrack>
        <RangeInput
          min={0}
          max={sliderMaxValue}
          value={sliderOneValue}
          //onInput={slideOne}
          onChange={(e) => {
            slideOne(parseInt(e.target.value));
          }}
        />
        <RangeInput
          min={0}
          max={sliderMaxValue}
          value={sliderTwoValue}
          //onInput={slideTwo}
          onChange={(e) => {
            slideTwo(parseInt(e.target.value));
          }}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 80%;
  background-color: #ffffff;
  padding: 50px 40px 20px 40px;
  border-radius: 10px;
`;

const Values = styled.div`
  background-color: #3264fe;
  width: 32%;
  position: relative;
  margin: auto;
  padding: 10px 0;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;

  &:before {
    content: '';
    position: absolute;
    height: 0;
    width: 0;
    border-top: 15px solid #3264fe;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    margin: auto;
    bottom: -14px;
    left: 0;
    right: 0;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  margin-top: 30px;
`;

const SliderTrack = styled.div<{ $bgValue: string }>`
  width: 100%;
  height: 5px;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  border-radius: 5px;
  ${({ $bgValue }) => $bgValue};
`;
