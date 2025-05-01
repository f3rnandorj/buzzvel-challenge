// CardNumberInput.tsx
import React from "react";
import { Icon, IconProps, Text } from "@/components";
import { tailwindUtils } from "@/utils";

type BaseTextInputProps = {
  label?: string;
  errorMessage?: string;
  rightIcon?: IconProps;
};

interface InputProps
  extends BaseTextInputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextAreaProps
  extends BaseTextInputProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

export type TextInputProps = InputProps | TextAreaProps;

export function TextInput({
  label,
  errorMessage,
  rightIcon,
  className,
  as = "input",
  ...props
}: TextInputProps) {
  const { cn } = tailwindUtils;

  const baseClassNameStyles =
    "w-full h-full pl-6 pr-10 py-[1.0625rem] rounded-lg bg-white text-secondary font-inter font-medium text-[0.875rem] placeholder-[#a6a6a6] focus:outline-none";
  const inputClassName = "";
  const textareaClassName = "resize-none";

  return (
    <div className={cn("w-[100%] flex flex-col", className)}>
      {label && (
        <Text
          as="label"
          preset="interParagraphNormal"
          className="pb-5 text-white"
        >
          {label}
        </Text>
      )}

      <div className="relative flex flex-1 items-center">
        {as === "textarea" ? (
          <textarea
            className={cn(baseClassNameStyles, textareaClassName)}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            type="text"
            className={cn(baseClassNameStyles, inputClassName)}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {rightIcon?.name && (
          <div className="absolute right-3">
            <Icon {...rightIcon} />
          </div>
        )}
      </div>

      {errorMessage && (
        <Text
          as="span"
          preset="interParagraphNormal"
          className="mt-1 text-red-500"
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
