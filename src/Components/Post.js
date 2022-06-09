import React from 'react'
import styled from 'styled-components'
import {FaImages} from 'react-icons/fa'
import Diary from './Diary'

export default function Post() {


  return (
      <>
    <Container>
        <Wrapper>
            <Topper>
                <Head>What's Happening?</Head>
                <Upload src=''/>
            </Topper>
            <Content placeholder='Write your stuffs here'/>
            <Action>
                <label htmlFor='statusUpload'>
                    <FaImages size={'1rem'}/>
                    <input id='statusUpload' type="file"/>
                </label>
                <Button>Post</Button>
            </Action>
        </Wrapper>
    </Container>
    <Diary/>
    </>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    color: #fff;
`;


const Upload = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;


const Head = styled.div`
    margin-bottom: -28px;
    margin-left: 10px;
    font-size: 1rem;
`;


const Topper = styled.div`
    width: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;


const Wrapper = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: #58A7A8;
    border-radius: 18px;
    align-items: center;
`;


const Action = styled.div`
    margin-left: 10px;
    width: 470px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    label{
    border: 2px solid #fff;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 10px 0;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  color: #832C28;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: all 200ms;

    :hover{
        cursor: pointer;
        color: #fff;
    } 
`;


const Content = styled.textarea`
    width: 450px;
    height: 40px;
    resize: none;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    font-size: 1rem;
`;


