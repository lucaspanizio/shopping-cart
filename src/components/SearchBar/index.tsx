import React, { useState } from "react";
import { useApp } from "@/hooks/useApp";
import { BsSearch } from "react-icons/bs";
import { api } from "@/services/api";
import { Container, SearchInput, SearchButton } from "./styles";

export const SearchBar: React.FC = () => {
  const { setProducts, setLoading } = useApp();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    // componentizar a requisição da api que
    // também é feita no ProductsGrid
    api
      .get(searchValue)
      .then((resp) => {
        setProducts(resp.data.results);
        console.log(resp.data.results);
      })
      .catch((err) => console.log(err));

    setLoading(false);
    setSearchValue("");
  };

  return (
    <Container onSubmit={handleSearch}>
      <SearchInput
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <SearchButton type="submit">
        <BsSearch />
      </SearchButton>
    </Container>
  );
};
