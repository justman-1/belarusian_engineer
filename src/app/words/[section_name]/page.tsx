"use client"
import Header from "@/components/Header"
import { Russo_One } from "next/font/google"
import st from "./words_section.module.scss"
import Image from "next/image"
import Link from "next/link"
import { Text } from "@chakra-ui/react"

const font = Russo_One({ subsets: ["latin"], weight: "400", display: "swap" })

export default function Words_Section(/* {
  params,
}: {
  params: { section_name: string }
} */) {
  return (
    <div className={font.className}>
      <Header />
      <main>
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className={st.back}>
            <Image
              className={st.backImg}
              src="/arrow_left.svg"
              width={15}
              height={15}
              alt=""
            />
            <Text fontSize="xs">Да галоўнай старонцы</Text>
          </div>
        </Link>
      </main>
    </div>
  )
}
