import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/code-block"
import { cryptographyContent } from "@/lib/cryptography"

export default function CryptographyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Cryptography</h1>
        <p className="text-muted-foreground">
          Cryptography is the practice and study of techniques for secure communication in the presence of adversaries,
          providing the foundation for information security in digital systems.
        </p>
      </div>

      <Tabs defaultValue="theory">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="theory">Theory</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="theory" className="space-y-6">
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: cryptographyContent.theory }}
          />
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Cryptography Examples</h2>

            {cryptographyContent.examples.map((example, index) => (
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

