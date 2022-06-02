import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { darkTheme } from '../components/Themes'
import LogoSubComp from '../subComponents/LogoSubComp'
import PwrBtn from '../subComponents/PwrBtn'
import SocialSubComp from '../subComponents/SocialSubComp'
import ParticleSubComp from '../subComponents/ParticleSubComp'
import astronaut from '../assets/Images/spaceman.png'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
  0% {transform: translateY(-10px)}
  50% {transform: translateY(15px) translateX(15px)}
  100% {transform: translateY(-10px)}
`

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;

  img{
    width: 100%;
    height: auto;
  }
`

const Main = styled.div`
  position: absolute;
  top: 10rem;
  left: calc(5rem + 5vw);
  font-family: 'Ubuntu Mono', monospace;
  /* font-style: italic; */
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
`

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme} >
      <Box>
        <LogoSubComp theme='dark' />
        <SocialSubComp theme='dark' />
        <PwrBtn left='50%'/>
        <ParticleSubComp theme='dark' />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I am a 22 year old aspiring computer scientist based in Guatemala, and I am currently studying at Universidad del Valle de Guatemala.
          <br /> <br />
          I am really interested in full-stack development, since I really like designing eye-catching applications, but I also enjoy setting up a secure and organized backend for the page to be complete.
          <br /> <br />
          I always like to challenge myself because I know I am capable of many things, and I really enjoy solving problems because I think that there is no problem that can't be solved.
          
        </Main>
        <BigTitle text='ABOUT' top='10%' left='5%' />
      </Box>
    </ThemeProvider>
   
  )
}

export default AboutPage