import styled from "styled-components";
import {Link} from 'react-router-dom';

interface iButtonProps{
    size?: string;
    small?: boolean;
}

export const StyledBtn = styled.button<iButtonProps>`

    padding: ${(props)=> props.small? "9px 16px" : "16px"};

    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    border: none;

    width: ${(props)=> props.size? props.size : "100%"};

    border-radius: 8px;

    background-color: ${(props)=> props.color === "green"? "var(--color-primary)": "var(--color-grey-0)" };

    color: ${(props)=> props.color === "green"? "var(--total-white)": "var(--color-grey-3)" };

    transition: 0.3s ease;

    :hover{
        color: ${(props)=> props.color !== "green" && "var(--color-grey-1)"};

        background-color: ${(props)=> props.color === "green"? "#93D7AF" : "var(--color-grey-3)"};

    }

`

export const StyledLink = styled(Link)<iButtonProps>`

    padding: ${(props)=> props.small? "9px 16px" : "16px"};

    font-weight: 600;
    font-size: 16px;
    line-height: 28px;

    display: flex;
    justify-content: center;

    text-align: center;
    text-decoration: none;


    border: none;

    width: ${(props)=> props.size? props.size : "100%"};

    border-radius: 8px;

    background-color: ${(props)=> props.color === "green"? "var(--color-primary)": "var(--color-grey-0)" };

    color: ${(props)=> props.color === "green"? "var(--total-white)": "var(--color-grey-3)" };

    transition: 0.3s ease;

    :hover{
        color: ${(props)=> props.color !== "green" && "var(--color-grey-1)"};

        background-color: ${(props)=> props.color === "green"? "#93D7AF" : "var(--color-grey-3)"};

    }

`