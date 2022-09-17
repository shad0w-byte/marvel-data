import styled from 'styled-components'


const Footer = styled.footer`
    height:100%;
    width:100%;
    background-color:#141414;
    color:#fff;
    font-weight: bold;
    
    @media(max-width:576px){
        text-align:left;
        margin-top: 20px;
        padding-top: 10px;
    }
    @media(max-width:768px){
        margin-top: 30px;
    
    }
    @media(width:1024px){
        bottom:0;
        left:0;
        text-align:left;
    }
    a{
        color:#f3f4f5;
        text-decoration:none;
        font-weight:bold ;
    }
    span{
        font-size:18px;
        a{
            color:#e23636;
        }
    }
    
    ul{
        list-style:none;
        padding:0;
    }
    li{
        font-size:18px;
        font-weight:300;
    }
    b{
        color:#e23636;
    }

    h4{
        color:#e23636;
        text-transform:uppercase;
    }
    p{
        color:#FFF;
        font-weight:300;
        font-size:18px;
    }
    i.bi-suit-heart-fill{
        color:#E64848;
        vertical-align:middle;
    }
    i.bi-link{
        vertical-align:middle;
        margin-right:5px;
    }
`
export {Footer}