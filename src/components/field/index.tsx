import React from "react";
import Label from "./label";
import Input from "./input";
import { SubmitHandler, useForm } from "react-hook-form";

// import { Container } from './styles';

interface IFormInput {
  username: string
  password: string
}

interface Props {
  placeholder: string;
  type: string;
  name?: string | undefined;
  className?: string;
}

const Text: React.FC<Props> = ({ placeholder, type, name, className }) => {
  const { register } = useForm<IFormInput>();
  return (
    <Label>
      <Input
        className={className}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </Label>
  );
};

const Field = {
  Text,
};

export default Field;
