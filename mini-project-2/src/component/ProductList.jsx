import { useContext, useMemo, useState } from "react";
import useDebounce from "../hooks/useDebounce";
import { CartContext } from "../context/CartContext";

const HARDCODED_PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 99 },
  { id: 2, name: "Mechanical Keyboard", price: 149 },
  { id: 3, name: "Gaming Mouse", price: 59 },
  { id: 4, name: "Ultra-Wide Monitor", price: 499 },
  { id: 5, name: "USB-C Docking Station", price: 129 },
  { id: 6, name: "Ergonomic Chair", price: 299 },
];

function ProductList() {
  const [searchItem, setSearchItem] = useState("");

  const debounceSearchItem = useDebounce(searchItem, 500);
  const {addItems} = useContext(CartContext);

  const filteredProducts = useMemo(() => {
    console.log("filtering...");

    if (!debounceSearchItem.trim()) return HARDCODED_PRODUCTS;

    return HARDCODED_PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(debounceSearchItem.toLowerCase()),
    );
  }, [debounceSearchItem]);

  return (
    <>
      <input
        type="text"
        placeholder="search product"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span> - {product.price}
            <button onClick={() => addItems(product)}>add to cart</button>
          </li>
        ))}
        {filteredProducts.length === 0 && <li>no products found</li>}
      </ul>
    </>
  );
}

export default ProductList;
