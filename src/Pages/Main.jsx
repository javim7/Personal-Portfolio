import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { YinYang } from '../components/AllSvgs'
import LogoSubComp from '../subComponents/LogoSubComp'
import PwrBtn from '../subComponents/PwrBtn'
import SocialSubComp from '../subComponents/SocialSubComp'

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow: hidden;
position: relative;

h2,h3,h4,h5,h6{
  font-family: 'Karla', sans-serif;
  font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled.a`
color: ${props => props.theme.text};
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
text-decoration: none;
z-index: 1;
`

const Projects = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index: 1;
`

const Work = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const About = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const Skills = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.click ? '85%' : '50%'};
left: ${props => props.click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
  display: ${props => props.click ? 'none' : 'inline-block'};
  padding-top: 1rem;
}
`

const Main = () => {

  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <MainContainer>
      <Container>
        <PwrBtn />
        <LogoSubComp />
        <SocialSubComp />
        <Center click={click}>
          <YinYang onClick={()=> handleClick()} width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
          <span>click here</span>
        </Center>
        <Contact target="_blank" rel="noreferrer noopener" href="mailto:rjmombiela@gmail.com">
          <h2>
            Contact...
          </h2>
        </Contact>
         <Projects to='/projects'>
          <h2>
            Projects
          </h2>
        </Projects>
        <Work to='/work'>
          <h2>
            Work
          </h2>
        </Work>
        <BottomBar>
          <About to='/about'>
          <h2>
            About Me
          </h2>
          </About>
          <Skills to='/skills'>
          <h2>
            My Skills
          </h2>
        </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  )
}

export default Main