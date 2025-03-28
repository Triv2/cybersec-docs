import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Award, BookText } from "lucide-react"
import { domains } from "@/lib/domains"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">CyberSec Docs</h1>
        <p className="text-xl text-muted-foreground">Comprehensive documentation for cybersecurity professionals</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {domains.map((domain) => {
          const Icon = domain.icon
          return (
            <Card key={domain.id} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle>{domain.title}</CardTitle>
                </div>
                <CardDescription>{domain.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href={domain.href}>
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Certifications</CardTitle>
            </div>
            <CardDescription>Explore industry-recognized cybersecurity certifications</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href="/certifications">
                View Certifications <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="transition-all hover:shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookText className="h-5 w-5 text-primary" />
              <CardTitle>Books</CardTitle>
            </div>
            <CardDescription>Access a collection of essential cybersecurity books</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="w-full justify-between">
              <Link href="/books">
                Browse Books <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          Welcome to the Ultimate Cybersecurity Documentation. This resource is designed to provide comprehensive
          information on various cybersecurity domains, tools, and techniques.
        </p>
        <div className="flex flex-col gap-2">
          <Link href="/guide/introduction" className="text-primary hover:underline flex items-center gap-1">
            <ArrowRight className="h-4 w-4" /> Introduction to Cybersecurity
          </Link>
          <Link href="/guide/how-to-use" className="text-primary hover:underline flex items-center gap-1">
            <ArrowRight className="h-4 w-4" /> How to Use This Documentation
          </Link>
          <Link href="/guide/contributing" className="text-primary hover:underline flex items-center gap-1">
            <ArrowRight className="h-4 w-4" /> Contributing to the Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}

