import React from 'react'
import styled from 'styled-components'


const Container = styled.div
`
  margin: 10px;
  padding: 10px;
  width: 1440;
  height: 410px;
  position: absolute;
`;

const LineDivider = styled.div
`
border: 1px solid #000000;
right: 50%;
left: 50%;
top: 7.89%;
bottom: 7.89%;
`;

const TextLogo = styled.p
`
font-family: 'Roboto';
left: 9%;
right: 85%;
top: 15.53%;
bottom: 76.52%;
text-align: center;
color: #000000;
text-transform: uppercase;
`;


const TextParagraph = styled.p
`

`;

const Footer = () => {
  return (
    <Container>
      <TextLogo>
        Kampucheaest
      </TextLogo>
    <TextParagraph>
    <h3>Ready to get started?</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      <br/>ut aliquip ex ea commodo consequat.
    </TextParagraph>
    </Container>
  
  )

}

export default Footer
