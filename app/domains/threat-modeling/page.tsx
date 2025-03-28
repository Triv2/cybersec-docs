import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ToolCard } from "@/components/tool-card"
import { threatModelingContent } from "@/lib/threat-modeling"
import { getInfographicsByDomain } from "@/lib/infographics"
import { InfographicCard } from "@/components/infographic-card"
import { Target } from "lucide-react"
import { ProseContent } from "@/components/prose-content"

export default function ThreatModelingPage() {
  const infographics = getInfographicsByDomain("threat-modeling") || []

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Threat Modeling</h1>
        </div>
        <p className="text-muted-foreground mt-2">
          A structured approach to identifying, quantifying, and addressing security risks associated with an
          application, system, or organization.
        </p>
      </div>

      <Tabs defaultValue="theory">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="theory">Theory</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="infographics">Infographics</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="space-y-6">
          <ProseContent dangerouslySetInnerHTML={{ __html: threatModelingContent.theory }} />
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <ProseContent>
            <h2>Threat Modeling Examples</h2>

            {threatModelingContent.examples.map((example, index) => (
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
            {threatModelingContent.tools?.map((tool, index) => (
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
            {infographics.length === 0 && (
              <div className="col-span-2 text-center py-12 text-muted-foreground">
                <p>No infographics available for this domain yet.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

