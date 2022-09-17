import React from 'react'
import styled from 'styled-components'

import Link from 'next/link'

const Button = styled.button`
background-color:#e23636;
width:auto;
border-top-left-radius:8px;
border-bottom-right-radius:8px;
border:2px solid #e23636;
color:#0096FF;
display:block;
margin:20px 0;
&:hover{
  transform:scale(1.2);
  transition: .2s ease-in-out;
}


a{text-decoration:none; font-size:20px;font-weight:600; color:#f3f4f5; padding:20px;}
`

export default function button(props) {
  return (
    <>
    <Button bgColor={props.bgColor}>
        <Link href={props.url}>
           <a>{props.placeholder}</a>
        </Link>
    </Button>
    </>
  )
}
