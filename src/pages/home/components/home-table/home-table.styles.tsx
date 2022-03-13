import styled from "styled-components";
import { StyledTable } from "components/table";

export const Wrapper = styled.div`
  ${StyledTable} {
    margin-top: 16px;
  }
`;

export const SortWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
  margin-top: 72px;
`;

export const SortTitle = styled.p`
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  color: ${({ theme: { colors } }) => colors.lightGrey};
`;
