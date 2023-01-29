import Link from 'next/link';
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
padding: 10px;
justify-content: space-between;
line-height: 16px;
width: 1400px;
height: 50px;
left: 0px;
overflow-y: hidden;
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
          <Link href="./contact">
          <Contact/>
          </Link>
          <Link href="./about">
            <About/>
          </Link>
          <Link href="./service">
            <Service/>
          </Link>
          </Wrapper>
          <Signup/>
       </Container> 
    </div>
  )
}

export default Navbar
