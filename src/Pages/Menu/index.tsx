import Header from "../../Components/Header";
import { Container } from "../../Styles/Container";
import { StyledUl } from "./styled";
import Card from "../../Components/Card";


import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

const Menu = ()=>{

    
    const token = localStorage.getItem("@kenzie-burguer: logged-user-token");


    return(
        <>
            <Header/>
            <Container>
                <StyledUl>
                    <Card product/>
                </StyledUl>
            </Container>
        </>
    )
    
}

export default Menu