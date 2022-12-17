import { StyledHeader } from "./styled";
import { Container } from "../../Styles/Container";
import { Link } from "react-router-dom";

import { StyledBtn } from "../../Styles/DefaultBtn";

//ICONS
import logo from "../../assets/icon/burguer-kenzie-logo.svg";
import searchIcon from "../../assets/icon/search-icon.svg";
import searchIconDark from "../../assets/icon/search-icon-dark.svg";
import cartIcon from "../../assets/icon/cart-icon.svg";
import leaveIcon from "../../assets/icon/leave-icon.svg";

//CONTEXT
import { useContext, useState } from "react";
import { MenuContext } from "../../Context/MenuContext";
import { UserContext } from "../../Context/UserContext";

const Header = ()=>{

    const { cartProducts, setCartModal, search, setSearch } = useContext(MenuContext);
    const { leaveProfile } = useContext(UserContext);

    const [input, setInput] = useState<boolean>(false);

    return(
        <StyledHeader>
            <Container>
                <Link to="/menu" className={input ? "mob-input": ""}>
                    <img className="logo" src={logo} alt="Kenzie Burguer" />
                </Link>
            
                <nav>
                    <div className={input ? "show-input": ""}>
                        <input onBlur={()=>setInput(false)} onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Digitar Pesquisa" type="text"/>
                        <StyledBtn small size="60px" color="green">
                            <img src={searchIcon}/>
                        </StyledBtn>
                    </div>
                    <button onFocus={()=>setInput(true)} className={input ? "mob-btn mob-input": "mob-btn"}>
                        <img src={searchIconDark}/>
                    </button>
                    <button className={input ? "mob-input": ""} onClick={()=> setCartModal(true)}>
                        <img src={cartIcon} />
                        <span>{cartProducts.length}</span>
                    </button>
                    <button className={input ? "mob-input": ""} onClick={()=>leaveProfile()}>
                        <img src={leaveIcon}/>
                    </button>
                </nav>
            </Container>
        </StyledHeader>
    )
}

export default Header