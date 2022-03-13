import { HomeLayout, Title } from "./home.styles";
import { HomeTable } from "./components/home-table";

export const Home = () => {
  return (
    <HomeLayout>
      <Title>Список пользователей</Title>
      <HomeTable />
    </HomeLayout>
  );
};
