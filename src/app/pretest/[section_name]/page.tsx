"use client"
import Header from "@/components/Header"
import { Russo_One } from "next/font/google"
import st from "./pretest.module.scss"
import Level from "@/components/Level"
import { Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import { SectionNames } from "@/words"
import { Tests } from "@/tests"
import { useRouter } from "next/navigation"

const font = Russo_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export default function PreTest({ params }: { params: { section_name: string } }) {
  const [levels, setLevels] = useState<number>(0)
  const [levelsTestResult, setLevelsTestResult] = useState<number[]>([])
  const router = useRouter()
  useEffect(() => {
    const db = Tests.initTests()
    if (!db.hasOwnProperty(params.section_name)) return router.push("/")
    setLevels(
      db[params.section_name].length -
        (db[params.section_name][db[params.section_name].length - 1].length < 4 ? 1 : 0)
    )
    const marks = Tests.getTestLevelsMarks(params.section_name)
    setLevelsTestResult(marks)
    //console.log(marks)
  }, [])
  return (
    <div className={font.className}>
      <Header />
      <div className="container">
        <Text textStyle="2xl" textAlign="center" marginTop="4">
          Тэсты па тэме{" "}
          <span style={{ display: levels ? "inline" : "none" }}>
            &quot;{SectionNames[params.section_name]}&quot;
          </span>
        </Text>
        <div className={st.pretestText}>
          <Text>📚 Праходзьце тэсты і вывучайце беларускую тэхнічную тэрміналогію.</Text>
          <Text>
            ✅ Пры праходжанні тэстаў вы павінны будзеце выбіраць правільныя пераклады для
            слоў з картак.
          </Text>
          <Text>
            🔍 Калі вы не ведаеце пераклад слова, вы можаце перавярнуць картку, клікнуўшы
            на яе, каб убачыць пераклад. Аднак, перавярнуўшы картку, вы больш не зможаце
            даць адказ у тэсце па гэтым слове (яно будзе залічана як няправільнае), але
            гэта не перашкодзіць вам прайсці тэст да канца.
          </Text>
          <Text>
            📈 Прагрэс пройдзеных тэстаў будзе захоўвацца і адлюстроўвацца ў выглядзе
            працэнтных суадносін колькасці правільна адказаных слоў да агульнага іх ліку.
          </Text>
          <Text>
            🏆 Прайдзіце ўсе тэсты на 100% і свабодна абмяркоўвайце тэмы, звязаныя з АйЦі
            і электронікай, на беларускай мове!
          </Text>
        </div>
        <div style={{ margin: "30px 0px" }}>
          {Array(levels)
            .fill(0)
            .map((e, i) => {
              return (
                <Level
                  level={i + 1}
                  section={params.section_name}
                  key={i}
                  levelTestResult={levelsTestResult[i] | 0}
                />
              )
            })}
        </div>
      </div>
    </div>
  )
}
