import styled, { css } from "styled-components";

interface Props {
  $iconUrl?: string;
}

export const Input = styled.input<Props>`
  width: 100%;
  height: 34px;
  padding: 0 12px;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.primaryBlack};
  background-color: ${({ theme: { colors } }) => colors.darkGrey};
  outline: none;

  ${({ $iconUrl }) =>
    $iconUrl &&
    css`
      padding-left: 30px;
      background-image: url("${$iconUrl}");
      background-repeat: no-repeat;
      background-position: 2px center;
    `}

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.lightGrey};
  }
`;
