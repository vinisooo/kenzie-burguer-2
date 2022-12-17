import { StyledCard } from "./styled";
import { StyledBtn } from "../../Styles/DefaultBtn";

//CONTEXT
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

//
import { iProduct } from "../../DefaultInterfaces";

interface iProps{
    product: iProduct;
}

const Card = ({product}: iProps)=>{

    const { cartProducts, addToCart } = useContext(MenuContext);

    const addNewProduct = ()=>{
        const newProduct = { ...product, counter: 1 };
        addToCart(newProduct);
    }

    return(
        <StyledCard>
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <span>R${product.price.toFixed(2)}</span>
                <StyledBtn onClick={()=>addNewProduct()} size="50%" small>Adicionar</StyledBtn>
            </div>
        </StyledCard>
    )

}

export default Card