"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Shield, GraduationCap } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const personnel = [
  { name: "Thanaphon Suksom", role: "Council President", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p1/200/200", initials: "TS" },
  { name: "Arisa Wongrat", role: "Vice President", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p2/200/200", initials: "AW" },
  { name: "Dr. Somchai Rakthai", role: "Faculty Advisor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p3/200/200", initials: "SR" },
  { name: "Kanya Phetcha", role: "Secretary General", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p4/200/200", initials: "KP" },
  { name: "Viroj Lim", role: "Academic Affairs Administrator", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p5/200/200", initials: "VL" },
  { name: "Pichai Jaruek", role: "Former President", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p6/200/200", initials: "PJ" },
  { name: "Sompong Bunmee", role: "Treasurer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p7/200/200", initials: "SB" },
  { name: "Malee Jaisa-ard", role: "Public Relations", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p8/200/200", initials: "MJ" },
  { name: "Prasert Kaewdee", role: "Welfare Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p9/200/200", initials: "PK" },
  { name: "Noi Srisuwan", role: "Science Dept Head", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p10/200/200", initials: "NS" },
  { name: "Wichai Yodrak", role: "IT Support", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p11/200/200", initials: "WY" },
  { name: "Sunee Thongdee", role: "Former Vice President", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p12/200/200", initials: "ST" },
  { name: "Ananda Everingham", role: "Arts Coordinator", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p13/200/200", initials: "AE" },
  { name: "Chaiwat Siri", role: "Sports Rep", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p14/200/200", initials: "CS" },
  { name: "Dao Ming", role: "International Liaison", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p15/200/200", initials: "DM" },
  { name: "Ekachai Sae-low", role: "Mathematics Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p16/200/200", initials: "ES" },
  { name: "Fon Thanasoonthorn", role: "Music Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p17/200/200", initials: "FT" },
  { name: "Gong Yoo", role: "Library Assistant", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p18/200/200", initials: "GY" },
  { name: "Hathaithat Su", role: "Class Rep G12", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p19/200/200", initials: "HS" },
  { name: "Itthipat Peeradech", role: "Class Rep G11", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p20/200/200", initials: "IP" },
  { name: "Jirayu Tang", role: "Class Rep G10", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p21/200/200", initials: "JT" },
  { name: "Krit Phrak", role: "Registrar", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p22/200/200", initials: "KP" },
  { name: "Lalisa Manoban", role: "Former Secretary", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p23/200/200", initials: "LM" },
  { name: "Mario Maurer", role: "Drama Club Advisor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p24/200/200", initials: "MM" },
  { name: "Nadech Kugimiya", role: "Student Rights Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p25/200/200", initials: "NK" },
  { name: "Oranuch J", role: "Events Planner", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p26/200/200", initials: "OJ" },
  { name: "Pancake Khemanit", role: "Volunteer Coordinator", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p27/200/200", initials: "PK" },
  { name: "Quincy Jones", role: "English Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p28/200/200", initials: "QJ" },
  { name: "Ratha Pho-ngam", role: "Dance Instructor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p29/200/200", initials: "RP" },
  { name: "Sunny Suwan", role: "Technician", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p30/200/200", initials: "SS" },
  { name: "Tik Jesdaporn", role: "Environment Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p31/200/200", initials: "TJ" },
  { name: "Urassaya Sperbund", role: "Media Specialist", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p32/200/200", initials: "US" },
  { name: "Violette Wautier", role: "Audio Tech", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p33/200/200", initials: "VW" },
  { name: "Win Metawin", role: "Logistics Manager", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p34/200/200", initials: "WM" },
  { name: "Xavier Lim", role: "History Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p35/200/200", initials: "XL" },
  { name: "Yaya Ying", role: "Former Treasurer", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p36/200/200", initials: "YY" },
  { name: "Zoe Tan", role: "Administration Assistant", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p37/200/200", initials: "ZT" },
  { name: "Arak Amorn", role: "Music Director", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p38/200/200", initials: "AA" },
  { name: "Bowie Pan", role: "Discipline Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p39/200/200", initials: "BP" },
  { name: "Celine Dion", role: "French Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p40/200/200", initials: "CD" },
  { name: "Dew Nittha", role: "External Affairs", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p41/200/200", initials: "DN" },
  { name: "Esther Supree", role: "Internal Auditor", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p42/200/200", initials: "ES" },
  { name: "Film Thanapat", role: "Student Welfare", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p43/200/200", initials: "FT" },
  { name: "Great Warintorn", role: "Sports Advisor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p44/200/200", initials: "GW" },
  { name: "Hunny Pot", role: "Cafeteria Liaison", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p45/200/200", initials: "HP" },
  { name: "Inky Sky", role: "Newsletter Editor", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p46/200/200", initials: "IS" },
  { name: "James Ma", role: "Photography Head", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p47/200/200", initials: "JM" },
  { name: "Kao Jirayu", role: "Former PR", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p48/200/200", initials: "KJ" },
  { name: "Lydia Sarun", role: "Vocal Coach", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p49/200/200", initials: "LS" },
  { name: "Mint Chalida", role: "Health Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p50/200/200", initials: "MC" },
  { name: "New Thitipoom", role: "Web Developer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p51/200/200", initials: "NT" },
  { name: "Off Jumpol", role: "Video Producer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p52/200/200", initials: "OJ" },
  { name: "Pearwah Nicha", role: "Student Mentor", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p53/200/200", initials: "PN" },
  { name: "Quin Wang", role: "Physics Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p54/200/200", initials: "QW" },
  { name: "Ryu Vachir", role: "IT Consultant", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p55/200/200", initials: "RV" }
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
            บุคลากรของสภาโรงเรียนศีขรภูมิพิสัย
          </h1>
          <p className="text-muted-foreground text-lg">รายชื่อสมาชิกสภานักเรียน อาจารย์ที่ปรึกษา และเจ้าหน้าที่ฝ่ายบริหาร</p>
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
          <TabsTrigger value="all" className="px-6 py-2">บุคลากรทั้งหมด</TabsTrigger>
          <TabsTrigger value="council" className="px-6 py-2">ผู้บริหารโรงเรียน</TabsTrigger>
          <TabsTrigger value="faculty" className="px-6 py-2">สมาชิคสภานักเรียน</TabsTrigger>
          <TabsTrigger value="past" className="px-6 py-2">ครูที่ปรึกษา</TabsTrigger>
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
