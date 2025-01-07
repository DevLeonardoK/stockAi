import React from "react";
import { InputContainer, ErrorText, IconContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";
const Inputs = ({
  Value,
  placeHolder,
  activate,
  name,
  leftIcon,
  errorMessage,
  control,
  type,
  ...rest
}) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        ></Controller>
      </InputContainer>

      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Inputs };
