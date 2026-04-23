
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Shield, User, GraduationCap, Star } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const personnel = [
  { 
    name: "Thanaphon Suksom", 
    thaiName: "ธนภณ สุขสม", 
    nickname: "Note (โน้ต)", 
    role: "ประธานสภานักเรียน", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB"
  },
  { 
    name: "Teeranop Chuadoem", 
    thaiName: "นายธีรนพ เชื้อเดิม", 
    nickname: "Solar (โซล่า)", 
    role: "หัวหน้าฝ่ายเทคโนโลยีและโสตทัศนศึกษา", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p2/200/200" 
  },
  { 
    name: "Dr. Somchai Rakthai", 
    thaiName: "ดร.สมชาย รักไทย", 
    nickname: "Chai (ชัย)", 
    role: "Faculty Advisor", 
    category: "Advisor",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p3/200/200" 
  },
  { 
    name: "Kanya Phetcha", 
    thaiName: "กัญญา เพชรฉ่ำ", 
    nickname: "Kwan (ขวัญ)", 
    role: "Secretary General", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p4/200/200" 
  },
  { 
    name: "Viroj Lim", 
    thaiName: "วิโรจน์ ลิ้ม", 
    nickname: "Vee (วี)", 
    role: "Academic Affairs", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p5/200/200" 
  },
  { 
    name: "Pichai Jaruek", 
    thaiName: "พิชัย จารึก", 
    nickname: "Ek (เอก)", 
    role: "Former President", 
    category: "Former",
    tenure: "2568", 
    avatar: "https://picsum.photos/seed/p6/200/200" 
  },
  { 
    name: "Sompong Bunmee", 
    thaiName: "สมพงษ์ บุญมี", 
    nickname: "Pong (พงษ์)", 
    role: "Treasurer", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p7/200/200" 
  },
  { 
    name: "Malee Jaisa-ard", 
    thaiName: "มาลี ใจสะอาด", 
    nickname: "Mali (มะลิ)", 
    role: "Public Relations", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p8/200/200" 
  },
  { 
    name: "Prasert Kaewdee", 
    thaiName: "ประเสริฐ แก้วดี", 
    nickname: "Sert (เสริฐ)", 
    role: "Welfare Officer", 
    category: "Student Council",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p9/200/200" 
  },
  { 
    name: "Noi Srisuwan", 
    thaiName: "น้อย ศรีสุวรรณ", 
    nickname: "Noi (น้อย)", 
    role: "Science Dept Head", 
    category: "Advisor",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p10/200/200" 
  }
]

export default function RegistryPage() {
  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  
  const personnelBg = PlaceHolderImages.find(img => img.id === 'registry-card-bg');

  const filtered = personnel.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                         p.thaiName.toLowerCase().includes(search.toLowerCase()) ||
                         p.role.toLowerCase().includes(search.toLowerCase()) ||
                         p.nickname.toLowerCase().includes(search.toLowerCase());
    const matchesTab = activeTab === "all" || p.category === activeTab;
    return matchesSearch && matchesTab;
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Advisor": return <GraduationCap className="h-3.5 w-3.5" />;
      case "Former": return <Star className="h-3.5 w-3.5" />;
      default: return <Shield className="h-3.5 w-3.5" />;
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "Advisor": return "อาจารย์ที่ปรึกษา";
      case "Former": return "อดีตสภาฯ";
      case "Student Council": return "สภานักเรียน";
      default: return category;
    }
  }

  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
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
              placeholder="ค้นหาบุคลากร..." 
              className="pl-10 h-11 bg-white border-primary/20 focus-visible:ring-accent" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="bg-white border p-1 h-auto flex-wrap">
            <TabsTrigger value="all" className="px-6 py-2">ทั้งหมด</TabsTrigger>
            <TabsTrigger value="Student Council" className="px-6 py-2">สภานักเรียน</TabsTrigger>
            <TabsTrigger value="Advisor" className="px-6 py-2">อาจารย์ที่ปรึกษา</TabsTrigger>
            <TabsTrigger value="Former" className="px-6 py-2">อดีตคณะกรรมการ</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((person, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full bg-white">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image 
                  src={person.avatar} 
                  alt={person.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="relative flex-1 p-5 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 scale-150 rotate-12">
                  <Image 
                    src={personnelBg?.imageUrl || ""} 
                    alt="" 
                    fill 
                    className="object-contain"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-none text-[10px] font-bold px-2 py-0">
                      {getCategoryLabel(person.category)}
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                    {person.name}
                  </h3>
                  <p className="text-sm font-bold text-foreground/80 leading-tight">
                    {person.thaiName}
                  </p>
                  <p className="text-xs font-medium text-muted-foreground italic flex items-center gap-1.5 pt-1">
                    <User className="h-3 w-3 text-accent" />
                    ชื่อเล่น: {person.nickname}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 pt-2 border-t border-border/30 mt-2">
                    <span className="text-accent shrink-0">
                      {getCategoryIcon(person.category)}
                    </span>
                    <span className="truncate">{person.role}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter border-primary/20 text-primary bg-primary/5">
                    ปีการศึกษา {person.tenure}
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
          <h3 className="text-xl font-bold text-muted-foreground">ไม่พบบุคลากรที่ค้นหา</h3>
          <p className="text-muted-foreground">โปรดลองใช้คำค้นหาอื่นหรือปรับฟิลเตอร์</p>
        </div>
      )}
    </div>
  )
}
