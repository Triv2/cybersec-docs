import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ToolCard } from "@/components/tool-card"
import { networkSecurityContent } from "@/lib/network-security"
import { networkTools } from "@/lib/tools"

export default function NetworkSecurityPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Network Security</h1>
        <p className="text-muted-foreground">
          Network security consists of policies, practices, and technologies designed to protect the integrity,
          confidentiality, and accessibility of computer networks and data.
        </p>
      </div>

      <Tabs defaultValue="theory">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="theory">Theory</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="space-y-6">
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: networkSecurityContent.theory }}
          />
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Network Security Examples</h2>

            {networkSecurityContent.examples.map((example, index) => (
              <div key={index}>
                <h3>{example.title}</h3>
                <p>{example.description}</p>

                <CodeBlock language={example.language} code={example.code} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {networkTools.map((tool, index) => (
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
      </Tabs>
    </div>
  )
}

