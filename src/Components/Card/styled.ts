import styled from "styled-components";

export const StyledCard = styled.li`

    display: flex;
    flex-direction: column;

    height: 356px;
    min-width: 300px;

    border-radius: 5px;

    border: 3px solid var(--color-grey-1);
    transition: 0.3s ease;
    
    :hover{
        border: 3px solid var(--color-primary);
    }

    figure{
        height: 40%;
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    figure img{
        object-fit: cover;


        height: 100%;
    }

    div{
        height: 60%;
        padding: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        justify-content: space-between;
    }

    div h3{
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: var(--color-grey-6);
    }

    div p{
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;

        color: #828282;
    }

    div span{
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;

        color: var(--color-primary);
    }

`