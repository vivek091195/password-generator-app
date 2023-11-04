import styled, { css } from "styled-components";
import { COLORS } from "../../static/styles/colors";
import { mobile, tablet } from "../../utils/ScreenSizes";
import { FONT_SIZES } from "../../static/styles/typography";

export const Container = styled.div`
  width: 36%;
  background-color: ${COLORS.PALE_BLACK};
  padding: 2rem;

  ${tablet(css`
    width: 80%;
  `)};

  ${mobile(css`
    width: 90%;
    padding: 1rem;
  `)};
`;

export const CharLengthSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CharLengthText = styled.p`
  font-size: ${FONT_SIZES.sm2};
  color: ${COLORS.STARLIGHT};
  font-weight: 700;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm};
  `)};
`;

export const CharLengthNumeral = styled.p`
  color: ${COLORS.GREEN};
  font-size: ${FONT_SIZES.lg};
  font-weight: 700;

  ${mobile(css`
    font-size: ${FONT_SIZES.md};
  `)};
`;

export const SliderWrapper = styled.div`
  margin: 2.2rem 0 2.6rem;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const StrengthSection = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: ${COLORS.DARK_BLUE};
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1rem;
`;

export const StrengthText = styled.p`
  font-size: ${FONT_SIZES.sm2};
  color: ${COLORS.DARK_GREY};
  text-transform: uppercase;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm};
  `)};
`;

export const StrengthNotation = styled.div`
  display: flex;
  align-items: center;
`;

export const StrengthLevel = styled.p`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.md};
  color: ${COLORS.STARLIGHT};
  margin-right: 1rem;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm2};
  `)};
`;

export const StrengthBars = styled.div<{
  backgroundColor: string;
  border: string;
}>`
  width: 0.625rem;
  height: 1.75rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border || `1px solid ${COLORS.STARLIGHT}`};
  margin-right: 0.5rem;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm};
  `)};
`;

export const ButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 1.25rem 0;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.GREEN};
  color: ${COLORS.DARK_BLUE};
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.DARK_BLUE};
    border: 1px solid ${COLORS.GREEN};
    color: ${COLORS.GREEN};
    svg > path {
      fill: ${COLORS.GREEN};
    }
  }
`;

export const ButtonText = styled.p`
  text-transform: uppercase;
  font-size: ${FONT_SIZES.sm2};
  font-weight: 700;
  margin-right: 1.5rem;

  ${mobile(css`
    font-size: ${FONT_SIZES.sm};
  `)};
`;
