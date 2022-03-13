import styled from "styled-components";
import { tableLeftRightPadding } from "components/table/constants";

export const Cell = styled.td`
  padding: 14px 0 22px 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.grey4};
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.grey3};

  &:first-child {
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.primaryBlue};
  }

  ${tableLeftRightPadding}
`;
