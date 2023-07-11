import React from "react";
import { Container } from "./styles";
import { SearchBar } from "@/components/SearchBar";
import { CartButton } from "@/components/CartButton";

const Header: React.FC = () => {
  return (
    <Container>
      <div>
        <SearchBar />
        <CartButton />
      </div>
    </Container>
  );
};

export default Header;
