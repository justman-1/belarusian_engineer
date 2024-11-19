"use client"
import Header from "@/components/Header"
import { Russo_One } from "next/font/google"
import st from "./pretest.module.scss"
import Level from "@/components/Level"
import { Text } from "@chakra-ui/react"
import data, { Translation } from "../../../words"
import { useState, useEffect } from "react"

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export default function PreTest({
  params,
}: {
  params: { section_name: string }
}) {
  const [levels, setLevels] = useState<number>(0)
  useEffect(() => {
    const section = params.section_name
    let words: Translation[] = []
    if (data["prog-full"].hasOwnProperty(section))
      words = data["prog-full"][section as keyof (typeof data)["prog-full"]]
    else if (data["electronics-full"].hasOwnProperty(section))
      words =
        data["electronics-full"][
          section as keyof (typeof data)["electronics-full"]
        ]
    console.log(Math.ceil(words.length / 10))
    setLevels(Math.ceil(words.length / 10))
    console.log(Array(Math.ceil(words.length / 10)))
  }, [])
  return (
    <div className={font.className}>
      <Header />
      <div className="container">
        <div className={st.pretestText}>
          <Text>
            📚 Праходзьце тэсты і вывучайце беларускую тэхнічную тэрміналогію.
          </Text>
          <Text>
            ✅ Пры праходжанні тэстаў вы павінны будзеце выбіраць правільныя
            пераклады для слоў з картак.
          </Text>
          <Text>
            🔍 Калі вы не ведаеце пераклад слова, вы можаце перавярнуць картку,
            клікнуўшы на яе, каб убачыць пераклад. Аднак, перавярнуўшы картку,
            вы больш не зможаце даць адказ у тэсце па гэтым слове (яно будзе
            залічана як няправільнае), але гэта не перашкодзіць вам прайсці тэст
            да канца.
          </Text>
          <Text>
            📈 Прагрэс пройдзеных тэстаў будзе захоўвацца і адлюстроўвацца ў
            выглядзе працэнтных суадносін колькасці правільна адказаных слоў да
            агульнага іх ліку.
          </Text>
          <Text>
            🏆 Прайдзіце ўсе тэсты на 100% і свабодна абмяркоўвайце тэмы,
            звязаныя з АйЦі і электронікай, на беларускай мове!
          </Text>
        </div>
        <div style={{ marginTop: "20px" }}>
          {Array(levels)
            .fill(0)
            .map((e, i) => {
              return (
                <Level level={i + 1} section={params.section_name} key={i} />
              )
            })}
        </div>
        {/* Лэвэл 1(першыя 10 слоў) */}
        {/* Лэвэл 2(наступныя 10 слоў) */}
      </div>
    </div>
  )
}
