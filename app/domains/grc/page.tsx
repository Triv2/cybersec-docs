import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { grcContent } from "@/lib/grc"

export default function GRCPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Governance, Risk Management, and Compliance (GRC)</h1>
        <p className="text-muted-foreground">
          GRC is an integrated approach to organizational governance that ensures an entity acts ethically and in
          accordance with its risk appetite, internal policies, and external regulations.
        </p>
      </div>

      <Tabs defaultValue="theory">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="theory">Theory</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: grcContent.theory }} />
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>GRC Examples</h2>

            {grcContent.examples.map((example, index) => (
              <div key={index}>
                <h3>{example.title}</h3>
                <p>{example.description}</p>

                <CodeBlock language={example.language} code={example.code} />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

