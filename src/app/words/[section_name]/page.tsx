import Header from "@/components/Header"
import { Russo_One } from "next/font/google"

const font = Russo_One({ subsets: ["latin"], weight: "400" })

export default function Words_Section(/* {
  params,
}: {
  params: { section_name: string }
} */) {
  return (
    <div className={font.className}>
      <Header />
      <main>
        <div
          style={{
            fontSize: "8vw",
            marginTop: "20vw",
            textAlign: "center",
          }}
        >
          Тут будуць карткі
        </div>
      </main>
    </div>
  )
}
