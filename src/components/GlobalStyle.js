import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
    }
    html{
        @media (max-width : 1700px){
            font-size: 85%;
        }
    }
    body{
        background: #1b1b1b;
        font-family: 'Poppins', sans-serif;
       

    }
    button{
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;
        &:hover{
            background: #23d997;
            color: #fff;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 3rem;
        text-transform: capitalize;
    }
    h3{
        color: #fff;
    }
    h4{
        font-weight: bold;
        font-size: 1.5rem;
        
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    a{
        font-size: 1rem;
    }
    p{
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.2rem;
        line-height: 150%;
    }





`
export default GlobalStyle;