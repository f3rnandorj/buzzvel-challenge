"use client";

import { TextInputControlled, Button } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SignUpFormData, signUpFormSchema } from "./signInSchema";
import { toast } from "react-toastify";

export function SignUpForm() {
  const { control, handleSubmit } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    delayError: 1000,
  });

  function onSubmit(data: SignUpFormData) {
    console.log("Sign Up form submitted", data);
    toast.info(
      "Sorry we're currently working to provide this service. Please check back later!",
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
      aria-labelledby="signup-form-title"
    >
      <div className="flex flex-col items-center gap-5 w-full">
        <TextInputControlled
          name="name"
          control={control}
          label="Name"
          className="w-full sm:w-[31.25rem]"
          placeholder="Enter your full name"
          alt="Input to type your full name"
          type="text"
          aria-required="true"
        />

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
          placeholder="Create a password"
          alt="Input to create your password"
          type="password"
          aria-required="true"
        />

        <TextInputControlled
          name="confirmPassword"
          control={control}
          label="Confirm Password"
          className="w-full sm:w-[31.25rem]"
          placeholder="Confirm your password"
          alt="Input to confirm your password"
          type="password"
          aria-required="true"
        />
      </div>

      <div className="flex flex-col items-center gap-4 w-full">
        <Button
          title="Sign Up"
          size="XL"
          className="w-[16.25rem] hover:bg-secondary-light focus-outline-primary"
          type="submit"
          aria-label="Submit the sign up form"
        />

        <div className="text-white text-sm">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-primary hover:underline focus-outline-primary"
          >
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
}
