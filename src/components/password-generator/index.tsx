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

const PasswordGenerator: React.FC = () => {
  return (
    <Container>
      <Header>Password Generator</Header>
      <GeneratedPasswordWindow>
        <PasswordText>PTx1fDaFX</PasswordText>
        <IconWrapper>
          <CopyText>Copied</CopyText>
          <Copy />
        </IconWrapper>
      </GeneratedPasswordWindow>
      <Configuration />
    </Container>
  );
};

export { PasswordGenerator };
