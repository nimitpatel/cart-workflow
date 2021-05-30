import { useContext } from "react"
import Theme from "../contexts"
import { Button } from "./common/Button"

export const Cart = _ => {
    const { cartItems, setCartItems } = useContext(Theme) 

    return (
        <div className="right">
            <div className="cart-info">
                <h3><b>Cart</b></h3>
                <h3><b>{cartItems.length} items</b></h3>
            </div>
            <div className="items">
                {
                    cartItems?.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="item" key={item}>
                                <p>{item}</p>
                                <p>Delete</p>
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