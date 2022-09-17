import React,{useEffect,useState} from 'react'
import styled from 'styled-components'

import Head from '../components/head'
import Navbar from '../components/navbar/navbar'

import ErrorCard from '../components/cards/error-card'
import Div from '../patterns/div'
import GridDiv from '../patterns/grid-div'
import FlexDiv from '../patterns/flex-div'
import Img from '../patterns/img'

import Dropdown from '../components/cards/dropdown'

import Footer from '../components/footer/footer'


const Card = styled.div`
    background-color:rgba(255,255,255,0.1);
    backdrop-filter:blur(5px);
    -webkit-backdrop-filter:blur(5px);
    width:600px;
    height:auto;
    position:relative;
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
  h3,span,p{
    color:#FFF;
  }
  h3{
    text-align:center;
    letter-spacing:2px;
  }
`


export default function SearchSeries() {
    let message = "Oh no, it looks like we are under attack, some of our data on our heroes is disappearing! I bet this is Hydra work..."

    const [apiData, setApiData] = useState([])

    let apiKey = process.env.NEXT_PUBLIC_API_KEY

    let hash = process.env.NEXT_PUBLIC_HASH

    async function getSeriesData(){
        let inputValue = document.querySelector(".input-search").value
        inputValue === "" ? inputValue = "Age of X: Universe" : inputValue
        let eventName = inputValue
        let url = `https://gateway.marvel.com:443/v1/public/series?title=${eventName}&ts=1&apikey=${apiKey}&hash=${hash}`
    
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
        getSeriesData()
    
        //execute with enter key
    
        let input = document.querySelector("input.input-search")
         input.addEventListener("keydown",(event) =>{
             if(event.key === "Enter"){
                 getSeriesData()
              }
            })
      },[])
      if(!apiData){return <h1 className='loading'>loading</h1>}
  return (
    <>
    <header>
        <Head title="Marvel Data | Search Event"/>
    </header>
    <Navbar/>
        <GridDiv margin="60px 20px" padding="20px" animation="fadeIn"> 
            <FlexDiv direction="column" justify="center" align="baseline">
            <h1 className='animate__animated animate__rubberBand animate__delay-1.5s'>Search Series</h1>
            <p>All the series made by Marvel are here! Search and discovery all datas about your favorite serie or discovery new series!</p>
            </FlexDiv>
                <Div>
                <Img src="/hulk.png" alt="Marvel Image" width="100%" className="marvel"/>
                </Div>
              </GridDiv>
         
                <FlexDiv direction="column" justify="center" align="center" padding="20px 0" bgColor="#141414">
                  <input placeholder="event name ex: Age of X: Universe" type="text" className='input-search'/>
                {apiData.map((data)=> data.data.count == 0 ? <ErrorCard key={data.code}/> : 
                    <Card key={data.data.count}>
                      {
                      data.data.results.map(datas =>
                      <Div padding="10px 0" key={"key" + datas.title}>
                        <h3>{datas.title}</h3>
                        <Img src={datas.thumbnail.path+"."+datas.thumbnail.extension} alt="image" key={"key" + datas.thumbnail.path}/>
                        <Div margin="10px" key={"key" + datas.description}>
                    {
                      datas.description === "" ? <p>{message}</p> : 
                      <p>{datas.description}</p>
                    }
                </Div>
                <Div padding="10px" key={"key" + datas.stories.items}>
                    <Dropdown title="Stories" data={datas.stories.items} bgColor="transparent" color="#FFF"/>
                    <Dropdown title="Comics" data={datas.comics.items} bgColor="transparent" color="#FFF"/>
                    <Dropdown title="Characters" data={datas.characters.items} bgColor="transparent" color="#FFF"/>
                  </Div>
                  </Div>
                )}
              </Card>
                )}
            </FlexDiv>
    <Footer/>
    </>
  )
}
