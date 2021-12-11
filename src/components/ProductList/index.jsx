import ProductCard from "../ProductCard";
import { useContext } from "react";
import { ProductsContext } from "../../providers/products";
import { Container, List, RestoreBtn } from "./style";
import { toast } from "react-toastify";

const ProductList = () => {
  const { products, restoreProducts } = useContext(ProductsContext);

  return (
    <Container>
      <h2>Discover the magic of books!</h2>
      <List>
        {products.length === 0 ? <RestoreBtn onClick={() => {
          restoreProducts();
          toast.info(`Showing all the books in the store!`);
        }}>Show all books</RestoreBtn> : products.map((item, index) => (
          <li key={index}>
            <ProductCard item={item} />
          </li>
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
