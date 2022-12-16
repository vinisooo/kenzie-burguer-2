import Header from "../../Components/Header";
import { Container } from "../../Styles/Container";
import { StyledUl } from "./styled";
import Card from "../../Components/Card";
import CartModal from "../../Components/Cart";

//CONTEXT
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

//
import { iProduct } from "../../DefaultInterfaces";
import { Navigate } from "react-router-dom";


const Menu = ()=>{

    const { products, cartModal } = useContext(MenuContext);

    return(
        <>
            <Header/>
            <Container>
                <StyledUl>
                    {
                        products.map((el: iProduct, index)=>{
                            return(
                                <Card key={index} product={el}/>
                            )
                        })
                    }
                </StyledUl>
            </Container>

            {
            cartModal && <CartModal/>
            }
        </>
    )
    
}

export default Menu