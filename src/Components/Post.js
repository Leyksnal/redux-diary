import React from 'react'
import styled from 'styled-components'
import {FaImages} from 'react-icons/fa'

export default function Post() {


  return (
    <Container>
        <Wrapper>
            <Topper>
                <Head>What's Happening?</Head>
                <Upload src=''/>
            </Topper>
            <Content placeholder='Write your stuffs here'/>
            <Action>
                <label htmlFor='statusUpload'>
                    <FaImages size={'1.3rem'}/>
                    <input id='statusUpload' type="file"/>
                </label>
                <Button>Post</Button>
            </Action>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    color: #fff;
`;


const Upload = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;


const Head = styled.h2`
    margin-bottom: -28px;
    margin-left: 10px;
`;


const Topper = styled.div`
    width: 480px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;


const Wrapper = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    background-color: #4192ff;
    border-radius: 18px;
    align-items: center;
`;


const Action = styled.div`
    margin: 10px;
    width: 470px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    label{
    border: 3px solid #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 10px;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
    width: 130px;
    height: 40px;
    outline: none;
    border: none;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 8px;
    transition: all 400ms;
    transform: scale(1);
    color: #4192ff;

    :hover{
        cursor: pointer;
        transform: scale(0.9);
    }
`;


const Content = styled.textarea`
    width: 450px;
    height: 70px;
    resize: none;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    font-size: 1.2rem;
`;


