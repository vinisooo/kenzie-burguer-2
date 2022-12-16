import styled from "styled-components";

export const StyledCartCard = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;


    figure{
        width: 82px;
        height: 80px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-grey-1);
        border-radius: 5px;

        margin-right: 15px;
    }

    figure img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    >div{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 24px;
    }

    >div >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    >div >div h3{
        font-weight: 700;
        font-size: 18px;
        line-height: 0px;
    }

    >div >div button{
        background-color: transparent;
        border: none;
    }

    >div >div button:hover{
        opacity: 0.85;
    }


    >div >div button img{
        pointer-events: none;
    }

    >div footer{
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    >div footer span{
        height: 100%;
        padding: 10px;

        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        
        color: var(--total-black);
    }

    >div footer button{
        background-color: var(--color-grey-1);
        border: none;
        padding: 7px 10px;

        color: var(--color-secondary);

        transition: 0.3s ease;

        font-weight: 700;
    }

    >div footer button:hover{
        background-color: var(--color-secondary);
        color: var(--color-grey-1);
    }

`