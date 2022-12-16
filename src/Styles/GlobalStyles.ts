import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    button{
        cursor: pointer;
    }
    
    body{
        font-family: 'Inter', sans-serif;
        overflow-x: hidden;
    }

    :root{
        --color-primary: #27AE60;
        --color-secondary: #EB5757;

        --color-grey-6: #333333;
        --color-grey-3: #828282;
        --color-grey-1: #E0E0E0;
        --color-grey-0: #F5F5F5;

        --total-black: #000000;
        --total-white: #ffffff;

        --negative: #E60000;
        --warning: #FFCD07;
        --success: #168821;
        --information: #155BCB;
    }

`