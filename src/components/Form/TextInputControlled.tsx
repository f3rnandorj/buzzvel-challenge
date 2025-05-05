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
  id,
  ...textInputProps
}: FormTextInputProps<FormType>) {
  const fieldId = id || `field-${name}`;

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
          onBlur={field.onBlur}
          id={fieldId}
          name={name}
          errorMessage={fieldState.error?.message || errorMessage}
          aria-required={rules?.required ? true : undefined}
          aria-invalid={!!fieldState.error}
        />
      )}
    />
  );
}
