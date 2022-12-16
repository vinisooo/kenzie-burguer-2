import { StyledModalBG } from "./styled";
import { ModalCart } from "./styled";
import { StyledBtn } from "../../Styles/DefaultBtn";

//CONTEXT
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

import CartCard from "../CartCard";

import { iProduct } from "../../DefaultInterfaces";

const CartModal = ()=>{

    const { cartProducts, setCartModal } = useContext(MenuContext);
    
    console.log(cartProducts.length)
    return(
        <StyledModalBG>
            <ModalCart>
                <header>
                    <h2>Carrinho de compras</h2>
                    <button onClick={()=> setCartModal(false)}>X</button>
                </header>
                {
                    cartProducts.length === 0?
                    <div className="no-products">
                        <h3>Sua sacola está vazia</h3>
                        <p>Adicione Itens</p>
                    </div>
                    :
                    <div>
                        <ul>
                            {
                                cartProducts.map((el: iProduct, index)=>{
                                    return(
                                        <CartCard key={index} product={el}/>
                                    )  
                                })
                            }
                        </ul>
                        <footer>
                            <div>
                                <h4>Total</h4>
                                <span>R$00</span>
                            </div>
                            <StyledBtn size="100%">Remover Todos</StyledBtn>
                        </footer>
                    </div>
                }
            </ModalCart>
        </StyledModalBG>
    )

}
export default CartModal;