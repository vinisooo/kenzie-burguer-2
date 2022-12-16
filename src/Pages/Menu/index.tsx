import Header from "../../Components/Header";
import { Container } from "../../Styles/Container";
import { StyledUl } from "./styled";
import Card from "../../Components/Card";


import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

const Menu = ()=>{
    
    const token = localStorage.getItem("@kenzie-burguer: logged-user-token");

    const { products } = useContext(MenuContext);

    return(
        <>
            <Header/>
            <Container>
                <StyledUl>
                    {
                        products.map((el: object)=>{
                            return(
                                <Card product={el}/>
                            )
                        })
                    }
                </StyledUl>
            </Container>
        </>
    )
    
}

export default Menu