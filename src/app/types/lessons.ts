export interface BaseLesson {
    type: "video" | "text" | "poll"
    isActive?: boolean
  }
  
  export interface VideoLesson extends BaseLesson {
    type: "video"
    title: string
    videoUrl: string
    description: string
  }
  
  export interface TextLesson extends BaseLesson {
    type: "text"
    title: string
    content: string
  }
  
  export interface PollLesson extends BaseLesson {
    type: "poll"
    question: string
    options: string[]
    correctAnswer: number
  }
  
  export type Lesson = VideoLesson | TextLesson | PollLesson
  
  