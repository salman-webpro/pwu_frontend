"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-5 text-green-500" />,
        info: <InfoIcon className="size-5 text-sky-400" />,
        warning: <TriangleAlertIcon className="size-5 text-amber-400" />,
        error: <OctagonXIcon className="size-5 text-red-400" />,
        loading: <Loader2Icon className="size-5 animate-spin text-white" />,
      }}
      style={
        {
          "--normal-bg": "#0b0e1a",
          "--normal-text": "#ffffff",
          "--normal-border": "transparent",
          "--success-bg": "#0b0e1a",
          "--success-text": "#ffffff",
          "--success-border": "transparent",
          "--info-bg": "#0b0e1a",
          "--info-text": "#ffffff",
          "--info-border": "transparent",
          "--warning-bg": "#2e2308",
          "--warning-text": "#f4dfa8",
          "--warning-border": "transparent",
          "--error-bg": "#2a0f11",
          "--error-text": "#f7c9c9",
          "--error-border": "transparent",
          "--border-radius": "1.25rem",
        } as React.CSSProperties
      }
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: "cn-toast shadow-lg border-0 py-3.5 gap-3",
          title: "font-semibold leading-snug",
          icon: "shrink-0",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
