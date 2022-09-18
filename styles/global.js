import {createGlobalStyle} from 'styled-components'
import 'animate.css'

const GlobalStyle = createGlobalStyle`
   
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
        overflow-y:hidden ;
    }
    
    h1,h2,h3,h4,h5,h6{
        font-weight:800;
        color:#141412;
        text-transform:uppercase;
    }
    a{
        text-decoration:none;
    }
    p{
        text-align:left;
        margin:10px 0;
        font-size:22px;
        letter-spacing:1px;
        color:#141414;
    }
    img{
        max-width:100%;
        height:100%;
        &:hover{
            transition: .2s ease-in-out;
        }
        @media(max-width:576px){
            width:100%;
            height:100%;
        }
    }
        a{
            color:#FFF;
            font-weight:bold;
        }
    input{
        background-color:#f3f4f5;
        backdrop-filter:blur(5px);
        border:1px solid transparent;
        border-top-left-radius:4px;
        border-bottom-right-radius:4px;
        outline:none;
        padding:10px;
        margin:0 10px;
        color:#141414;
        font-size:18px;
        font-weight:600;

        @media(max-width:576px){
            width:100%;
            margin:20px;
        }
    }   
    .loading{
        color:#FFF;
        text-transform:uppercase;
        letter-spacing:2px;
    }
`
export default GlobalStyle