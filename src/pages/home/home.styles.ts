import styled from "styled-components";
import { MainLayout } from "layouts/main";
import { SearchBarStyles } from "components/search-bar";

export const HomeLayout = styled(MainLayout)`
  ${SearchBarStyles} {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fontFamilies } }) => fontFamilies.primary};
  font-size: 24px;
  color: ${({ theme: { colors } }) => colors.primaryBlack};
`;
