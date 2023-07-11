import { useEffect } from "react";
import { api } from "@/services/api";
import { ProductCard } from "../ProductCard";
import { Product } from "@/models/Product";
import { useApp } from "@/hooks/useApp";
import { Container } from "./styles";

const ProductsList = () => {
  const { products, setProducts } = useApp();

  function getProducts(query: string) {
    api
      .get(query)
      .then((resp) => {
        setProducts(resp.data.results);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getProducts("iphone"); // primeiro produto a ser carregado
  }, []);

  return (
    <Container>
      {products?.map((item: Product) => {
        const thumbnail = item.thumbnail.replace(/\w\.jpg/gi, "W.jpg");
        const product = new Product(
          item.id,
          item.title,
          Number(item.price),
          thumbnail
        );
        return <ProductCard key={item.id} product={product} />;
      })}
    </Container>
  );
};

export default ProductsList;
