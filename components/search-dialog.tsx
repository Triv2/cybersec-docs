"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import type { DialogProps } from "@radix-ui/react-dialog"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { performSearch, type SearchResult } from "@/lib/search"

export function SearchDialog({ ...props }: DialogProps) {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [results, setResults] = React.useState<SearchResult[]>([])

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  React.useEffect(() => {
    if (search) {
      const searchResults = performSearch(search)
      setResults(searchResults)
    } else {
      setResults([])
    }
  }, [search])

  const handleSelect = (result: SearchResult) => {
    router.push(result.href)
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
        {...props}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search documentation...</span>
        <span className="sr-only">Search documentation</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." value={search} onValueChange={setSearch} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {results.length > 0 && (
            <>
              <CommandGroup heading="Domains">
                {results
                  .filter((result) => result.category === "Domain")
                  .map((result, index) => (
                    <CommandItem key={`domain-${index}`} onSelect={() => handleSelect(result)}>
                      {result.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="Frameworks">
                {results
                  .filter((result) => result.category === "Framework")
                  .map((result, index) => (
                    <CommandItem key={`framework-${index}`} onSelect={() => handleSelect(result)}>
                      {result.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="Tools">
                {results
                  .filter((result) => result.category === "Tool")
                  .map((result, index) => (
                    <CommandItem key={`tool-${index}`} onSelect={() => handleSelect(result)}>
                      {result.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="Examples">
                {results
                  .filter((result) => result.category === "Example")
                  .map((result, index) => (
                    <CommandItem key={`example-${index}`} onSelect={() => handleSelect(result)}>
                      {result.title}
                    </CommandItem>
                  ))}
              </CommandGroup>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}

