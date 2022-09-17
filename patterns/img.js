import React from 'react'
import styled from  'styled-components'

// component with props

const Img = styled.img`
    position: relative;
    max-width:${props => props.width || "100%"};
    max-height:${props => props.height || "100%"};
    padding:${props => props.padding || "0"};
    margin:${props => props.margin || "0"};
    border:none;
    @media(max-width:576px){
        position:relative;
        width:100%;
        height:100%;
    }
`

export default function img(props) {
    return (
        <Img
        width={props.width}
        height={props.height}
        margin={props.margin}
        padding={props.padding}
        src={props.src}
        alt={props.alt}>
      
        </Img>
    )
}
