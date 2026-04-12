import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, ArrowRight, Bell, FileSearch, GraduationCap } from "lucide-react"
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
          <h1 className="text-5xl font-bold tracking-tight mb-4 drop-shadow-md">
            ขอยินดีต้อนรับ <br />
            <span className="text-accent">
              สภาโรงเรียนศีขรภูมิพิสัย
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mb-8 leading-relaxed font-medium">
            The centralized platform for student governance, legislative documents, and civic education at our institution. Built for transparency and accessibility.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-12 mb-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">Legislative Archive</CardTitle>
              <CardDescription>Official regulations and constitutions.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Access the latest version of the Student Council Constitution and Ministry of Education regulations.</p>
              <Button variant="link" className="p-0 text-primary font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/archive">Open Repository <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-teal-100 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">Civic Hub</CardTitle>
              <CardDescription>Learning about democracy.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Intensive academic content on Thai political history, human rights, and constitutional law.</p>
              <Button variant="link" className="p-0 text-accent font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/education">Start Learning <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-none bg-white/80 backdrop-blur-sm group hover:translate-y-[-4px] transition-all">
            <CardHeader>
              <div className="h-12 w-12 rounded-xl bg-yellow-100 flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
                <Bell className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">Latest Activities</CardTitle>
              <CardDescription>Updates and performances.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">Browse our activity portfolio and see how the Student Council is making a difference.</p>
              <Button variant="link" className="p-0 text-yellow-600 font-bold group-hover:translate-x-1 transition-transform" asChild>
                <Link href="/activities">Browse Portfolio <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
              <FileSearch className="h-8 w-8 text-accent" />
              Integrated Governance
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-border/50">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">1</div>
                <div>
                  <h4 className="font-bold text-foreground">Registry Management</h4>
                  <p className="text-sm text-muted-foreground">Keep track of all current and past student council members, their roles, and tenures.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-border/50">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">2</div>
                <div>
                  <h4 className="font-bold text-foreground">External Partnership</h4>
                  <p className="text-sm text-muted-foreground">Documented MOUs with local organizations to foster collaborative student opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-white shadow-sm border border-border/50">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shrink-0">3</div>
                <div>
                  <h4 className="font-bold text-foreground">Unified Search</h4>
                  <p className="text-sm text-muted-foreground">Locate personnel, specific documents, and academic content instantly across the whole portal.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src="https://picsum.photos/seed/edu2/800/450" 
              alt="Dashboard Preview" 
              fill 
              className="object-cover"
              data-ai-hint="student leadership"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
