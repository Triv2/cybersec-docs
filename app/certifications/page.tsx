import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { getAllCertifications } from "@/lib/certifications"

export default function CertificationsPage() {
  const certifications = getAllCertifications()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Cybersecurity Certifications</h1>
        <p className="text-muted-foreground">
          A comprehensive guide to the most recognized cybersecurity certifications in the industry.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certification) => {
          const Icon = certification.icon
          return (
            <Card key={certification.id} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle>{certification.title}</CardTitle>
                </div>
                <CardDescription>{certification.organization}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3">{certification.description}</p>
                <div className="mt-4">
                  <Badge variant="secondary">{certification.level}</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/certifications/${certification.id}`} className="text-primary hover:underline">
                  View Details
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

