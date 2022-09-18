import React,{useEffect,useState} from 'react'

import Head from '../components/head'
import Navbar from '../components/navbar/navbar'
import CharacterCard from '../components/cards/character-card'


import Div from '../patterns/div'
import GridDiv from '../patterns/grid-div'
import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'

import ErrorCard from '../components/cards/error-card'

import Footer from '../components/footer/footer'


export default function SearchCharacter() {

  const [apiData, setApiData] = useState([])

  let apiKey = process.env.NEXT_PUBLIC_API_KEY

  let hash = process.env.NEXT_PUBLIC_HASH

  async function getCharacterData(){
    let inputValue = document.querySelector(".input-search").value
    inputValue === "" ? inputValue = "iron Man" : inputValue
    let character = inputValue
    let url = `https://gateway.marvel.com:443/v1/public/characters?name=${character}&ts=1&&apikey=${apiKey}&hash=${hash}`

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
    getCharacterData()

     // execute with "enter" key
     let input = document.querySelector("input.input-search")
     input.addEventListener("keydown",(event) =>{
         if(event.key === "Enter"){
             getCharacterData()
          }
        })
        
  },[])
  if(!apiData){return <h1 className='loading'>loading</h1>}
  return (
    <>
    <header>
        <Head title="Marvel Data | Search Character"/>
    </header>
        <main>
        <Navbar/>
            <GridDiv margin="60px 20px" padding="20px" animation="fadeIn"> 
                <FlexDiv direction="column" justify="center" align="baseline">
                    <h1 className='animate__animated animate__rubberBand animate__delay-1.5s'>Search Character</h1>
                    <p>Datas about a lot of character in a simple click! Insert character&apos;s name and see the magic!!</p>

                    <p><b>Fun fact:</b> Stark made the tecnologie behind this website in his office.</p>
                    </FlexDiv>
                <Div>
                <Img src="/iron-man.png" alt="Marvel Image" width="100%" className="marvel"/>
                </Div>
              </GridDiv>
                <FlexDiv direction="column" justify="center" align="center" padding="20px 0" bgColor="#e23636" margin="20px 0">
                  <input placeholder="character name ex: iron man" type="text" className='input-search'/>
                    {apiData.map((data)=> data.data.count == 0 ? <ErrorCard key={data.code}/> : <CharacterCard data={data} key={data.code}/>)}
                </FlexDiv>
        <Footer/>
        </main>
    </>
  )
}
