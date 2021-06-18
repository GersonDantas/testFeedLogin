import React from "react";
import Label from "./label";
import Input from "./input";

// import { Container } from './styles';

interface Props {
  placeholder: string;
  type: string;
  name?: string;
  className?: string
}

const Text: React.FC<Props> = ({ placeholder, type, name, className }) => (
  <Label>
    <Input className={className} placeholder={placeholder} type={type} name={name} />
  </Label>
);

const Field = {
  Text,
};

export default Field;
