import { useContext } from "react"
import { ProductsContext } from "../context/ProductsContext.js"

export const ProductList = () => {
const {products, addProduct} = useContext(ProductsContext);

    return (
        <ul>
            {products.map((product) => (
                <li key={product}>
                    <h3>{product}</h3>
                </li>
            ))}
        </ul>
    )
}