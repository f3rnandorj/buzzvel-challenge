"use client";

import React from "react";
import { UseControllerProps, FieldValues, Controller } from "react-hook-form";
import { TextInput, TextInputProps } from "../TextInput/TextInput";

type FormTextInputProps<FormType extends FieldValues> = {} & TextInputProps &
  UseControllerProps<FormType>;

export function TextInputControlled<FormType extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: FormTextInputProps<FormType>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <TextInput
          {...textInputProps}
          value={field.value}
          onChange={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
        />
      )}
    />
  );
}
