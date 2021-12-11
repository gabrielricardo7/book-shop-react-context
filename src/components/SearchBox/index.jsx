import { useContext, useState } from "react";
import { ProductsContext } from "../../providers/products";
import { FcSearch } from "react-icons/fc";
import { SearchForm } from "./style";
import { toast } from "react-toastify";

const SearchBox = () => {
    const [search, setSearch] = useState("");

    const { initialState, products, restoreProducts, searchProducts } = useContext(ProductsContext);

    const handleSearch = (event) => {
        event.preventDefault();
        if (search === "") {
            restoreProducts();
            if (products.length === initialState.length) {
                toast.warn(`Type in the search field and click the button!`);
            } else {
                toast.info(`Showing all the books in the store!`);
            }
        } else {
            searchProducts(search, setSearch);
        }
    };

    return (
        <SearchForm onSubmit={handleSearch}>
            <input value={search} placeholder="Search…" onChange={(e) => setSearch(e.target.value)} />
            <button type="submit"><FcSearch size="2em" /></button>
        </SearchForm>
    )
}

export default SearchBox;