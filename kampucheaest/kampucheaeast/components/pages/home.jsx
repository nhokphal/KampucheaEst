import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const RedLink = styled.a`
  color: blue;
  
` 
const Active = styled.a
` color: black;
`;
const NonActive = styled.a
`
 color: red;
`;

  return (
    <div>
    <Link href="/" passHref legacyBehavior>
    <RedLink className={currentRoute == "/" ? <RedLink/> : <NonActive/>}>
      Home
    </RedLink>
    </Link>
    </div>
  )
}

export default Home
