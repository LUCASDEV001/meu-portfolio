import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

    body{
        background: #1B1B1B;
        overflow-x: hidden;
        text-decoration: none;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        background: transparent;
        color: #20C100;
        border: 3px solid #0087F1;
        border-radius: 5px;
        transition: all 0.5s ease;
        &:hover{
            background-color: #189100;
            color: black;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 1.2rem;
        color: lightgrey;
    }

    a{
        font-size: 1.1rem;
    }

    span{
        font-weight: lighter;
        color: #416CD5;
    }
    
    p{
        padding: 3rem 0rem;
        color: #CCC
        font-size: 1.4rem;
        line-height: 150%;
    }
`;

export default GlobalStyle;
