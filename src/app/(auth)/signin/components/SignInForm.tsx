"use client";

import { TextInputControlled, Button } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SignInFormData, signInFormSchema } from "../signInSchema";
import { toast } from "react-toastify";

export function SignInForm() {
  const { control, handleSubmit } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
    delayError: 1000,
  });

  function onSubmit(data: SignInFormData) {
    console.log("Sign In form submitted", data);
    toast.info(
      "Sorry but we're currently working to provide this service. Please check back later!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-8 w-full"
      aria-labelledby="signin-form-title"
    >
      <div className="flex flex-col items-center gap-5 w-full">
        <TextInputControlled
          name="email"
          control={control}
          label="Email"
          className="w-full sm:w-[31.25rem]"
          placeholder="Enter your email"
          alt="Input to type your email"
          type="email"
          aria-required="true"
        />

        <TextInputControlled
          name="password"
          control={control}
          label="Password"
          className="w-full sm:w-[31.25rem]"
          placeholder="Enter your password"
          alt="Input to type your password"
          type="password"
          aria-required="true"
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <Button
          title="Sign In"
          size="XL"
          className="w-[16.25rem] hover:bg-secondary-light focus-outline-primary"
          type="submit"
          aria-label="Submit the sign in form"
        />

        <div className="text-white text-sm">
          {"Don't have an account? "}
          <Link
            href="/signup"
            className="text-primary hover:underline focus-outline-primary"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
