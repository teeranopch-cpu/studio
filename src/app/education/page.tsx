"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Video, Music, FileText, ExternalLink, GraduationCap, Clock } from "lucide-react"
import Image from "next/image"

const lessons = [
  {
    title: "Understanding Democracy",
    description: "The foundations of the democratic system and how it applies to student governance.",
    type: "Video Series",
    duration: "45 mins",
    icon: Video,
    color: "bg-blue-50 text-blue-600",
    image: "https://picsum.photos/seed/edu1/800/450"
  },
  {
    title: "The Thai Constitution",
    description: "A comprehensive dive into the history and structure of the Thai Constitution.",
    type: "Reading Material",
    duration: "20 mins read",
    icon: FileText,
    color: "bg-teal-50 text-teal-600",
    image: "https://picsum.photos/seed/edu2/800/450"
  },
  {
    title: "Children's Rights 101",
    description: "International standards for student rights and protections in academic environments.",
    type: "Interactive Workshop",
    duration: "60 mins",
    icon: GraduationCap,
    color: "bg-yellow-50 text-yellow-600",
    image: "https://picsum.photos/seed/edu3/800/450"
  },
  {
    title: "Democratic Anthems",
    description: "Songs and music that inspired movements for transparency and equality.",
    type: "Audio Collection",
    duration: "15 mins",
    icon: Music,
    color: "bg-purple-50 text-purple-600",
    image: "https://picsum.photos/seed/edu4/800/450"
  }
]

export default function EducationPage() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
          <BookOpen className="h-10 w-10 text-accent" />
          Civic Education Hub
        </h1>
        <p className="text-muted-foreground text-lg">Centralized learning platform for political history, student rights, and governance.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
              <TabsList className="bg-white border p-1">
                <TabsTrigger value="all">All Content</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="reading">Reading</TabsTrigger>
                <TabsTrigger value="audio">Songs</TabsTrigger>
              </TabsList>
              <div className="text-sm font-medium text-muted-foreground">Showing 12 modules</div>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson, idx) => (
                  <Card key={idx} className="overflow-hidden border-none shadow-md group hover:shadow-xl transition-all flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image 
                        src={lesson.image} 
                        alt={lesson.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        data-ai-hint="civic education"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <Badge className="bg-accent/90 text-white border-none">{lesson.type}</Badge>
                      </div>
                    </div>
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg ${lesson.color}`}>
                          <lesson.icon className="h-5 w-5" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                          <Clock className="h-3.5 w-3.5" />
                          {lesson.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{lesson.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2 leading-relaxed">
                        {lesson.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-11 shadow-md">
                        Start Learning Module
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card className="border-none shadow-xl bg-primary text-white overflow-hidden">
            <CardHeader>
              <CardTitle className="text-lg">Knowledge Badge</CardTitle>
              <CardDescription className="text-primary-foreground/80">Track your learning progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/10 border border-white/20">
                  <div className="flex justify-between text-sm mb-2 font-bold">
                    <span>Civic Mastery</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[65%]" />
                  </div>
                </div>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 font-bold">
                  View Achievements
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold">External Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-secondary/20 transition-all group">
                <span className="text-sm font-medium text-foreground group-hover:text-primary">E-Grading System</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-secondary/20 transition-all group">
                <span className="text-sm font-medium text-foreground group-hover:text-primary">Thai Politics Library</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:bg-secondary/20 transition-all group">
                <span className="text-sm font-medium text-foreground group-hover:text-primary">UN Children's Rights</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
