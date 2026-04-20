
"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Users, 
  Target, 
  Lightbulb, 
  HeartHandshake, 
  ShieldCheck, 
  Scale, 
  Info,
  ChevronRight
} from "lucide-react"

const roles = [
  {
    title: "การวางแผนและดำเนินกิจกรรม",
    description: "รับผิดชอบในการจัดโครงการและกิจกรรมต่างๆ ของโรงเรียนที่ส่งเสริมทักษะและความเป็นผู้นำ",
    icon: Target,
    color: "bg-blue-50 text-blue-600",
    points: [
      "จัดทำโครงการประจำปีของสภานักเรียน",
      "ประสานงานกับกลุ่มสาระการเรียนรู้ต่างๆ",
      "ประเมินผลและรายงานการจัดกิจกรรม"
    ]
  },
  {
    title: "การประสานงานและสื่อสาร",
    description: "เป็นตัวกลางในการเชื่อมโยงระหว่างนักเรียน ครู และฝ่ายบริหาร เพื่อสร้างความเข้าใจที่ตรงกัน",
    icon: Users,
    color: "bg-teal-50 text-teal-600",
    points: [
      "รับฟังความคิดเห็นและปัญหาจากนักเรียน",
      "นำเสนอข้อเสนอแนะต่อคณะผู้บริหาร",
      "ประชาสัมพันธ์ข่าวสารและกิจกรรมของโรงเรียน"
    ]
  },
  {
    title: "การส่งเสริมประชาธิปไตย",
    description: "รณรงค์และสร้างความตระหนักรู้เกี่ยวกับวิถีประชาธิปไตยในโรงเรียนและชุมชน",
    icon: Scale,
    color: "bg-yellow-50 text-yellow-600",
    points: [
      "จัดการเลือกตั้งสภานักเรียนที่โปร่งใส",
      "ส่งเสริมการทำงานเป็นทีมและรับฟังความเห็นส่วนรวม",
      "จัดกิจกรรมวันสำคัญทางประชาธิปไตย"
    ]
  },
  {
    title: "สวัสดิการและสิทธิของนักเรียน",
    description: "ดูแลและปกป้องสิทธิประโยชน์พื้นฐานของนักเรียนทุกคนอย่างเท่าเทียมและเป็นธรรม",
    icon: HeartHandshake,
    color: "bg-red-50 text-red-600",
    points: [
      "ดูแลความสะอาดและสภาพแวดล้อมในโรงเรียน",
      "เสนอแนะเรื่องสวัสดิการนักเรียน",
      "ส่งเสริมความปลอดภัยในสถานศึกษา"
    ]
  },
  {
    title: "วินัยและระเบียบวินัย",
    description: "ช่วยสอดส่องดูแลความประพฤติและสร้างวินัยเชิงบวกให้กับเพื่อนนักเรียน",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600",
    points: [
      "เป็นแบบอย่างที่ดีในการปฏิบัติตามกฎโรงเรียน",
      "ร่วมรณรงค์ต่อต้านยาเสพติดและอบายมุข",
      "สร้างความตระหนักถึงระเบียบวินัยพื้นฐาน"
    ]
  },
  {
    title: "นวัตกรรมและความคิดริเริ่ม",
    description: "นำเสนอแนวคิดใหม่ๆ เพื่อพัฒนาโรงเรียนให้ก้าวทันเทคโนโลยีและยุคสมัย",
    icon: Lightbulb,
    color: "bg-orange-50 text-orange-600",
    points: [
      "เสนอโครงการพัฒนาโรงเรียนในยุคดิจิทัล",
      "จัดกิจกรรมสร้างสรรค์เชิงวิชาการและกีฬา",
      "นำเทคโนโลยีมาใช้ในการทำงานสภา"
    ]
  }
]

export default function RolesPage() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="mb-12">
        <Badge variant="outline" className="mb-4 border-accent text-accent font-bold px-4 py-1">ศูนย์ส่งเสริมประชาธิปไตย</Badge>
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center gap-3">
          <Scale className="h-10 w-10 text-accent" />
          บทบาทหน้าที่ของสภานักเรียน
        </h1>
        <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
          สภานักเรียนเป็นองค์กรที่เป็นตัวแทนของนักเรียนทุกคน มีบทบาทสำคัญในการร่วมพัฒนาโรงเรียน 
          ส่งเสริมการปกครองระบอบประชาธิปไตย และเป็นสื่อกลางระหว่างนักเรียนกับคณะครู
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, idx) => (
          <Card key={idx} className="border-none shadow-lg bg-white group hover:translate-y-[-4px] transition-all">
            <CardHeader className="pb-4">
              <div className={`h-12 w-12 rounded-2xl ${role.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                <role.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {role.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed mt-2">
                {role.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {role.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ChevronRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-primary/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 text-primary mb-2">
            <Info className="h-6 w-6 text-accent" />
            <h2 className="text-2xl font-bold">โครงสร้างและการบริหารงาน</h2>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            สภานักเรียนดำเนินงานภายใต้ระเบียบกระทรวงศึกษาธิการ โดยมีการแบ่งโครงสร้างการบริหารงานที่ชัดเจน 
            ประกอบด้วยประธานสภานักเรียน รองประธาน เลขานุการ และคณะกรรมการฝ่ายต่างๆ 
            ซึ่งมาจากการเลือกตั้งของนักเรียนอย่างเสรี
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary">
              <h4 className="font-bold text-primary mb-1">ความโปร่งใส</h4>
              <p className="text-xs text-muted-foreground">ตรวจสอบได้ในทุกขั้นตอนการทำงาน</p>
            </div>
            <div className="p-4 rounded-2xl bg-secondary/20 border border-secondary">
              <h4 className="font-bold text-primary mb-1">ความเท่าเทียม</h4>
              <p className="text-xs text-muted-foreground">เคารพทุกความเห็นของเพื่อนนักเรียน</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
