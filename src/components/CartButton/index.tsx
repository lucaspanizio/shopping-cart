import React, { useContext } from "react";
// import AppContext from '../../context/AppContext';
import { Container, Count } from "./styles";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const CartButton: React.FC = () => {
  // const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);
  return (
    <Container
      type="button"
      onClick={() => {
        console.log("clicou no carrinho");
      }}
    >
      {/* <Container type="button" onClick={() => setIsCartVisible(!isCartVisible)}> */}
      <AiOutlineShoppingCart />
      {/* {cartItems.length > 0 && <Count>{cartItems.length}</Count>} */}
    </Container>
  );
};
