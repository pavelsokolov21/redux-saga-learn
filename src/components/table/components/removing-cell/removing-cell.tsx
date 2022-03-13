import { Button } from "components/button";
import { Icons } from "components/icons";
import { StyledCell } from "./removing-cell.styles";
import { useDispatch } from "react-redux";
import { deleteUser } from "redux/store/users/users.actions";

interface Props<T> {
  deleteField: T;
}

export const RemovingCell = <T,>({ deleteField }: Props<T>) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteUser(deleteField));
  };

  return (
    <StyledCell role="cell">
      <Button $type="icon" onClick={onDelete}>
        <Icons.Cancel />
      </Button>
    </StyledCell>
  );
};
