'use client'

import { useState, useLayoutEffect, useCallback } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import TagText from '@components/layout/TagText'
import Form from '@components/@talk/Form'
import Notification from '@components/ui/Notification'
import { ScrollAnimation, UnmountAnimations } from './Animations'

import { Notification as NotificationType } from '@typess/types'

export default function TalkScene() {
  const [ notification, setNotification ] = useState<NotificationType>({
    active: false,
    error: true,
    sended: false,
    message: ''
  })

  const closeNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, active: false }))
  }, [])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollAnimation()

    return () => {
      UnmountAnimations()
    }
  }, [])

  return (
    <section
      data-scroll
      data-scroll-section
      id="talk-section"
      className="flex min-h-max w-full flex-col justify-center gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText id="talk-title">talk me</TagText>

      <Form closeNotification={closeNotification} notification={notification} setNotification={setNotification} />

      {notification.active && (
        <Notification
          message={notification.message}
          error={notification.error}
          onClose={closeNotification}
        />
      )}
    </section>
  )
}