import { useState } from "react"
import { Search } from "./common"
import { Button } from "./common/Button"
import { Items } from "./common/Items"

export const Product = ({ handleSearch, productList, cartItems, setCartItems }) => {
    const [search, setSearch] = useState('')
    const [cart, setCart] = useState([])

    const handleCheckbox = target => {
        if (target.checked) {
            setCart(item => [...item, target.value])
        }
    }

    return (
        <div className="left">
            <Search search={search} setSearch={setSearch} onClick={() => handleSearch(search)} />
            <div className="items">
                {
                    productList.map((item, idx) => (
                        <div className="item" key={idx}>
                            <Items item={item} checked={cart} onChange={handleCheckbox} isCheckbox />
                        </div>
                    ))
                }
            </div>
            <Button
                label="Add to Cart"
                onClick={() => {
                    setCartItems([...cartItems, cart].flat())
                    setCart([])
                }}
            />
        </div>
    )
}