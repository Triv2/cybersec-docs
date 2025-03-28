import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { ToolCard } from "@/components/tool-card"
import { digitalForensicsContent } from "@/lib/digital-forensics"
import { forensicsTools } from "@/lib/tools"

export default function DigitalForensicsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Digital Forensics</h1>
        <p className="text-muted-foreground">
          Digital forensics is the process of uncovering and interpreting electronic data. The goal is to preserve
          evidence in its most original form while performing a structured investigation.
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
            dangerouslySetInnerHTML={{ __html: digitalForensicsContent.theory }}
          />
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Digital Forensics Examples</h2>

            {digitalForensicsContent.examples.map((example, index) => (
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
            {forensicsTools.map((tool, index) => (
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

