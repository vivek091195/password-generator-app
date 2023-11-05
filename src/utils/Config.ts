import { COLORS } from "../static/styles/colors";

export const DEFAULT_PASSWORD = "P4$5W0rD!";

export const TYPES_ENUM = {
  UPPERCASE: "uppercase",
  LOWERCASE: "lowercase",
  NUMBERS: "numbers",
  SYMBOLS: "symbols",
};

export const CHECKBOX_CONFIG = [
  {
    id: "uppercase_letters",
    name: TYPES_ENUM.UPPERCASE,
    label: "Include Uppercase Letters",
  },
  {
    id: "lowercase_letters",
    name: TYPES_ENUM.LOWERCASE,
    label: "Include Lowercase Letters",
  },
  {
    id: "numbers",
    name: TYPES_ENUM.NUMBERS,
    label: "Include Numbers",
  },
  {
    id: "symbols",
    name: TYPES_ENUM.SYMBOLS,
    label: "Include Symbols",
  },
];

Object.freeze(CHECKBOX_CONFIG);

export const STRENGTH_CONFIG: {
  [key: number]: string;
} = {
  1: "too weak!",
  2: "weak",
  3: "medium",
  4: "strong",
};

export const STRENGTH_TO_COLOR_MAPPING: {
  [key: number]: string;
} = {
  1: COLORS.RED,
  2: COLORS.ORANGE,
  3: COLORS.YELLOW,
  4: COLORS.GREEN,
};

export const MAX_PASSWORD_LENGTH = 15;
export const MIN_PASSWORD_LENGTH = 6;
export const DEFAULT_PASSWORD_LENGTH = 10;

export const UPPERCASE_LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const LOWERCASE_LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const NUMBERS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const SYMBOLS = [
  "+",
  "-",
  "&",
  "|",
  "!",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "^",
  "~",
  "*",
  "?",
  ":",
  '"',
  "\\",
];
