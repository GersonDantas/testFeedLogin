import React from "react";
import Main from "../../components/container";
import Form from "../../components/form";
import { Span, H1 } from "./styles";
import Field from "../../components/field";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const Auth: React.FC = () => {
  return (
    <Main>
      <Form>
        <H1>Login</H1>
        <Span>enter your username and password below</Span>
        <Field.Text
          placeholder="Username"
          name="username"
          type="autocomplete"
        />
        <Field.Text placeholder="password" name="password" type="password" />
        <Button type="submit"  className="button" variant="contained">Login</Button>
      </Form>
      <Link href="/feed">feed</Link>
    </Main>
  );
};

export default Auth;
