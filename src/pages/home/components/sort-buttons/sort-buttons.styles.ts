import styled, { css } from "styled-components";
import { Button } from "components/button";

export const SortButtonsStyles = styled.div`
  display: flex;
  grid-gap: 8px;
`;

export const StyledButton = styled(Button)<{ $active?: boolean }>`
  border-bottom: 1px dashed ${({ theme: { colors } }) => colors.lightGrey};
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme: { colors } }) => colors.lightGrey};

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme: { colors } }) => colors.primaryBlack};
    `}
`;
