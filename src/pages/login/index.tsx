import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Main from "@components/container";
import Form from "@components/form";
import { Span, H1, Error } from "./styles";
import Input from "@components/field/input";
import Button from "@material-ui/core/Button";
import { SubmitHandler, useForm} from "react-hook-form";
import { Login, Logout, storeToken } from "@services/authentication";
import { Context } from "@utils/Context/Contex";
import IsLoading from "@components/isLoading";
import { setAutorization } from "@services/authorization";

interface IFormInput {
  username: string;
  password: string;
}

const Auth: React.FC = () => {
  const [err, setErr] = useState("");

  const { isLoading, setIsloading, setIUserInput, iUserInput} =
    useContext(Context);

  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    //a resposta do submit vem no data
    try {
      setIsloading(true)
      const user = await Login(data);
      if (typeof window !== "undefined") {
        await storeToken(user.authToken);
      }

      await setIUserInput({ //salvando o usuário e senha
        username: data.username, 
        password: data.password 
      });

      setAutorization(data.username , data.password)

      reset();
      router.push("/feed");
    } catch (error) {
      setIsloading(false);
      if (error.message.includes("401")) {
        setErr("username or password not found"); //resposta de error pra o usuário
      }
    }
  };
  
  return (
    <Main>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <H1>Login</H1>
        <Span>enter your username and password below</Span>
        <Input
          placeholder="Username"
          type="autocomplete"
          {...register("username", {
            required: true,
          })}
        />
        <Input
          placeholder="password"
          type="password"
          {...register("password", {
            required: true,
          })}
        />
        <Error>
          {err && <span className="error">{err}</span>}
        </Error>
        <Button
          type="submit"
          className="button"
          variant="contained"
          onClick={() => setTimeout(() => setErr(""), 2500)}
        >
          Login
        </Button>
      </Form>
      {isLoading && <IsLoading />}
    </Main>
  );
};

export default Auth;
