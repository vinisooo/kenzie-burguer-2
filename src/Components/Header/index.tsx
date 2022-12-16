import { StyledHeader } from "./styled";
import { Container } from "../../Styles/Container";
import { Link } from "react-router-dom";

import { StyledBtn } from "../../Styles/DefaultBtn";

//ICONS
import logo from "../../assets/icon/burguer-kenzie-logo.svg";
import searchIcon from "../../assets/icon/search-icon.svg";
import cartIcon from "../../assets/icon/cart-icon.svg";
import leaveIcon from "../../assets/icon/leave-icon.svg";

//CONTEXT
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

const Header = ()=>{

    const { cartProducts, setCartModal } = useContext(MenuContext);

    return(
        <StyledHeader>
            <Container>
                <Link to="/menu">
                    <img className="logo" src={logo} alt="Kenzie Burguer" />
                </Link>
            
                <nav>
                    <div>
                        <input placeholder="Digitar Pesquisa" type="text"/>
                        <StyledBtn small size="60px" color="green">
                            <img src={searchIcon}/>
                        </StyledBtn>
                    </div>
                    <button onClick={()=> setCartModal(true)}>
                        <img src={cartIcon} />
                        <span>{cartProducts.length}</span>
                    </button>
                    <button>
                        <img src={leaveIcon}/>
                    </button>
                </nav>
            </Container>
        </StyledHeader>
    )
}

export default Header