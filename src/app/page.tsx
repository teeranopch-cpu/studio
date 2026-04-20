import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Scale } from "lucide-react"
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

      <div className="container mx-auto px-6 -mt-12 mb-16 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Scale className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">สภานักเรียน</CardTitle>
              <CardDescription>บทบาทหน้าที่ของสภาฯ</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">ศึกษารายละเอียดบทบาทหน้าที่ และความรับผิดชอบของคณะกรรมการสภานักเรียน</p>
              <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/roles">Learn More <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">บุคลากร</CardTitle>
              <CardDescription>Council members & advisors.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">View the directory of current student council members, faculty advisors, and staff.</p>
              <Button variant="link" className="p-0 text-accent font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/registry">View Directory <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
