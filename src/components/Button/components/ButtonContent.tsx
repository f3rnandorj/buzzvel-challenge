import { tailwindUtils } from "@/utils";
import { ButtonProps, ButtonVariant } from "../Button";
import { Icon, Text } from "@/components";

const { cn } = tailwindUtils;

export function ButtonContent(props: ButtonProps) {
  const {
    title,
    leftIcon,
    rightIcon,
    variant = "primary",
    size = "M",
    isLoading,
    textColor,
  } = props;

  const resolvedTextColor =
    textColor || (variant === "primary" ? "text-background" : "text-secondary");

  return (
    <>
      {isLoading ? (
        <Spinner variant={variant} />
      ) : (
        <div className="flex items-center gap-2">
          {leftIcon ? (
            <Icon
              {...leftIcon}
              className={cn(leftIcon.className)}
              aria-hidden={true}
            />
          ) : (
            <div />
          )}

          <Text
            as="span"
            preset="item"
            className={cn(resolvedTextColor, size === "M" ? "text-sm" : "")}
          >
            {title}
          </Text>

          {rightIcon ? (
            <Icon
              {...rightIcon}
              className={cn(rightIcon.className, resolvedTextColor)}
              aria-hidden={true}
            />
          ) : (
            <div />
          )}
        </div>
      )}
    </>
  );
}

interface SpinnerProps {
  variant?: ButtonVariant;
}

function Spinner({ variant = "primary" }: SpinnerProps) {
  const spinnerColor =
    variant === "primary" ? "border-background" : "border-secondary";

  return (
    <div
      className={cn(
        "w-5 h-5 border-2 border-t-transparent rounded-full animate-spin",
        spinnerColor
      )}
      role="status"
      aria-label="Loading"
    />
  );
}
