import { useContext } from "react"
import Context from "./Context";

export default function CartOverview(){
    const {context: {shoppingCart}} = useContext(Context);

    return (
        <div className="cart-overview">
            Items in cart: {shoppingCart.length}
        </div>
    )
}