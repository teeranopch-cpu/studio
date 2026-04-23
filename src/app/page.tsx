import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Facebook, Phone, Scale } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-gov');

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative h-[400px] w-full overflow-hidden bg-primary flex items-center">
        <Image 
          src={heroImg?.imageUrl || "https://picsum.photos/seed/gov1/1200/600"} 
          alt="Governance" 
          fill
          className="object-cover opacity-30 mix-blend-overlay"
          priority
          data-ai-hint="government leadership"
        />
        <div className="container mx-auto px-6 relative z-10 text-white max-w-5xl">
          <h1 className="text-5xl font-bold tracking-tight mb-4 drop-shadow-md text-white">
            ขอยินดีต้อนรับ <br />
            <span className="text-accent">
              สภาโรงเรียนศีขรภูมิพิสัย
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mb-8 leading-relaxed font-medium">
            โรงเรียนศีขรภูมิพิสัย มุ่งพัฒนาคุณภาพและมาตรฐานการศึกษา จัดการศึกษาดี มีความรู้คู่คุณธรรม มุ่งเน้นด้านกีฬาและการศึกษา พัฒนาความสามารถและส่งเสริมความคิด 
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 mb-16 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all w-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">บุคลากร</CardTitle>
              <CardDescription>สมาชิาสภาฯ และอาจารย์ที่ปรึกษา</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">เข้าชมรายชื่อคณะกรรมการสภานักเรียนปัจจุบัน และครูที่ปรึกษา</p>
              <Button variant="link" className="p-0 text-accent font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/registry">View Directory <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all w-full">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Scale className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">บทบาทหน้าที่</CardTitle>
              <CardDescription>ศูนย์ส่งเสริมประชาธิปไตย</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">เรียนรู้เกี่ยวกับบทบาท หน้าที่ และความรับผิดชอบของสภานักเรียน</p>
              <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/roles">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 p-8 rounded-3xl bg-white shadow-lg border border-primary/5">
          <div className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:rotate-3 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em]">Social Media</span>
              <Link 
                href="https://www.facebook.com/studentcouncil.sps?rdid=zzCZikMNbDbiEqNo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1E6G9DbBft%2F" 
                target="_blank" 
                className="text-base font-bold text-primary hover:text-accent transition-colors"
              >
                สภานักเรียนศีขรภูมิพิสัย
              </Link>
            </div>
          </div>

          <div className="hidden md:block h-12 w-px bg-border/50" />

          <div className="flex items-center gap-4 group">
            <div className="h-12 w-12 rounded-2xl bg-accent flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:-rotate-3 shadow-md">
              <Phone className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-muted-foreground tracking-[0.2em]">Contact Us</span>
              <a 
                href="tel:044561243" 
                className="text-base font-bold text-primary hover:text-accent transition-colors"
              >
                044-561243
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
