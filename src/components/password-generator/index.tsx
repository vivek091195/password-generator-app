import React from "react";
import {
  Container,
  Header,
  GeneratedPasswordWindow,
  PasswordText,
  IconWrapper,
  CopyText,
} from "./PasswordGenerator.style";
import { ReactComponent as Copy } from "../../static/assets/icon-copy.svg";
import { Configuration } from "./Configuration";
import { useGenerator } from "./useGenerator";
import { DEFAULT_PASSWORD } from "../../utils/Config";

const PasswordGenerator: React.FC = () => {
  const {
    generatedPassword,
    passwordLength,
    setPasswordLength,
    isCopyClicked,
    checkboxesConfig,
    onCheckboxChangeHandler,
    getSelectedCheckboxes,
    generatePasswordHandler,
    onCopyClickHandler,
  } = useGenerator();
  return (
    <Container>
      <Header>Password Generator</Header>
      <GeneratedPasswordWindow>
        <PasswordText isDefaultPassword={!generatedPassword.length}>
          {generatedPassword || DEFAULT_PASSWORD}
        </PasswordText>
        <IconWrapper onClick={onCopyClickHandler}>
          {isCopyClicked && <CopyText>Copied</CopyText>}
          <Copy />
        </IconWrapper>
      </GeneratedPasswordWindow>
      <Configuration
        passwordLength={passwordLength}
        setPasswordLength={setPasswordLength}
        checkboxesConfig={checkboxesConfig}
        onCheckboxChangeHandler={onCheckboxChangeHandler}
        getSelectedCheckboxes={getSelectedCheckboxes}
        generatePasswordHandler={generatePasswordHandler}
      />
    </Container>
  );
};

export { PasswordGenerator };
