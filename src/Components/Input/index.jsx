import React from "react";
import { Input } from "./styles";
import { useState } from "react";
const Inputs = ({ placeHolder, name, type, onChange, value }) => {
  return (
    <Input
      placeholder={placeHolder}
      name={name}
      type={type}
      required
      value={value}
      onChange={onChange}
    ></Input>
  );
};

export { Inputs };
