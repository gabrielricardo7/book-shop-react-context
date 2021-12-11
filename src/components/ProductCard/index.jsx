import { Figure } from "./style";
import Button from "../Button";

const ProductCard = ({ item }) => {
  return (
    <>
      <Figure>
        <div className="book">
          <div className="magic"></div>
          <img className="cover" src={item.image} alt={item.name} />
        </div>
        <figcaption>
          <p>{item.name}</p>
          <small>by {item.author}</small> <br />
          <mark>$&nbsp;{item.price.toFixed(2)}</mark>
        </figcaption>
        <Button type="products" item={item} />
      </Figure>
    </>
  );
};

export default ProductCard;
