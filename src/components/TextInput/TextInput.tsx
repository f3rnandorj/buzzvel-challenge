import React, { useId } from "react";
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
  id: propId,
  ...props
}: TextInputProps) {
  const { cn } = tailwindUtils;
  const generatedId = useId();
  const id = propId || `${as}-${generatedId}`;
  const errorId = `error-${id}`;

  const hasExistingDescription = props["aria-describedby"] !== undefined;
  const describedBy = errorMessage
    ? `${errorId}${
        hasExistingDescription ? ` ${props["aria-describedby"]}` : ""
      }`
    : props["aria-describedby"];

  const baseClassNameStyles =
    "w-full h-full pl-6 pr-10 py-[1.0625rem] rounded-lg bg-white text-secondary font-inter font-medium text-[0.875rem] placeholder-[#a6a6a6] focus:outline-none";
  const inputClassNameStyles = "";
  const textareaClassNameStyles = "resize-none";

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
            className={cn(baseClassNameStyles, textareaClassNameStyles)}
            id={id}
            aria-describedby={describedBy}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            type="text"
            className={cn(baseClassNameStyles, inputClassNameStyles)}
            id={id}
            aria-describedby={describedBy}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}

        {rightIcon?.name && (
          <div className="absolute right-3" aria-hidden="true">
            <Icon {...rightIcon} />
          </div>
        )}
      </div>

      {errorMessage && (
        <Text
          as="span"
          preset="item"
          className="mt-2 text-red-950"
          role="alert"
        >
          {errorMessage}
        </Text>
      )}
    </div>
  );
}
