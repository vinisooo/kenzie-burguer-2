import styled from "styled-components";

export const StyledHeader = styled.header`

    width: 100vw;

    background-color: var(--color-grey-0);

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

        gap: 20px;
    }
            
    nav >div{
        padding: 10px;
        border: 2px solid var(--color-grey-1);
        
        background-color: var(--total-white);
        height: 60px;

        width: 365px;
        border-radius: 8px;
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

    }

    img{
        pointer-events: none;
    }
    
`