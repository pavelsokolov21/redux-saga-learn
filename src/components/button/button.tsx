import styled, { css } from "styled-components";

interface Props {
  $type: "text" | "icon";
}

export const Button = styled.button<Props>`
  padding: 0;
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  border: none;
  outline: none;
  cursor: pointer;

  ${({ $type }) => {
    switch ($type) {
      case "text":
        return css`
          opacity: 1;
          color: ${({ theme: { colors } }) => colors.grey2};
          background: none;
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 0.8;
          }
        `;
      case "icon":
        return css`
          opacity: 1;
          background: none;
          transition: opacity 0.2s ease;

          &:hover {
            opacity: 0.8;
          }
        `;
    }
  }}
`;
