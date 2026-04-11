"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, ExternalLink, FileText, ClipboardList, PenTool, Radio } from "lucide-react"

const categories = [
  {
    title: "Election Materials",
    description: "Everything you need to run for student council positions.",
    icon: PenTool,
    items: [
      { name: "Candidate Application Form", size: "250 KB" },
      { name: "Campaign Rules & Guidelines", size: "1.1 MB" },
      { name: "Poster Template (Official)", size: "4.5 MB" }
    ]
  },
  {
    title: "Public Relations",
    description: "Official logos, brand guides, and PR request forms.",
    icon: Radio,
    items: [
      { name: "Student Council Logo Kit", size: "12.0 MB" },
      { name: "Social Media Post Templates", size: "2.1 MB" },
      { name: "Announcement Request Form", size: "150 KB" }
    ]
  },
  {
    title: "Academic & Grading",
    description: "Links to school systems and academic support documents.",
    icon: ClipboardList,
    items: [
      { name: "Student Grading Portal (Login Required)", isLink: true },
      { name: "Academic Calendar", size: "800 KB" },
      { name: "Tutor Program Application", size: "200 KB" }
    ]
  }
]

export default function PortalPage() {
  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
            <ExternalLink className="h-10 w-10 text-accent" />
            External Resource & Forms
          </h1>
          <p className="text-muted-foreground text-lg">One-stop access for digital forms, election materials, and school systems.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search forms & resources..." className="pl-10 h-11 bg-white" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, idx) => (
          <Card key={idx} className="border-none shadow-lg bg-white overflow-hidden flex flex-col">
            <CardHeader className="bg-primary/5 pb-6">
              <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-4">
                <cat.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold">{cat.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed">{cat.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 flex-1 space-y-3">
              {cat.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl border border-border/50 hover:bg-secondary/10 hover:border-accent transition-all group">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-secondary/30 flex items-center justify-center text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <FileText className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                      {item.size && <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{item.size}</p>}
                    </div>
                  </div>
                  {item.isLink ? (
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-accent">
                      <Download className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
            <div className="px-6 pb-6 mt-auto">
              <Button variant="outline" className="w-full font-bold border-primary/20 text-primary hover:bg-primary/5">
                View All {cat.title}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-16 border-none shadow-2xl bg-gradient-to-br from-primary to-accent text-white overflow-hidden">
        <CardContent className="p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">Can't find what you're looking for?</h2>
              <p className="text-primary-foreground/90 text-lg mb-0">Use our unified search system to scan through all personnel records, documents, activities, and forms at once.</p>
            </div>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 h-14 text-lg shadow-xl">
              <Search className="h-5 w-5 mr-3" />
              Unified Search
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
