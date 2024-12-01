'use client'

import { useState, useCallback, useRef } from 'react'
import { useGSAP } from '@gsap/react'

import TagText from '@components/layout/TagText'
import Form from '@components/@talk/Form'
import Notification from '@components/ui/Notification'
import { ScrollAnimation } from './Animations'

import { Notification as NotificationType } from '@typess/types'

export default function TalkScene() {
  const [ notification, setNotification ] = useState<NotificationType>({
    active: false,
    error: true,
    sended: false,
    message: ''
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const closeNotification = useCallback(() => {
    setNotification((prev) => ({ ...prev, active: false }))
  }, [])

  useGSAP(() => {
    if (!containerRef.current || !titleRef.current || !modalRef.current) return
    
    ScrollAnimation(containerRef.current, titleRef.current, modalRef.current)
  }, {
    scope: containerRef
  })

  return (
    <section
      data-scroll
      data-scroll-section
      ref={containerRef}
      className="flex min-h-max w-full flex-col justify-center gap-3 px-4 py-40 sm:px-8 md:px-16 lg:px-24 xl:px-48"
    >
      <TagText ref={titleRef}>talk me</TagText>

      <Form ref={modalRef} closeNotification={closeNotification} notification={notification} setNotification={setNotification} />

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