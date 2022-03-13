import { Table, Column } from "components/table";
import { HomeLayout, StyledSearchBar, Title } from "./home.styles";

const columns: Column[] = [
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
    accessor: "registrationDate",
  },
  {
    Header: "Рейтинг",
    accessor: "rating",
  },
];

const data = [
  {
    username: "username",
    email: "p.v.2000@gmail.com",
    registrationDate: "29.10.00",
    rating: "12",
  },
  {
    username: "username",
    email: "p.v.2000@gmail.com",
    registrationDate: "29.10.00",
    rating: "12",
  },
];

export const Home = () => (
  <HomeLayout>
    <Title>Список пользователей</Title>
    <StyledSearchBar />
    <Table columns={columns} data={data} hasRemovingRow />
  </HomeLayout>
);
