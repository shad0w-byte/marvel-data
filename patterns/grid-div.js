import React from 'react'
import styled from 'styled-components'

// component with props

const GridDiv = styled.div`
    background-color:${props => props.bgColor || "transparent"} ;
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:auto;
    width:auto;
    height:100% ;
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "0px"};
    background-color:${props => props.bgColor || "none"};
    animation:${props => props.animation || "bounceIn"};
    animation-duration:${props => props.duration || "1s"};
    @media(max-width:576px){
        display:flex;
        flex-direction:${props => props.column || "column-reverse"};
        align-items:flex-start;
        justify-content:center;
    }
`


export default function gridDiv(props) {
    return (
        <GridDiv
        margin={props.margin}
        padding={props.padding}
        bgColor={props.bgColor}
        column={props.column}
        animation={props.animation}
        animationDuration={props.duration}>
            {props.children}
        </GridDiv>
    )
}
