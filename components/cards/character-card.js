import React from 'react'
import styled from 'styled-components'
import 'animate.css'

import Div from '../../patterns/div'
import Img from '../../patterns/img'

import Dropdown from './dropdown'

const Card = styled.div`
  
    background-color:#141414;
    width:600px;
    height:100%;
    margin:40px 20px;
    border:1px solid #141414;
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    display:flex;
    flex-direction:column;
    align-items:baseline;
    justify-content:center;
    animation:flipInY ease-in-out;
    animation-duration:1.5s;
    box-shadow:2px 2px 10px #141414;
    box-shadow:2px 2px 20px #141414;
    box-shadow:2px 2px 30px #141414;
    @media(max-width:576px){
    background-color:#141414;
    width:100%;
    height:auto;
    margin:10px;

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

export default function characterCard({data}) {
  let message = "Oh no, it looks like we are under attack, some of our data on our heroes is disappearing! I bet this is Hydra work..."
  return (
    <Card>
        {
            data.data.results.map(character =>
            <Div padding="10px 0">
                <h3>{character.name}</h3>
                <Img src={character.thumbnail.path+"."+character.thumbnail.extension} alt="character image"/>
            <Div margin="10px">
                {
                  character.description === "" ? <p>{message}</p> : 
                  <p>{character.description}</p>
                }
                </Div>
                <Dropdown title="Comics" data={character.comics.items}/>
                <Dropdown title="event" data={character.events.items}/>
                <Dropdown title="Series" data={character.series.items}/>
                <Dropdown title="Stories" data={character.stories.items}/>
            </Div>
          )
        }
    </Card>
  )
}
