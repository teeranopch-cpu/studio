
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Shield, GraduationCap, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const personnel = [
  {
    name: "Thanaphon Suksom",
    role: "Council President",
    tenure: "2023 - Present",
    category: "Council",
    email: "t.suksom@school.edu",
    avatar: "https://picsum.photos/seed/p1/200/200",
    initials: "TS"
  },
  {
    name: "Arisa Wongrat",
    role: "Vice President",
    tenure: "2023 - Present",
    category: "Council",
    email: "a.wongrat@school.edu",
    avatar: "https://picsum.photos/seed/p2/200/200",
    initials: "AW"
  },
  {
    name: "Dr. Somchai Rakthai",
    role: "Faculty Advisor",
    tenure: "2020 - Present",
    category: "Faculty",
    email: "s.rakthai@school.edu",
    avatar: "https://picsum.photos/seed/p3/200/200",
    initials: "SR"
  },
  {
    name: "Kanya Phetcha",
    role: "Secretary General",
    tenure: "2023 - Present",
    category: "Council",
    email: "k.phetcha@school.edu",
    avatar: "https://picsum.photos/seed/p4/200/200",
    initials: "KP"
  },
  {
    name: "Viroj Lim",
    role: "Academic Affairs Administrator",
    tenure: "2018 - Present",
    category: "Administration",
    email: "v.lim@school.edu",
    avatar: "https://picsum.photos/seed/p5/200/200",
    initials: "VL"
  },
  {
    name: "Pichai Jaruek",
    role: "Former President",
    tenure: "2022 - 2023",
    category: "Past Members",
    email: "p.jaruek@alumni.edu",
    avatar: "https://picsum.photos/seed/p6/200/200",
    initials: "PJ"
  }
]

export default function RegistryPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  
  const personnelBg = PlaceHolderImages.find(img => img.id === 'registry-card-bg');

  const filtered = personnel.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.role.toLowerCase().includes(search.toLowerCase())
    const matchesTab = activeTab === "all" || p.category.toLowerCase() === activeTab.toLowerCase() || (activeTab === "past" && p.category === "Past Members")
    return matchesSearch && matchesTab
  })

  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
            <Users className="h-10 w-10 text-accent" />
            Personnel Registry
          </h1>
          <p className="text-muted-foreground text-lg">Directory of Student Council members, faculty advisors, and administrators.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search personnel..." 
            className="pl-10 h-11 bg-white border-primary/20 focus-visible:ring-accent" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="bg-white/50 border h-auto p-1">
          <TabsTrigger value="all" className="px-6 py-2">All Personnel</TabsTrigger>
          <TabsTrigger value="council" className="px-6 py-2">Current Council</TabsTrigger>
          <TabsTrigger value="faculty" className="px-6 py-2">Faculty & Admin</TabsTrigger>
          <TabsTrigger value="past" className="px-6 py-2">Alumni</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((person, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all group">
            <CardContent className="p-0">
              <div className="h-24 relative overflow-hidden">
                <Image 
                  src={personnelBg?.imageUrl || "https://picsum.photos/seed/regbg/800/200"} 
                  alt="Background" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  data-ai-hint="council background"
                />
              </div>
              <div className="px-6 pb-6 -mt-12 relative z-10">
                <Avatar className="h-24 w-24 border-4 border-white shadow-lg mb-4">
                  <AvatarImage src={person.avatar} />
                  <AvatarFallback className="bg-primary text-white text-2xl">{person.initials}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">{person.name}</h3>
                  <p className="text-sm font-semibold text-foreground/80 flex items-center gap-2">
                    {person.category === 'Council' ? <Shield className="h-3 w-3" /> : <GraduationCap className="h-3 w-3" />}
                    {person.role}
                  </p>
                  <Badge variant="secondary" className="mt-2 bg-secondary/30 text-secondary-foreground border-none">
                    {person.tenure}
                  </Badge>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50 flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <Mail className="h-4 w-4" />
                    {person.email}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <Phone className="h-4 w-4" />
                    +66 2 XXX XXXX
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-muted-foreground/30">
          <Users className="h-16 w-16 text-muted mx-auto mb-4" />
          <h3 className="text-xl font-bold text-muted-foreground">No personnel found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  )
}
