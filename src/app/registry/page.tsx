
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Shield, GraduationCap, Star } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const personnel = [
  // Previous Executive Board members - now categorized as Student Council
  { 
    name: "Thanaphon Suksom", 
    thaiName: "ธนภณ สุขสม", 
    nickname: "Note (โน้ต)", 
    role: "ประธานสภานักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB"
  },
  { 
    name: "Kanya Phetcha", 
    thaiName: "กัญญา เพชรฉ่ำ", 
    nickname: "Kwan (ขวัญ)", 
    role: "รองประธานคนที่ 1", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p4/400/600" 
  },
  { 
    name: "Viroj Lim", 
    thaiName: "วิโรจน์ ลิ้ม", 
    nickname: "Vee (วี)", 
    role: "รองประธานคนที่ 2", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p5/400/600" 
  },
  { 
    name: "Sompong Bunmee", 
    thaiName: "สมพงษ์ บุญมี", 
    nickname: "Pong (พงษ์)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p7/400/600" 
  },
  // Previous Advisory Teachers - now categorized as Student Council
  { 
    name: "Dr. Somchai Rakthai", 
    thaiName: "ดร.สมชาย รักไทย", 
    nickname: "Chai (ชัย)", 
    role: "อาจารย์ที่ปรึกษาหลัก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p3/400/600" 
  },
  { 
    name: "Noi Srisuwan", 
    thaiName: "น้อย ศรีสุวรรณ", 
    nickname: "Noi (น้อย)", 
    role: "อาจารย์ที่ปรึกษาฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/p10/400/600" 
  },
  // Rest of the Council (49 members)
  ...Array.from({ length: 49 }).map((_, i) => {
    const roles = [
      "หัวหน้าฝ่ายเทคโนโลยี", "หัวหน้าฝ่ายอาคารสถานที่", "เหรัญญิก", 
      "กรรมการฝ่ายกิจกรรม", "กรรมการฝ่ายวิชาการ", "กรรมการฝ่ายกีฬา", 
      "กรรมการฝ่ายประชาสัมพันธ์", "กรรมการฝ่ายสารวัตรนักเรียน"
    ];
    const firstNames = ["Teeranop", "Prasert", "Malee", "Anan", "Boon", "Chai", "Duang", "Erawan", "Fah", "Gai"];
    const lastNames = ["Chuadoem", "Kaewdee", "Jaisa-ard", "Sukdee", "Prom", "Rak", "Manee", "Wattana", "Kaew", "Sai"];
    const nicknames = ["Solar", "Sert", "Mali", "Arm", "Ball", "Cake", "Dew", "Eve", "Fern", "Golf"];
    const nicknamesThai = ["โซล่า", "เสริฐ", "มะลิ", "อาร์ม", "บอล", "เค้ก", "ดิว", "อีฟ", "เฟิร์น", "กอล์ฟ"];
    
    return {
      name: `${firstNames[i % 10]} ${lastNames[(i + 3) % 10]}`,
      thaiName: `นาย/นางสาว ${firstNames[i % 10]} นามสมมติ`,
      nickname: `${nicknames[i % 10]} (${nicknamesThai[i % 10]})`,
      role: roles[i % roles.length],
      category: "สภานักเรียน",
      tenure: "2569",
      avatar: `https://picsum.photos/seed/extra${i + 1}/400/600`
    };
  })
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
    if (category === "คุณครูที่ปรึกษา") return <GraduationCap className="h-3.5 w-3.5" />;
    if (category === "คณะผู้บริหารโรงเรียน") return <Star className="h-3.5 w-3.5" />;
    return <Shield className="h-3.5 w-3.5" />;
  }

  return (
    <div className="container mx-auto py-12 px-6 max-w-7xl">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
              <Users className="h-10 w-10 text-accent" />
              บุคลากรของสภาโรงเรียนศีขรภูมิพิสัย
            </h1>
            <p className="text-muted-foreground text-lg">รายชื่อบุคลากรและสมาชิกสภานักเรียน ({personnel.length} ท่าน)</p>
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
            <TabsTrigger value="all" className="px-6 py-2">ทั้งหมด ({personnel.length})</TabsTrigger>
            <TabsTrigger value="คณะผู้บริหารโรงเรียน" className="px-6 py-2">คณะผู้บริหารโรงเรียน (0)</TabsTrigger>
            <TabsTrigger value="คุณครูที่ปรึกษา" className="px-6 py-2">คุณครูที่ปรึกษา (0)</TabsTrigger>
            <TabsTrigger value="สภานักเรียน" className="px-6 py-2">สภานักเรียน ({personnel.length})</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filtered.map((person, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all group flex flex-col h-full bg-white">
            <CardContent className="p-0 flex flex-col h-full">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                <Image 
                  src={person.avatar} 
                  alt={person.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
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

                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-none text-[10px] font-bold px-2 py-0">
                      {person.category}
                    </Badge>
                  </div>
                  
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                      {person.name}
                    </h3>
                    <p className="text-sm font-bold text-foreground/80 leading-tight">
                      {person.thaiName}
                    </p>
                    <p className="text-xs font-medium text-muted-foreground italic pt-1">
                      ชื่อเล่น: {person.nickname}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70 pt-2 border-t border-border/30 mt-3">
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
          <h3 className="text-xl font-bold text-muted-foreground">ไม่พบบุคลากรในหมวดนี้</h3>
          <p className="text-muted-foreground">โปรดลองเลือกหมวดหมู่อื่นหรือเปลี่ยนคำค้นหา</p>
        </div>
      )}
    </div>
  )
}

