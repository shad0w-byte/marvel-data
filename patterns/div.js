import React from 'react'
import styled from 'styled-components'
import 'animate.css'

//component with props


const Div = styled.div`
    background-color:${props => props.bgColor || "none"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};
    animation:${props => props.animation || "fadeIn"};
    animation-duration:${props => props.duration || "1s"};
    @media(max-width:576px){
        width:100%;
        height:auto;
        margin:10px 0;
        padding:10px 0;
    }
`

export default function div(props) {
    return (
        <Div
         bgColor={props.bgColor}
         width={props.width}
         heigth={props.height}
         margin={props.margin}
         padding={props.padding}
         animation={props.animation}
         animationDuration={props.duration}>
            {props.children}
        </Div>
    )
}
