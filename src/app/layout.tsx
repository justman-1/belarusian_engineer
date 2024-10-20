import type { Metadata, Viewport } from "next"
import { ChakraProvider } from "@chakra-ui/react"
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
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  )
}
