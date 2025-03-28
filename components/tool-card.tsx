import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CodeBlock } from "./code-block"

interface ToolCardProps {
  name: string
  description: string
  website: string
  commands: string[]
}

export function ToolCard({ name, description, website, commands }: ToolCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {name}
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            Website <ExternalLink className="h-3 w-3" />
          </a>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CodeBlock language="bash" code={commands.join("\n")} />
      </CardContent>
    </Card>
  )
}

