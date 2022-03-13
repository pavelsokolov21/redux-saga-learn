import styled from "styled-components";
import { MainLayout } from "layouts/main";
import { SearchBar } from "components/search-bar";
import { StyledTable } from "components/table";

export const HomeLayout = styled(MainLayout)`
  ${StyledTable} {
    margin-top: 30px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.primaryBlack};
`;

export const StyledSearchBar = styled(SearchBar)`
  margin-top: 20px;
`;