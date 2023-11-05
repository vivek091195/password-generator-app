import styled, { css } from "styled-components";
import { COLORS } from "../../static/styles/colors";
import { FONT_SIZES } from "../../static/styles/typography";
import { mobile, tablet } from "../../utils/ScreenSizes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`;

export const Header = styled.h2`
  color: ${COLORS.DARK_GREY};
  font-size: ${FONT_SIZES.md};
  font-weight: 700;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm};
  `)};
`;

export const GeneratedPasswordWindow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  background-color: ${COLORS.PALE_BLACK};
  margin: 2rem 0 1.5rem;
  padding: 0 2rem;
  width: 36%;

  ${tablet(css`
    width: 80%;
  `)};

  ${mobile(css`
    margin: 1rem 0;
    padding: 0 1rem;
    width: 90%;
  `)};
`;

export const PasswordText = styled.p<{
  isDefaultPassword: boolean;
}>`
  font-size: ${FONT_SIZES.lg};
  color: ${({ isDefaultPassword }) =>
    isDefaultPassword ? COLORS.DARK_GREY : COLORS.STARLIGHT};

  ${mobile(css`
    font-size: ${FONT_SIZES.md};
  `)};
`;

export const IconWrapper = styled.div`
  display: flex;
  cursor: pointer;
  &:hover {
    svg > path {
      fill: ${COLORS.STARLIGHT};
    }
  }
`;

export const CopyText = styled.span`
  text-transform: uppercase;
  color: ${COLORS.GREEN};
  font-size: ${FONT_SIZES.sm2};
  margin-right: 1rem;
`;
