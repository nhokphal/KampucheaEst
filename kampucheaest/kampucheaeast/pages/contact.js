import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
padding: 10px;
`;

const Wrapper = styled.div`
width: 1440px;
height: 1274px;
justify-content: center;
display: flex;
`;

const ContactCard = styled.text`
font-size: 25px;
font-family: 'roboto';
`;

const Paragraph = styled.text`
flex: none;
`;


const Contact = () => {
  return (
    <Container>
    <Wrapper>
    <ContactCard>
        Contact Us 
    </ContactCard>
      <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Paragraph>  
    </Wrapper>
    </Container>
  )
}

export default Contact
