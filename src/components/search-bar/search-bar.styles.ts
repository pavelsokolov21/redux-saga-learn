import styled from "styled-components";
import { rgba } from "polished";
import { Button } from "components/button";

export const SearchBarStyles = styled.div`
  width: 100%;
  padding: 12px 44px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  box-shadow: 0 18px 15px
    ${({ theme: { colors } }) => rgba(colors.secondaryGrey, 0.15)};
  background: ${({ theme: { colors } }) => colors.primaryWhite};
`;

export const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  place-items: center;
  grid-gap: 4px;
  margin-top: 24px;
`;
