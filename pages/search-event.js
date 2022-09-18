import React,{useEffect,useState} from 'react'


import Head from '../components/head'
import Navbar from '../components/navbar/navbar'
import Card from '../components/cards/default-card'

import ErrorCard from '../components/cards/error-card'

import Div from '../patterns/div'
import GridDiv from '../patterns/grid-div'
import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'


import Footer from '../components/footer/footer'

export default function SearchEvent() {

  const [apiData, setApiData] = useState([])

  let apiKey = process.env.NEXT_PUBLIC_API_KEY

  let hash = process.env.NEXT_PUBLIC_HASH

  async function getEventsData(){
    let inputValue = document.querySelector(".input-search").value
    inputValue === "" ? inputValue = "Age of X" : inputValue
    let eventName = inputValue
    let url = `https://gateway.marvel.com:443/v1/public/events?name=${eventName}&ts=1&apikey=${apiKey}&hash=${hash}`

    try {
      const response = await fetch(url)
      const apidata = await response.json()
      setApiData([apidata])
    } catch (error) {
      console.error(error)
      alert("ERROR! Verify the digited value")
    }
  }
  useEffect(() =>{
    getEventsData()

    //execute with enter key

    let input = document.querySelector("input.input-search")
     input.addEventListener("keydown",(event) =>{
         if(event.key === "Enter"){
             getEventsData()
          }
        })
  })
  if(!apiData){return <h1 className='loading'>loading</h1>}
  return (
    <>
    <header>
        <Head title="Marvel Data | Search Event"/>
    </header>
        <Navbar/>
            <GridDiv margin="60px 20px" padding="20px" animation="fadeIn"> 
                <FlexDiv direction="column" justify="center" align="baseline">
                    <h1 className='animate__animated animate__rubberBand animate__delay-1.5s'>Search Event</h1>
                    <p>Discovery events that occured in Marvel&apos;s Universe! Also discover the characters that participated in the event, comics made and more! </p>
                    </FlexDiv>
                <Div>
                <Img src="/miles-morales.png" alt="Marvel Image" width="100%" className="marvel"/>
                </Div>
              </GridDiv>
                <FlexDiv direction="column" justify="center" align="center" padding="20px 0" bgColor="#141414" margin="20px 0">
                  <input placeholder="event name ex: age of x" type="text" className='input-search'/>
                  {apiData.map((data)=> data.data.count == 0 ? <ErrorCard key={data.code}/> : <Card data={data} key={data.code}/>)}
                </FlexDiv>
        <Footer/>
    </>
  )
}
