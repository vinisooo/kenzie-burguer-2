import styled from "styled-components";

export const LogContainer = styled.div`

    width: 100%;
    max-width: 960px;

    padding: 20px;

    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    
    gap: 15px;

    flex-wrap: wrap;

    @media (min-width: 700px) {
        flex-direction: row;

        >div{
            width: 40%;
        }
        >form{
            width: 58%;
        }
    }
    
`