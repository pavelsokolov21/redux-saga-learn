import { FC } from "react";
import { Order } from "interfaces/order";
import { SortButtonsStyles, StyledButton } from "./sort-buttons.styles";
import { UserKeys } from "interfaces/user";

export type SortFields = Extract<UserKeys, "rating" | "registration_date">;

interface Props {
  currentSort: SortFields;
  order: Order;
  setOrder: (order: Order) => void;
  setSort: (sortField: SortFields) => void;
}

export const SortButtons: FC<Props> = ({
  currentSort,
  order,
  setOrder,
  setSort,
}) => {
  const onChange = (sortField: SortFields) => {
    if (sortField === currentSort) {
      setOrder(order === "asc" ? "desc" : "asc");

      return;
    }

    setOrder("desc");
    setSort(sortField);
  };

  return (
    <SortButtonsStyles>
      <StyledButton
        $type="text"
        $active={currentSort === "registration_date"}
        onClick={() => onChange("registration_date")}
      >
        Дата регистрации
      </StyledButton>
      <StyledButton
        $active={currentSort === "rating"}
        $type="text"
        onClick={() => onChange("rating")}
      >
        Рейтинг
      </StyledButton>
    </SortButtonsStyles>
  );
};
