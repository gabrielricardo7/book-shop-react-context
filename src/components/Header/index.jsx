import Cart from "../Cart";
import { MyHeader } from "./style";

const Header = () => {
  return (
    <>
      <MyHeader>
        <img
          src="images/book-pile-by-gabrielricardo7(256).png"
          alt="Books"
        />
        <h1>
          Book Shop
          <br />
          <small> by Gabriel Ricardo</small>
        </h1>
        <Cart />
      </MyHeader>
    </>
  );
};

export default Header;
