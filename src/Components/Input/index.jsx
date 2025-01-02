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
  ...rest
}) => {
  return (
    <>
      {activate ? (
        <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) =>
              activate ? <InputText {...field} {...rest} /> : null
            }
          ></Controller>
        </InputContainer>
      ) : (
        <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <InputText value={Value} placeholder={placeHolder}></InputText>
        </InputContainer>
      )}

      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Inputs };
