import {
  BarChart3,
  BookOpen,
  Building2,
  CheckCircle2,
  CircleHelp,
  ClipboardList,
  CreditCard,
  LayoutDashboard,
  MapPin,
  MessageCircle,
  Package,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { label: "Products", href: "/products", icon: Package },
      { label: "Orders", href: "/orders", icon: ClipboardList },
      { label: "Business Memory", href: "/business-memory", icon: BookOpen },
      { label: "Approvals", href: "/approvals", icon: CheckCircle2 },
      { label: "Reports", href: "/reports", icon: BarChart3 },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Company Profile", href: "/company-profile", icon: Building2 },
      { label: "Users & Roles", href: "/users-roles", icon: Users },
      { label: "Locations", href: "/locations", icon: MapPin },
      {
        label: "Billing & Payment",
        href: "/billing-payment",
        icon: CreditCard,
      },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Help Center", href: "/help-center", icon: CircleHelp },
      {
        label: "Contact Support",
        href: "/contact-support",
        icon: MessageCircle,
      },
    ],
  },
];
