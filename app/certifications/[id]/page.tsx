import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { getCertification } from "@/lib/certifications"
import { notFound } from "next/navigation"

interface CertificationPageProps {
  params: {
    id: string
  }
}

export default function CertificationPage({ params }: CertificationPageProps) {
  const certification = getCertification(params.id)

  if (!certification) {
    notFound()
  }

  const Icon = certification.icon

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="h-6 w-6 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">{certification.title}</h1>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <p className="text-muted-foreground">{certification.organization}</p>
          <Badge variant="secondary">{certification.level}</Badge>
        </div>
        <p className="mt-4">{certification.description}</p>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="domains">Domains</TabsTrigger>
          <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Requirements</h2>
            <p>{certification.requirements}</p>

            <h2>Exam Details</h2>
            <p>{certification.examDetails}</p>
          </div>
        </TabsContent>

        <TabsContent value="domains" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Domains Covered</h2>
            <ul>
              {certification.domains.map((domain, index) => (
                <li key={index}>{domain}</li>
              ))}
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="syllabus" className="space-y-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2>Detailed Syllabus</h2>
            {certification.syllabus.map((section, index) => (
              <div key={index} className="mb-6">
                <h3>{section.title}</h3>
                <ul>
                  {section.topics.map((topic, topicIndex) => (
                    <li key={topicIndex}>{topic}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

