import { useState } from "react";
import {
  DEFAULT_PASSWORD_LENGTH,
  LOWERCASE_LETTERS,
  NUMBERS,
  SYMBOLS,
  TYPES_ENUM,
  UPPERCASE_LETTERS,
} from "../../utils/Config";

interface EventProps {
  target: {
    name: string;
    checked: boolean;
  };
}

interface CheckboxConfig {
  [key: string]: boolean;
}

const useGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(DEFAULT_PASSWORD_LENGTH);
  const [isCopyClicked, setIsCopyClicked] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [checkboxesConfig, setCheckboxesConfig] = useState({
    [TYPES_ENUM.UPPERCASE]: false,
    [TYPES_ENUM.LOWERCASE]: false,
    [TYPES_ENUM.NUMBERS]: false,
    [TYPES_ENUM.SYMBOLS]: false,
  });

  const onCheckboxChangeHandler = (event: EventProps) => {
    setCheckboxesConfig((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };

  const getSelectedCheckboxes = (checkboxConfig: CheckboxConfig) => {
    return Object.keys(checkboxConfig).filter(
      (key: string): boolean => checkboxConfig[key]
    );
  };

  const shuffleString = (str: string) => {
    const arr = str.split(""),
      len = arr.length;

    for (let i = len - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      let dummy = arr[i];
      arr[i] = arr[randomIndex];
      arr[randomIndex] = dummy;
    }
    return arr.join("");
  };

  const getRandomPasswordString = (checkboxesConfig: CheckboxConfig) => {
    let passwordGenerationString = "";
    Object.keys(checkboxesConfig).forEach((key) => {
      const isChecked = checkboxesConfig[key];
      if (isChecked) {
        switch (key) {
          case TYPES_ENUM.UPPERCASE:
            passwordGenerationString += shuffleString(
              UPPERCASE_LETTERS.join("")
            );
            break;
          case TYPES_ENUM.LOWERCASE:
            passwordGenerationString += shuffleString(
              LOWERCASE_LETTERS.join("")
            );
            break;
          case TYPES_ENUM.NUMBERS:
            passwordGenerationString += shuffleString(NUMBERS.join(""));
            break;
          case TYPES_ENUM.SYMBOLS:
            passwordGenerationString += shuffleString(SYMBOLS.join(""));
            break;
        }
      }
    });
    return passwordGenerationString;
  };

  const generatePasswordHandler = (checkboxesConfig: CheckboxConfig) => {
    let passwordGenerationString = getRandomPasswordString(checkboxesConfig);
    if (passwordGenerationString.length < passwordLength) {
      passwordGenerationString += getRandomPasswordString(checkboxesConfig);
    }
    setGeneratedPassword(
      shuffleString(passwordGenerationString).substring(0, passwordLength)
    );
    setIsCopyClicked(false);
  };

  const onCopyClickHandler = () => {
    setIsCopyClicked(true);
    navigator.clipboard.writeText(generatedPassword);
  };

  return {
    passwordLength,
    setPasswordLength,
    isCopyClicked,
    generatedPassword,
    checkboxesConfig,
    onCheckboxChangeHandler,
    shuffleString,
    getSelectedCheckboxes,
    generatePasswordHandler,
    onCopyClickHandler,
  };
};

export { useGenerator };
