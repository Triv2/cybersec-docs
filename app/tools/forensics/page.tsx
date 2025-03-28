import { ToolCard } from "@/components/tool-card"
import { forensicsTools } from "@/lib/tools"
import { Wrench } from "lucide-react"

export default function ForensicsToolsPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Forensics Tools</h1>
        </div>
        <p className="text-muted-foreground mt-2">Tools for digital forensics, evidence collection, and analysis</p>
      </div>

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
    </div>
  )
}

