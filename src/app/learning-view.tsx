"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { VideoCard } from "./cards/video-card"
import { TextCard } from "./cards/text-card"
import { PollCard } from "./cards/poll-card"
import { ChevronUp } from 'lucide-react'
import { Lesson } from "./types/lessons"

const lessons: Lesson[] = [
  {
    type: "video",
    title: "Introduction to React",
    videoUrl: "https://www.youtube.com/watch?v=v4H2fTgHGuc&ab_channel=Fireship",
    description: "This is an example of how to modify the input to the component itself.",
  },
  {
    type: "text",
    title: "Components and Props",
    content: "Components are the building blocks of React applications. They accept inputs called props and return React elements that describe what should appear on the screen.",
  },
  {
    type: "poll",
    question: "What is the primary purpose of React components?",
    options: [
      "To style web pages",
      "To create reusable UI elements",
      "To handle server requests",
      "To manage databases",
    ],
    correctAnswer: 1,
  },
]

export function LearningView() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState(0)

  const handleDragStart = (event: React.TouchEvent | React.MouseEvent) => {
    setIsDragging(true)
    setDragStart("touches" in event ? event.touches[0].clientY : event.clientY)
  }

  const handleDragEnd = (event: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return

    const end = "touches" in event ? event.changedTouches[0].clientY : event.clientY
    const diff = dragStart - end

    if (Math.abs(diff) > 100) {
      if (diff > 0 && currentIndex < lessons.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1)
      }
    }

    setIsDragging(false)
  }

  const renderCard = (lesson: Lesson, index: number) => {
    const commonProps = {
      isActive: index === currentIndex,
    }

    switch (lesson.type) {
      case "video":
        return (
          <VideoCard
            key={index}
            title={lesson.title}
            videoUrl={lesson.videoUrl}
            description={lesson.description}
            {...commonProps}
          />
        )
      case "text":
        return (
          <TextCard
            key={index}
            title={lesson.title}
            content={lesson.content}
            {...commonProps}
          />
        )
      case "poll":
        return (
          <PollCard
            key={index}
            question={lesson.question}
            options={lesson.options}
            correctAnswer={lesson.correctAnswer}
            {...commonProps}
          />
        )
      default:
        return null
    }
  }

  return (
    <div
      className="h-full relative overflow-hidden touch-none"
      onTouchStart={handleDragStart}
      onTouchEnd={handleDragEnd}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute inset-0 p-4"
        >
          {renderCard(lessons[currentIndex], currentIndex)}
        </motion.div>
      </AnimatePresence>
      {currentIndex < lessons.length - 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
          <ChevronUp className="h-6 w-6" />
        </div>
      )}
    </div>
  )
}
