"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Sparkles, FileText, Send, AlertCircle, Copy, Check } from "lucide-react"
import { simplifyDocument, type SimplifyDocumentOutput } from "@/ai/flows/simplify-document"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

export default function SimplifierPage() {
  const [content, setContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<SimplifyDocumentOutput | null>(null)
  const [copied, setCopied] = useState(false)

  const handleSimplify = async () => {
    if (!content.trim()) return
    setIsLoading(true)
    try {
      const output = await simplifyDocument({ documentContent: content })
      setResult(output)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="container mx-auto py-12 px-6 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-primary mb-2 flex items-center gap-3">
          <Sparkles className="h-10 w-10 text-accent" />
          AI Document Simplifier
        </h1>
        <p className="text-muted-foreground text-lg">
          Powered by Gemini AI. Summarize and simplify complex legal documents, constitutions, or school regulations for students and parents.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-none shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-primary/5 pb-6">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Input Document
              </CardTitle>
              <CardDescription>Paste your complex text below (Max 5,000 characters)</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Textarea 
                placeholder="Paste the document content here (Thai or English)..." 
                className="min-h-[400px] border-primary/10 focus-visible:ring-accent resize-none p-4 leading-relaxed"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Character count: {content.length}</p>
                <Button 
                  onClick={handleSimplify} 
                  disabled={isLoading || !content.trim()} 
                  className="bg-accent hover:bg-accent/90 text-white px-8 h-11 shadow-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white mr-2" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Simplify Now <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {isLoading ? (
            <Card className="border-none shadow-xl bg-white h-full">
              <CardHeader>
                <Skeleton className="h-8 w-1/3 mb-2" />
                <Skeleton className="h-4 w-full" />
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-24 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-48 w-full" />
                </div>
              </CardContent>
            </Card>
          ) : result ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="border-none shadow-xl bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <Badge className="mb-2 bg-primary/10 text-primary border-none">Summarized View</Badge>
                    <CardTitle className="text-xl">Quick Summary</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleCopy(result.summary)}>
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed font-medium bg-secondary/20 p-4 rounded-xl border border-secondary">
                    {result.summary}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl bg-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div>
                    <Badge className="mb-2 bg-accent/10 text-accent border-none">Detailed Breakdown</Badge>
                    <CardTitle className="text-xl">Simplified Explanation</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleCopy(result.simplifiedExplanation)}>
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none text-muted-foreground leading-loose">
                    {result.simplifiedExplanation.split('\n').map((para, i) => (
                      <p key={i} className="mb-4">{para}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card className="border-none shadow-xl bg-white h-full border-dashed border-2 flex items-center justify-center p-12 text-center border-primary/10">
              <div>
                <div className="h-20 w-20 rounded-full bg-accent/5 flex items-center justify-center text-accent mx-auto mb-6">
                  <Sparkles className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Ready to Simplify?</h3>
                <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                  Enter any complex legal text or regulation on the left to get started. 
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>

      <div className="mt-12 p-6 rounded-2xl bg-white shadow-sm border border-primary/10 flex items-start gap-4">
        <AlertCircle className="h-6 w-6 text-yellow-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-foreground">AI Transparency Note</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This tool uses Generative AI to simplify documents. While it is highly accurate, it should be used for educational purposes and better understanding only.
          </p>
        </div>
      </div>
    </div>
  )
}
