import React from "react";
import { SliderBar } from "./Slider.style";

interface Props {
  min: number;
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Slider = (props: Props) => {
  const { min, max, value, setValue } = props;
  return (
    <SliderBar
      type="range"
      min={min}
      max={max}
      step={1}
      value={value}
      onChange={(event) => setValue(parseInt(event.target.value))}
    ></SliderBar>
  );
};

export { Slider };
