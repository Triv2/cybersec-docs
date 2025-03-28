import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Sidebar } from "@/components/sidebar"
import { SearchDialog } from "@/components/search-dialog"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CyberSec Docs - Ultimate Cybersecurity Documentation",
  description:
    "Comprehensive documentation for cybersecurity professionals covering digital forensics, penetration testing, GRC, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1 overflow-auto">
              <div className="flex items-center justify-between border-b px-4 py-3 lg:px-8">
                <div className="flex items-center gap-2">
                  <SearchDialog />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/yourusername/cybersec-docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <main className="container mx-auto py-6 px-4 lg:px-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

