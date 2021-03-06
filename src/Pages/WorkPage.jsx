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
import {motion} from 'framer-motion'

const Box = styled.div`
background-color: ${props => props.theme.body};

height: 250vh;
position: relative;
display: flex;
align-items: center;
`

const Main = styled(motion.ul)`
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

// framer motion setup
const container = {

  hidden: {opacity:0},
  show: {
    opacity:1,

    transition:{
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }

}

const WorkPage = () => {

  const ref = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    let element = ref.current

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`
 
      try {
       scrollRef.current.style.transform = `rotate(` + window.pageYOffset + 'deg)'
      } catch (error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
    }

    window.addEventListener('scroll', rotate)

    return () =>  window.removeEventListener('scroll', rotate)

  }, [])
  

  return (
    <ThemeProvider theme={darkTheme} >
      <Box>
        <LogoSubComp theme='dark' />
        <SocialSubComp theme='dark' />
        <PwrBtn left='50.4%'/>
         <Main ref={ref}   variants={container} initial='hidden' animate='show'  >
          {
            Work.map(d =>
              <Card key={d.id} data={d} />
              )
          }
        </Main>
        <Rotate ref={scrollRef}>
          <Soccer width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <BigTitle text="COURSES" top='10%' left='20%' />
      </Box>
    </ThemeProvider>
   
  )
}

export default WorkPage