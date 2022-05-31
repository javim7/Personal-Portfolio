import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import LogoSubComp from '../subComponents/LogoSubComp'
import SocialIcons from '../subComponents/SocialSubComp'

import {Blogs} from '../data/BlogData'
import Blogcomponent from '../components/Blogcomponent'
import AnchorComponent from '../subComponents/Anchor'
import PwrBtn from '../subComponents/PwrBtn'
import BigTitle from '../subComponents/BigTitle'
import{motion} from 'framer-motion'

const MainContainer = styled(motion.div)`
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

  const [numbers, setNumbers] = useState(0);
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30
    setNumbers(parseInt(num))
  }, [])
  

  // Framer-motion stup
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

 return (

   <MainContainer
      variants={container}
      initial='hidden'
      animate='show'
      exit={{
          opacity:0, transition:{duration: 0.5}
      }}
   >
      <Container>
        <LogoSubComp />
        <SocialIcons />
        <PwrBtn />
        <AnchorComponent numbers={numbers} />
        <Center>
          <Grid>
            {
              Blogs.map(blog => {
                return <Blogcomponent key={blog.id} blog={blog} />
              })
            }
          </Grid>
       </Center>
       <BigTitle text='PROJECTS' top='5rem' left='5rem' />
      </Container>
    </MainContainer>
  )
}

export default ProjectsPage