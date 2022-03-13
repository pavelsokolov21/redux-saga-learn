import styled from "styled-components";
import { tableLeftRightPadding } from "components/table/constants";

export const HeaderCell = styled.th`
  padding: 16px 0 22px 0;
  text-align: left;
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  color: ${({ theme: { colors } }) => colors.lightGrey};

  ${tableLeftRightPadding}
`;
