"use client"

import { 
  Users, 
  FileText, 
  LayoutDashboard, 
  Scale
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarFooter
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const navigation = [
  { name: "หน้าแรก", href: "/", icon: LayoutDashboard },
  { name: "บทบาทหน้าที่", href: "/roles", icon: Scale },
  { name: "บุคลากรสภาโรงเรียนศีขรภูมิพิสัย", href: "/registry", icon: Users },
  { name: "Document Archive", href: "/archive", icon: FileText },
]

export function AppSidebar() {
  const pathname = usePathname()
  const logo = PlaceHolderImages.find(img => img.id === 'app-logo')

  return (
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white overflow-hidden shadow-sm border">
            {logo ? (
              <Image 
                src={logo.imageUrl} 
                alt="Logo" 
                width={40} 
                height={40} 
                className="object-contain"
                data-ai-hint="school logo"
              />
            ) : (
              <div className="bg-primary h-full w-full" />
            )}
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-lg leading-tight tracking-tight text-primary">สภานักเรียน</span>
            <span className="text-xs font-medium text-muted-foreground">Official Portal</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-2 uppercase tracking-wider text-[10px] font-bold text-muted-foreground/70">Main Menu</SidebarGroupLabel>
          <SidebarMenu>
            {navigation.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton 
                  asChild 
                  isActive={pathname === item.href}
                  tooltip={item.name}
                  className={cn(
                    "transition-all duration-200",
                    pathname === item.href ? "bg-sidebar-accent text-sidebar-primary shadow-sm" : "hover:bg-sidebar-accent/50"
                  )}
                >
                  <Link href={item.href}>
                    <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-primary" : "text-muted-foreground")} />
                    <span className="font-medium tracking-tight">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t group-data-[collapsible=icon]:hidden">
        <div className="p-3 bg-secondary/50 rounded-xl">
          <p className="text-[11px] font-semibold text-secondary-foreground uppercase tracking-widest mb-1">Democratic System</p>
          <p className="text-xs text-muted-foreground leading-relaxed italic">"Governance for students, by students."</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
