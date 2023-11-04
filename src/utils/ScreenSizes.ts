import { RuleSet, css } from "styled-components";

const SIZE = {
  mobile: "480px",
  tablet: "768px",
};

Object.freeze(SIZE);

export const mobile = (inner: RuleSet<Object>) => css`
  @media (max-width: ${SIZE.mobile}) {
    ${inner};
  }
`;

export const tablet = (inner: RuleSet<Object>) => css`
  @media (max-width: ${SIZE.tablet}) {
    ${inner};
  }
`;
