import React from "react";
import { Btn } from "./styles";

const Button = ({ content, type }) => {
  return <Btn type={type}>{content}</Btn>;
};

export { Button };
