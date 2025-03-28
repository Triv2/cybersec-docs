import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getBook } from "@/lib/books"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { FileDown } from "lucide-react"

interface BookPageProps {
  params: {
    id: string
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const book = await getBook(params.id)

  if (!book) {
    notFound()
  }

  const Icon = book.icon

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="relative h-80 w-56 flex-shrink-0">
          <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Icon className="h-6 w-6 text-primary" />
            <h1 className="text-3xl font-bold tracking-tight">{book.title}</h1>
          </div>
          <p className="text-xl mt-2">{book.author}</p>
          <p className="text-muted-foreground mt-1">Published: {book.publishYear}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {book.categories.map((category, index) => (
              <Badge key={index} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-2">
            {book.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{book.description}</p>
          </div>

          <div className="mt-6">
            <Button asChild>
              <Link href={book.pdfPath} target="_blank">
                <FileDown className="mr-2 h-4 w-4" />
                Download PDF
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

