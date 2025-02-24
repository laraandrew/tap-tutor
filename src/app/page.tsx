"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LearningView } from "./learning-view"
import { ProfileView } from "./profile-view"
import { GraduationCap, User } from 'lucide-react'

export default function EducationGame() {
  return (
    <div className="h-[100dvh] bg-background flex flex-col">
      <Tabs defaultValue="learn" className="flex flex-col flex-1">
        {/* Header with App Name and Tabs */}
        <div className="border-b">
          <div className="px-4 py-2 flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-display">
              Tap-Tutor
            </h1>
            <TabsList className="grid w-[200px] grid-cols-2 bg-muted/50">
              <TabsTrigger 
                value="learn"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/80 data-[state=active]:to-pink-600/80 data-[state=active]:text-white transition-all duration-300"
              >
                <GraduationCap className="h-4 w-4 mr-2" />
                Learn
              </TabsTrigger>
              <TabsTrigger 
                value="profile"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600/80 data-[state=active]:to-pink-600/80 data-[state=active]:text-white transition-all duration-300"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          <TabsContent value="learn" className="h-full m-0">
            <LearningView />
          </TabsContent>
          <TabsContent value="profile" className="h-full m-0">
            <ProfileView />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}