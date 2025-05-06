import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from "@testing-library/react";
import { ReactElement, ReactNode } from "react";

const wrapAllProviders = () => {
  return ({ children }: { children: ReactNode }) => <>{children}</>;
};

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(component, { wrapper: wrapAllProviders(), ...options });

function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, "wrapper">
) {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  });
}

export * from "@testing-library/react";
export * from "@testing-library/user-event";

export { customRender as render };
export { customRenderHook as renderHook };
