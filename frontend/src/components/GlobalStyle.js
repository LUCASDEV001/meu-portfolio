import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }

     html{
        @media (max-width: 1700px){
            font-size: 75%;
        }
    }

    body{
        background: #1B1B1B;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        text-decoration: none;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #0087F1;
        border-radius: 5px;
        background: transparent;
        color: #20C100;
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
        color: #0087F1;
    }
    
    p{
        padding: 3rem 0rem;
        color: #CCC;
        font-size: 1.4rem;
        line-height: 150%;
    }

    label{
        color: black;
        font-weight: bold;
    }
`;

export default GlobalStyle;
