import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {SiCloud66} from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux';
import { signOut }  from '../GlobalState'

export default function Header() {

  const dispatch = useDispatch()
  const userData = useSelector((state)=> state.currentUser)


  return (
    <Container>
      <Wrapper>
        <Ava to='/'>
          <SiCloud66 size={'2.5rem'}/>
          <Span>Welcome {userData?.userName}</Span>
        </Ava>

        {userData? <div>
          <Press>
            <Avatar src={userData?.avatar} />
            <Action to={'/post'}><Button>Add diary</Button></Action>
            <Action to={'/diary'}><Button>Diary</Button></Action>
            <Button onClick={() =>{
              dispatch(signOut())
            }}>Log out</Button>
          </Press>
        </div>: <div>
        <Press>
            <Action to={'/signin'}><Button>Log In</Button></Action>
            <Action to={'/signup'}><Button>Sign up</Button></Action>
          </Press>
        </div> }
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
background-color: #58A7A8;
height: 60px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  width: 110px;
  height: 35px;
  background-color: #000;
  color: #fff;
  font-weight: 400;
  font-size: 1rem;
  outline: none;
  border: none;
  border-radius: 8px;
  transition: all 100ms;
  transform: scale(1);
  margin: 0 5px;

    :hover{
        cursor: pointer;
        transform: scale(0.9);
        background-color: transparent;
        border: 3px solid #fff;
        color: #fff;
    }  
`;
const Ava = styled(Link)`
text-decoration: none;
cursor: pointer;
color: #fff;
`;
const Press = styled.div`
  display: flex;
  align-items: center;
`;
const Span = styled.span`
  font-weight: 700;
`;
const Action = styled(Link)`

`;
const Avatar = styled.img`
  background-color: black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;
