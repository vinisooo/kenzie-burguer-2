import deleteIcon from "../../assets/icon/delete-icon.svg"
import { StyledCartCard } from "./styled";
import { iProduct } from "../../DefaultInterfaces";

//CONTEXT
import React, { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

interface iProps{
    product: iProduct;
}


const CartCard = ({product}: iProps)=>{

    const { cartProducts, addToCart, removeSameFromCart, removeFromCart } = useContext(MenuContext);

    return(
        <StyledCartCard>
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <div>
                <div>
                    <h3>{product.name}</h3>
                    <button onClick={()=> removeSameFromCart(product)}>
                        <img src={deleteIcon}/>
                    </button>
                </div>
                <footer>
                    <button onClick={()=>removeFromCart(product)}>-</button>
                    <span>{product.counter}</span>
                    <button onClick={()=>addToCart(product)}>+</button>
                </footer>
            </div>
        </StyledCartCard>
    )

}

export default CartCard;