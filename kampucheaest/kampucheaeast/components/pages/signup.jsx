import React from 'react'
import styled from 'styled-components';

const Button = styled.button
`
    left: 50.5%;
    right: 2.78%;
    bottom: 18.75%;
    height: 60%;
    width: 6%;
    border: 1px solid black;  
    background-color: black;  
    border-radius: 3px;
    `;
const Text = styled.text
`
    color: white;
    ${Button}:hover & {
      color: red;
    }
`;


const Signup = () => {
  return (
    <Button>
        <Text>
        signup
        </Text>
    </Button>
  )
}

export default Signup
