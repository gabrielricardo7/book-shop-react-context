import { useContext } from "react";
import { MyButton } from "./style";
import { CartContext } from "../../providers/cart";
import { GiShoppingCart } from "react-icons/gi";

const Button = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);

  const text =
    type === "products" ? (
      <>
        <GiShoppingCart size="2em" style={{ verticalAlign: "middle" }} /> Add to cart
      </>
    ) : (
      <>&#10005;</>
    );

  const btnColor = type === "cart" ? "#c55152" : "#76b845";

  const handleClick = () => {
    if (type === "products") {
      addToCart(item);
    } else {
      removeFromCart(item);
    }
  };

  return (
    <MyButton color={btnColor} onClick={handleClick}>
      {text}
    </MyButton>
  );
};

export default Button;
