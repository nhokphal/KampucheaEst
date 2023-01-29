import React from 'react'
import styled from 'styled-components'


const Container = styled.div
`
  width: 1440;
  font-family: 'Roboto';
  position: relative;
  display: flex;
  height: 410px;
  min-height: 150px;
// `;
  const Wrapper = styled.div
  `
  padding: 50px;
  margin: auto;
  `;

  // const LineDivider = styled.div
  // `
  // border: 0.1px solid #000000;
  // background-color: red;
  // margin: 10px;
  // top: 1%;
  // `;

  const TextLogo = styled.div
  `
  font-family: 'Roboto';
  color: #000000;
  width: 5px;
  padding-top: 1px;
  text-transform: uppercase;
  `;


const TextParagraph = styled.div
`
  font-size: 13px;
  font-weight: 10px;
  left: 20%;
  right: 53.82%;
  top: 17.53%;
  bottom: 40.5%;
`;

const TextProduct = styled.div
`
line-height: 1.5;
`;
const TextProductParent = styled.div
`
  display: flex;
  gap: 50%;
  justify-content: space-between;
  font-size: 13px;

  `;

  const TextCopyRight = styled.div
  `
  position: absolute;
  bottom: 5px;
  width: 200px;
  background-color: white;
  font-size: 13px;
  padding-bottom: 1px;

  `;

const Footer = () => {
  return (
    <Container>
    <Wrapper>
    <TextLogo>
          Kampucheaest
      </TextLogo>  
    </Wrapper>
    <Wrapper>
      <TextParagraph>
      
      <h3>Ready to get started?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/> 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
      </TextParagraph>
    </Wrapper>
    <Wrapper>
      <TextProductParent>
      <TextProduct>
         <p>
          <b>Product</b>
          <br/>
          Product
          <br/>
          Product
          <br/>
          Product
          </p> 
      </TextProduct>     
      <TextProduct>
         <p>
          <b>Company</b>
          <br/>
          Company
          <br/>
          Company
          <br/>
          Company
          </p> 
      </TextProduct>
      </TextProductParent>
      <TextCopyRight>
      © 2010 — 2020  Privacy — Terms
      </TextCopyRight>
    </Wrapper>
    <Wrapper>
    </Wrapper>
    </Container>
  
  )

}

export default Footer
