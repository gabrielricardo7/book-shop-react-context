import Header from "../../components/Header";
import SearchBox from "../../components/SearchBox";
import ProductList from "../../components/ProductList";
import { ProductsProvider } from "../../providers/products";
import { CartProvider } from "../../providers/cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <>
      <ProductsProvider>
        <CartProvider>
          <Header />
          <div style={{ marginTop: "64px" }}>
            <SearchBox />
            <ProductList />
          </div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ fontSize: "16px" }}
          />
        </CartProvider>
      </ProductsProvider>
    </>
  );
};

export default Home;
