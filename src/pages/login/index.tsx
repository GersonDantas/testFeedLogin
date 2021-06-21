import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Main from "@components/container";
import Form from "@components/form";
import { Span, H1, Error } from "./styles";
import Input from "@components/field/input";
import Button from "@material-ui/core/Button";
import { SubmitHandler, useForm} from "react-hook-form";
import { Login, storeToken } from "@services/authentication";
import { Context } from "@utils/Context/Contex";
import IsLoading from "@components/isLoading";

interface IFormInput {
  username: string;
  password: string;
}

const Auth: React.FC = () => {
  const { isLoading, setIsloading, setIUserInput } =
    useContext(Context);

  const [error, setErro] = useState();

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

      await setIUserInput({ //salvando o usuário e senha, para trocar token depois de 59 minutos
        username: data.username, 
        password: data.password 
      }); 

      reset();
      router.push("/feed");
    } catch (error) {
      if (error.message.includes("401")) {
        setErro("username or password not found"); //resposta de error pra o usuário
        setIsloading(!isLoading);
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
          value="test1"
        />
        <Input
          placeholder="password"
          type="password"
          {...register("password", {
            required: true,
          })}
          value="49716685"
        />
        <Error>
          <span className={error === "loading..." ? "loading" : "error"}>
            {error}
          </span>
        </Error>
        <Button
          type="submit"
          className="button"
          variant="contained"
        >
          Login
        </Button>
      </Form>
      {isLoading && <IsLoading />}
    </Main>
  );
};

export default Auth;
