"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export function PollCard({
  question,
  options,
  correctAnswer,
}: {
  question: string
  options: string[]
  correctAnswer: number
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selected !== null) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="h-full flex flex-col gap-6">
      <h2 className="text-2xl font-bold">{question}</h2>
      <RadioGroup
        value={selected?.toString()}
        onValueChange={(value) => setSelected(Number.parseInt(value))}
        className="flex flex-col gap-4"
      >
        {options.map((option, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center space-x-2 rounded-lg border p-4",
              isSubmitted && index === correctAnswer && "border-green-500 bg-green-500/10",
              isSubmitted && selected === index && index !== correctAnswer && "border-red-500 bg-red-500/10",
            )}
          >
            <RadioGroupItem value={index.toString()} id={`option-${index}`} />
            <Label htmlFor={`option-${index}`} className="flex-1">
              {option}
            </Label>
          </div>
        ))}
      </RadioGroup>
      <Button onClick={handleSubmit} disabled={selected === null || isSubmitted} className="mt-auto">
        Submit Answer
      </Button>
    </div>
  )
}

