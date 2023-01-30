import React from 'react'
import styled from 'styled-components'

const Container = styled.div
`
    margin: 10px;
    padding: 10px;
`;
const Wrapper = styled.div
`
    display: flex;
`;
const WrapperSignUp = styled.div
`
    padding: 20px;
    margin: 30px;  
`;
const Text = styled.h1
`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 46px;
    line-height: 66px;
    overflow-y: hidden;
    flex:1;
`;
const Paragraph = styled.p
`
    font-family: 'Roboto';
    font-style: normal;
    font-size: 20px;
    line-height: 20px;
    overflow-y: hidden;
    flex:1;
`;

const BoardCard = styled.div
`
    width: 670px;
    height: 480px;
    background: #FFFFFF;
    border: 1px solid #000000;
    margin: 20px;
    padding: 10px;

`;

const ButtonCard = styled.button
`
    width: 12px;
    height: 12px;
    left: 699px;
    top: 126px;
    border: 1px solid #000000;
    border-radius: 50%;
    background: #FFFFFF;
`;
const ButtonCardWrapper = styled.div
`
    gap: 10px;
    display: flex;
`;

const ButtonCardStartTrail = styled.div
`
    width: 1300px;
    height: 500px; 
    justify-content: center;
    align-items: center;
    text-align: center;
 `;


const Button = styled.button
`
    font-family: 'roboto';
    top: 30px;
    margin: 10px;
    width: 200px;
    height: 50px;
    font-size: 20px;
    border: 1px solid black;  
    background-color: black;  
    border-radius: 3px;

`;

const StartFreeTrialButton = styled.text
`
color: white;
${Button}:hover & {
    color: grey;
}
`;

const Index = () => (
    <Container>
        <Wrapper>

            <WrapperSignUp>
                <Text>
                    Your best Value <br />Preposition
                </Text>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor <br />incididunt ut labore et dolore magna aliqua.
                </Paragraph>
                <Button>
                <StartFreeTrialButton>
                    Get Started
                </StartFreeTrialButton>
                </Button> 
            </WrapperSignUp>
            <WrapperSignUp>
                <BoardCard>
                    <ButtonCardWrapper>
                        <ButtonCard />
                        <ButtonCard />
                        <ButtonCard />
                    </ButtonCardWrapper>
                </BoardCard>
            </WrapperSignUp>
        </Wrapper>
        <Wrapper>
            <ButtonCardStartTrail>
                <Text>
                    Value Proposition
                </Text>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Paragraph>
                <Button>
                <StartFreeTrialButton>
                    Start free trial         
                </StartFreeTrialButton>
                </Button>
            </ButtonCardStartTrail>
        </Wrapper>

    </Container>

)

export default Index
