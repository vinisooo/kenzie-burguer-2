import { StyledCard } from "./styled";
import { StyledBtn } from "../../Styles/DefaultBtn";

interface iProduct{
    product: any;
}

const Card = ({product}: iProduct)=>{

    return(
        <StyledCard>
            <figure>
                <img src={product.image} alt={product.title} />
            </figure>
            <div>
                <h3>Hamburguer</h3>
                <p>Sanduíches</p>
                <span>R${product.price}</span>
                <StyledBtn size="50%" small color="green">Adicionar</StyledBtn>
            </div>
        </StyledCard>
    )

}

export default Card