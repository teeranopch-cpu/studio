
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
  // คณะผู้บริหารโรงเรียน (4 members)
  { 
    name: "Dr. Prasert Wattana", 
    thaiName: "ดร.ประเสริฐ วัฒนา", 
    nickname: "เสริฐ (Sert)", 
    role: "ผู้อำนวยการโรงเรียน", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec1/400/600"
  },
  { 
    name: "Mrs. Malee Srisuwan", 
    thaiName: "นางมาลี ศรีสุวรรณ", 
    nickname: "มะลิ (Mali)", 
    role: "รองผู้อำนวยการฝ่ายบริหาร", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec2/400/600"
  },
  { 
    name: "Mr. Somchai Rakthai", 
    thaiName: "นายสมชาย รักไทย", 
    nickname: "ชัย (Chai)", 
    role: "รองผู้อำนวยการฝ่ายวิชาการ", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec3/400/600"
  },
  { 
    name: "Ms. Kanya Phetcha", 
    thaiName: "นางสาวกัญญา เพชรฉ่ำ", 
    nickname: "ขวัญ (Kwan)", 
    role: "รองผู้อำนวยการฝ่ายกิจกรรม", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec4/400/600"
  },

  // คุณครูที่ปรึกษา (2 members)
  { 
    name: "Mrs. Noi Jaisa-ard", 
    thaiName: "นางน้อย ใจสะอาด", 
    nickname: "น้อย (Noi)", 
    role: "ครูที่ปรึกษาสภานักเรียนหลัก", 
    category: "คุณครูที่ปรึกษา",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/adv1/400/600"
  },
  { 
    name: "Mr. Viroj Lim", 
    thaiName: "นายวิโรจน์ ลิ้ม", 
    nickname: "วี (Vee)", 
    role: "ครูที่ปรึกษาฝ่ายส่งเสริมประชาธิปไตย", 
    category: "คุณครูที่ปรึกษา",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/adv2/400/600"
  },

  // สภานักเรียน (55 members)
  { 
    name: "Natthapron Kruewan", 
    thaiName: "ณัฐพร เครือวัลย์", 
    nickname: "กิ่งเก้า (Ging gao)", 
    role: "ประธานสภานักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB"
  },
  ...Array.from({ length: 54 }).map((_, i) => {
    const roles = [
      "รองประธานคนที่ 1", "รองประธานคนที่ 2", "เลขานุการ", "เหรัญญิก",
      "หัวหน้าฝ่ายเทคโนโลยี", "หัวหน้าฝ่ายอาคารสถานที่", 
      "กรรมการฝ่ายกิจกรรม", "กรรมการฝ่ายวิชาการ", "กรรมการฝ่ายกีฬา", 
      "กรรมการฝ่ายประชาสัมพันธ์", "กรรมการฝ่ายสารวัตรนักเรียน"
    ];
    const firstNames = ["Teeranop", "Anan", "Boon", "Duang", "Erawan", "Fah", "Gai", "Harn", "Itthi", "Jatuporn"];
    const lastNames = ["Chuadoem", "Kaewdee", "Sukdee", "Prom", "Rak", "Manee", "Wattana", "Kaew", "Sai", "Petch"];
    const nicknames = ["Solar", "Arm", "Ball", "Cake", "Dew", "Eve", "Fern", "Golf", "Heng", "Ice"];
    const nicknamesThai = ["โซล่า", "อาร์ม", "บอล", "เค้ก", "ดิว", "อีฟ", "เฟิร์น", "กอล์ฟ", "เฮง", "ไอซ์"];
    const firstNamesThai = ["ธีรนพ", "อนันต์", "บุญ", "ดวง", "เอราวัณ", "ฟ้า", "ไก่", "หาญ", "อิทธิ", "จตุพร"];
    const lastNamesThai = ["ช่วยเดิม", "แก้วดี", "สุขดี", "พรหม", "รัก", "มณี", "วัฒนา", "แก้ว", "สาย", "เพชร"];
    
    return {
      name: `${firstNames[i % 10]} ${lastNames[(i + 3) % 10]}`,
      thaiName: `${firstNamesThai[i % 10]} ${lastNamesThai[(i + 3) % 10]}`,
      nickname: `${nicknamesThai[i % 10]} (${nicknames[i % 10]})`,
      role: roles[i % roles.length],
      category: "สภานักเรียน",
      tenure: "2569",
      avatar: `https://picsum.photos/seed/council${i + 1}/400/600`
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

  const executiveCount = personnel.filter(p => p.category === "คณะผู้บริหารโรงเรียน").length;
  const teacherCount = personnel.filter(p => p.category === "คุณครูที่ปรึกษา").length;
  const councilCount = personnel.filter(p => p.category === "สภานักเรียน").length;

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
            <TabsTrigger value="คณะผู้บริหารโรงเรียน" className="px-6 py-2">คณะผู้บริหารโรงเรียน ({executiveCount})</TabsTrigger>
            <TabsTrigger value="คุณครูที่ปรึกษา" className="px-6 py-2">คุณครูที่ปรึกษา ({teacherCount})</TabsTrigger>
            <TabsTrigger value="สภานักเรียน" className="px-6 py-2">สภานักเรียน ({councilCount})</TabsTrigger>
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
