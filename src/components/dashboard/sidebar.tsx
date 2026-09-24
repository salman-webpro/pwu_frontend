"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import type { Company } from "@/types/company";
import type { User } from "@/types/user";
import { NAV_SECTIONS } from "./nav-config";

interface SidebarProps {
  company: Company;
  user: User;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

function getRoleLabel(role: User["role"]) {
  return role.charAt(0).toUpperCase() + role.slice(1);
}

function SidebarNavContent({ company, user }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-[#0b0e1a]">
      <div className="flex items-center gap-3 px-4 py-5">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
          style={{
            backgroundColor: company.brandColors[1]?.hex ?? "var(--brand-pink)",
          }}
        >
          {getInitials(company.displayName)}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-white">
            {company.displayName}
          </p>
          <p className="text-xs text-slate-500">{company.region}</p>
        </div>
      </div>

      <div className="border-t border-white/10" />

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="mb-1 px-3 text-xs font-medium tracking-wider text-slate-500 uppercase">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-brand-pink text-white"
                          : "text-slate-300 hover:bg-white/5 hover:text-white",
                      )}
                    >
                      <Icon className="size-4 shrink-0" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-auto flex items-center gap-3 border-t border-white/10 px-4 py-4">
        <Avatar size="sm">
          <AvatarFallback className="bg-white/10 text-white">
            {user.avatarInitials}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">
            {user.name}
          </p>
          <p className="truncate text-xs text-slate-500">
            {getRoleLabel(user.role)} · {company.displayName}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Sidebar({ company, user }: SidebarProps) {
  return (
    <>
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-[#0b0e1a] px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <div
            className="flex size-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{
              backgroundColor: company.brandColors[1]?.hex ?? "var(--brand-pink)",
            }}
          >
            {getInitials(company.displayName)}
          </div>
          <p className="text-sm font-semibold text-white">
            {company.displayName}
          </p>
        </div>
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 hover:text-white"
              />
            }
          >
            <Menu className="size-5" />
            <span className="sr-only">Open navigation</span>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 border-none p-0 sm:max-w-none">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SidebarNavContent company={company} user={user} />
          </SheetContent>
        </Sheet>
      </div>

      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 md:flex">
        <SidebarNavContent company={company} user={user} />
      </aside>
    </>
  );
}
