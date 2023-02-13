import react from 'react';
import React, { useState } from 'react'
import styled from 'styled-components';



const Container = styled.div`
padding: 10px;
`;

const Wrapper = styled.div`
width: 1250px;
height: 1000px;
padding: 112px 64px;
gap: 48px;
display: flex;
`;

// const CardWrapper = styled.div`
// display: flex;
// `;


const Paragraph = styled.p`
top: 10px;
height: 10px;
padding: 15px;
margin: 10px;
`;

const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px;
  top: 10px;
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  margin: 10px;
  display: block;
  margin-bottom: 5px;
  /* color: ${props => props.invalid ? 'red' : 'black'}; */

`;

const StyledInputName = styled.input`
width: 100%;
padding: 10px;
border: 1px sold #ccc;
border-radius: 5px;

`;
const StyledInputEmail = styled.input`
width: 100%;
padding: 10px;
padding: 10px sold #ccc;
border-radius: 5px;

`;

const Button = styled.button`
  margin: 20px;
  top: 20px;
  height: 30px;
  width: auto;
  color: white;
  border: 0.5px solid black;  
  background-color: black;  

`;

const ContactCard = styled.text`
font-size: 20px;
height: 20px;
font-family: 'roboto';
margin: 30px;

`;


const Contact = () => {
  const [userName, setUserName] = react.useState('');
  const [email , setEmail] = react.useState('');
  const [nameInvalid, setNameInvalid] = React.useState(false);

   
    const handleSubmit = (e) => 
      {
        e.preventDefault();
        setUserName('');
        setEmail('');
        console.log('submitted')
        // setUserName('');
      }
   
  return (
    <Container>
    <Wrapper>
    <ContactCard>
        Contact Us 
        <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </Paragraph>
      <form onSubmit={handleSubmit}> 
          <StyledLabel htmlFor='name' >Name</StyledLabel>
          <div>
          <StyledInputName type="text" placeholder='name' name="name" value={userName} onChange={e => setUserName(e.target.value)}/>
          <StyledLabel invalid={setNameInvalid} >Password</StyledLabel>
          <StyledInputEmail type="text" placeholder='email' name="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
        {/* <StyledLabel invalid={setNameInvalid} >Name</StyledLabel> */}
        {/* <StyledInputEmail type="text" name="email"value={email} onChange={e => usernameEntered(e)}/> */}
        <Button type="submit" >Submit</Button>
        </form>
      </ContactCard>
    </Wrapper>
    </Container>
  )
}




export default Contact
