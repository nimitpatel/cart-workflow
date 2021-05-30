import { useContext, useEffect, useState } from "react"
import Theme from "../contexts"
import { Search } from "./common"
import { Button } from "./common/Button"

export const Product = ({ handleSearch }) => {
    const [search, setSearch] = useState('') 
    const [cart, setCart] = useState([])

    const { productList, cartItems, setCartItems } = useContext(Theme) 
    
    useEffect(() => {
        setCart(cartItems)
    }, [])

    const handleCheckbox = target => {
        if (target.checked) { 
            setCart(item => [...item, target.value])
        }
    }
    
    return (
        <div className="left">
            <Search setSearch={setSearch} onClick={() => handleSearch(search)} />
            <div className="items">
                {
                    productList.map((item, idx) => (
                        <div className="item" key={idx}>
                            <input 
                                type="checkbox" 
                                name={item} 
                                id={item} 
                                value={item}
                                onChange={({ target }) => handleCheckbox(target)}
                            />
                            <label htmlFor={item}>{item}</label>
                        </div>
                    ))
                }
            </div>
            <Button 
                label="Add to Cart" 
                onClick={() => {
                    setCartItems(cart) 
                    //setCart(cartItems)
                }} 
            />
        </div>
    )
}