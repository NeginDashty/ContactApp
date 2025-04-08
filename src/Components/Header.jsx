import styled from "styled-components";

const Container=styled.div`
    margin: 0 auto;
    text-align: center;

`;

const HeaderText=styled.h1`
  color : #304ffe;
  margin-bottom: 20px;


`;

const P=styled.p`
    color: grey;
    
`
const Link=styled.a`
    text-decoration: none;
   
    color:#304ffe;
    background-color: #bbdefb;
    padding: 3px 5px;
    border-radius: 5px;
    transition: all ease-in-out 0.2s;
    &:hover{
        color: #bbdefb;
        background-color: #304ffe;
    }
`


function Header(params) {
    return(
        <>
        <Container>
            <HeaderText>Contact App</HeaderText>
            <P>
                <Link href="https://github.com/NeginDashty" target="_blank">
                 GitHub 
                </Link>
                | JS | React
            </P>
        </Container>
        </>
    )
};

export default Header;