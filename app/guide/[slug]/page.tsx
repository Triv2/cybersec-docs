import { notFound } from "next/navigation"
import { BookOpen } from "lucide-react"
import { getGuide } from "@/lib/guides"

interface GuidePageProps {
  params: {
    slug: string
  }
}

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuide(params.slug)

  if (!guide) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">{guide.title}</h1>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: guide.content }} />
    </div>
  )
}

