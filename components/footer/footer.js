import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/flex-div'
import Section from '../../patterns/section'

export default function footer() {
    return (
        <Footer>
            <FlexDiv  justify="center" align="baseline" width="100%" height="100%">
              <Section 
              margin="10px" width="50%">
                <h4>About</h4>
                <p>This website is a redesign of my old project with the same theme. This projects contains differents technologies and easter eggs!</p>
              </Section>
              <Section 
              margin="10px" width="50%">
                   <h4>Links</h4>
                   <ul>
                      <li>
                        <i className="bi bi-link"></i>
                        GitHub: <a href="/" target="_blank" rel="noreferrer">Click Here!</a></li>
                      <li>
                        <i className="bi bi-link"></i>
                        Marvel API: <a href="https://developer.marvel.com/" target="_blank" rel="noreferrer">Click Here!</a>
                        </li>
                   </ul>
              </Section>
            </FlexDiv>
            <FlexDiv padding="10px" justify="center" align="center" color="#161619">
                <span>
                    Developed with <i className='bi-suit-heart-fill'></i> by <a href="https://ssik824.vercel.app/" target="_blank" rel="noreferrer">ssik824</a>
                </span>
            </FlexDiv>
        </Footer>
    )
}