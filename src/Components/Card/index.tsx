import { StyledCard } from "./styled";
import { StyledBtn } from "../../Styles/DefaultBtn";

//CONTEXT
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";


interface iProduct{
    product: any;
}

const Card = ({product}: iProduct)=>{

    const { cartProducts, addToCart } = useContext(MenuContext);

    return(
        <StyledCard>
            <figure>
                <img src={product.img} alt={product.title} />
            </figure>
            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <span>R${product.price.toFixed(2)}</span>
                <StyledBtn onClick={()=>addToCart(product)} size="50%" small color="green">Adicionar</StyledBtn>
            </div>
        </StyledCard>
    )

}

export default Card