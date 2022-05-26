import React from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoSubComp from '../subComponents/LogoSubComp'
import PwrBtn from '../subComponents/PwrBtn'
import SocialIcons from '../subComponents/SocialSubComp'

import {Blogs} from '../data/BlogData'
import Blogcomponent from '../components/Blogcomponent'
import AnchorComponent from '../subComponents/Anchor'

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  
`

const Container= styled.div`
  background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const ProjectsPage = () => {
  return (

    <MainContainer>
      <Container>
        <LogoSubComp />
        <PwrBtn />
        <SocialIcons />
        <AnchorComponent />
        <Center>
          <Grid>
            {
              Blogs.map(blog => {
                return <Blogcomponent key={blog.id} blog={blog} />
              })
            }
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  )
}

export default ProjectsPage