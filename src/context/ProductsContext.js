import { createContext, useState } from "react"

export const ProductsContext = createContext(null)

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(["Apple", "Banana", "Orange", "Mango"]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    }

    return (
        <ProductsContext.Provider value={{products, addProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}
