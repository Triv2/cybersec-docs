import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getFrameworkDetail } from "@/lib/frameworks"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface FrameworkPageProps {
  params: {
    id: string
  }
}

export default async function FrameworkPage({ params }: FrameworkPageProps) {
  const framework = await getFrameworkDetail(params.id)

  if (!framework) {
    notFound()
  }

  const Icon = framework.icon

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">{framework.name}</h1>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-muted-foreground">{framework.organization}</p>
          <Badge variant="secondary">{framework.type}</Badge>
        </div>
        <p className="mt-4">{framework.description}</p>
        <div className="mt-4">
          <Button asChild variant="outline">
            <Link
              href={framework.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Visit Official Website <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="implementation">Implementation</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: framework.overview }} />

            <h2>Benefits</h2>
            <ul>
              {framework.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="components" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Framework Components</h2>
            {framework.components.map((component, index) => (
              <div key={index} className="mb-6">
                <h3>{component.name}</h3>
                <p>{component.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="implementation" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Implementation Steps</h2>
            <ol>
              {framework.implementation.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {framework.resources.map((resource, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-all">
                  <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                  <Badge className="mb-2">{resource.type}</Badge>
                  <div className="mt-2">
                    <Link
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      Access Resource <ExternalLink className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

