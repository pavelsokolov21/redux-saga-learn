import { FC } from "react";
import { Button } from "components/button";
import { Icons } from "components/icons";
import { StyledCell } from "./removing-cell.styles";

export const RemovingCell: FC = () => {
  return (
    <StyledCell role="cell">
      <Button $type="icon">
        <Icons.Cancel />
      </Button>
    </StyledCell>
  );
};
