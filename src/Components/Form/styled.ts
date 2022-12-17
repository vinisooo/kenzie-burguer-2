import styled  from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`

    width: 100%;
    max-width: 500px;

    border-radius: 5px;

    min-height: 200px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    border: 2px solid var(--color-grey-0);

    padding: 26px 24px;

    header{
        display: flex;
        justify-content: space-between;
    }

    header h1{
        text-align: start;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;

        color: var(--color-grey-6);
    }

    footer{
        display: flex;
        flex-direction: column;
        gap: 20px;
        
    }

`