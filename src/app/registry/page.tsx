
"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Users, Shield, GraduationCap, User } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const personnel = [
  { 
    name: "Natthaporn Krueawan", 
    thaiName: "ณัฐพร เคลือวัลย์", 
    nickname: "Ging Gao (กิ่งเก้า)", 
    role: "Council President", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB"
  },
  { 
    name: "Arisa Wongrat", 
    thaiName: "อริสา วงศ์รัตน์", 
    nickname: "Mint (มิ้นท์)", 
    role: "Vice President", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p2/200/200" 
  },
  { 
    name: "Dr. Somchai Rakthai", 
    thaiName: "ดร.สมชาย รักไทย", 
    nickname: "Chai (ชัย)", 
    role: "Faculty Advisor", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p3/200/200" 
  },
  { 
    name: "Kanya Phetcha", 
    thaiName: "กัญญา เพชรฉ่ำ", 
    nickname: "Kwan (ขวัญ)", 
    role: "Secretary General", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p4/200/200" 
  },
  { 
    name: "Viroj Lim", 
    thaiName: "วิโรจน์ ลิ้ม", 
    nickname: "Vee (วี)", 
    role: "Academic Affairs", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p5/200/200" 
  },
  { 
    name: "Pichai Jaruek", 
    thaiName: "พิชัย จารึก", 
    nickname: "Ek (เอก)", 
    role: "Former President", 
    tenure: "2569", 
    category: "Past Members", 
    avatar: "https://picsum.photos/seed/p6/200/200" 
  },
  { 
    name: "Sompong Bunmee", 
    thaiName: "สมพงษ์ บุญมี", 
    nickname: "Pong (พงษ์)", 
    role: "Treasurer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p7/200/200" 
  },
  { 
    name: "Malee Jaisa-ard", 
    thaiName: "มาลี ใจสะอาด", 
    nickname: "Mali (มะลิ)", 
    role: "Public Relations", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p8/200/200" 
  },
  { 
    name: "Prasert Kaewdee", 
    thaiName: "ประเสริฐ แก้วดี", 
    nickname: "Sert (เสริฐ)", 
    role: "Welfare Officer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p9/200/200" 
  },
  { 
    name: "Noi Srisuwan", 
    thaiName: "น้อย ศรีสุวรรณ", 
    nickname: "Noi (น้อย)", 
    role: "Science Dept Head", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p10/200/200" 
  },
  { 
    name: "Wichai Yodrak", 
    thaiName: "วิชัย ยอดรัก", 
    nickname: "Win (วิน)", 
    role: "IT Support", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p11/200/200" 
  },
  { 
    name: "Sunee Thongdee", 
    thaiName: "สุนีย์ ทองดี", 
    nickname: "Nee (นี)", 
    role: "Former Vice President", 
    tenure: "2569", 
    category: "Past Members", 
    avatar: "https://picsum.photos/seed/p12/200/200" 
  },
  { 
    name: "Ananda Everingham", 
    thaiName: "อนันดา เอเวอริงแฮม", 
    nickname: "Anda (อนันดา)", 
    role: "Arts Coordinator", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p13/200/200" 
  },
  { 
    name: "Chaiwat Siri", 
    thaiName: "ชัยวัฒน์ ศิริ", 
    nickname: "Wat (วัฒน์)", 
    role: "Sports Rep", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p14/200/200" 
  },
  { 
    name: "Dao Ming", 
    thaiName: "ดาว มิ่ง", 
    nickname: "Dao (ดาว)", 
    role: "International Liaison", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p15/200/200" 
  },
  { 
    name: "Ekachai Sae-low", 
    thaiName: "เอกชัย แซ่โหล", 
    nickname: "Ek (เอก)", 
    role: "Math Teacher", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p16/200/200" 
  },
  { 
    name: "Fon Thanasoonthorn", 
    thaiName: "ฝน ธนสุนทร", 
    nickname: "Fon (ฝน)", 
    role: "Music Teacher", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p17/200/200" 
  },
  { 
    name: "Gong Yoo", 
    thaiName: "กง ยู", 
    nickname: "Gong (กง)", 
    role: "Library Assistant", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p18/200/200" 
  },
  { 
    name: "Hathaithat Su", 
    thaiName: "หทัยทัศน์ สุ", 
    nickname: "Tha (ทา)", 
    role: "Class Rep G12", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p19/200/200" 
  },
  { 
    name: "Itthipat Peeradech", 
    thaiName: "อิทธิพัทธ์ พีระเดชา", 
    nickname: "Tob (ต๊อบ)", 
    role: "Class Rep G11", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p20/200/200" 
  },
  { 
    name: "Jirayu Tang", 
    thaiName: "จิรายุ ตั้ง", 
    nickname: "James (เจมส์)", 
    role: "Class Rep G10", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p21/200/200" 
  },
  { 
    name: "Krit Phrak", 
    thaiName: "กฤษฎ์ ภักดิ์", 
    nickname: "Krit (กฤษฎ์)", 
    role: "Registrar", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p22/200/200" 
  },
  { 
    name: "Lalisa Manoban", 
    thaiName: "ลลิษา มโนบาล", 
    nickname: "Lisa (ลิซ่า)", 
    role: "Former Secretary", 
    tenure: "2569", 
    category: "Past Members", 
    avatar: "https://picsum.photos/seed/p23/200/200" 
  },
  { 
    name: "Mario Maurer", 
    thaiName: "มาริโอ้ เมาเร่อ", 
    nickname: "Oh (โอ้)", 
    role: "Drama Club Advisor", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p24/200/200" 
  },
  { 
    name: "Nadech Kugimiya", 
    thaiName: "ณเดชน์ คูกิมิยะ", 
    nickname: "Barry (แบร์รี่)", 
    role: "Student Rights Officer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p25/200/200" 
  },
  { 
    name: "Oranuch J", 
    thaiName: "อรนุช เจ", 
    nickname: "Nuch (นุช)", 
    role: "Events Planner", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p26/200/200" 
  },
  { 
    name: "Pancake Khemanit", 
    thaiName: "แพนเค้ก เขมนิจ", 
    nickname: "Pan (แพน)", 
    role: "Volunteer Coordinator", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p27/200/200" 
  },
  { 
    name: "Quincy Jones", 
    thaiName: "ควินซี โจนส์", 
    nickname: "Q (คิว)", 
    role: "English Teacher", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p28/200/200" 
  },
  { 
    name: "Ratha Pho-ngam", 
    thaiName: "รฐา โพธิ์งาม", 
    nickname: "Ying (หญิง)", 
    role: "Dance Instructor", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p29/200/200" 
  },
  { 
    name: "Sunny Suwan", 
    thaiName: "ซันนี่ สุวรรณ", 
    nickname: "Sunny (ซันนี่)", 
    role: "Technician", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p30/200/200" 
  },
  { 
    name: "Tik Jesdaporn", 
    thaiName: "ติ๊ก เจษฎาภรณ์", 
    nickname: "Tik (ติ๊ก)", 
    role: "Environment Officer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p31/200/200" 
  },
  { 
    name: "Urassaya Sperbund", 
    thaiName: "อุรัสยา เสปอร์บันด์", 
    nickname: "Yaya (ญาญ่า)", 
    role: "Media Specialist", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p32/200/200" 
  },
  { 
    name: "Violette Wautier", 
    thaiName: "วิโอเลต วอเทียร์", 
    nickname: "V (วี)", 
    role: "Audio Tech", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p33/200/200" 
  },
  { 
    name: "Win Metawin", 
    thaiName: "วิน เมธวิน", 
    nickname: "Win (วิน)", 
    role: "Logistics Manager", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p34/200/200" 
  },
  { 
    name: "Xavier Lim", 
    thaiName: "เซเวียร์ ลิม", 
    nickname: "X (เอ็กซ์)", 
    role: "History Teacher", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p35/200/200" 
  },
  { 
    name: "Yaya Ying", 
    thaiName: "ญาญ่า หญิง", 
    nickname: "Ying (หญิง)", 
    role: "Former Treasurer", 
    tenure: "2569", 
    category: "Past Members", 
    avatar: "https://picsum.photos/seed/p36/200/200" 
  },
  { 
    name: "Zoe Tan", 
    thaiName: "โซอี้ แทน", 
    nickname: "Zoe (โซอี้)", 
    role: "Admin Assistant", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p37/200/200" 
  },
  { 
    name: "Arak Amorn", 
    thaiName: "อารักษ์ อมร", 
    nickname: "Pae (เป้)", 
    role: "Music Director", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p38/200/200" 
  },
  { 
    name: "Bowie Pan", 
    thaiName: "โบวี่ แพน", 
    nickname: "Bo (โบว์)", 
    role: "Discipline Officer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p39/200/200" 
  },
  { 
    name: "Celine Dion", 
    thaiName: "เซลีน ดิออน", 
    nickname: "Cel (เซล)", 
    role: "French Teacher", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p40/200/200" 
  },
  { 
    name: "Dew Nittha", 
    thaiName: "ดิว นิษฐา", 
    nickname: "Mew (มิว)", 
    role: "External Affairs", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p41/200/200" 
  },
  { 
    name: "Esther Supree", 
    thaiName: "เอสเธอร์ สุปรีย์ลีลา", 
    nickname: "Est (เอส)", 
    role: "Internal Auditor", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p42/200/200" 
  },
  { 
    name: "Film Thanapat", 
    thaiName: "ฟิล์ม ธนภัทร", 
    nickname: "Film (ฟิล์ม)", 
    role: "Student Welfare", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p43/200/200" 
  },
  { 
    name: "Great Warintorn", 
    thaiName: "เกรท วรินทร", 
    nickname: "Great (เกรท)", 
    role: "Sports Advisor", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p44/200/200" 
  },
  { 
    name: "Hunny Pot", 
    thaiName: "ฮันนี่ พอต", 
    nickname: "Hun (ฮัน)", 
    role: "Cafeteria Liaison", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p45/200/200" 
  },
  { 
    name: "Inky Sky", 
    thaiName: "อิงค์กี้ สกาย", 
    nickname: "Ink (อิงค์)", 
    role: "Newsletter Editor", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p46/200/200" 
  },
  { 
    name: "James Ma", 
    thaiName: "เจมส์ มาร์", 
    nickname: "James (เจมส์)", 
    role: "Photography Head", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p47/200/200" 
  },
  { 
    name: "Kao Jirayu", 
    thaiName: "เก้า จิรายุ", 
    nickname: "Kao (เก้า)", 
    role: "Former PR", 
    tenure: "2569", 
    category: "Past Members", 
    avatar: "https://picsum.photos/seed/p48/200/200" 
  },
  { 
    name: "Lydia Sarun", 
    thaiName: "ลิเดีย ศรัณย์รัชต์", 
    nickname: "Lydia (ลิเดีย)", 
    role: "Vocal Coach", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p49/200/200" 
  },
  { 
    name: "Mint Chalida", 
    thaiName: "มิ้นต์ ชาลิดา", 
    nickname: "Mint (มิ้นต์)", 
    role: "Health Officer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p50/200/200" 
  },
  { 
    name: "New Thitipoom", 
    thaiName: "นิว ฐิติภูมิ", 
    nickname: "New (นิว)", 
    role: "Web Developer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p51/200/200" 
  },
  { 
    name: "Off Jumpol", 
    thaiName: "ออฟ จุมพล", 
    nickname: "Off (ออฟ)", 
    role: "Video Producer", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p52/200/200" 
  },
  { 
    name: "Pearwah Nicha", 
    thaiName: "แพรวา ณิชาภัทร", 
    nickname: "Pear (แพร)", 
    role: "Student Mentor", 
    tenure: "2569", 
    category: "Council", 
    avatar: "https://picsum.photos/seed/p53/200/200" 
  },
  { 
    name: "Quin Wang", 
    thaiName: "ควิน หวัง", 
    nickname: "Q (คิว)", 
    role: "Physics Teacher", 
    tenure: "2569", 
    category: "Faculty", 
    avatar: "https://picsum.photos/seed/p54/200/200" 
  },
  { 
    name: "Ryu Vachir", 
    thaiName: "ริว วชิรวิชญ์", 
    nickname: "Ryu (ริว)", 
    role: "IT Consultant", 
    tenure: "2569", 
    category: "Administration", 
    avatar: "https://picsum.photos/seed/p55/200/200" 
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
          <TabsTrigger value="council" className="px-6 py-2">สภานักเรียน</TabsTrigger>
          <TabsTrigger value="faculty" className="px-6 py-2">ครูที่ปรึกษา</TabsTrigger>
          <TabsTrigger value="administration" className="px-6 py-2">ฝ่ายบริหาร</TabsTrigger>
          <TabsTrigger value="past" className="px-6 py-2">ศิษย์เก่าสภาฯ</TabsTrigger>
        </TabsList>
      </Tabs>

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
                    {person.category === 'Council' ? (
                      <Shield className="h-3.5 w-3.5 text-accent shrink-0" />
                    ) : (
                      <GraduationCap className="h-3.5 w-3.5 text-accent shrink-0" />
                    )}
                    <span className="truncate">{person.role}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-tighter border-primary/20 text-primary bg-primary/5">
                    ปีการศึกษา {person.tenure}
                  </Badge>
                  <span className="text-[9px] font-black text-muted-foreground/30 uppercase tracking-widest">
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
          <h3 className="text-xl font-bold text-muted-foreground">ไม่พบบุคลากรที่ค้นหา</h3>
          <p className="text-muted-foreground">โปรดลองใช้คำค้นหาอื่นหรือปรับฟิลเตอร์</p>
        </div>
      )}
    </div>
  )
}
