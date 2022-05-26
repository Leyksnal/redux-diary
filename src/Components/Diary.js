import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {ImFeed} from 'react-icons/im'
import pix from './assets/ak.jpg'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { memoData } from './GlobalState';

export default function Diary() {

    const dispatch = useDispatch()
    const [getData, setGetData] = useState([])
    const user = useSelector((state) => state.currentUser)
    const memo = useSelector((state) => state.memories)

    const id = user._id

    const onGetData = async () =>{
        try {

            const mainRout = "http://localhost:3334/"
            const url = `${mainRout}api/diary/${id}`

            await axios.get(url).then((res) =>{

                setGetData(res.data.data.diary)
                dispatch(memoData(res.data.data.diary))
            })

            console.log(getData);
            
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() =>{
        onGetData()
    }, [])

  return (
    <>
        <Wall>
            <Head><ImFeed size={'2.5rem'}/><span>Feeds</span>
            </Head>
            <Container>
                {/* {memo?.map((props) =>{ */}
                    <Wrapper>
                        <End>
                            <Status>
                                <Pan></Pan>
                                <p>Online</p>
                            </Status>
                        </End>
                        <Avatar>
                            <img src={pix} alt="" />
                            <span>Cast</span>
                        </Avatar>
                        <Text>
                            <p>charset</p>
                        </Text>
                    </Wrapper>
                {/* })} */}
            </Container>
            <Action to={'/'}><Button>Home</Button></Action>
        </Wall>
    </>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-gap: 10px;
    color: #fff;

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(1, minmax(0, 1fr));
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
`;
const Wrapper = styled.div`
    /* width: 500px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    background-color: #0D1117;
    border-radius: 20px;
    transition: all 450ms;
    width: 330px;

    :hover{
        transform: scale(1.02);
    }

    @media screen and (max-width: 500px){
        width: 90%;
    }
`;
const Status = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60px;
    height: 22px;
    border-radius: 20px;
    margin: 10px;

    p{
        font-size: 0.7rem;
    }
`;
const Avatar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img{
        width: 300px;
        height: 200px;
        border-radius: 5%;
        object-fit: cover;
        border: solid 1px #fff;
    }

    span{
        margin-top: 10px;
        font-size: 1rem;
    }
`;
const Text = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    margin: 10px;

    p{
        width: 100%;
        font-size: 1rem;

        @media screen and (max-width: 500px){
            width: 90%;
        }
    }
`;
const End = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
const Pan = styled.div`
    background-color: #00ff2a;
    width: 8px;
    height: 8px;
    border-radius: 50%;
`;

const Button = styled.button`
    width: 150px;
    height: 50px;
    font-size: 1.2rem;
    font-weight: 600;
    border-radius: 10px;
    background-color: #ec7d69;
    color: #fff;
    transition: all 350ms;
    margin: 20px;

    :hover{
        cursor: pointer;
        background-color: transparent;
        transform: scale(1.04);
        border: 3px solid #fff;
        color: #ec7d69;
    }
`;

const Action = styled(Link)`
    text-decoration: none;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    span{
        font-size: 1.5rem;
    }
`;

const Wall = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;