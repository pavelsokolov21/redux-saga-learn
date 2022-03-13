import { FC, FormEvent } from "react";
import { Input } from "components/input";
import { Icons } from "components/icons";
import { SearchBarStyles, StyledButton } from "./search-bar.styles";

interface Props {
  value: string;
  placeholder: string;
  iconUrl: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<Props> = ({
  value,
  placeholder,
  iconUrl,
  onChange,
}) => (
  <SearchBarStyles>
    <Input
      value={value}
      placeholder={placeholder}
      $iconUrl={iconUrl}
      onChange={onChange}
    />
    <StyledButton $type="text">
      <Icons.Clean /> Очистить фильтр
    </StyledButton>
  </SearchBarStyles>
);
