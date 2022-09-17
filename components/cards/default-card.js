import React from 'react'
import styled from 'styled-components'
import 'animate.css'

import Div from '../../patterns/div'
import Img from '../../patterns/img'

import Dropdown from './dropdown'

const Card = styled.div`
    background-color:rgba(255,255,255,0.1);
    backdrop-filter:blur(5px);
    width:600px;
    height:auto;
    margin:40px 20px;
    border:1px solid #fff;
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
    animation:flipInY ease-in-out;
    animation-duration:1.5s;
    border:none;

    @media(max-width:576px){
    justify-content:baseline;
    width:100%;
    height:100%;
    margin:10px 0;
    padding:10px 0;

    img{
      width:100%;
      margin:0;
    }
  }
  h3,span,p{
    color:#FFF;
  }
  h3{
    text-align:center;
    letter-spacing:2px;
  }
`

export default function defaultCard({data}) {
  let message = "Oh no, it looks like we are under attack, some of our data on our heroes is disappearing! I bet this is Hydra work..."
  return (
    <Card>
        {
            data.data.results.map(datas =>
            <Div>
                <h3>{datas.title}</h3>
                <Img src={datas.thumbnail.path+"."+datas.thumbnail.extension} alt="image"/>
            <Div>
                {
                  datas.description === "" ? <p>{message}</p> : 
                  <p>{datas.description}</p>
                }
                </Div>
                <Div padding="10px">
                <Dropdown title="Comics" data={datas.comics.items} bgColor="transparent" color="#FFF"/>
                <Dropdown title="Series" data={datas.series.items} bgColor="transparent" color="#FFF"/>
                <Dropdown title="Stories" data={datas.stories.items} bgColor="transparent" color="#FFF"/>
                </Div>
            </Div>
          )
        }
    </Card>
  )
}
