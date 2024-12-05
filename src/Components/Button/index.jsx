import React from "react";
import { Btn } from "./styles";

const Button = ({ onClick, content }) => {
  return <Btn onClick={onClick}>{content}</Btn>;
};

export { Button };
