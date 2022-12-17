import Header from "../../Components/Header";
import { Container } from "../../Styles/Container";
import { StyledUl } from "./styled";
import Card from "../../Components/Card";
import CartModal from "../../Components/Cart";

//CONTEXT
import { useContext, useEffect } from "react";
import { MenuContext } from "../../Context/MenuContext";

//
import { iProduct } from "../../DefaultInterfaces";
import { Navigate, useNavigate } from "react-router-dom";


const Menu = ()=>{

    const { products, cartModal, getFiltered } = useContext(MenuContext);

    const token = localStorage.getItem("@kenzie-burguer: logged-user-token");

    const navigate = useNavigate();

    useEffect(()=>{
        if(!token){
            navigate("/login");
        }
    })
    
    return(
        <>
            <Header/>
            <Container>
                <StyledUl>
                    {
                        getFiltered().map((el: iProduct, index)=>{
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