import { StyledHeader } from "./styled";
import { Container } from "../../Styles/Container";
import { Link } from "react-router-dom";

import { StyledBtn } from "../../Styles/DefaultBtn";

import logo from "../../assets/icon/burguer-kenzie-logo.svg";
import searchIcon from "../../assets/icon/search-icon.svg";
import cartIcon from "../../assets/icon/cart-icon.svg";
import leaveIcon from "../../assets/icon/leave-icon.svg";

const Header = ()=>{

    return(
        <StyledHeader>
            <Container>
                <Link to="/menu">
                    <img src={logo} alt="Kenzie Burguer" />
                </Link>
            
                <nav>
                    <div>
                        <input placeholder="Digitar Pesquisa" type="text"/>
                        <StyledBtn small size="60px" color="green">
                            <img src={searchIcon}/>
                        </StyledBtn>
                    </div>
                    <button>
                        <img src={cartIcon} />
                        <span>0</span>
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