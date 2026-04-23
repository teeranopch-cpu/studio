
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Shield, GraduationCap } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const personnel = [
  { name: "Thanaphon Suksom", nickname: "Note", role: "Council President", tenure: "2569", category: "Council", avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB", initials: "TS" },
  { name: "Arisa Wongrat", nickname: "Mint", role: "Vice President", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p2/200/200", initials: "AW" },
  { name: "Dr. Somchai Rakthai", nickname: "Chai", role: "Faculty Advisor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p3/200/200", initials: "SR" },
  { name: "Kanya Phetcha", nickname: "Kwan", role: "Secretary General", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p4/200/200", initials: "KP" },
  { name: "Viroj Lim", nickname: "Vee", role: "Academic Affairs Administrator", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p5/200/200", initials: "VL" },
  { name: "Pichai Jaruek", nickname: "Ek", role: "Former President", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p6/200/200", initials: "PJ" },
  { name: "Sompong Bunmee", nickname: "Pong", role: "Treasurer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p7/200/200", initials: "SB" },
  { name: "Malee Jaisa-ard", nickname: "Mali", role: "Public Relations", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p8/200/200", initials: "MJ" },
  { name: "Prasert Kaewdee", nickname: "Sert", role: "Welfare Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p9/200/200", initials: "PK" },
  { name: "Noi Srisuwan", nickname: "Noi", role: "Science Dept Head", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p10/200/200", initials: "NS" },
  { name: "Wichai Yodrak", nickname: "Win", role: "IT Support", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p11/200/200", initials: "WY" },
  { name: "Sunee Thongdee", nickname: "Nee", role: "Former Vice President", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p12/200/200", initials: "ST" },
  { name: "Ananda Everingham", nickname: "Anda", role: "Arts Coordinator", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p13/200/200", initials: "AE" },
  { name: "Chaiwat Siri", nickname: "Wat", role: "Sports Rep", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p14/200/200", initials: "CS" },
  { name: "Dao Ming", nickname: "Dao", role: "International Liaison", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p15/200/200", initials: "DM" },
  { name: "Ekachai Sae-low", nickname: "Ek", role: "Mathematics Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p16/200/200", initials: "ES" },
  { name: "Fon Thanasoonthorn", nickname: "Fon", role: "Music Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p17/200/200", initials: "FT" },
  { name: "Gong Yoo", nickname: "Gong", role: "Library Assistant", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p18/200/200", initials: "GY" },
  { name: "Hathaithat Su", nickname: "Tha", role: "Class Rep G12", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p19/200/200", initials: "HS" },
  { name: "Itthipat Peeradech", nickname: "Tob", role: "Class Rep G11", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p20/200/200", initials: "IP" },
  { name: "Jirayu Tang", nickname: "James", role: "Class Rep G10", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p21/200/200", initials: "JT" },
  { name: "Krit Phrak", nickname: "Krit", role: "Registrar", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p22/200/200", initials: "KP" },
  { name: "Lalisa Manoban", nickname: "Lisa", role: "Former Secretary", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p23/200/200", initials: "LM" },
  { name: "Mario Maurer", nickname: "Oh", role: "Drama Club Advisor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p24/200/200", initials: "MM" },
  { name: "Nadech Kugimiya", nickname: "Barry", role: "Student Rights Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p25/200/200", initials: "NK" },
  { name: "Oranuch J", nickname: "นุช", role: "Events Planner", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p26/200/200", initials: "OJ" },
  { name: "Pancake Khemanit", nickname: "Pan", role: "Volunteer Coordinator", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p27/200/200", initials: "PK" },
  { name: "Quincy Jones", nickname: "Q", role: "English Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p28/200/200", initials: "QJ" },
  { name: "Ratha Pho-ngam", nickname: "Ying", role: "Dance Instructor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p29/200/200", initials: "RP" },
  { name: "Sunny Suwan", nickname: "Sunny", role: "Technician", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p30/200/200", initials: "SS" },
  { name: "Tik Jesdaporn", nickname: "Tik", role: "Environment Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p31/200/200", initials: "TJ" },
  { name: "Urassaya Sperbund", nickname: "Yaya", role: "Media Specialist", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p32/200/200", initials: "US" },
  { name: "Violette Wautier", nickname: "V", role: "Audio Tech", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p33/200/200", initials: "VW" },
  { name: "Win Metawin", nickname: "Win", role: "Logistics Manager", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p34/200/200", initials: "WM" },
  { name: "Xavier Lim", nickname: "X", role: "History Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p35/200/200", initials: "XL" },
  { name: "Yaya Ying", nickname: "Ying", role: "Former Treasurer", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p36/200/200", initials: "YY" },
  { name: "Zoe Tan", nickname: "Zoe", role: "Administration Assistant", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p37/200/200", initials: "ZT" },
  { name: "Arak Amorn", nickname: "Pae", role: "Music Director", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p38/200/200", initials: "AA" },
  { name: "Bowie Pan", nickname: "Bo", role: "Discipline Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p39/200/200", initials: "BP" },
  { name: "Celine Dion", nickname: "Cel", role: "French Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p40/200/200", initials: "CD" },
  { name: "Dew Nittha", nickname: "Mew", role: "External Affairs", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p41/200/200", initials: "DN" },
  { name: "Esther Supree", nickname: "Est", role: "Internal Auditor", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p42/200/200", initials: "ES" },
  { name: "Film Thanapat", nickname: "Film", role: "Student Welfare", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p43/200/200", initials: "FT" },
  { name: "Great Warintorn", nickname: "Great", role: "Sports Advisor", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p44/200/200", initials: "GW" },
  { name: "Hunny Pot", nickname: "Hun", role: "Cafeteria Liaison", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p45/200/200", initials: "HP" },
  { name: "Inky Sky", nickname: "Ink", role: "Newsletter Editor", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p46/200/200", initials: "IS" },
  { name: "James Ma", nickname: "James", role: "Photography Head", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p47/200/200", initials: "JM" },
  { name: "Kao Jirayu", nickname: "Kao", role: "Former PR", tenure: "2569", category: "Past Members", avatar: "https://picsum.photos/seed/p48/200/200", initials: "KJ" },
  { name: "Lydia Sarun", nickname: "Lydia", role: "Vocal Coach", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p49/200/200", initials: "LS" },
  { name: "Mint Chalida", nickname: "Mint", role: "Health Officer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p50/200/200", initials: "MC" },
  { name: "New Thitipoom", nickname: "New", role: "Web Developer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p51/200/200", initials: "NT" },
  { name: "Off Jumpol", nickname: "Off", role: "Video Producer", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p52/200/200", initials: "OJ" },
  { name: "Pearwah Nicha", nickname: "Pear", role: "Student Mentor", tenure: "2569", category: "Council", avatar: "https://picsum.photos/seed/p53/200/200", initials: "PN" },
  { name: "Quin Wang", nickname: "Q", role: "Physics Teacher", tenure: "2569", category: "Faculty", avatar: "https://picsum.photos/seed/p54/200/200", initials: "QW" },
  { name: "Ryu Vachir", nickname: "Ryu", role: "IT Consultant", tenure: "2569", category: "Administration", avatar: "https://picsum.photos/seed/p55/200/200", initials: "RV" }
]

export default function RegistryPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  
  const personnelBg = PlaceHolderImages.find(img => img.id === 'registry-card-bg');

  const filtered = personnel.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.role.toLowerCase().includes(search.toLowerCase()) ||
                          p.nickname.toLowerCase().includes(search.toLowerCase())
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((person, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full bg-white">
            <CardContent className="p-0 flex flex-col h-full">
              {/* Vertical Rectangular Profile Area */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image 
                  src={person.avatar} 
                  alt={person.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Personnel Details Section with School BG */}
              <div className="relative flex-1 p-5 flex flex-col justify-between overflow-hidden">
                {/* School Logo Background Accent */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 scale-150 rotate-12">
                  <Image 
                    src={personnelBg?.imageUrl || ""} 
                    alt="" 
                    fill 
                    className="object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors leading-tight mb-1.5">
                    {person.name} ({person.nickname})
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                    {person.category === 'Council' ? (
                      <Shield className="h-3.5 w-3.5 text-accent shrink-0" />
                    ) : (
                      <GraduationCap className="h-3.5 w-3.5 text-accent shrink-0" />
                    )}
                    <span className="truncate">{person.role}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter border-primary/20 text-primary bg-primary/5">
                    ปีการศึกษา {person.tenure}
                  </Badge>
                  <span className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-widest">
                    {person.category}
                  </span>
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
