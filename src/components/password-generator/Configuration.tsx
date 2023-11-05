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
import {
  CHECKBOX_CONFIG,
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  STRENGTH_CONFIG,
  STRENGTH_TO_COLOR_MAPPING,
} from "../../utils/Config";
import { ReactComponent as RightArrow } from "../../static/assets/icon-arrow-right.svg";
import { COLORS } from "../../static/styles/colors";

interface CheckboxConfig {
  [key: string]: boolean;
}

interface EventProps {
  target: {
    name: string;
    checked: boolean;
  };
}
interface Props {
  passwordLength: number;
  setPasswordLength: React.Dispatch<React.SetStateAction<number>>;
  checkboxesConfig: CheckboxConfig;
  onCheckboxChangeHandler: (event: EventProps) => void;
  getSelectedCheckboxes: (config: CheckboxConfig) => string[];
  generatePasswordHandler: (config: CheckboxConfig) => void;
}

const Configuration = (props: Props) => {
  const {
    passwordLength,
    setPasswordLength,
    checkboxesConfig,
    onCheckboxChangeHandler,
    getSelectedCheckboxes,
    generatePasswordHandler,
  } = props;
  const selectedCheckboxes = getSelectedCheckboxes(checkboxesConfig);
  const barColor = STRENGTH_TO_COLOR_MAPPING[selectedCheckboxes?.length || 0];
  return (
    <Container>
      <CharLengthSection>
        <CharLengthText>Character Length</CharLengthText>
        <CharLengthNumeral>{passwordLength}</CharLengthNumeral>
      </CharLengthSection>
      <SliderWrapper>
        <Slider
          min={MIN_PASSWORD_LENGTH}
          max={MAX_PASSWORD_LENGTH}
          value={passwordLength}
          setValue={setPasswordLength}
        />
      </SliderWrapper>
      {CHECKBOX_CONFIG.map(({ id, name, label }) => (
        <CheckboxWrapper key={id}>
          <Checkbox
            id={id}
            name={name}
            label={label}
            checked={checkboxesConfig?.name}
            onChangeHandler={onCheckboxChangeHandler}
          />
        </CheckboxWrapper>
      ))}
      <StrengthSection>
        <StrengthText>Strength</StrengthText>
        <StrengthNotation>
          <StrengthLevel>
            {STRENGTH_CONFIG[selectedCheckboxes?.length || 0]}
          </StrengthLevel>
          {selectedCheckboxes.map((_, index) => {
            const coloredBar = selectedCheckboxes?.length > index;
            return (
              <StrengthBars
                backgroundColor={coloredBar ? barColor : COLORS.DARK_BLUE}
                border={coloredBar ? "none" : ""}
              ></StrengthBars>
            );
          })}
        </StrengthNotation>
      </StrengthSection>
      <ButtonWrapper onClick={() => generatePasswordHandler(checkboxesConfig)}>
        <ButtonText>Generate</ButtonText>
        <RightArrow />
      </ButtonWrapper>
    </Container>
  );
};

export { Configuration };
