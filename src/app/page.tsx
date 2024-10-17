"use client"
import Header from "../components/Header"
import { Russo_One } from "next/font/google"
import Sections from "@/components/Sections"

const font = Russo_One({ subsets: ["latin"], weight: "400", display: "swap" })

export default function Home() {
  return (
    <>
      <main className={font.className}>
        <Header />
        <Sections />
      </main>
    </>
  )
}
