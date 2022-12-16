import { StyledLogFigureDiv } from "./styled";
import logo from "../../assets/icon/burguer-kenzie-logo.svg"
import bagIcon from "../../assets/icon/shopping-bag.svg";
import dotted from "../../assets/icon/dotted-pattern.svg";

const LogFigure = ()=>{

    return(
        <StyledLogFigureDiv>
            <img src={logo} alt="burguer kenzie"/>
            <div>
                <figure>
                    <img src={bagIcon} alt="burguer kenzie"/>
                </figure>
                <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
            </div>
            <img className="test" src={dotted} alt="" />
        </StyledLogFigureDiv>
    )

}

export default LogFigure