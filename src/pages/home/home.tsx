import { Table } from "components/table";
import { User } from "interfaces/user";
import { Column } from "react-table";
import { useHome } from "./home.hooks";
import { HomeLayout, StyledSearchBar, Title } from "./home.styles";

const columns: Column<User>[] = [
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
];

export const Home = () => {
  const { users, isUsersLoaded } = useHome();

  return (
    <HomeLayout>
      <Title>Список пользователей</Title>
      <StyledSearchBar />
      {isUsersLoaded ? (
        <Table columns={columns} data={users} hasRemovingRow />
      ) : (
        <h1>Loading...</h1>
      )}
    </HomeLayout>
  );
};
