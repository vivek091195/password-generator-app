import React from "react";
import { StyledCheckBox, CheckboxLabel } from "./Checkbox.style";

interface EventProps {
  target: {
    name: string;
    checked: boolean;
  };
}
interface Props {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  onChangeHandler: (event: EventProps) => void;
}

const Checkbox = (props: Props) => {
  const { label, id, name, checked, onChangeHandler } = props;

  return (
    <>
      <StyledCheckBox
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChangeHandler}
      ></StyledCheckBox>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </>
  );
};

export { Checkbox };
