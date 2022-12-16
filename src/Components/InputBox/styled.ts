import styled from "styled-components";

export const StyledFieldSet = styled.fieldset`

    position: relative;
    
    width: 100%;
    text-align: start;

    input{
        width: 100%;
        padding: 20px;

        border-radius: 8px;
        border: 2px solid var(--color-grey-0);

        outline: none;
        transition: 0.3s ease;

        font-size: 16px;

        background-color: var(--color-grey-0);
    }

    input:focus{
        border: 2px solid var(--color-grey-3);
        background-color: var(--total-white);
    }

    label{
        pointer-events: none;

        position: absolute;
        left: 10px;
        top: -12px;

        transition: 0.3s ease;

        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: var(--color-grey-3);
        padding: 4px 15px;

        transform: translateY(28px);
    }
    input:valid ~ label,
    input:focus ~ label{

        transform: translateY(0);
        font-size: 12px;
        color: #999999;
        background-color: var(--total-white);
    }

    span{
        margin-top: 10px;
        color: var(--negative);

        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }


    .errorInput{
        border: 2px solid var(--negative);
    }

    .errorInput:focus{
        border: 2px solid var(--negative);
    }
`