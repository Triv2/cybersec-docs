import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllFrameworks } from "@/lib/frameworks"

export default function FrameworksPage() {
  const frameworks = getAllFrameworks()
  const frameworkTypes = [...new Set(frameworks.map((framework) => framework.type))]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Cybersecurity Frameworks</h1>
        <p className="text-muted-foreground">
          Comprehensive guides to industry-standard cybersecurity frameworks, methodologies, and best practices.
        </p>
      </div>

      {frameworkTypes.map((type) => (
        <div key={type} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">{type} Frameworks</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks
              .filter((framework) => framework.type === type)
              .map((framework) => {
                const Icon = framework.icon
                return (
                  <Card key={framework.id} className="transition-all hover:shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Icon className="h-5 w-5 text-primary" />
                        <CardTitle>{framework.name}</CardTitle>
                      </div>
                      <CardDescription>{framework.organization}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-3">{framework.description}</p>
                      <div className="mt-4">
                        <Badge variant="secondary">{framework.type}</Badge>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link
                        href={`/frameworks/${framework.id}`}
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Learn More <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href={framework.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Official Site
                      </Link>
                    </CardFooter>
                  </Card>
                )
              })}
          </div>
        </div>
      ))}
    </div>
  )
}

