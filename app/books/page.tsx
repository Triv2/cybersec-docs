import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { getAllBooks } from "@/lib/books"

export default function BooksPage() {
  const books = getAllBooks()

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Cybersecurity Books</h1>
        <p className="text-muted-foreground">
          A collection of essential books for cybersecurity professionals and enthusiasts.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => {
          const Icon = book.icon
          return (
            <Card key={book.id} className="transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                </div>
                <CardDescription>{book.author}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative h-48 w-32 mb-4">
                  <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                </div>
                <p className="line-clamp-3 text-sm">{book.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={`/books/${book.id}`} className="text-primary hover:underline">
                  View Details
                </Link>
                <Link href={book.pdfPath} className="text-primary hover:underline" target="_blank">
                  Download PDF
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

