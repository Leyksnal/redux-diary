import React, { useState } from 'react'
import styled from 'styled-components';
import {BsFillCameraFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import pix from '../assets/ak.jpg'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios';
import { useForm } from 'react-hook-form'

export default function SignUp() {

  const [image, setImage] = useState(pix);
  const [avatar, setAvatar] = useState("");
  // const navigate = useNavigate()

  const formSchema =yup.object().shape({
    userName: yup.string().required("This field cannot be empty"),
    email: yup.string().email().required("This filed cnnot be empty"),
    password: yup.string().required("This feild must be filled"),
    confirm: yup.string().oneOf([
      yup.ref("password"), null
    ], "Password doesnt match")
  })

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const handleImage = (e) =>{
    const file = e.target.files[0]
    const save = URL.createObjectURL(file)
    setImage(save)
    setAvatar(file)
  }

  const onSumb = handleSubmit(async (value) =>{
    const { userName, email, password } = value
    const mode = "http://localhost:3334/"

    const url = `${mode}api/user/register`

    const formData = new FormData()
    formData.append("userName", userName)
    formData.append("email", email)
    formData.append("password", password)
    formData.append("avatar", avatar)

    const config = {
      "content-type": "multipart/form-data",
      // onUploadProgress: (ProgressEvent) =>{
      //   const {loaded, total} = ProgressEvent
      //   const percent = Math.floor((loaded * 100) / total)
      // }
    }

  //     const options = {
  //   onUploadProgress: (ProgressEvent) =>{
  //     const {loaded, total} = ProgressEvent
  //     const percent = Math.floor((loaded * 100) / total)
  //   }
  // }

  await axios.post(url, formData, config).then((res) =>{
    console.log(res);
  })

  // navigate("/diary")
  reset()
  setImage(pix)

  })



  return (
    <Container>
      <Wrapper >
        <Gr>Create An Account</Gr>
        <Avatar src={image}/>
        <label htmlFor='pictureToUpload'>
          <BsFillCameraFill size={'1.3rem'}/>
          <input id="pictureToUpload" type="file" onChange={handleImage} accept="image/*"/>
        </label>
        <Form onSubmit={onSumb} type="multipart/form-data">
          <Error>{errors.message && errors?.message.userName}</Error>
          <input type="text" placeholder='username' {...register("userName")}/>
          <Error>{errors.message && errors?.message.email}</Error>
          <input type="email" placeholder='email' {...register("email")}/>
          <Error>{errors.message && errors?.message.password}</Error>
          <input type="password" placeholder='password' {...register("password")}/>
          <Error>{errors.message && errors?.message.confirm}</Error>
          <input type="password" placeholder='confirm' {...register("confirm")}/>
          <Button type="submit" >sign up</Button>
          <Info>Already have an account <A to={'/signin'}>Log in</A></Info>
        </Form>
      </Wrapper>
    </Container>
  )
}



const Error = styled.div`
	color: red;
	font-weight: 500;
	font-size: 12px;
`;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  color: #fff;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background-color: #58A7A8;
  border-radius: 20px;


  label{
    border: 2px solid #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    input{
      display: none;
    }

    :hover{
      cursor: pointer;
    }
  }
`;
const Form = styled.form`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    margin: 8px;
    padding: 10px;
    width: 300px;
    height: 18px;
    border-radius: 20px;
    outline: none;
    border: none;
    font-size: 0.9rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;
const Gr = styled.h2`

`;
const Info = styled.p`

`;


const Button = styled.button`
  width: 120px;
  height:35px;
  margin: 10px;
  border-radius: 20px;
  outline: none;
  border: 2px solid #fff;
  font-size: 1.1rem;
  background-color: transparent;
  transform: scale(1);
  transition: all 400ms;
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  color: #fff;


  :hover{
    cursor: pointer;
    transform: scale(0.9)
  }
`;

const A = styled(Link)`
    font-weight: 700;
    cursor: pointer;
    color: #8d4d2d;
    text-decoration: none;
`;

const Avatar = styled.img`
    border: 2px solid #fff;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;