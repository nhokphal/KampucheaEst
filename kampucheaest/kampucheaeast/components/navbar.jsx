import React from 'react'
import styled from 'styled-components'
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Service from './pages/service';
import Signup from './pages/signup';


const Container = styled.div
`
display: flex;
justify-content: space-between;
line-height: 16px;
width: 1400px;
background-color: red;
height: 50px;
left: 0px;
top: 0px;
`;


const Wrapper = styled.div
`
   display:flex; 
   gap: 10px;
`;

const Navbar = () => {
  return (
    <div>
       <Container>
        <Home/>
        <Wrapper>
        <Contact/>
        <About/>
        <Service/>
        </Wrapper>
        <Signup/>
       </Container> 
    </div>
  )
}

export default Navbar
