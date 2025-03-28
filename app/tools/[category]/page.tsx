import { ToolCard } from "@/components/tool-card"
import { getToolCategory, getToolsForCategory } from "@/lib/tools"
import { notFound } from "next/navigation"
import { Wrench } from "lucide-react"

interface ToolsCategoryPageProps {
  params: {
    category: string
  }
}

export default async function ToolsCategoryPage({ params }: ToolsCategoryPageProps) {
  const category = await getToolCategory(params.category)

  if (!category) {
    notFound()
  }

  const tools = getToolsForCategory(params.category)

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Wrench className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
        </div>
        <p className="text-muted-foreground mt-2">{category.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((tool, index) => (
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

