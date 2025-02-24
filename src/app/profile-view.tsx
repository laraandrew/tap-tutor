"use client"

import { motion } from "framer-motion"
import { Trophy, BookOpen, Zap, Target, Star, Flame } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProfileView() {
  // Simulated user data
  const userData = {
    name: "John Doe",
    level: 12,
    xp: 2750,
    xpToNextLevel: 3000,
    achievements: [
      { name: "Quick Learner", icon: Zap, color: "text-yellow-500" },
      { name: "Focus Master", icon: Target, color: "text-purple-500" },
      { name: "Knowledge Seeker", icon: Star, color: "text-blue-500" },
    ],
    dailyGoals: {
      completed: 3,
      total: 5,
    },
  }

  return (
    <div className="h-full p-4 overflow-auto bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-md mx-auto space-y-6">
        {/* Profile Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-4 p-6 rounded-xl bg-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div className="h-full w-full rounded-full bg-muted" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-background rounded-full px-2 py-1 text-sm font-bold">
              Lvl {userData.level}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-muted-foreground">Learning Enthusiast</p>
          </div>
          <div className="w-full space-y-2">
            <div className="flex justify-between text-sm">
              <span>XP Progress</span>
              <span className="text-primary">
                {userData.xp} / {userData.xpToNextLevel}
              </span>
            </div>
            <Progress value={(userData.xp / userData.xpToNextLevel) * 100} className="bg-muted" />
          </div>
        </motion.div>

        {/* Daily Goals */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Goals</CardTitle>
              <Flame className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                  {userData.dailyGoals.completed}/{userData.dailyGoals.total}
                </div>
                <Progress
                  value={(userData.dailyGoals.completed / userData.dailyGoals.total) * 100}
                  className="w-2/3 bg-muted"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Trophy className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lessons Done</CardTitle>
              <BookOpen className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold">Recent Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            {userData.achievements.map((achievement) => (
              <motion.div
                key={achievement.name}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                <span className="text-xs text-center text-muted-foreground">{achievement.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

