import React from "react";
import { StyledCheckBox, CheckboxLabel } from "./Checkbox.style";

interface Props {
  label: string;
  id: string;
  name: string;
}

const Checkbox = (props: Props) => {
  const { label, id, name } = props;
  return (
    <>
      <StyledCheckBox type="checkbox" id={id} name={name}></StyledCheckBox>
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </>
  );
};

export { Checkbox };
