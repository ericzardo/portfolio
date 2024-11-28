import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller } from "react-hook-form";

import { User, AtSign, Pencil, ArrowRight } from 'lucide-react';
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";

import { schema, FormData } from "@schemas/talk";

export default function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  const [lastInteractionTime, setLastInteractionTime] = useState<number>(Date.now());
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);
  const timeoutDuration = 5000;

  const submitTalk = useCallback(
    async (data: FormData) => {
      setIsSubmitting(true);
      console.log("Form Submitted:", data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      reset();
      setIsSubmitting(false);
    },
    [reset]
  );


  const handleUserInteraction = useCallback(() => {
    setLastInteractionTime(Date.now());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionTime > timeoutDuration) {
        reset();
        setLastInteractionTime(Date.now());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lastInteractionTime, reset, timeoutDuration]);
  
  return (
    <form
      id="talk-form"
      onSubmit={handleSubmit(submitTalk)}
      className="flex w-full max-w-[400px] flex-col items-end gap-4 py-8 sm:py-9 md:py-10"
      onMouseMove={handleUserInteraction}
      onKeyDown={handleUserInteraction}
      onFocus={handleUserInteraction}
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            id="input-name"
            icon={<User />}
            placeholder="Your Name"
            error={errors.name?.message}

            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            id="input-email"
            icon={<AtSign />}
            placeholder="Your Email"
            error={errors.email?.message}
            
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            type="email"
          />
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            id="input-message"
            icon={<Pencil />}
            placeholder="Message here..."
            error={errors.message?.message}

            onChange={onChange}
            onBlur={onBlur}
            value={value}

            area
          />
        )}
      />
      <Button
        id="talk-button"
        icon={<ArrowRight />}
        label="Send"
        type="submit"
        disabled={isSubmitting} />
    </form>
  );
}