import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`

    width: 100vw;

    background-color: var(--color-grey-0);

    z-index: 3;

    position: fixed;

    .logo{   
        width: 158.94px;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 80px;
        padding: 10px;
    }

    div > nav{
        display: flex;
        align-items: center;
        justify-content: flex-end;

        gap: 20px;
        width: 100%;
    }
            
    nav >div{
        padding: 10px;
        border: 2px solid var(--color-grey-1);
        
        background-color: var(--total-white);
        height: 60px;

        width: 100%;
        border-radius: 8px;

        display: none;
    }
    

    @media (min-width: 700px) {

        div > nav{
            width: 60%;
        }

        nav > div{
            display: flex;

            width: 376px;
        }
    }

    nav >div >input{
        border: none;
        padding: 10px;

        outline: none;

        width: 80%;
    }

    nav > button{
        background-color: transparent;
        border: none;
        position: relative;
    }

    nav > button > span{
        background-color: var(--color-primary);
        position: absolute;
        top: -10px;
        right: 0;
                    
        padding: 4px;

        border-radius: 7px;

        color: var(--total-white);
        font-weight: 700;
    }

    img{
        pointer-events: none;
    }

    @media (max-width: 700px) {
        .mob-input{
            display: none;
        }
        .show-input{
            display: flex;
            width: 100%;
        }
    }

    @media (min-width: 700px){
        .mob-btn{
            display: none;
        }
    }

    
`