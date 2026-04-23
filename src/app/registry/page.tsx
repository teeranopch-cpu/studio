
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
    nickname: "ชื่อเล่น: กิ่งเก้า (Ging gao)", 
    role: "ประธานสภานักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://drive.google.com/uc?export=view&id=114UwCsa79_VdKHpaQSnnsfHfJ9KVcHoB"
  },
  { 
    name: "Teeranop Chuadoem", 
    thaiName: "ธีรนพ ช่วยเดิม", 
    nickname: "ชื่อเล่น: โซล่า (Solar)", 
    role: "รองประธานคนที่ 1", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council1/400/600"
  },
  { 
    name: "Anan Kaewdee", 
    thaiName: "อนันต์ แก้วดี", 
    nickname: "ชื่อเล่น: อาร์ม (Arm)", 
    role: "รองประธานคนที่ 2", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council2/400/600"
  },
  { 
    name: "Boon Sukdee", 
    thaiName: "บุญ สุขดี", 
    nickname: "ชื่อเล่น: บอล (Ball)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council3/400/600"
  },
  { 
    name: "Duang Prom", 
    thaiName: "ดวง พรหม", 
    nickname: "ชื่อเล่น: เค้ก (Cake)", 
    role: "เหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council4/400/600"
  },
  { 
    name: "Erawan Rak", 
    thaiName: "เอราวัณ รัก", 
    nickname: "ชื่อเล่น: ดิว (Dew)", 
    role: "หัวหน้าฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council5/400/600"
  },
  { 
    name: "Fah Manee", 
    thaiName: "ฟ้า มณี", 
    nickname: "ชื่อเล่น: อีฟ (Eve)", 
    role: "หัวหน้าฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council6/400/600"
  },
  { 
    name: "Gai Wattana", 
    thaiName: "ไก่ วัฒนา", 
    nickname: "ชื่อเล่น: เฟิร์น (Fern)", 
    role: "กรรมการฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council7/400/600"
  },
  { 
    name: "Harn Kaew", 
    thaiName: "หาญ แก้ว", 
    nickname: "ชื่อเล่น: กอล์ฟ (Golf)", 
    role: "กรรมการฝ่ายวิชาการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council8/400/600"
  },
  { 
    name: "Itthi Sai", 
    thaiName: "อิทธิ สาย", 
    nickname: "ชื่อเล่น: เฮง (Heng)", 
    role: "กรรมการฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council9/400/600"
  },
  { 
    name: "Jatuporn Petch", 
    thaiName: "จตุพร เพชร", 
    nickname: "ชื่อเล่น: ไอซ์ (Ice)", 
    role: "กรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council10/400/600"
  },
  { 
    name: "Kamon Chuadoem", 
    thaiName: "กมล ช่วยเดิม", 
    nickname: "ชื่อเล่น: มุก (Mook)", 
    role: "กรรมการฝ่ายสารวัตรนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council11/400/600"
  },
  { 
    name: "Ladda Kaewdee", 
    thaiName: "ลัดดา แก้วดี", 
    nickname: "ชื่อเล่น: แนน (Nan)", 
    role: "รองประธานคนที่ 1", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council12/400/600"
  },
  { 
    name: "Mana Sukdee", 
    thaiName: "มานะ สุขดี", 
    nickname: "ชื่อเล่น: โอ๊ต (Oat)", 
    role: "รองประธานคนที่ 2", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council13/400/600"
  },
  { 
    name: "Nipa Prom", 
    thaiName: "นิภา พรหม", 
    nickname: "ชื่อเล่น: พลอย (Ploy)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council14/400/600"
  },
  { 
    name: "Onanong Rak", 
    thaiName: "อนงค์ รัก", 
    nickname: "ชื่อเล่น: ควีน (Queen)", 
    role: "เหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council15/400/600"
  },
  { 
    name: "Piti Manee", 
    thaiName: "ปิติ มณี", 
    nickname: "ชื่อเล่น: ริว (Ryu)", 
    role: "หัวหน้าฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council16/400/600"
  },
  { 
    name: "Ratana Wattana", 
    thaiName: "รัตนา วัฒนา", 
    nickname: "ชื่อเล่น: แซม (Sam)", 
    role: "หัวหน้าฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council17/400/600"
  },
  { 
    name: "Somsak Kaew", 
    thaiName: "สมศักดิ์ แก้ว", 
    nickname: "ชื่อเล่น: ต่าย (Tai)", 
    role: "กรรมการฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council18/400/600"
  },
  { 
    name: "Thana Sai", 
    thaiName: "ธนา สาย", 
    nickname: "ชื่อเล่น: อุ้ม (Uam)", 
    role: "กรรมการฝ่ายวิชาการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council19/400/600"
  },
  { 
    name: "Udom Petch", 
    thaiName: "อุดม เพชร", 
    nickname: "ชื่อเล่น: วิว (View)", 
    role: "กรรมการฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council20/400/600"
  },
  { 
    name: "Vichai Chuadoem", 
    thaiName: "วิชัย ช่วยเดิม", 
    nickname: "ชื่อเล่น: วิน (Win)", 
    role: "กรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council21/400/600"
  },
  { 
    name: "Wipa Kaewdee", 
    thaiName: "วิภา แก้วดี", 
    nickname: "ชื่อเล่น: เซียร์ (Zear)", 
    role: "กรรมการฝ่ายสารวัตรนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council22/400/600"
  },
  { 
    name: "Xay Sukdee", 
    thaiName: "ไซ สุขดี", 
    nickname: "ชื่อเล่น: แอ้ม (Am)", 
    role: "รองประธานคนที่ 1", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council23/400/600"
  },
  { 
    name: "Yada Prom", 
    thaiName: "ญาดา พรหม", 
    nickname: "ชื่อเล่น: บิว (Bew)", 
    role: "รองประธานคนที่ 2", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council24/400/600"
  },
  { 
    name: "Zom Rak", 
    thaiName: "ส้ม รัก", 
    nickname: "ชื่อเล่น: แคน (Can)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council25/400/600"
  },
  { 
    name: "Arun Manee", 
    thaiName: "อรุณ มณี", 
    nickname: "ชื่อเล่น: ดรีม (Dream)", 
    role: "เหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council26/400/600"
  },
  { 
    name: "Bancha Wattana", 
    thaiName: "บัญชา วัฒนา", 
    nickname: "ชื่อเล่น: เอิร์ธ (Earth)", 
    role: "หัวหน้าฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council27/400/600"
  },
  { 
    name: "Chai Kaew", 
    thaiName: "ชัย แก้ว", 
    nickname: "ชื่อเล่น: ฟลุ๊ค (Fluke)", 
    role: "หัวหน้าฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council28/400/600"
  },
  { 
    name: "Darun Sai", 
    thaiName: "ดรุณ สาย", 
    nickname: "ชื่อเล่น: กาย (Guy)", 
    role: "กรรมการฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council29/400/600"
  },
  { 
    name: "Ekachai Petch", 
    thaiName: "เอกชัย เพชร", 
    nickname: "ชื่อเล่น: ฮาร์ท (Heart)", 
    role: "กรรมการฝ่ายวิชาการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council30/400/600"
  },
  { 
    name: "Fai Chuadoem", 
    thaiName: "ฝ้าย ช่วยเดิม", 
    nickname: "ชื่อเล่น: อิ้งค์ (Ink)", 
    role: "กรรมการฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council31/400/600"
  },
  { 
    name: "Ganda Kaewdee", 
    thaiName: "กานดา แก้วดี", 
    nickname: "ชื่อเล่น: เจ (Jay)", 
    role: "กรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council32/400/600"
  },
  { 
    name: "Hatha Sukdee", 
    thaiName: "หทัย สุขดี", 
    nickname: "ชื่อเล่น: เค (Kay)", 
    role: "กรรมการฝ่ายสารวัตรนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council33/400/600"
  },
  { 
    name: "Issara Prom", 
    thaiName: "อิสระ พรหม", 
    nickname: "ชื่อเล่น: ลีโอ (Leo)", 
    role: "รองประธานคนที่ 1", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council34/400/600"
  },
  { 
    name: "Jira Rak", 
    thaiName: "จิระ รัก", 
    nickname: "ชื่อเล่น: มิน (Min)", 
    role: "รองประธานคนที่ 2", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council35/400/600"
  },
  { 
    name: "Kitti Manee", 
    thaiName: "กิตติ มณี", 
    nickname: "ชื่อเล่น: นิค (Nick)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council36/400/600"
  },
  { 
    name: "Lek Wattana", 
    thaiName: "เล็ก วัฒนา", 
    nickname: "ชื่อเล่น: ออม (Aom)", 
    role: "เหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council37/400/600"
  },
  { 
    name: "Malee Kaew", 
    thaiName: "มาลี แก้ว", 
    nickname: "ชื่อเล่น: ปาล์ม (Palm)", 
    role: "หัวหน้าฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council38/400/600"
  },
  { 
    name: "Niran Sai", 
    thaiName: "นิรันดร์ สาย", 
    nickname: "ชื่อเล่น: แพร (Prae)", 
    role: "หัวหน้าฝ่ายอาคารสถานที่", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council39/400/600"
  },
  { 
    name: "Opal Petch", 
    thaiName: "โอปอล เพชร", 
    nickname: "ชื่อเล่น: คิว (Que)", 
    role: "กรรมการฝ่ายกิจกรรม", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council40/400/600"
  },
  { 
    name: "Porn Chuadoem", 
    thaiName: "พร ช่วยเดิม", 
    nickname: "ชื่อเล่น: เรน (Rain)", 
    role: "กรรมการฝ่ายวิชาการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council41/400/600"
  },
  { 
    name: "Qwan Kaewdee", 
    thaiName: "ขวัญ แก้วดี", 
    nickname: "ชื่อเล่น: สตาร์ (Star)", 
    role: "กรรมการฝ่ายกีฬา", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council42/400/600"
  },
  { 
    name: "Ruj Sukdee", 
    thaiName: "รุจ สุขดี", 
    nickname: "ชื่อเล่น: ติ๊ก (Tik)", 
    role: "กรรมการฝ่ายประชาสัมพันธ์", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council43/400/600"
  },
  { 
    name: "Siri Prom", 
    thaiName: "ศิริ พรหม", 
    nickname: "ชื่อเล่น: ยู (U)", 
    role: "กรรมการฝ่ายสารวัตรนักเรียน", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council44/400/600"
  },
  { 
    name: "Tae Rak", 
    thaiName: "เต้ รัก", 
    nickname: "ชื่อเล่น: เวน (Van)", 
    role: "รองประธานคนที่ 1", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council45/400/600"
  },
  { 
    name: "Urai Manee", 
    thaiName: "อุไร มณี", 
    nickname: "ชื่อเล่น: ไวน์ (Wine)", 
    role: "รองประธานคนที่ 2", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council46/400/600"
  },
  { 
    name: "Vipa Wattana", 
    thaiName: "วิภา วัฒนา", 
    nickname: "ชื่อเล่น: ยิ้ม (Yim)", 
    role: "เลขานุการ", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council47/400/600"
  },
  { 
    name: "Wasin Kaew", 
    thaiName: "วศิน แก้ว", 
    nickname: "ชื่อเล่น: แซด (Zad)", 
    role: "เหรัญญิก", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council48/400/600"
  },
  { 
    name: "Xit Sai", 
    thaiName: "สิทธิ์ สาย", 
    nickname: "ชื่อเล่น: อาร์ต (Art)", 
    role: "หัวหน้าฝ่ายเทคโนโลยี", 
    category: "สภานักเรียน",
    tenure: "2569", 
    avatar: "https://picsum.photos/seed/council49/400/600"
  },
  { 
    name: "Ying Petch", 
    thaiName: "หญิง เพชร", 
    nickname: "ชื่อเล่น: แบม (Bam)", 
    role: "หัวหน้าฝ่ายอาคารสถานที่", 
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
