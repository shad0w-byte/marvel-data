import React from 'react'

import Head from '../components/head'
import Navbar from '../components/navbar/navbar'

import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'

import Button from '../components/button/button'

import Footer from '../components/footer/footer'



export default function homeContent() {
  return (
    <>
    <header>
        <Head title="Marvel Data by ssik824"/>
    </header>
        <Navbar/>
        <GridDiv margin="40px 20px" padding="20px" animation="fadeInUp"> 
                <Div margin="0 0 0 20px">
                    <h1 className='animate__animated animate__rubberBand animate__delay-1.5s'>inside the marvel universe</h1>
                    <p>Discovery more about MCU in a simple click! Get datas abouts events, HQs and characters, reliably and quickly.</p>

                    <p>This Website use <b>Marvel API</b>, an oficial API made by Marvel with datas about your characters, comics, events and more!.</p>

                    <div>
                    <h2>Explore the tools!</h2>

                    <Button  url="/search-character" placeholder="Search Character"/>
                    <Button  url="/search-events" placeholder="Search Events"/>
                    <Button url="/search-series" placeholder="Search Series"/>
                    </div>
                </Div>
                <FlexDiv justify="center" align="center">
                <Img src="/marvel.svg" alt="Marvel Image" width="100%" className="marvel"/>
                </FlexDiv>
                </GridDiv>
        <Footer/>
    </>
  )
}
