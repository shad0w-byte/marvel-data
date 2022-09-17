import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import styled from 'styled-components'

const AccordionStyle = styled.div`

button.accordion-button{
        background:${props => props.bgColor || "#202020"};
        padding:20px;
        font-weight:bolder;
        font-size:18px;
        text-transform:uppercase;
        color:${props => props.color || "#e23636"};
        border:1px solid ${props => props.color || "#141414"};
       &:hover{
            color:${props => props.color || "#e23636"};
            letter-spacing:2px;
            transition:.5s ease-in-out ;

        }
        &:focus{
            color:${props => props.color || "#e23636"};
            letter-spacing:2px;
            transition:.5s ease-in-out ;
        } 
    }
    div.accordion-body{  
        font-size:18px;
        color:#FFF;
        background-color:transparent ;
    }

   div.accordion-item{
        margin:10px 0;
        background:${props => props.bgColor || "#141414"};
        width:auto ;
        border:none;
    }
`
export default function accordion({bgColor,data,title,color}) {
    return (
        <AccordionStyle bgColor={bgColor} color={color}>
        <Accordion className="text-light">
      <Accordion.Item eventKey="0">
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
        {
            data.map(data => 
                <ul key={Math.random()+data.name}>
                    <li>
                        {data.name}
                    </li>
                </ul>
            )
        }
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </AccordionStyle>
    )
}