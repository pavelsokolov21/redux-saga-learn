import { FC, FormEvent, useMemo, useState } from "react";
import { Column, SortingRule } from "react-table";
import { SearchBar } from "components/search-bar";
import { Table } from "components/table";
import { useHome } from "pages/home/home.hooks";
import { User, UserKeys } from "interfaces/user";
import { SortWrapper, Wrapper, SortTitle } from "./home-table.styles";
import { SortButtons } from "../sort-buttons";
import { Order } from "interfaces/order";

export const HomeTable: FC = () => {
  const columns: Column<User>[] = useMemo(
    () => [
      {
        Header: "Имя пользователя",
        accessor: "username",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Дата регистрации",
        accessor: "registration_date",
      },
      {
        Header: "Рейтинг",
        accessor: "rating",
      },
    ],
    []
  );
  const { users, isUsersLoaded } = useHome();
  const [search, setSearch] = useState("");
  const [currentSort, setCurrentSort] =
    useState<Extract<UserKeys, "rating" | "registration_date">>(
      "registration_date"
    );
  const [currentOrder, setCurrentOrder] = useState<Order>("desc");

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };
  const onClear = () => {
    setSearch("");
    setCurrentSort("registration_date");
    setCurrentOrder("desc");
  };

  const sortBy: SortingRule<User> = useMemo(
    () => ({ id: currentSort, desc: currentOrder === "desc" }),
    [currentSort, currentOrder]
  );

  return (
    <Wrapper>
      <SearchBar
        value={search}
        placeholder="Поиск по имени или по e-mail"
        iconUrl="/images/search.svg"
        onChange={onChange}
        onClear={onClear}
      />
      {isUsersLoaded ? (
        <>
          <SortWrapper>
            <SortTitle>Сортировка:</SortTitle>
            <SortButtons
              currentSort={currentSort}
              order={currentOrder}
              setSort={setCurrentSort}
              setOrder={setCurrentOrder}
            />
          </SortWrapper>
          <Table
            columns={columns}
            data={users}
            hasRemovingRow
            filters={["email", "username"]}
            filter={search}
            sortBy={sortBy}
          />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Wrapper>
  );
};
