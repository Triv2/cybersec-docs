"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, Home, BookOpen, Wrench, Lightbulb, Award, BookText, Shield } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { domains } from "@/lib/domains"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  const routes = [
    {
      title: "Home",
      href: "/",
      icon: Home,
    },
    {
      title: "Getting Started",
      icon: BookOpen,
      children: [
        {
          title: "Introduction",
          href: "/guide/introduction",
        },
        {
          title: "How to Use",
          href: "/guide/how-to-use",
        },
        {
          title: "Contributing",
          href: "/guide/contributing",
        },
      ],
    },
    {
      title: "Domains",
      icon: Lightbulb,
      children: domains.map((domain) => ({
        title: domain.title,
        href: domain.href,
        icon: domain.icon,
      })),
    },
    {
      title: "Tools",
      icon: Wrench,
      children: [
        {
          title: "Forensics Tools",
          href: "/tools/forensics",
        },
        {
          title: "Penetration Testing Tools",
          href: "/tools/pentest",
        },
        {
          title: "Network Tools",
          href: "/tools/network",
        },
        {
          title: "Security Scanners",
          href: "/tools/scanners",
        },
      ],
    },
    {
      title: "Frameworks",
      icon: Shield,
      href: "/frameworks",
    },
    {
      title: "Certifications",
      icon: Award,
      href: "/certifications",
    },
    {
      title: "Books",
      icon: BookText,
      href: "/books",
    },
  ]

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="fixed left-4 top-4 z-40 lg:hidden">
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <MobileSidebar routes={routes} pathname={pathname} setOpen={setOpen} />
        </SheetContent>
      </Sheet>
      <div className={cn("hidden border-r bg-background lg:block", className)}>
        <div className="h-screen py-6 pl-6 pr-4">
          <div className="flex items-center gap-2 pb-6">
            <Lightbulb className="h-6 w-6 text-primary" />
            <Link href="/" className="flex items-center gap-2 font-semibold">
              CyberSec Docs
            </Link>
            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            <div className="pr-4">
              <SidebarItems routes={routes} pathname={pathname} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

interface SidebarItemsProps {
  routes: {
    title: string
    href?: string
    icon?: React.ComponentType<{ className?: string }>
    children?: {
      title: string
      href: string
      icon?: React.ComponentType<{ className?: string }>
    }[]
  }[]
  pathname: string
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

function SidebarItems({ routes, pathname, setOpen }: SidebarItemsProps) {
  return (
    <div className="space-y-2">
      {routes.map((route, i) => {
        const Icon = route.icon
        const isActive = route.href === pathname
        const isChildActive = route.children?.some((child) => child.href === pathname)

        if (route.children) {
          return (
            <SidebarDropdown key={i} title={route.title} icon={Icon} isChildActive={isChildActive} setOpen={setOpen}>
              {route.children.map((child, j) => {
                const ChildIcon = child.icon
                const isChildItemActive = child.href === pathname
                return (
                  <SidebarItem
                    key={j}
                    title={child.title}
                    href={child.href}
                    icon={ChildIcon}
                    isActive={isChildItemActive}
                    isChild
                    setOpen={setOpen}
                  />
                )
              })}
            </SidebarDropdown>
          )
        }

        return (
          <SidebarItem
            key={i}
            title={route.title}
            href={route.href}
            icon={Icon}
            isActive={isActive}
            setOpen={setOpen}
          />
        )
      })}
    </div>
  )
}

interface SidebarItemProps {
  title: string
  href?: string
  icon?: React.ComponentType<{ className?: string }>
  isActive?: boolean
  isChild?: boolean
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

function SidebarItem({ title, href, icon: Icon, isActive, isChild, setOpen }: SidebarItemProps) {
  return (
    <Link
      href={href || "#"}
      onClick={() => {
        if (setOpen) setOpen(false)
      }}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        isChild && "pl-6",
      )}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {title}
    </Link>
  )
}

interface SidebarDropdownProps {
  title: string
  icon?: React.ComponentType<{ className?: string }>
  isChildActive?: boolean
  children: React.ReactNode
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

function SidebarDropdown({ title, icon: Icon, isChildActive, children, setOpen }: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(isChildActive)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-all",
          isChildActive ? "text-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        )}
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-4 w-4" />}
          {title}
        </div>
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && <div className="mt-1 space-y-1">{children}</div>}
    </div>
  )
}

function MobileSidebar({ routes, pathname, setOpen }: SidebarItemsProps) {
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="flex items-center gap-2 border-b p-4">
        <Lightbulb className="h-6 w-6 text-primary" />
        <Link href="/" className="flex items-center gap-2 font-semibold">
          CyberSec Docs
        </Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        <SidebarItems routes={routes} pathname={pathname} setOpen={setOpen} />
      </ScrollArea>
    </div>
  )
}

