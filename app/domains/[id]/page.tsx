import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ToolCard } from "@/components/tool-card"
import { getDomain } from "@/lib/domains"
import { notFound } from "next/navigation"
import { getInfographicsByDomain } from "@/lib/infographics"
import { InfographicCard } from "@/components/infographic-card"
import { ProseContent } from "@/components/prose-content"

interface DomainPageProps {
  params: {
    id: string
  }
}

export default function DomainPage({ params }: DomainPageProps) {
  const domain = getDomain(params.id)

  if (!domain) {
    notFound()
  }

  const infographics = getInfographicsByDomain(params.id)
  const Icon = domain.icon

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">{domain.title}</h1>
        </div>
        <p className="text-muted-foreground mt-2">{domain.description}</p>
      </div>

      <Tabs defaultValue="theory">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Theory</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="infographics">Infographics</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="space-y-6">
          <ProseContent>
            <h2>Introduction to {domain.title}</h2>
            <p>{domain.theory?.introduction}</p>

            {domain.theory?.sections.map((section, index) => (
              <div key={index}>
                <h3>{section.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: section.content.replace(/\n/g, "<br />") }} />
              </div>
            ))}
          </ProseContent>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <ProseContent>
            <h2>{domain.title} Examples</h2>

            {domain.examples?.map((example, index) => (
              <div key={index} id={example.title.toLowerCase().replace(/\s+/g, "-")}>
                <h3>{example.title}</h3>
                <p>{example.description}</p>

                <CodeBlock language={example.language} code={example.code} />
              </div>
            ))}
          </ProseContent>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {domain.tools?.map((tool, index) => (
              <ToolCard
                key={index}
                name={tool.name}
                description={tool.description}
                website={tool.website}
                commands={tool.commands}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="infographics" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {infographics.map((infographic, index) => (
              <InfographicCard
                key={index}
                title={infographic.title}
                description={infographic.description}
                imagePath={infographic.imagePath}
                tags={infographic.tags}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

