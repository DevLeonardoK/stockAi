import React from "react";
import { Input } from "./styles";
import { useState } from "react";
const Inputs = ({ placeHolder, name, type }) => {
  return (
    <Input placeholder={placeHolder} name={name} type={type} required></Input>
  );
};

export { Inputs };
