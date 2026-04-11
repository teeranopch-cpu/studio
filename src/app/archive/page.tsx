"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Download, Clock, Filter, Eye, ShieldCheck } from "lucide-react"

const documents = [
  {
    title: "Student Council Constitution 2024",
    type: "Constitution",
    version: "v3.2 Official",
    date: "Sep 12, 2024",
    size: "1.2 MB",
    status: "Active",
    tags: ["Core", "Governance"]
  },
  {
    title: "School Announcement: Code of Conduct",
    type: "Regulation",
    version: "2024 Edition",
    date: "Aug 05, 2024",
    size: "850 KB",
    status: "Active",
    tags: ["Behavior", "Rules"]
  },
  {
    title: "MOE Regulation on Student Discipline",
    type: "Regulation",
    version: "National Standard",
    date: "Jan 15, 2023",
    size: "2.5 MB",
    status: "Active",
    tags: ["National", "Legal"]
  },
  {
    title: "Constitution Amendment Proposal",
    type: "Proposal",
    version: "Draft 1",
    date: "Oct 22, 2024",
    size: "450 KB",
    status: "Pending",
    tags: ["Draft", "Future"]
  },
  {
    title: "Student Rights Charter",
    type: "Governance",
    version: "v1.0",
    date: "May 10, 2024",
    size: "1.1 MB",
    status: "Active",
    tags: ["Rights", "International"]
  },
  {
    title: "Election Bylaws & Procedures",
    type: "Bylaws",
    version: "Revised 2024",
    date: "Jun 30, 2024",
    size: "1.8 MB",
    status: "Active",
    tags: ["Election", "Operations"]
  }
]

export default function ArchivePage() {
  const [search, setSearch] = useState("")

  const filtered = documents.filter(doc => 
    doc.title.toLowerCase().includes(search.toLowerCase()) ||
    doc.type.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
            <FileText className="h-10 w-10 text-accent" />
            Document Archive
          </h1>
          <p className="text-muted-foreground text-lg">Official repository for constitutions, school regulations, and national policies.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search documents..." 
              className="pl-10 h-11 bg-white" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-11 px-4">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filtered.map((doc, idx) => (
          <Card key={idx} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all group border-l-4 border-l-transparent hover:border-l-accent">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6">
                <div className="h-16 w-16 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1 space-y-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1">
                    <Badge variant="outline" className="text-xs uppercase tracking-wider font-bold">{doc.type}</Badge>
                    {doc.status === 'Active' ? (
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-2 py-0 text-[10px]">VERIFIED</Badge>
                    ) : (
                      <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100 border-none px-2 py-0 text-[10px]">DRAFT</Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{doc.title}</h3>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground pt-1">
                    <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> Updated {doc.date}</span>
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> {doc.version}</span>
                    <span className="font-medium text-foreground/70">{doc.size}</span>
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-primary">
                    <Eye className="h-5 w-5" />
                  </Button>
                  <Button className="bg-accent hover:bg-accent/90 text-white font-bold h-10 px-6 shadow-md">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed">
          <FileText className="h-16 w-16 text-muted mx-auto mb-4" />
          <h3 className="text-xl font-bold text-muted-foreground">No documents found</h3>
          <p className="text-muted-foreground">Try a different keyword or check your filters.</p>
        </div>
      )}
    </div>
  )
}
