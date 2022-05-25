import React from 'react'
// import { NavLink } from 'react-router-dom'
import { darkTheme } from '../components/Themes'
import styled from 'styled-components'
import { Instagram, Github, Twitter, Linkedin } from '../components/AllSvgs'

const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;
position: fixed;
bottom: 0;
left: 2rem;
z-index: 3;

&>*:not(:last-child){
  margin: 0.5rem 0;
}
`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? darkTheme.text : darkTheme.body};
`

const SocialSubComp = (props) => {
  return (
    <Icons>
      <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://github.com/javim7">
          <Github width={25} height={25} fill ={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
        </a>
      </div>
      <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/javier-mombiela-a46b98158/">
          <Linkedin  width={25} height={25} fill ={props.theme === 'dark' ? darkTheme.text : darkTheme.body }  />
        </a>
      </div>
       <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/javimombiela/">
          <Instagram width={25} height={25} fill ={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
        </a>
      </div>
      <div>
        <a style={{color: 'inherit'}} target="_blank" rel="noreferrer noopener" href="https://twitter.com/Javi_Mombiela">
          <Twitter width={25} height={25} fill ={props.theme === 'dark' ? darkTheme.text : darkTheme.body } />
        </a>
      </div>
      <Line color={props.theme} />
    </Icons>
  )
}

export default SocialSubComp