import { BsFillCartPlusFill } from "react-icons/bs";
import {
  ContainerCard,
  ContainerInfos,
  CardTitle,
  CardPrice,
  CardImage,
  CardButton,
} from "./styles";
import { Product } from "@/models/Product";
import formatCurrency from "@/utils/formatCurrency";

interface IProduct {
  product: Product;
}

export const ProductCard = ({ product }: IProduct) => {
  return (
    <ContainerCard>
      <CardImage
        src={product.thumbnail}
        alt={`Imagem do Produto: ${product.title}`}
      />

      <ContainerInfos>
        <CardPrice>{formatCurrency(product.price, "BRL")}</CardPrice>
        <CardTitle className="card__title">{product.title}</CardTitle>
      </ContainerInfos>

      <CardButton
        type="button"
        onClick={() => {
          console.log("comprar");
        }}
      >
        <BsFillCartPlusFill />
      </CardButton>
    </ContainerCard>
  );
};
