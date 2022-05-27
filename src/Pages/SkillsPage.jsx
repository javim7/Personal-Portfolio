import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from '../components/Themes'
import { Design, Develope } from '../components/AllSvgs'
import LogoSubComp from '../subComponents/LogoSubComp'
import PwrBtn from '../subComponents/PwrBtn'
import SocialSubComp from '../subComponents/SocialSubComp'
import ParticleSubComp from '../subComponents/ParticleSubComp'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Main = styled.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index:3;
  line-height: 1.5;
  cursor: pointer;
  font-family: 'Ubuntu Mono',monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }
`

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

   ${Main}:hover &{
    &>*{
      fill: ${props => props.theme.body};
    }
  }  

  &>*:first-child{
    margin-right: 1rem;
  }
`

const Description = styled.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  
  ${Main}:hover &{
     color: ${props => props.theme.body};
  } 

  strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul, p{
    margin-left: 2rem;
  }
`

const SkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme} >
      <Box>
        <LogoSubComp theme='light' />
        <SocialSubComp theme='light' />
        <PwrBtn theme='light' />
        <ParticleSubComp theme='light' />
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I am able to create neat and modern designs, which are visually appealing and easy to navigate. 
          </Description>
           <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Pages</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
           <Description>
            <strong>Tools I Use</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main> 
        <Main>
           <Title>
            <Develope width={40} height={40} /> Web Developer
          </Title>
          <Description>
            I am able to build a complete website from scratch, including the Frontend and Backend, to ensure maximum performance.
          </Description>
           <Description>
            <strong>Developer Skills</strong>
            <p>Html, Css, Js, React, Firebase, SQL, Lint, Jest</p>
          </Description>
           <Description>
            <strong>Tools I Use</strong>
              <p>VScode, Github, Codepen</p>
          </Description>
        </Main> 
      </Box>
    </ThemeProvider>
   
  )
}

export default SkillsPage