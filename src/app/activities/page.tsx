"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Handshake, Calendar, Users, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"

const activities = [
  {
    title: "School-Wide Leadership Summit",
    date: "Oct 15, 2024",
    location: "Main Auditorium",
    category: "Event",
    image: "https://picsum.photos/seed/act1/800/600",
    description: "Annual gathering of student leaders to discuss the legislative agenda for the upcoming term."
  },
  {
    title: "Community Outreach Program",
    date: "Sep 22, 2024",
    location: "Siam Square District",
    category: "Community",
    image: "https://picsum.photos/seed/act2/800/600",
    description: "Collaborative effort with local NGOs to promote civic engagement among youth in Bangkok."
  },
  {
    title: "MOU Signing: Digital Literacy",
    date: "Aug 10, 2024",
    location: "Tech Hub Center",
    category: "Partnership",
    image: "https://picsum.photos/seed/act3/800/600",
    description: "Official partnership with TechCorps to provide digital tools for student election processes."
  }
]

export default function ActivitiesPage() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
          <Camera className="h-10 w-10 text-accent" />
          Activity Portfolio
        </h1>
        <p className="text-muted-foreground text-lg">Showcasing performance reports, activity highlights, and strategic partnerships.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {activities.map((act, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-lg group hover:translate-y-[-4px] transition-all flex flex-col">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image 
                src={act.image} 
                alt={act.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                data-ai-hint="school activities"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-primary border-none shadow-sm px-3 py-1 font-bold">{act.category}</Badge>
              </div>
            </div>
            <CardHeader className="flex-1">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-medium">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-accent" /> {act.date}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-accent" /> {act.location}</span>
              </div>
              <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{act.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed line-clamp-3">
                {act.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 pb-6">
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <Image src={`https://picsum.photos/seed/u${i+idx}/50/50`} alt="user" width={32} height={32} />
                    </div>
                  ))}
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-[10px] font-bold text-secondary-foreground shadow-sm">+12</div>
                </div>
                <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  View Report <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-primary/5">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="h-14 w-14 rounded-2xl bg-teal-100 flex items-center justify-center text-accent mb-6">
              <Handshake className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">Memorandums of Understanding (MOUs)</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We collaborate with external educational and governmental organizations to provide enriched learning experiences and resources for our students.
            </p>
            
            <div className="space-y-4">
              {[
                { org: "Ministry of Digital Economy", date: "June 2024", scope: "Cybersecurity Training" },
                { org: "National Library of Thailand", date: "April 2024", scope: "Open Archive Access" },
                { org: "Human Rights Foundation", date: "January 2024", scope: "Student Rights Awareness" }
              ].map((mou, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-secondary/10 hover:bg-secondary/20 transition-all cursor-default group">
                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm font-bold">{i+1}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{mou.org}</h4>
                    <p className="text-xs text-muted-foreground">{mou.scope} • Signed {mou.date}</p>
                  </div>
                  <Badge variant="outline" className="bg-white/50">ACTIVE</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-lg border-4 border-white">
              <Image src="https://picsum.photos/seed/mou1/400/400" alt="MOU signing" fill className="object-cover" />
            </div>
            <div className="aspect-square relative rounded-3xl overflow-hidden shadow-lg border-4 border-white mt-8">
              <Image src="https://picsum.photos/seed/mou2/400/400" alt="MOU workshop" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
