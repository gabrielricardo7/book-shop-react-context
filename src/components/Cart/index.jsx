import { useContext, useState } from "react";
import { CartContext } from "../../providers/cart";
import { CartBtn, ClearBtn, List } from "./style";
import { toast } from "react-toastify";
import CustomPopup from "../CustomPopup";
import Button from "../Button";

const Cart = () => {

    const { cart, setCart } = useContext(CartContext);

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };

    const reducer = (previousValue, currentValue) => previousValue + Number(currentValue);
    const subtotal = cart.map(item => item.price).reduce(reducer, 0);

    return <>
        <CartBtn onClick={(e) => setVisibility(!visibility)}>
            <b>{cart.length}</b>
            <img src="images/shop-cart(256).png" alt="Cart" />
        </CartBtn>

        <CustomPopup
            onClose={popupCloseHandler}
            show={visibility}
            title={`Cart Subtotal $ ${subtotal.toFixed(2)}`}
        >
            <List>
                {cart.length === 0 ? <p>Empty</p> : <> <ClearBtn onClick={() => {
                    setCart([]);
                    toast.warn(`All books have been removed from the cart!`);
                }}>Clean the cart</ClearBtn> {cart.map((item, index) => (
                    <li key={index}>
                        <figure>
                            <img className="cover" src={item.image} alt={item.name} />
                            <figcaption>
                                {item.name}
                                <br />
                                <small>by {item.author}</small> <br />
                                <mark>$&nbsp;{item.price.toFixed(2)}</mark>
                            </figcaption>
                            <Button type="cart" item={item} />
                        </figure>
                        <hr />
                    </li>
                ))}</>}
            </List>
        </CustomPopup>
    </>
}

export default Cart;