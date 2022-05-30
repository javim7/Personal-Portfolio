import React, { useEffect, useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Soccer } from '../components/AllSvgs'
import { darkTheme } from '../components/Themes'
import {Work} from '../data/WorkData'
import BigTitle from '../subComponents/BigTitle'
import Card from '../subComponents/Card'
import LogoSubComp from '../subComponents/LogoSubComp'
import PwrBtn from '../subComponents/PwrBtn'
import SocialSubComp from '../subComponents/SocialSubComp'

const Box = styled.div`
background-color: ${props => props.theme.body};

height: 250vh;
position: relative;
overflow: hidden;
`

const Main = styled.ul`
position: fixed;
top: 12rem;
left:calc(10rem + 15vw);
height: 40vh;
display: flex;
color:white;
`

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`

const WorkPage = () => {

  const ref = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    let element = ref.current

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
      scrollRef.current.style.transform = `rotate(`+ window.pageYOffset + 'deg)'
    }

    window.addEventListener('scroll', rotate)

    return () =>  window.removeEventListener('scroll', rotate)

  }, [])
  

  return (
    <ThemeProvider theme={darkTheme} >
      <Box>
        <LogoSubComp theme='dark' />
        <SocialSubComp theme='dark' />
        <PwrBtn />
        <Main ref={ref}>
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
              )
          }
        </Main>
        <Rotate ref={scrollRef}>
          <Soccer width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <BigTitle text="WORK" top='10%' right='20%' />
      </Box>
    </ThemeProvider>
   
  )
}

export default WorkPage