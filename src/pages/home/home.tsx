import { Column } from "react-table";
import { Table } from "components/table";
import { User } from "interfaces/user";
import { useHome } from "./home.hooks";
import { HomeLayout, Title } from "./home.styles";
import { FormEvent, useMemo, useState } from "react";
import { SearchBar } from "components/search-bar";

export const Home = () => {
  const [search, setSearch] = useState("");
  const { users, isUsersLoaded } = useHome();
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

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <HomeLayout>
      <Title>Список пользователей</Title>
      <SearchBar
        value={search}
        placeholder="Поиск по имени или по e-mail"
        iconUrl="/images/search.svg"
        onChange={onChange}
      />
      {isUsersLoaded ? (
        <Table
          columns={columns}
          data={users}
          hasRemovingRow
          filters={["email", "username"]}
          filter={search}
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </HomeLayout>
  );
};
