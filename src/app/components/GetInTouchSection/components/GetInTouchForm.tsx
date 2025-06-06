"use client";

import { TextInputControlled, Button } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GetInTouchFormData, getInTouchFormSchema } from "./getInTouchSchema";
import { tailwindUtils } from "@/utils";
import { toast } from "react-toastify";

export function GetInTouchForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<GetInTouchFormData>({
    resolver: zodResolver(getInTouchFormSchema),
    mode: "all",
    defaultValues: {
      email: "",
      message: "",
    },
    delayError: 1000,
  });

  const { cn } = tailwindUtils;

  function onSubmit(data: GetInTouchFormData) {
    console.log("Form submitted", data);
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
      aria-labelledby="contact-form-title"
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
          errorMessageColor="text-red-950"
        />

        <TextInputControlled
          name="message"
          control={control}
          as="textarea"
          label="Message"
          className={cn(
            "w-full sm:w-[31.25rem] h-[8.75rem]",
            errors.message && "mb-2"
          )}
          placeholder="What are you say ?"
          aria-required="true"
          aria-label="Input to type your message to us"
          errorMessageColor="text-red-950"
        />
      </div>

      <Button
        title="Request Demo"
        size="XL"
        className="w-[16.25rem] bg-[#111729] hover:bg-secondary-light"
        type="submit"
        aria-label="Submit the contact form to request a demo"
      />
    </form>
  );
}
