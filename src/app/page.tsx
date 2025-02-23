"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LearningView } from "./learning-view"
import { ProfileView } from "./profile-view"

export default function EducationGame() {
  const [activeTab, setActiveTab] = useState("learn")

  return (
    <div className="h-[100dvh] bg-background">
      <Tabs defaultValue="learn" className="h-full flex flex-col" value={activeTab} onValueChange={setActiveTab}>
        <div className="flex-1 overflow-hidden">
          <TabsContent value="learn" className="h-full m-0">
            <LearningView />
          </TabsContent>
          <TabsContent value="profile" className="h-full m-0">
            <ProfileView />
          </TabsContent>
        </div>
        <TabsList className="grid w-full grid-cols-2 rounded-none border-t">
          <TabsTrigger value="learn">Learn</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

