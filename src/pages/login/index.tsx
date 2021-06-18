import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import Main from "../../components/container";
import Form from "../../components/form";
import { Span, H1 } from "./styles";
// import Field from "../../components/field";
import Input from "../../components/field/input";
import Button from "@material-ui/core/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import api from '../api/api'

interface IFormInput {
  username: string;
  password: string;
}

const Auth: React.FC = () => {
  const [error, setErro] = useState<string>()
  const [value, setValue] = useState<string>()
  
  const router = useRouter();

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value
    setValue(val)
  }

  const { register, handleSubmit} = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await api.post('/auth',{
      "username": data.username,
      "password": data.password
    }).then(resp => {
      router.push('/feed')
      console.log(resp.data)
    })
    .catch(err => {
      setErro(err.message)
    })

    console.log(data.username);
  };
  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>Login</H1>
        <Span>enter your username and password below</Span>
        <Input
          placeholder="Username"
          type="autocomplete"
          {...register("username",{
            required: true
          })}
        />
        <Input
          placeholder="password"
          type="password"
          {...register("password",{
            required: true
          })}
        />
        <p className="erro">{error}</p>
        <Button type="submit" className="button" variant="contained">
          Login
        </Button>
      </Form>
    </Main>
  );
};

export default Auth;
