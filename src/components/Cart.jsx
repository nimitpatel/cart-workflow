import { useEffect, useState } from "react"
import { Button } from "./common/Button"
import { Items } from "./common/Items"

export const Cart = ({ cartItems, setCartItems }) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        setCart(cartItems)
    }, [cartItems])

    return (
        <div className="right">
            <div className="cart-info">
                <h3><b>Cart</b></h3>
                <h3><b>{cart.length} items</b></h3>
            </div>
            <div className="items">
                {
                    cart?.length > 0 ? (
                        cart.map((item, idx) => (
                            <div className="item" key={idx}>
                                <Items item={item} />
                            </div>
                        ))
                    ) : (
                        <p className="empty">Your cart is empty</p>
                    )
                }
            </div>
            <Button label="Checkout" onClick={() => setCartItems([])} />
        </div>
    )
}