/**
 * 
 * Resume Component here
 * 
 */

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
  const timeoutDuration = 5000;

  const submitTalk = useCallback((data: FormData) => {
    reset();
    console.log(data);
  }, [reset]);

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
      <Button icon={<ArrowRight />} label="Send" type="submit" />
    </form>
  );
}