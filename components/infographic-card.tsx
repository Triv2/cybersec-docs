import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface InfographicCardProps {
  title: string
  description: string
  imagePath: string
  tags: string[]
}

export function InfographicCard({ title, description, imagePath, tags }: InfographicCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-64 w-full">
          <Image src={imagePath || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 pt-4">
        {tags.map((tag, index) => (
          <Badge key={index} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

