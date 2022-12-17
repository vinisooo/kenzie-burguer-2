import styled from "styled-components";

export const StyledUl = styled.ul`

    display: flex;
    overflow-x: scroll;

    gap: 50px;

    padding-top: 100px;
    padding-bottom: 50px;

    @media (min-width: 700px){
        flex-wrap: wrap;
        overflow-x: hidden;
    }
`