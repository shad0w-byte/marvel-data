import React from 'react'
import styled from 'styled-components'
import 'animate.css'

import Img from '../../patterns/img'

const Card = styled.div`
    background-color:rgba(255,255,255,0.1);
    width:600px;
    height:auto;
    position:relative;
    margin:40px 20px;
    padding:20px;
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
    animation:flipInY ease-in-out;
    animation-duration:1.5s;
  h3,span,p{
    color:#FFF;
  }
  h3{
    text-align:center;
    letter-spacing:2px;
    text-transform:uppercase;
  }
`


export default function errorcard() {
  return (
    <Card>
        <Img src="/ultron.png" alt="doctor-strange"/>
        <h3>An error ocurred</h3>
        <p>An error ocurred in request, verify the digited value and try again.</p>
        <p>If this error continue, know the utilized api in this website accept 3000 requests by hour, wait some time. The amazing datas awaits you!!</p>
    </Card>
  )
}
