import styled, { css } from "styled-components";
import { COLORS } from "../../../static/styles/colors";
import { FONT_SIZES } from "../../../static/styles/typography";
import { mobile } from "../../../utils/ScreenSizes";

export const StyledCheckBox = styled.input`
  box-sizing: border-box;
  width: 1.25rem;
  height: 1.25rem;
  background: ${COLORS.DARK_BLUE};
  border: 1px solid ${COLORS.STARLIGHT};
  appearance: none;
  cursor: pointer;
  &:checked {
    border: none;
    background-image: url("/icon-check.svg");
    background-repeat: no-repeat;
    background-color: ${COLORS.GREEN};
    background-position: 50%;
  }
`;

export const CheckboxLabel = styled.label`
  white-space: nowrap;
  font-size: ${FONT_SIZES.sm2};
  color: ${COLORS.STARLIGHT};
  margin-left: 1.5rem;
  cursor: pointer;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm};
  `)};
`;
