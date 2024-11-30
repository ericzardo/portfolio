import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller } from 'react-hook-form'

import { User, AtSign, Pencil, ArrowRight } from 'lucide-react'
import Input from '@components/ui/Input'
import Button from '@components/ui/Button'

import { schema, FormData } from '@schemas/talk'

import { Notification } from '@typess/types'

interface FormProps {
  setNotification: (notification: Notification) => void;
  notification: Notification;
  closeNotification: () => void;
}

export default function Form({ setNotification, notification, closeNotification }: FormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  })

  const [ lastInteractionTime, setLastInteractionTime ] = useState<number>(Date.now())
  const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false)

  const timeoutDuration = 10000

  const handleUserInteraction = useCallback(() => {
    setLastInteractionTime(Date.now())
  }, [])

  const submitTalk = useCallback(
    async (data: FormData) => {
      setIsSubmitting(true)

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
  
        if (!response.ok) {
          throw new Error('Failed to send message.')
        }
        setNotification({
          active: true,
          message: 'Message sent successfully!',
          sended: true,
          error: false,
        })
        reset()
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.'
        setNotification({
          active: true,
          message: errorMessage,
          sended: false,
          error: true,
        })
      } finally {
        setIsSubmitting(false)
      }
    },
    [ reset, setNotification ]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionTime > timeoutDuration) {
        reset()
        setLastInteractionTime(Date.now())
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [ lastInteractionTime, reset, timeoutDuration ])

  useEffect(() => {
    if (notification.active) {
      const timer = setTimeout(() => {
        closeNotification()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [ notification.active, closeNotification ])
  
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
        disabled={notification.sended}
        isLoading={isSubmitting}
      />
      </form>
  )
}