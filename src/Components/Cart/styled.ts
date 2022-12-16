import styled from "styled-components";

export const StyledModalBG = styled.section`

    width: 100vw;
    height: 100vh;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 5;

    background-color: rgba(0,0,0,0.5);

`

export const ModalCart = styled.div`

    width: 100%;
    max-width: 500px;
    min-height: 100px;

    background-color: var(--total-white);

    transition: 0.4s ease;

    position: relative;

    header{
        position: absolute;
        top: 0;

        width: 100%;

        padding: 15px 22px;

        background-color: var(--color-primary);

        display: flex;
        justify-content: space-between;
    }

    header h2{
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        color: var(--total-white);
    }

    header button{
        background-color: transparent;
        border: none;

        color: var(--total-white);

        transition: 0.3s ease;
    }

    header button:hover{
        opacity: 0.85;
    }

    .no-products{
        height: 200px;

        display: flex;
        flex-direction: column;
        align-items: center;

        text-align: center;
        gap: 10px;
    }

    .no-products h3{
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: var(--color-grey-6);
    }

    .no-products p{
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        color: var(--color-grey-3);
    }

    >div{
        padding: 20px;
        padding-top: 100px;

        display: flex;
        flex-direction: column;
    }

    >div >footer{
        padding: 20px;

        border-top: 3px solid var(--color-grey-1);
        display: flex;
        flex-direction: column;

        gap: 20px;
    }

    >div footer >div{
        display: flex;
        justify-content: space-between;
    }

    >div footer > div h4{
        color: var(--color-grey-6);

        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
    }

    >div footer > div span{
        color: var(--color-grey-3);

        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
    }

    >div ul{
        width: 100%;

        max-height: 50vh;
        overflow-y: auto;

        display: flex;
        flex-direction: column;

        gap: 18px;
        padding-bottom: 30px;
    }

`