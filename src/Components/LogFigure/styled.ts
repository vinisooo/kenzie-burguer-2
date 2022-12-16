import styled from "styled-components";

export const StyledLogFigureDiv = styled.div`

    display: flex;
    flex-direction: column;

    align-items: flex-start;

    width: 100%;

    gap: 23px;

    &:nth-child(3){
        background-color: red;
    }

    img{
        max-width: 100%;
    }

    div{
        padding: 16px 14px;
        
        display: flex;
        align-items: center;

        gap: 19px;

        width: 100%;

        border: 1px solid var(--color-grey-1);
        border-radius: 5px;
    }

    div figure{
        min-width: 60px;
        min-height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 5px;
        background: rgba(39, 174, 96, 0.1);
    }

    div p{
        text-align: start;
        line-height: 150%;

        color: var(--color-grey-3);

        font-size: 14px;
    }

    .test{
        display: none;
    }

    @media (min-width: 700px) {
        .test{display: block}
    }

`