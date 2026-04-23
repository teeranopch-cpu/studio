
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
    nickname: "ชื่อเล่น: เสริฐ (Sert)", 
    role: "ผู้อำนวยการโรงเรียน", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec1/400/600"
  },
  { 
    name: "Mrs. Malee Srisuwan", 
    thaiName: "นางมาลี ศรีสุวรรณ", 
    nickname: "ชื่อเล่น: มะลิ (Mali)", 
    role: "รองผู้อำนวยการฝ่ายบริหาร", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec2/400/600"
  },
  { 
    name: "Mr. Somchai Rakthai", 
    thaiName: "นายสมชาย รักไทย", 
    nickname: "ชื่อเล่น: ชัย (Chai)", 
    role: "รองผู้อำนวยการฝ่ายวิชาการ", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec3/400/600"
  },
  { 
    name: "Ms. Kanya Phetcha", 
    thaiName: "นางสาวกัญญา เพชรฉ่ำ", 
    nickname: "ชื่อเล่น: ขวัญ (Kwan)", 
    role: "รองผู้อำนวยการฝ่ายกิจกรรม", 
    category: "คณะผู้บริหารโรงเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/exec4/400/600"
  },

  // คุณครูที่ปรึกษา (2 members)
  { 
    name: "Mrs. Noi Jaisa-ard", 
    thaiName: "นางน้อย ใจสะอาด", 
    nickname: "ชื่อเล่น: น้อย (Noi)", 
    role: "ครูที่ปรึกษาสภานักเรียนหลัก", 
    category: "คุณครูที่ปรึกษา",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/adv1/400/600"
  },
  { 
    name: "Mr. Viroj Lim", 
    thaiName: "นายวิโรจน์ ลิ้ม", 
    nickname: "ชื่อเล่น: วี (Vee)", 
    role: "ครูที่ปรึกษาฝ่ายส่งเสริมประชาธิปไตย", 
    category: "คุณครูที่ปรึกษา",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/adv2/400/600"
  },

  // สภานักเรียน (55 members)
  { 
    name: "Natthapron Kruewan", 
    thaiName: "ณัฐพร เครือวัลย์", 
    nickname: "ชื่อเล่น: Ging gao (กิ่งเก้า)", 
    role: "ประธานคณะกรรมการสภานักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB"
  },
  { 
    name: "Phongphit chuachan", 
    thaiName: "พงษ์พิชญ์ เจือจันทร์", 
    nickname: "ชื่อเล่น: Mark (มาร์ค)", 
    role: "รองประธานกลุ่มบริหารทั่วไป", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council1/400/600"
  },
  { 
    name: "Phanuwut Thothong", 
    thaiName: "ภาณุวัฒน์ โททอง", 
    nickname: "ชื่อเล่น: Nawin(นาวิน)", 
    role: "รองประธานกลุ่มบริหารกิจการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council2/400/600"
  },
  { 
    name: "Siriyaporn Takernglab", 
    thaiName: "สิริยาภรณ์  ทะเกิงลาภ", 
    nickname: "ชื่อเล่น: Ida (ไอด้า)", 
    role: " รองประธานกลุ่มบริหารวิชาการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council3/400/600"
  },
  { 
    name: "Pannapat Thongman ", 
    thaiName: "ภรรณภัทร ทองแม้น", 
    nickname: "ชื่อเล่น: Phloi(พลอย)", 
    role: "รองประธานกลุ่มบริหารอำนวยการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council4/400/600"
  },
  { 
    name: "Rujikan  Pinphet", 
    thaiName: "รุจิกานต์ ปิ่นเพชร", 
    nickname: "ชื่อเล่น: Maem (แหม่ม)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council5/400/600"
  },
  { 
    name: "Fah Manee", 
    thaiName: "วชิรญา แสวงเพชร", 
    nickname: "ชื่อเล่น: อีฟ (Eve)", 
    role: "รองเลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council6/400/600"
  },
  { 
    name: "Salisa Jaikham", 
    thaiName: "ศลิษา ใจคำ", 
    nickname: "ชื่อเล่น: ked (เก๊ด)", 
    role: " หัวหน้าฝ่ายเหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council7/400/600"
  },
  { 
    name: "Nuntikan urai", 
    thaiName: "นันทิกานต์ อุไร ", 
    nickname: "ชื่อเล่น: ploy (พลอย)", 
    role: "รองหัวหน้าฝ่ายเหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council8/400/600"
  },
  { 
    name: "Punjarat DuangAek ", 
    thaiName: "ปัญจรัตน์ ดวงเอก", 
    nickname: "ชื่อเล่น: Mind(มายด์)", 
    role: "หัวหน้าฝ่ายสำนักงาน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council9/400/600"
  },
  { 
    name: "Kanyarat Boonluea", 
    thaiName: "กัญญารัตน์ บุญเหลือ", 
    nickname: "ชื่อเล่น: Bam(แบม) ", 
    role: " รองหัวหน้าฝ่ายสำนักงาน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council10/400/600"
  },
  { 
    name: "Ketsarin  Naklamthong", 
    thaiName: "เกศรินทร์ นักลำทอง", 
    nickname: "ชื่อเล่น: Meji(เมจิ)", 
    role: "หัวหน้าฝ่ายทะเบียนและธุรการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://drive.google.com/uc?export=view&id=1Ocy5hyx-6SnrHYh22cH3OMiGlbRo_pss"
  },
  { 
    name: "Ladda Kaewdee", 
    thaiName: "เณฤขวัญ นามโคตร ", 
    nickname: "ชื่อเล่น: แนน (Nan)", 
    role: "รองหัวหน้าฝ่ายทะเบียนและธุรการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council12/400/600"
  },
  { 
    name: "Marisa kongkaew", 
    thaiName: "สาวมาริสา กองแก้ว ", 
    nickname: "ชื่อเล่น: Mook (มุก)", 
    role: "คณะกรรมการฝ่ายทะเบียนและธุรการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council13/400/600"
  },
  { 
    name: "Wachirawit Rattanathiwat", 
    thaiName: "วชิรวิทย์ รัตนาธิวัฒน์", 
    nickname: "ชื่อเล่น: Ken (เคน)", 
    role: "หัวหน้าฝ่ายวัดและประเมินผล", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council14/400/600"
  },
  { 
    name: "Saranporn Wuttiya", 
    thaiName: "ศรัณย์พร วุฒิยา ", 
    nickname: "ชื่อเล่น: Leo (ลีโอ)", 
    role: "  รองหัวหน้าฝ่ายวัดและประเมินผล", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council15/400/600"
  },
  { 
    name: "Charuwit  Phokham", 
    thaiName: "จารุวิทย์  โพธิ์คำ", 
    nickname: "ชื่อเล่น: Phum(ภูมิ)", 
    role: "หัวหน้าฝ่ายบูรณาการประชาธิปไตย", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council16/400/600"
  },
  { 
    name: "Kittikawin Prasongkaew", 
    thaiName: "กิตติกวิน ประสงค์แก้ว", 
    nickname: "ชื่อเล่น: Captain(กับตัน)", 
    role: "รองหัวหน้าฝ่ายบูรณาการประชาธิปไตย", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council17/400/600"
  },
  { 
    name: "Somsak Kaew", 
    thaiName: "รัฐพงษ์ แต้มทอง ", 
    nickname: "ชื่อเล่น: ต่าย (Tai)", 
    role: "คณะกรรมการฝ่ายบูรณาการประชาธิปไตย", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council18/400/600"
  },
  { 
    name: "Thanwarat Phomthong", 
    thaiName: "ธัญวรัตน์ ผมทอง", 
    nickname: "ชื่อเล่น: Donut (โดนัท)", 
    role: "คณะกรรมการฝ่ายบูรณาการประชาธิปไตย", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council19/400/600"
  },
  { 
    name: "Teeranop Chuadoem ", 
    thaiName: "ธีรนพ เชื้อเดิม", 
    nickname: "ชื่อเล่น: Solar (โซล่า) ", 
    role: " หัวหน้าฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council20/400/600"
  },
  { 
    name: "Krittapas boonyong", 
    thaiName: "กฤตภาส บุญยงค์", 
    nickname: "ชื่อเล่น: Stamp(แสตมป์)", 
    role: "รองหัวหน้าฝ่ายเทคโนโลยี  ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council21/400/600"
  },
  { 
    name: "Numchai Ngamkhuntod", 
    thaiName: "นำชัย งามขุนทด", 
    nickname: "ชื่อเล่น: Time (ทาม)", 
    role: "คณะกรรมการฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council22/400/600"
  },
  { 
    name: "Aksaraphak Lamunmon", 
    thaiName: "อักษราภัค ละมูลมอญ   ", 
    nickname: "ชื่อเล่น: Name (เนม)", 
    role: "หัวหน้าฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council23/400/600"
  },
  { 
    name: "Malinee Nava", 
    thaiName: "มาลิณี นาวา", 
    nickname: "ชื่อเล่น:Fahsai (ฟ้าใส)", 
    role: "รองหัวหน้าฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council24/400/600"
  },
  { 
    name: "Zom Rak", 
    thaiName: "ศาสตรา สุขอยู่", 
    nickname: "ชื่อเล่น: แคน (Can)", 
    role: " คณะกรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council25/400/600"
  },
  { 
    name: "Khunlaphat Datthuyawat", 
    thaiName: "กุลภัสร์ ดัชถุยาวัตร ", 
    nickname: "ชื่อเล่น: Poogun ( พู่กัน )", 
    role: " คณะกรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council26/400/600"
  },
  { 
    name: "Piyawat chanthamon", 
    thaiName: "ปิยะวัฒน์ จันทมนต์", 
    nickname: "ชื่อเล่น: Aee(เอ๋)", 
    role: "หัวหน้าฝ่ายปกครองและวินัยนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council27/400/600"
  },
  { 
    name: "Patiphon Krongthong ", 
    thaiName: "นายปฏิพล กรองทอง", 
    nickname: "ชื่อเล่น:Nack (แน็ค)", 
    role: "รองหัวหน้าฝ่ายปกครองและวินัยนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council28/400/600"
  },
  { 
    name: "Prapada suksombat", 
    thaiName: "ประภาดา  สุขสมบัติ", 
    nickname: "ชื่อเล่น: pang (แป้ง)", 
    role: " หัวหน้าฝ่ายประสานงาน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council29/400/600"
  },
  { 
    name: "Thitinan Chong-ngam", 
    thaiName: "ฐิตินันท์ ช่องาม", 
    nickname: "ชื่อเล่น: kaupook(กระปุก)", 
    role: "รองหัวหน้าฝ่ายประสานงาน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council30/400/600"
  },
  { 
    name: "Taweewat Phaombandit", 
    thaiName: "ทวีวัฒน์ พรมบรรดิษฐ์", 
    nickname: "ชื่อเล่น: Mon (ม่อน)", 
    role: " หัวหน้าฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council31/400/600"
  },
  { 
    name: "Pitchanan kathisart", 
    thaiName: "พิชชานันท์ กทิศาสตร์", 
    nickname: "ชื่อเล่น: Nook(นุ๊ก)", 
    role: "รองหัวหน้าฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council32/400/600"
  },
  { 
    name: "Araya sriken", 
    thaiName: "อารยา สีเคน", 
    nickname: "ชื่อเล่น: Beam(บีม)", 
    role: " คณะกรรมการฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council33/400/600"
  },
  { 
    name: "Jedsadapond Sudhorm", 
    thaiName: "เจษฎาภรณ์ สุดหอม", 
    nickname: "ชื่อเล่น: Spy(สปาย)", 
    role: "หัวหน้าฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council34/400/600"
  },
  { 
    name: "Jira Rak", 
    thaiName: "รังสรรค์ ทองทา", 
    nickname: "ชื่อเล่น: มิน (Min)", 
    role: "  รองหัวหน้าฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council35/400/600"
  },
  { 
    name: "Surasak Wawisai", 
    thaiName: "สุรศักดิ์ หวาวิสัย", 
    nickname: "ชื่อเล่น: Peter(ปีเตอร์)", 
    role: "หัวหน้าฝ่ายศิลปวัฒนธรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council36/400/600"
  },
  { 
    name: "Wirakorn Meeying", 
    thaiName: "วิรากร มียิ่ง", 
    nickname: "ชื่อเล่น: Fahsai(ฟ้าใส)", 
    role: "  รองหัวหน้าฝ่ายศิลปวัฒนธรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council37/400/600"
  },
  { 
    name: "Korrawit Yingharn ", 
    thaiName: "กรวิทย์ ยิ่งหาญ", 
    nickname: "ชื่อเล่น: Ohm (โอม)", 
    role: "หัวหน้าฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council38/400/600"
  },
  { 
    name: "Niran Sai", 
    thaiName: "พงศกร แก้วตา", 
    nickname: "ชื่อเล่น: แพร (Prae)", 
    role: " รองหัวหน้าฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council39/400/600"
  },
  { 
    name: "Chaiwat Chandam", 
    thaiName: "ชัยวัฒน์ จันทร์ดำ", 
    nickname: "ชื่อเล่น: Film(ฟิล์ม)", 
    role: " คณะกรรมการฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council40/400/600"
  },
  { 
    name: "Porn Chuadoem", 
    thaiName: "ณิฐพล ชัยชนะ", 
    nickname: "ชื่อเล่น: เรน (Rain)", 
    role: "คณะกรรมการฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council41/400/600"
  },
  { 
    name: "Piyamon Sukprajum", 
    thaiName: "ปิยมณฑ์ สุขประจำ", 
    nickname: "ชื่อเล่น: Pooklook(ปุ๊กลุ๊ก)", 
    role: " หัวหน้าฝ่ายปฏิคม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council42/400/600"
  },
  { 
    name: "Ruj Sukdee", 
    thaiName: "นิชาดา เงินถม   ", 
    nickname: "ชื่อเล่น: ติ๊ก (Tik)", 
    role: " รองหัวหน้าฝ่ายปฏิคม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council43/400/600"
  },
  { 
    name: "Natthida Satthatham", 
    thaiName: "ณัฐธิดา ศรัทธาธรรม", 
    nickname: "ชื่อเล่น: Tawan (ตะวัน)", 
    role: " คณะกรรมการฝ่ายปฏิคม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council44/400/600"
  },
  { 
    name: "Teeradech Saokaew", 
    thaiName: "ธีรเดช เสาแก้ว ", 
    nickname: "ชื่อเล่น: Phai (ไผ่)", 
    role: "คณะกรรมการฝ่ายปฏิคม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council45/400/600"
  },
  { 
    name: "Sarawut Siriphat", 
    thaiName: "สราวุฒิ ศิริพัฒน์", 
    nickname: "ชื่อเล่น: Aon(อ้น)", 
    role: " คณะกรรมการฝ่ายปฏิคม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council46/400/600"
  },
  { 
    name: "Pawanrat Sangpetch", 
    thaiName: "ปวันรัตน์ แสงเพ็ชร", 
    nickname: "ชื่อเล่น: แหวน ( Hwan ) ", 
    role: "หัวหน้าฝ่ายพยาบาล", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council47/400/600"
  },
  { 
    name: "Wasin Kaew", 
    thaiName: "วราลักษณ์ กลิ่นจันทร์ ", 
    nickname: "ชื่อเล่น: แซด (Zad)", 
    role: "รองหัวหน้าฝ่ายพยาบาล", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council48/400/600"
  },
  { 
    name: "Pannipa Samransom", 
    thaiName: "พรรณิภา สำราญสม", 
    nickname: "ชื่อเล่น: Ning (หนิง)", 
    role: "หัวหน้าฝ่ายเครือข่ายสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council49/400/600"
  },
  { 
    name: "Teerawat Kaewlar", 
    thaiName: "ธีรวัฒน์ แก้วหล้า", 
    nickname: "ชื่อเล่น: Klong(ก้อง)", 
    role: "   รองหัวหน้าเครือข่ายสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council50/400/600"
  },
  { 
    name: "Zoe Chuadoem", 
    thaiName: "โซอี้ ช่วยเดิม", 
    nickname: "ชื่อเล่น: ซี (Cee)", 
    role: "กรรมการฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council51/400/600"
  },
  { 
    name: "Ake Kaewdee", 
    thaiName: "เอก แก้วดี", 
    nickname: "ชื่อเล่น: โดม (Dome)", 
    role: "กรรมการฝ่ายวิชาการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council52/400/600"
  },
  { 
    name: "Bell Sukdee", 
    thaiName: "เบล สุขดี", 
    nickname: "ชื่อเล่น: ฝ้าย (Fai)", 
    role: "กรรมการฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council53/400/600"
  },
  { 
    name: "Chin Prom", 
    thaiName: "ชิน พรหม", 
    nickname: "ชื่อเล่น: เก่ง (Keng)", 
    role: "กรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council54/400/600"
  },
  { 
    name: "Dew Rak", 
    thaiName: "ดิว รัก", 
    nickname: "ชื่อเล่น: หลุยส์ (Louis)", 
    role: "กรรมการฝ่ายสารวัตรนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council55/400/600"
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
                      {person.nickname}
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
