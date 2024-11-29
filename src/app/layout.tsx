import type { Metadata, Viewport } from "next"
import { Provider } from "@/components/ui/provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Беларускі тэхнік",
  description: "Вывучэнне тэхнічнай тэрміналогіі на беларускай мове",
  icons: { icon: "/logo.png" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
