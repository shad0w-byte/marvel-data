import styled from 'styled-components'
import 'animate.css'

// style made throught bootstrap's class

const NavbarStyle = styled.nav`

  nav.navbar{
    width:auto;
    padding:5px;
    background-color:#141414;
}

nav.navbar a.nav-link, a.nav-link.active{
    color:#FFF;
    font-size:18px;
    margin:5px;
    cursor:pointer;
    font-weight: bold;

    &:hover, &:active, &:focus{
        color:#e23636; 
        text-shadow: 1px 1px 10px  #e23636;
        font-weight:bold;
        font-size:20px;
        letter-spacing:1px;
        animation:pulse infinite;
        animation-duration:.5s ;
        transition:.1s ease-in-out;
    }
}


  
div.dropdown-menu{
    background-color:#141414;
    color:#FFF;
}

div.dropdown-menu a{
    background-color:#141414;
    color:#FFF;
    font-weight:bold ;

    &:focus, &:hover{
        background-color:#141414;
        color:#e23636;
        letter-spacing:1px;
        transition: .1s ease-in-out;
    }
}

img{
    animation:flipInX ease-in-out;
    animation-duration:2s;
}

// mobile button

.navbar-light .navbar-toggler {
    border-color:transparent;
    background:transparent;
}


`
// toggle icon

const BarStyle = styled.i`
    color:#e23636;
    font-size:1.65em;
`

export {NavbarStyle,BarStyle}

