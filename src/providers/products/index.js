import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
    const initialState = [
        { id: 1, name: "The Hobbit", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/10584451-L.jpg", price: 6 },
        { id: 2, name: "Hunger Games", author: "Suzanne Collins", image: "https://covers.openlibrary.org/b/id/12024278-L.jpg", price: 7 },
        { id: 3, name: "The Mortal Instruments 1: City of Bones", author: "Cassandra Clare", image: "https://covers.openlibrary.org/b/id/10477494-L.jpg", price: 10 },
        { id: 4, name: "The Maze Runner and The Scorch Trials", author: "James Dashner", image: "https://covers.openlibrary.org/b/id/8414866-L.jpg", price: 10 },
        { id: 5, name: "The Lightning Thief", author: "Rick Riordan", image: "https://covers.openlibrary.org/b/id/7357496-L.jpg", price: 7 },
        { id: 6, name: "Le Petit Prince", author: "Antoine de Saint-Exupéry", image: "https://covers.openlibrary.org/b/id/10708267-L.jpg", price: 5 },
        { id: 7, name: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/9256226-L.jpg", price: 11 },
        { id: 8, name: "Harry Potter and the Chamber of Secrets", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/12025394-L.jpg", price: 29 },
        { id: 9, name: "Harry Potter and the Prisoner of Azkaban", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/12025581-L.jpg", price: 22 },
        { id: 10, name: "Harry Potter and the Goblet of Fire", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/12025510-L.jpg", price: 12 },
        { id: 11, name: "Harry Potter and the Order of the Phoenix", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/12025650-L.jpg", price: 17 },
        { id: 12, name: "Harry Potter and the Half-Blood Prince", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/9326654-L.jpg", price: 20 },
        { id: 13, name: "Harry Potter and the Deathly Hallows", author: "J. K. Rowling", image: "https://covers.openlibrary.org/b/id/12001885-L.jpg", price: 15 },
        { id: 14, name: "Harry Potter and the Cursed Child", author: "Jack Thorne, John Tiffany, J. K. Rowling", image: "https://covers.openlibrary.org/b/id/10716316-L.jpg", price: 8 },
        { id: 15, name: "Hobbit: An Unexpected Journey", author: "J.R.R. Tolkien", image: "https://covers.openlibrary.org/b/id/10762990-L.jpg", price: 18 },
    ];

    const [products, setProducts] = useState(initialState);

    const restoreProducts = () => {
        setProducts(initialState);
    };

    const searchProducts = (search, setSearch) => {
        const foundBooks = initialState.filter(
            (product) =>
                product.name.toLowerCase().includes(search) ||
                product.author.toLowerCase().includes(search)
        );
        setProducts(foundBooks);
        if (foundBooks.length === 0) {
            toast.error(`Search results for ${search}: no books found!`);
        } else {
            toast.info(`Search results for ${search}: ${foundBooks.length} ${foundBooks.length === 1 ? "book" : "books"} found!`);
        }
        setSearch("");
    };

    return (
        <ProductsContext.Provider value={{ initialState, products, restoreProducts, searchProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}