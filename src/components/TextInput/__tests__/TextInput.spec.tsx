import React from "react";
import { render, screen, fireEvent } from "@/test";
import { TextInput, TextInputProps } from "../TextInput";

function renderComponent(props?: TextInputProps) {
  render(<TextInput {...props} />);

  return {
    input:
      props?.as === "textarea"
        ? screen.getByRole("textbox")
        : screen.getByRole("textbox"),
    label: props?.label ? screen.getByText(props.label) : null,
    errorMessage: props?.errorMessage ? screen.getByRole("alert") : null,
    iconContainer: props?.rightIcon
      ? screen.queryByTestId("right-icon-text-input")
      : null,
    container: screen.getByRole("textbox").closest("div")?.parentElement,
  };
}

describe("<TextInput /> component", () => {
  it("renders with a label when provided", () => {
    const { input, label } = renderComponent({
      label: "Username",
      placeholder: "Enter username",
    });
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("renders as textarea when specified", () => {
    const { input } = renderComponent({
      as: "textarea",
      placeholder: "Enter description",
    });
    expect(input.tagName).toBe("TEXTAREA");
  });

  it("shows error message when provided", () => {
    const errorMessage = "This field is required";
    const { errorMessage: errorElement } = renderComponent({
      errorMessage,
      placeholder: "Enter text",
    });
    expect(errorElement).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent(errorMessage);
  });

  it("renders with right icon when provided", () => {
    const { iconContainer } = renderComponent({
      placeholder: "Search",
      rightIcon: { name: "accessibility", size: 20 },
    });

    expect(iconContainer).toBeInTheDocument();
  });

  it("forwards additional input props", () => {
    const { input } = renderComponent({
      placeholder: "Enter text",
      "data-testid": "input-field",
      disabled: true,
      maxLength: 50,
    });

    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("maxLength", "50");
  });

  it("handles user input correctly", () => {
    const { input } = renderComponent({ placeholder: "Enter text" });

    fireEvent.change(input, { target: { value: "Hello World" } });
    expect(input).toHaveValue("Hello World");
  });

  it("sets aria-describedby when error message exists", () => {
    const { input } = renderComponent({
      errorMessage: "Error",
      placeholder: "Enter text",
    });
    expect(input).toHaveAttribute("aria-describedby");
    expect(input).toHaveAttribute(
      "aria-describedby",
      expect.stringContaining("error-")
    );
  });

  it("applies custom error message color", () => {
    const { errorMessage: errorElement } = renderComponent({
      errorMessage: "Error",
      errorMessageColor: "text-orange-500",
      placeholder: "Enter text",
    });

    expect(errorElement).toHaveClass("text-orange-500");
  });
});
