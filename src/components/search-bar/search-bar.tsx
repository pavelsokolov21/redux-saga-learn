import { FC, FormEvent, useState } from "react";
import { Input } from "components/input";
import styled from "styled-components";
import { rgba } from "polished";
import { StyledButton } from "./search-bar.styles";
import { Icons } from "components/icons";

export const SearchBar: FC = styled((props) => {
  const [search, setSearch] = useState("");

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };

  return (
    <div {...props}>
      <Input
        value={search}
        placeholder="Поиск по имени или по e-mail"
        $iconUrl="/images/search.svg"
        onChange={onChange}
      />
      <StyledButton $type="text">
        <Icons.Clean /> Очистить фильтр
      </StyledButton>
    </div>
  );
})`
  width: 100%;
  padding: 12px 44px 12px 16px;
  box-sizing: border-box;
  border-radius: 6px;
  box-shadow: 0 18px 15px
    ${({ theme: { colors } }) => rgba(colors.secondaryGrey, 0.15)};
  background: ${({ theme: { colors } }) => colors.primaryWhite};
`;
