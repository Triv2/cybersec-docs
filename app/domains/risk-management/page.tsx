import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ToolCard } from "@/components/tool-card"
import { riskManagementContent } from "@/lib/risk-management"
import { getInfographicsByDomain } from "@/lib/infographics"
import { InfographicCard } from "@/components/infographic-card"
import { BarChart } from "lucide-react"

export default function RiskManagementPage() {
  const infographics = getInfographicsByDomain("risk-management") || []

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <BarChart className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Risk Management</h1>
        </div>
        <p className="text-muted-foreground mt-2">
          The ongoing process of identifying, assessing, and responding to security risks to help achieve business
          objectives.
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
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: riskManagementContent.theory }}
          />
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Risk Management Examples</h2>

            {riskManagementContent.examples.map((example, index) => (
              <div key={index} id={example.title.toLowerCase().replace(/\s+/g, "-")}>
                <h3>{example.title}</h3>
                <p>{example.description}</p>

                <CodeBlock language={example.language} code={example.code} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {riskManagementContent.tools?.map((tool, index) => (
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

