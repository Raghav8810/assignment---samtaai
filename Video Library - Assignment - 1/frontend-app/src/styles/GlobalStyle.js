import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    *{
         font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body{
        font-size: 1.2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: rgb(192,33,146);
        background: linear-gradient(59deg, rgba(192,33,146,1) 0%, rgba(87,87,87,1) 0%, rgba(43,41,42,1) 0%);
        width: 100%
        height: 100%;
    }

    a{
        text-decoration: none;
        color: #fff;
    }

    button, input, textarea{
        font-family: inherit;
        font-size: inherit;
        outline: none;
    }

`;