import React from "react";
import { render, screen, fireEvent } from "@/test";
import { Button, ButtonProps, AProps } from "../Button";

type CombinedButtonProps = ButtonProps & Partial<AProps>;

function renderComponent(props?: Partial<CombinedButtonProps>) {
  const defaultProps = { title: "Button Title" } as CombinedButtonProps;
  const mergedProps = { ...defaultProps, ...props } as CombinedButtonProps;

  const { debug } = render(<Button {...mergedProps} />);

  return {
    button:
      "href" in mergedProps && mergedProps.href
        ? screen.getByRole("link")
        : screen.getByRole("button"),
    titleElement: screen.queryByText(mergedProps.title),
    spinnerElement: mergedProps.isLoading
      ? screen.getByRole("status", { name: /loading/i })
      : null,
    debug,
  };
}

describe("<Button /> component", () => {
  it("renders correctly with title", () => {
    const { titleElement } = renderComponent();
    expect(titleElement).toBeInTheDocument();
  });

  it("renders as primary variant by default", () => {
    const { button } = renderComponent();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders with outline variant", () => {
    const { button } = renderComponent({ variant: "outline" });
    expect(button).toHaveClass("bg-background");
    expect(button).toHaveClass("border-secondary");
  });

  it("renders with transparent variant", () => {
    const { button } = renderComponent({ variant: "transparent" });
    expect(button).toHaveClass("bg-transparent");
  });

  it("renders with M size by default", () => {
    const { button } = renderComponent();
    expect(button).toHaveClass("px-3 py-2");
  });

  it("renders with XL size", () => {
    const { button } = renderComponent({ size: "XL" });
    expect(button).toHaveClass("px-7 py-4");
  });

  it("renders in disabled state when disabled prop is true", () => {
    const { button } = renderComponent({ disabled: true });
    expect(button).toBeDisabled();
  });

  it("shows spinner when isLoading is true", () => {
    const { titleElement, spinnerElement } = renderComponent({
      isLoading: true,
    });
    expect(titleElement).not.toBeInTheDocument();
    expect(spinnerElement).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { button } = renderComponent({ onClick: handleClick });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders with left icon", () => {
    const { button } = renderComponent({
      leftIcon: { name: "accessibility", size: 24 },
    });

    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    const { button } = renderComponent({
      rightIcon: { name: "globe", size: 24 },
    });
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("renders as an anchor when href is provided", () => {
    const { button } = renderComponent({
      href: "https://example.com",
    });
    expect(button).toHaveAttribute("href", "https://example.com");
  });

  it("applies the same styling to anchor variant", () => {
    const { button } = renderComponent({
      href: "https://example.com",
      variant: "primary",
    });
    expect(button).toHaveClass("bg-primary");
  });

  it("accepts and applies additional className", () => {
    const { button } = renderComponent({ className: "test-class" });
    expect(button).toHaveClass("test-class");
  });
});
