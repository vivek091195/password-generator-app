import React from "react";
import {
  ButtonText,
  ButtonWrapper,
  CharLengthNumeral,
  CharLengthSection,
  CharLengthText,
  CheckboxWrapper,
  Container,
  SliderWrapper,
  StrengthBars,
  StrengthLevel,
  StrengthNotation,
  StrengthSection,
  StrengthText,
} from "./Configuration.style";
import { Slider } from "../widgets/Slider/Slider";
import { Checkbox } from "../widgets/Checkbox/Checkbox";
import { CHECKBOX_CONFIG } from "../../utils/Config";
import { ReactComponent as RightArrow } from "../../static/assets/icon-arrow-right.svg";
import { COLORS } from "../../static/styles/colors";

const Configuration = () => {
  return (
    <Container>
      <CharLengthSection>
        <CharLengthText>Character Length</CharLengthText>
        <CharLengthNumeral>10</CharLengthNumeral>
      </CharLengthSection>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
      {CHECKBOX_CONFIG.map(({ id, name, label }) => (
        <CheckboxWrapper key={id}>
          <Checkbox id={id} name={name} label={label} />
        </CheckboxWrapper>
      ))}
      <StrengthSection>
        <StrengthText>Strength</StrengthText>
        <StrengthNotation>
          <StrengthLevel>Medium</StrengthLevel>
          <StrengthBars
            backgroundColor={COLORS.YELLOW}
            border="none"
          ></StrengthBars>
          <StrengthBars
            backgroundColor={COLORS.YELLOW}
            border="none"
          ></StrengthBars>
          <StrengthBars
            backgroundColor={COLORS.YELLOW}
            border="none"
          ></StrengthBars>
          <StrengthBars
            backgroundColor={COLORS.DARK_BLUE}
            border=""
          ></StrengthBars>
        </StrengthNotation>
      </StrengthSection>
      <ButtonWrapper>
        <ButtonText>Generate</ButtonText>
        <RightArrow />
      </ButtonWrapper>
    </Container>
  );
};

export { Configuration };
