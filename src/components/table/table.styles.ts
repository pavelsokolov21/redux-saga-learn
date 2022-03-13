import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 6px;
  border-collapse: collapse;
  background: ${({ theme: { colors } }) => colors.primaryWhite};
`;
